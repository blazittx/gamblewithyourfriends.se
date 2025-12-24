// Cookie utility functions for coin balance

/**
 * Get a cookie value by name
 */
export const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

/**
 * Set a cookie value
 */
export const setCookie = (name, value, days = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

/**
 * Get the current coin balance from cookies
 */
export const getCoinBalance = () => {
  const balance = getCookie('coinBalance');
  return balance ? parseInt(balance, 10) : 0;
};

/**
 * Set the coin balance in cookies
 */
export const setCoinBalance = (balance) => {
  setCookie('coinBalance', balance.toString(), 365);
};

/**
 * Add coins to the balance
 */
export const addCoins = (amount) => {
  const currentBalance = getCoinBalance();
  const newBalance = currentBalance + amount;
  setCoinBalance(newBalance);
  return newBalance;
};

/**
 * Get the last time a coinflip popup was shown
 */
export const getLastCoinflipTime = () => {
  const time = getCookie('lastCoinflipTime');
  return time ? parseInt(time, 10) : 0;
};

/**
 * Set the last time a coinflip popup was shown
 */
export const setLastCoinflipTime = () => {
  setCookie('lastCoinflipTime', Date.now().toString(), 365);
};

/**
 * Get purchased items from cookies
 */
export const getPurchasedItems = () => {
  const purchased = getCookie('purchasedItems');
  return purchased ? JSON.parse(purchased) : [];
};

/**
 * Add a purchased item to cookies
 */
export const addPurchasedItem = (itemId) => {
  const purchased = getPurchasedItems();
  if (!purchased.includes(itemId)) {
    purchased.push(itemId);
    setCookie('purchasedItems', JSON.stringify(purchased), 365);
  }
};

/**
 * Check if an item is purchased
 */
export const isItemPurchased = (itemId) => {
  const purchased = getPurchasedItems();
  return purchased.includes(itemId);
};

/**
 * Check if shop has been opened before
 */
export const hasShopBeenOpened = () => {
  const opened = getCookie('shopOpened');
  return opened === 'true';
};

/**
 * Mark shop as opened
 */
export const setShopOpened = () => {
  setCookie('shopOpened', 'true', 365);
};

