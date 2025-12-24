import { useState, useEffect } from 'react'
import { getCoinBalance, setCoinBalance, getPurchasedItems, addPurchasedItem, isItemPurchased, hasShopBeenOpened, setShopOpened } from '../../utils/coins'
import './ShopPopup.css'

const ShopPopup = ({ onClose }) => {
  const [balance, setBalance] = useState(getCoinBalance())
  const [purchasedItems, setPurchasedItems] = useState(getPurchasedItems())

  useEffect(() => {
    // Mark shop as opened if it hasn't been opened before
    if (!hasShopBeenOpened()) {
      setShopOpened()
      window.dispatchEvent(new Event('shopOpened'))
    }

    // Listen for balance updates
    const handleBalanceUpdate = () => {
      setBalance(getCoinBalance())
    }

    window.addEventListener('coinBalanceUpdated', handleBalanceUpdate)

    return () => {
      window.removeEventListener('coinBalanceUpdated', handleBalanceUpdate)
    }
  }, [])

  const shopItems = [
    {
      id: 'true-gambler-discord',
      name: 'True Gambler',
      description: 'Discord tag',
      price: 20,
      icon: '🎰',
      category: 'Discord'
    },
    {
      id: 'business-man-skin',
      name: 'Business Man',
      description: 'Skin in-game',
      price: 25,
      icon: '👔',
      category: 'In-Game'
    },
    {
      id: 'rainbow-discord',
      name: 'Rainbow Name',
      description: 'Discord nickname & in-game name',
      price: 22,
      icon: '🌈',
      category: 'Both'
    },
    {
      id: 'gold-names',
      name: 'Gold Name',
      description: 'Discord name & in-game name',
      price: 18,
      icon: '✨',
      category: 'Both'
    }
  ]

  const handlePurchase = (item) => {
    if (isItemPurchased(item.id)) {
      return // Already purchased
    }

    if (balance < item.price) {
      return
    }

    const newBalance = balance - item.price
    setCoinBalance(newBalance)
    addPurchasedItem(item.id)
    setPurchasedItems(getPurchasedItems())
    
    // Dispatch event to update balance display
    window.dispatchEvent(new Event('coinBalanceUpdated'))
    
    // In a real implementation, you would send this to your backend
    console.log('Purchase:', item)
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <>
      <div className="shop-overlay" onClick={handleClose} />
      <div className="shop-popup">
        <div className="shop-content">
          <div className="shop-header">
            <div className="shop-header-left">
              <h2 className="shop-title">🛒 Secret Shop</h2>
              <p className="shop-secret-text">Ooh, you found our hidden secret! 🎉</p>
              <p className="shop-description">Spend your hard-earned coins on exclusive rewards</p>
            </div>
            <div className="shop-balance">
              <span className="shop-balance-amount">{balance.toLocaleString()}</span>
              <span className="shop-balance-icon">🪙</span>
            </div>
          </div>

          <div className="shop-items">
            {shopItems.map((item) => {
              const isPurchased = isItemPurchased(item.id)
              return (
                <div key={item.id} className={`shop-item ${isPurchased ? 'purchased' : ''}`}>
                  <div className="shop-item-icon">{item.icon}</div>
                  <div className="shop-item-info">
                    <div className="shop-item-header">
                      <h3 className="shop-item-name">{item.name}</h3>
                      <span className="shop-item-category">{item.category}</span>
                    </div>
                    <p className="shop-item-description">{item.description}</p>
                    <div className="shop-item-footer">
                      {isPurchased ? (
                        <span className="shop-item-purchased">Purchased</span>
                      ) : (
                        <>
                          <span className="shop-item-price">
                            <span className="shop-item-price-icon">🪙</span>
                            {item.price.toLocaleString()}
                          </span>
                          <button
                            className={`shop-item-buy ${balance < item.price ? 'disabled' : ''}`}
                            onClick={() => handlePurchase(item)}
                            disabled={balance < item.price}
                          >
                            {balance < item.price ? 'Not enough' : 'Buy'}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopPopup

