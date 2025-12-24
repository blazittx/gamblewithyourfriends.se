import { useState, useEffect, useRef } from 'react'
import { getCoinBalance, addCoins, setLastCoinflipTime } from '../../utils/coins'
import Button from './Button'
import './CoinflipPopup.css'

const CoinflipPopup = ({ onClose }) => {
  const [selectedSide, setSelectedSide] = useState(null)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipSide, setFlipSide] = useState(null) // Track which side to show during flip
  const [result, setResult] = useState(null)
  const [reward, setReward] = useState(0)
  const [currentBalance, setCurrentBalance] = useState(getCoinBalance())
  const timeoutRefs = useRef([]) // Store timeout references for cleanup
  const currentSideRef = useRef(null) // Track current side during flip

  // Track that popup was shown when it opens
  useEffect(() => {
    setLastCoinflipTime()
  }, [])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
      timeoutRefs.current = []
    }
  }, [])

  const handleFlip = () => {
    if (selectedSide === null || isFlipping) return

    setIsFlipping(true)
    setResult(null)
    
    // Calculate switch times based on linear rotation
    // Animation: 1440 degrees over 1500ms = 0.96 degrees per ms
    // Coin switches sides when vertical: at 90°, 270°, 450°, 630°, 810°, 990°, 1170°, 1350°
    // Time = angle / rotation_speed = angle / 0.96
    const ANIMATION_DURATION = 1500 // ms
    const TOTAL_ROTATION = 1440 // degrees
    const ROTATION_SPEED = TOTAL_ROTATION / ANIMATION_DURATION // degrees per ms
    
    // Calculate switch angles (every 180 degrees starting from 90)
    const switchAngles = []
    for (let angle = 90; angle < TOTAL_ROTATION; angle += 180) {
      switchAngles.push(angle)
    }
    
    // Convert angles to milliseconds
    const switchTimes = switchAngles.map(angle => angle / ROTATION_SPEED)
    
    // Start with the opposite side (coin flips away from selected side first)
    currentSideRef.current = selectedSide === 'heads' ? 'tails' : 'heads'
    setFlipSide(currentSideRef.current)

    // Clear any existing timeouts
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
    timeoutRefs.current = []

    // Set up timeouts to switch sides at each vertical position
    const timeouts = switchTimes.map(time => {
      const timeout = setTimeout(() => {
        currentSideRef.current = currentSideRef.current === 'heads' ? 'tails' : 'heads'
        setFlipSide(currentSideRef.current)
      }, Math.round(time))
      timeoutRefs.current.push(timeout)
      return timeout
    })

    // After animation completes, show the final result
    const mainTimeout = setTimeout(() => {
      // Clear all switch timeouts
      timeouts.forEach(timeout => clearTimeout(timeout))
      timeoutRefs.current = timeoutRefs.current.filter(t => !timeouts.includes(t))
      
      // Random coinflip result
      const coinResult = Math.random() < 0.5 ? 'heads' : 'tails'
      setResult(coinResult)
      setFlipSide(null) // Reset flip side

      // Check if user won
      const won = selectedSide === coinResult
      if (won) {
        const coinsWon = Math.floor(Math.random() * 6) + 5 // Random reward between 5-10 coins
        const newBalance = addCoins(coinsWon)
        setReward(coinsWon)
        setCurrentBalance(newBalance)
        
        // Dispatch event to update balance display
        window.dispatchEvent(new Event('coinBalanceUpdated'))
      } else {
        setReward(0)
      }

      setIsFlipping(false)

      // Auto-close after showing result for a few seconds
      const closeTimeout = setTimeout(() => {
        onClose()
      }, 3000)
      timeoutRefs.current.push(closeTimeout)
    }, ANIMATION_DURATION)
    timeoutRefs.current.push(mainTimeout)
  }

  const handleClose = () => {
    if (!isFlipping) {
      onClose()
    }
  }

  return (
    <>
      <div className="coinflip-overlay" onClick={handleClose} />
      <div className="coinflip-popup">
        <button className="coinflip-close" onClick={handleClose} aria-label="Close">
          ×
        </button>
        
        <div className="coinflip-content">
          {!result ? (
            <>
              <div className="coinflip-choices">
                <button
                  className={`coinflip-choice ${selectedSide === 'heads' ? 'selected' : ''} ${isFlipping ? 'disabled' : ''}`}
                  onClick={() => !isFlipping && setSelectedSide('heads')}
                  disabled={isFlipping}
                >
                  <img src="/Heads.png" alt="Heads" className="choice-image" />
                  <span className="choice-text">Heads</span>
                </button>
                <button
                  className={`coinflip-choice ${selectedSide === 'tails' ? 'selected' : ''} ${isFlipping ? 'disabled' : ''}`}
                  onClick={() => !isFlipping && setSelectedSide('tails')}
                  disabled={isFlipping}
                >
                  <img src="/Tails.png" alt="Tails" className="choice-image" />
                  <span className="choice-text">Tails</span>
                </button>
              </div>

              <div className="coinflip-coin-container">
                <button
                  className={`coinflip-coin ${isFlipping ? 'flipping' : ''} ${selectedSide === null ? 'disabled' : ''}`}
                  onClick={handleFlip}
                  disabled={selectedSide === null || isFlipping}
                >
                  {isFlipping && flipSide ? (
                    <img 
                      src={flipSide === 'heads' ? "/Heads.png" : "/Tails.png"} 
                      alt="Coin" 
                      className="coin-image"
                    />
                  ) : selectedSide ? (
                    <img 
                      src={selectedSide === 'heads' ? "/Heads.png" : "/Tails.png"} 
                      alt="Coin" 
                      className="coin-image"
                    />
                  ) : (
                    <img 
                      src="/Heads.png" 
                      alt="Coin" 
                      className="coin-image coin-placeholder-image"
                    />
                  )}
                </button>
              </div>
            </>
          ) : (
            <div className="coinflip-result">
              <div className="coinflip-result-coin">
                <img 
                  src={result === 'heads' ? "/Heads.png" : "/Tails.png"} 
                  alt={result} 
                  className="coin-image"
                />
              </div>
              <div className="coinflip-result-text">
                {selectedSide === result ? (
                  <>
                    <span className="result-success">You Won!</span>
                    <span className="result-reward">+{reward} coins</span>
                  </>
                ) : (
                  <span className="result-fail">Better luck next time</span>
                )}
              </div>
              <p className="coinflip-balance">{currentBalance.toLocaleString()} coins</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CoinflipPopup

