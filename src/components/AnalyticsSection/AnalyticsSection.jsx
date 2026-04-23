import { useEffect, useMemo, useState } from 'react'
import './AnalyticsSection.css'

const API_URL = 'https://api.diabolical.studio/rest-api/gameAnalytics'
const DAY_IN_MS = 24 * 60 * 60 * 1000
const PAGE_SIZE = 500
const MAX_PAGES = 40

const formatNumber = (value, digits = 0) => {
  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })
}

const formatPercent = (value) => `${formatNumber(value, 1)}%`

const parseMoneyToCents = (value) => {
  const source = String(value ?? '0').trim()
  if (!source) return 0n

  const isNegative = source.startsWith('-')
  const unsigned = isNegative ? source.slice(1) : source
  const [wholeRaw = '0', decimalRaw = ''] = unsigned.split('.')
  const whole = wholeRaw.replace(/\D/g, '') || '0'
  const decimal = (decimalRaw.replace(/\D/g, '') + '00').slice(0, 2)
  const cents = BigInt(whole) * 100n + BigInt(decimal)

  return isNegative ? -cents : cents
}

const formatCurrencyFromCents = (cents) => {
  const isNegative = cents < 0n
  const absolute = isNegative ? -cents : cents
  const whole = absolute / 100n
  const decimal = (absolute % 100n).toString().padStart(2, '0')
  const wholeWithCommas = whole.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return `${isNegative ? '-' : ''}$${wholeWithCommas}.${decimal}`
}

const calculateStats = (rows) => {
  const dayThreshold = Date.now() - DAY_IN_MS
  const dailyRows = rows.filter((row) => new Date(row.created_at).getTime() >= dayThreshold)
  const betsLast24Hours = dailyRows.length
  const dailyWins = dailyRows.filter((row) => row.is_win === 1).length
  const averageWinRate = betsLast24Hours ? (dailyWins / betsLast24Hours) * 100 : 0

  const playerProfits = dailyRows.reduce((acc, row) => {
    const player = row.player_name || 'Unknown'
    acc[player] = (acc[player] || 0n) + parseMoneyToCents(row.profit_loss)
    return acc
  }, {})
  const gameProfits = dailyRows.reduce((acc, row) => {
    const game = row.sub_game_name || 'Unknown'
    acc[game] = (acc[game] || 0n) + parseMoneyToCents(row.profit_loss)
    return acc
  }, {})

  let mostProfitablePlayer = null
  for (const [player, profit] of Object.entries(playerProfits)) {
    if (!mostProfitablePlayer || profit > mostProfitablePlayer.profit) {
      mostProfitablePlayer = { player, profit }
    }
  }

  let mostProfitableGame = null
  for (const [game, profit] of Object.entries(gameProfits)) {
    if (!mostProfitableGame || profit > mostProfitableGame.profit) {
      mostProfitableGame = { game, profit }
    }
  }

  let biggestSingleWin = null
  for (const row of dailyRows) {
    const winAmount = parseMoneyToCents(row.win_amount)
    if (!biggestSingleWin || winAmount > biggestSingleWin.amount) {
      biggestSingleWin = {
        amount: winAmount,
        player: row.player_name || 'Unknown',
        game: row.sub_game_name || 'Unknown'
      }
    }
  }

  return {
    betsLast24Hours,
    averageWinRate,
    mostProfitablePlayer,
    mostProfitableGame,
    biggestSingleWin
  }
}

const AnalyticsSection = () => {
  const [rows, setRows] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const buildPageUrl = (offset) => {
      const separator = API_URL.includes('?') ? '&' : '?'
      return `${API_URL}${separator}limit=${PAGE_SIZE}&offset=${offset}`
    }

    const fetchAllAnalyticsRows = async () => {
      let offset = 0
      let allRows = []

      for (let page = 0; page < MAX_PAGES; page += 1) {
        const response = await fetch(buildPageUrl(offset), { signal: controller.signal })
        if (!response.ok) {
          throw new Error('Failed to load analytics')
        }

        const payload = await response.json()
        const pageRows = Array.isArray(payload.data) ? payload.data : []
        allRows = allRows.concat(pageRows)

        if (pageRows.length < PAGE_SIZE) {
          break
        }

        offset += PAGE_SIZE
      }

      return allRows
    }

    const fetchAnalytics = async () => {
      try {
        const allRows = await fetchAllAnalyticsRows()
        setRows(allRows)
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
          <div className="analytics-grid analytics-grid--bento">
            <article className="analytics-card analytics-card--hero">
              <span className="analytics-label">Bets in Last 24 Hours</span>
              <strong>{formatNumber(stats.betsLast24Hours)}</strong>
            </article>

            <article className="analytics-card">
              <span className="analytics-label">Average Win Rate</span>
              <strong>{formatPercent(stats.averageWinRate)}</strong>
            </article>

            <article className="analytics-card">
              <span className="analytics-label">Most Profitable Game</span>
              <strong>
                {stats.mostProfitableGame
                  ? `${stats.mostProfitableGame.game} (${formatCurrencyFromCents(stats.mostProfitableGame.profit)})`
                  : 'No daily data yet'}
              </strong>
            </article>

            <article className="analytics-card analytics-card--wide">
              <span className="analytics-label">Biggest Single Win (Last 24 Hours)</span>
              <strong>
                {stats.biggestSingleWin
                  ? `${formatCurrencyFromCents(stats.biggestSingleWin.amount)} by ${stats.biggestSingleWin.player} in ${stats.biggestSingleWin.game}`
                  : 'No daily data yet'}
              </strong>
            </article>

            <article className="analytics-card analytics-card--wide">
              <span className="analytics-label">Most Profitable Player Today</span>
              <strong>
                {stats.mostProfitablePlayer
                  ? `${stats.mostProfitablePlayer.player} (${formatCurrencyFromCents(stats.mostProfitablePlayer.profit)})`
                  : 'No daily data yet'}
              </strong>
            </article>
          </div>
        )}
      </div>
    </section>
  )
}

export default AnalyticsSection
