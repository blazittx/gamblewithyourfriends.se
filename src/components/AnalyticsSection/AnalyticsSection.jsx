import { useEffect, useMemo, useState } from 'react'
import './AnalyticsSection.css'

const API_URL = 'https://api.diabolical.studio/rest-api/gameAnalytics'
const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000

const formatNumber = (value, digits = 0) => {
  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })
}

const calculateStats = (rows) => {
  const totalRounds = rows.length
  const totalWins = rows.filter((row) => row.is_win === 1).length
  const totalProfit = rows.reduce((sum, row) => sum + Number(row.profit_loss || 0), 0)
  const winRate = totalRounds ? (totalWins / totalRounds) * 100 : 0

  const weekThreshold = Date.now() - WEEK_IN_MS
  const weeklyRows = rows.filter((row) => new Date(row.created_at).getTime() >= weekThreshold)
  const playerProfits = weeklyRows.reduce((acc, row) => {
    const player = row.player_name || 'Unknown'
    acc[player] = (acc[player] || 0) + Number(row.profit_loss || 0)
    return acc
  }, {})

  let mostProfitablePlayer = null
  for (const [player, profit] of Object.entries(playerProfits)) {
    if (!mostProfitablePlayer || profit > mostProfitablePlayer.profit) {
      mostProfitablePlayer = { player, profit }
    }
  }

  return {
    totalRounds,
    totalWins,
    winRate,
    totalProfit,
    mostProfitablePlayer
  }
}

const AnalyticsSection = () => {
  const [rows, setRows] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const fetchAnalytics = async () => {
      try {
        const response = await fetch(API_URL, { signal: controller.signal })
        if (!response.ok) {
          throw new Error('Failed to load analytics')
        }

        const payload = await response.json()
        setRows(Array.isArray(payload.data) ? payload.data : [])
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Could not load game analytics right now.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchAnalytics()
    return () => controller.abort()
  }, [])

  const stats = useMemo(() => calculateStats(rows), [rows])

  return (
    <section className="analytics-section" id="live-stats">
      <div className="analytics-inner">
        <h2>Live Analytics</h2>

        {isLoading ? (
          <p className="analytics-status">Loading latest game data...</p>
        ) : error ? (
          <p className="analytics-status">{error}</p>
        ) : (
          <div className="analytics-grid">
            <article className="analytics-card">
              <span className="analytics-label">Total Rounds</span>
              <strong>{formatNumber(stats.totalRounds)}</strong>
            </article>

            <article className="analytics-card">
              <span className="analytics-label">Total Wins</span>
              <strong>{formatNumber(stats.totalWins)}</strong>
            </article>

            <article className="analytics-card">
              <span className="analytics-label">Win Percentage</span>
              <strong>{formatNumber(stats.winRate, 1)}%</strong>
            </article>

            <article className="analytics-card">
              <span className="analytics-label">Net Profit (Tracked)</span>
              <strong>{formatNumber(stats.totalProfit, 2)}</strong>
            </article>

            <article className="analytics-card analytics-card--wide">
              <span className="analytics-label">Most Profitable Player This Week</span>
              <strong>
                {stats.mostProfitablePlayer
                  ? `${stats.mostProfitablePlayer.player} (${formatNumber(stats.mostProfitablePlayer.profit, 2)})`
                  : 'No weekly data yet'}
              </strong>
            </article>
          </div>
        )}
      </div>
    </section>
  )
}

export default AnalyticsSection
