import { useState, useEffect } from 'react'
import { getCoinBalance, hasShopBeenOpened } from '../../utils/coins'
import './CoinBalance.css'

const CoinBalance = ({ onClick }) => {
  const [balance, setBalance] = useState(0)
  const [showNew, setShowNew] = useState(false)

  useEffect(() => {
    // Load initial balance
    setBalance(getCoinBalance())
    
    // Check if shop has been opened
    if (onClick && !hasShopBeenOpened()) {
      setShowNew(true)
    }

    // Listen for balance updates from other components
    const handleBalanceUpdate = () => {
      setBalance(getCoinBalance())
    }
    
    // Listen for shop opened event
    const handleShopOpened = () => {
      setShowNew(false)
    }

    window.addEventListener('coinBalanceUpdated', handleBalanceUpdate)
    window.addEventListener('shopOpened', handleShopOpened)

    return () => {
      window.removeEventListener('coinBalanceUpdated', handleBalanceUpdate)
      window.removeEventListener('shopOpened', handleShopOpened)
    }
  }, [onClick])

  if (balance === 0) return null

  return (
    <div className="coin-balance" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <span className="coin-icon">🪙</span>
      <span className="coin-amount">{balance.toLocaleString()}</span>
      {showNew && <span className="coin-new-badge">NEW!</span>}
    </div>
  )
}

export default CoinBalance

