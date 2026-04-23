import { useEffect, useRef, useState } from 'react'
import './BetFeed.css'

const API_URL = 'https://api.diabolical.studio/rest-api/gameAnalytics'
const PAGE_SIZE = 200
const POLL_INTERVAL_MS = 5 * 1000
const TOAST_LIFETIME_MS = 4200
const BATCH_WINDOW_MS = 5 * 1000
const MIN_STAGGER_MS = 220
const MAX_STAGGER_MS = 780
const MAX_VISIBLE_TOASTS = 7
const EXIT_ANIMATION_MS = 320

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
  return `${isNegative ? '-' : ''}$${whole.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${decimal}`
}

const getFeedEventId = (row) =>
  String(row.analytics_id ?? row.id ?? '')

const BetFeed = () => {
  const [visibleToasts, setVisibleToasts] = useState([])
  const seenFeedIdsRef = useRef(new Set())
  const timeoutIdsRef = useRef([])

  useEffect(() => {
    const controller = new AbortController()

    const scheduleTimeout = (callback, delay) => {
      const timeoutId = setTimeout(callback, delay)
      timeoutIdsRef.current.push(timeoutId)
    }

    const pollBetWindow = async () => {
      try {
        const separator = API_URL.includes('?') ? '&' : '?'
        const cacheBuster = Date.now()
        const response = await fetch(`${API_URL}${separator}limit=${PAGE_SIZE}&offset=0&_t=${cacheBuster}`, {
          cache: 'no-store',
          signal: controller.signal
        })
        if (!response.ok) return

        const payload = await response.json()
        const rows = Array.isArray(payload.data) ? payload.data : []
        if (!rows.length) return

        const newestTimestamp = new Date(rows[0].created_at).getTime()
        if (!Number.isFinite(newestTimestamp)) return

        const windowStart = newestTimestamp - BATCH_WINDOW_MS
        const freshBatch = rows
          .filter((row) => {
            const eventId = getFeedEventId(row)
            const createdAtMs = new Date(row.created_at).getTime()
            return (
              eventId &&
              Number.isFinite(createdAtMs) &&
              createdAtMs > windowStart &&
              !seenFeedIdsRef.current.has(eventId)
            )
          })
          .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())

        let stagger = 0
        for (const row of freshBatch) {
          const eventId = getFeedEventId(row)
          seenFeedIdsRef.current.add(eventId)
          stagger += MIN_STAGGER_MS + Math.floor(Math.random() * (MAX_STAGGER_MS - MIN_STAGGER_MS + 1))

          scheduleTimeout(() => {
            setVisibleToasts((prev) => {
              const next = prev.concat({
                id: eventId,
                playerName: row.player_name || 'Unknown',
                gameName: row.sub_game_name || 'Unknown',
                profitLoss: row.profit_loss ?? '0',
                isWin: row.is_win === 1,
                isLeaving: false
              })
              return next.slice(-MAX_VISIBLE_TOASTS)
            })

            scheduleTimeout(() => {
              setVisibleToasts((prev) =>
                prev.map((toast) =>
                  toast.id === eventId ? { ...toast, isLeaving: true } : toast
                )
              )
              scheduleTimeout(() => {
                setVisibleToasts((prev) => prev.filter((toast) => toast.id !== eventId))
              }, EXIT_ANIMATION_MS)
            }, TOAST_LIFETIME_MS)
          }, stagger)
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          // keep feed silent on transient failures
        }
      }
    }

    pollBetWindow()
    const intervalId = setInterval(pollBetWindow, POLL_INTERVAL_MS)

    return () => {
      controller.abort()
      clearInterval(intervalId)
      for (const timeoutId of timeoutIdsRef.current) {
        clearTimeout(timeoutId)
      }
      timeoutIdsRef.current = []
    }
  }, [])

  if (!visibleToasts.length) return null

  return (
    <div className="bet-feed" aria-live="polite" aria-atomic="true">
      {visibleToasts.map((toast) => (
        <article
          key={toast.id}
          className={`bet-feed-toast ${toast.isWin ? 'is-win' : 'is-loss'} ${toast.isLeaving ? 'is-leaving' : ''}`}
        >
          <span className="bet-feed-line">
            <strong>{toast.playerName}</strong> on {toast.gameName} · {toast.isWin ? 'Won' : 'Lost'}{' '}
            {formatCurrencyFromCents(parseMoneyToCents(toast.profitLoss))}
          </span>
        </article>
      ))}
    </div>
  )
}

export default BetFeed
