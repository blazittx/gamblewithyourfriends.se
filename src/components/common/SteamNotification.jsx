import { useEffect } from 'react'
import './SteamNotification.css'

const SteamNotification = ({ onClose }) => {
  useEffect(() => {
    // Auto-close after 6 seconds
    const timer = setTimeout(() => {
      onClose()
    }, 6000)

    // Close when window regains focus
    const handleFocus = () => {
      onClose()
    }
    window.addEventListener('focus', handleFocus)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('focus', handleFocus)
    }
  }, [onClose])

  // Calculate position to be above the popup
  const popupWidth = 1000
  const popupHeight = 700
  const popupTop = (window.screen.height - popupHeight) / 2 + 100
  const notificationTop = popupTop - 200 // Position higher above the popup

  return (
    <>
      <div className="steam-notification-overlay" />
      <div 
        className="steam-notification"
        style={{ top: `${notificationTop}px` }}
      >
        Open Steam directly (allow permission) or login and wishlist in the popup.
      </div>
    </>
  )
}

export default SteamNotification

