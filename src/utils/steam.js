/**
 * Opens the Steam store page for the game
 * Opens in Steam app (if available) and also opens web URL in a popup window
 * Returns a callback to show notification
 */
export const openSteamStore = (appId = '3892270', showNotification) => {
  const steamUrl = `steam://store/${appId}`
  const webUrl = `https://store.steampowered.com/app/${appId}`
  
  // Show notification first
  if (showNotification) {
    showNotification()
  }
  
  // Small delay to let notification appear, then open popup
  setTimeout(() => {
    // Open web URL in a popup window
    const popupWidth = 1000
    const popupHeight = 700
    const left = (window.screen.width - popupWidth) / 2
    const top = (window.screen.height - popupHeight) / 2 + 70 // Position below center
    
    window.open(
      webUrl,
      'SteamStore',
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=yes,status=yes`
    )
    
    // Also try to open in Steam app (after a brief delay to let popup open)
    setTimeout(() => {
      try {
        const link = document.createElement('a')
        link.href = steamUrl
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (error) {
        // If steam:// protocol fails, web URL is already opened, so we're good
        console.log('Could not open Steam app:', error)
      }
    }, 300)
  }, 100)
}

