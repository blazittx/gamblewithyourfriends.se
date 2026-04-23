/**
 * Opens the Steam store page in a new tab.
 */
export const openSteamStore = (appId = '3892270') => {
  const webUrl = `https://store.steampowered.com/app/${appId}`
  window.open(webUrl, '_blank', 'noopener,noreferrer')
}

