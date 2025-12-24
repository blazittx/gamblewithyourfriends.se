import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import './App.css'
import Navigation from './components/common/Navigation'
import HeroBanner from './components/HeroBanner/HeroBanner'
import SteamSection from './components/SteamSection/SteamSection'
import NewsSection from './components/NewsSection/NewsSection'
import TrailersSection from './components/TrailersSection/TrailersSection'
import FAQSection from './components/FAQSection/FAQSection'
import Footer from './components/common/Footer'
import BackToTop from './components/common/BackToTop'
import CookieConsent from './components/common/CookieConsent'
import SteamNotification from './components/common/SteamNotification'
import CoinflipPopup from './components/common/CoinflipPopup'
import ShopPopup from './components/common/ShopPopup'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsOfService from './components/pages/TermsOfService'
import { getLastCoinflipTime } from './utils/coins'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [showSteamNotification, setShowSteamNotification] = useState(false)
  const [showCoinflipPopup, setShowCoinflipPopup] = useState(false)
  const [showShopPopup, setShowShopPopup] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === 'privacy-policy' || hash === 'terms-of-service') {
        setCurrentPage(hash)
      } else {
        setCurrentPage('home')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // Show coinflip popup occasionally
  useEffect(() => {
    if (currentPage !== 'home') return

    const checkCoinflipPopup = () => {
      const lastTime = getLastCoinflipTime()
      const now = Date.now()
      const timeSinceLastPopup = now - lastTime
      
      // Show popup if:
      // 1. Never shown before (lastTime === 0)
      // 2. Or at least 15 seconds have passed since last popup
      // 3. And random chance (70% chance when conditions are met)
      const shouldShow = lastTime === 0 || timeSinceLastPopup >= 15 * 1000
      
      if (shouldShow && Math.random() < 0.7) {
        // Small delay to make it feel more natural
        setTimeout(() => {
          setShowCoinflipPopup(true)
        }, 2000 + Math.random() * 3000) // Show between 2-5 seconds after page load
      }
    }

    // Check after initial load
    const initialTimer = setTimeout(checkCoinflipPopup, 2000)

    // Also check periodically (every 30 seconds)
    const interval = setInterval(() => {
      checkCoinflipPopup()
    }, 30 * 1000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [currentPage])

  // Keyboard shortcut to manually trigger coinflip (Ctrl+Shift+C or Cmd+Shift+C)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        setShowCoinflipPopup(true)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicy />
  }

  if (currentPage === 'terms-of-service') {
    return <TermsOfService />
  }

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Gamble With Your Friends - World's First Online Co-op Casino Crawler</title>
        <meta name="title" content="Gamble With Your Friends - World's First Online Co-op Casino Crawler" />
        <meta name="description" content="World's first online co-op casino crawler! Play with up to 4 friends, explore procedurally generated casino floors, and take down an evil gambling empire. 20+ chance games, proximity voice-chat, and more!" />
        <meta name="keywords" content="Gamble With Your Friends, casino crawler, co-op game, multiplayer game, online casino game, steam game, TENSTACK, procedural generation, voice chat, multiplayer, friends game, casino game" />
        <meta name="author" content="TENSTACK AB" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="icon" type="image/x-icon" href="/Logo.ico" />
        <link rel="apple-touch-icon" href="/Logo.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gamblewithyourfriends.se/" />
        <meta property="og:title" content="Gamble With Your Friends - World's First Online Co-op Casino Crawler" />
        <meta property="og:description" content="World's first online co-op casino crawler! Play with up to 4 friends, explore procedurally generated casino floors, and take down an evil gambling empire." />
        <meta property="og:image" content="https://gamblewithyourfriends.se/Preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="Gamble With Your Friends" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gamblewithyourfriends.se/" />
        <meta property="twitter:title" content="Gamble With Your Friends - World's First Online Co-op Casino Crawler" />
        <meta property="twitter:description" content="World's first online co-op casino crawler! Play with up to 4 friends, explore procedurally generated casino floors, and take down an evil gambling empire." />
        <meta property="twitter:image" content="https://gamblewithyourfriends.se/Preview.png" />

        {/* Game-Specific Meta */}
        <meta name="game:developer" content="TENSTACK AB" />
        <meta name="game:publisher" content="TENSTACK AB" />
        <meta name="game:platform" content="Steam" />
        <meta name="game:release_date" content="TBA" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Gamble With Your Friends",
            "description": "World's first online co-op casino crawler where you and your friends gamble together to take down an evil gambling empire with a shared bank account. Features up to 4 player multiplayer, 20+ different chance games, proximity voice-chat, procedurally generated casino floors, and more!",
            "url": "https://gamblewithyourfriends.se/",
            "genre": ["Casino Crawler", "Co-op", "Multiplayer", "Social Game"],
            "gamePlatform": ["Steam", "PC"],
            "operatingSystem": "Windows 7 SP1+ (Windows 10+ recommended)",
            "applicationCategory": "Game",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/PreOrder",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "0",
              "ratingCount": "0"
            },
            "publisher": {
              "@type": "Organization",
              "name": "TENSTACK AB",
              "url": "https://gamblewithyourfriends.se/"
            },
            "developer": {
              "@type": "Organization",
              "name": "TENSTACK AB",
              "url": "https://gamblewithyourfriends.se/"
            },
            "gameFeature": [
              "Up to 4 player multiplayer support",
              "20+ different chance games",
              "Expression system for communication",
              "Proximity voice-chat",
              "Procedurally generated casino floors",
              "Cocktail crafting system",
              "Original soundtrack"
            ],
            "requirements": {
              "@type": "VideoGame",
              "processorRequirements": "Intel or AMD Dual Core at 2 GHz or better",
              "memoryRequirements": "2 GB RAM",
              "graphicsRequirements": "Intel Graphics 4400 or better",
              "storageRequirements": "1 GB available space",
              "operatingSystem": "Windows 7 SP1+ (Windows 10+ recommended from 2024)"
            }
          })}
        </script>
      </Helmet>

      <div className="App">
        <Navigation 
          showSteamNotification={() => setShowSteamNotification(true)} 
          onCoinBalanceClick={() => setShowShopPopup(true)}
        />
        <HeroBanner showSteamNotification={() => setShowSteamNotification(true)} />
        <SteamSection showSteamNotification={() => setShowSteamNotification(true)} />
        <NewsSection />
        <TrailersSection />
        <FAQSection />
        <Footer />
        <BackToTop />
        <CookieConsent />
        {showSteamNotification && (
          <SteamNotification onClose={() => setShowSteamNotification(false)} />
        )}
        {showCoinflipPopup && (
          <CoinflipPopup onClose={() => setShowCoinflipPopup(false)} />
        )}
        {showShopPopup && (
          <ShopPopup onClose={() => setShowShopPopup(false)} />
        )}
        {/* Hidden button to manually trigger coinflip */}
        <button
          className="hidden-coinflip-trigger"
          onClick={() => setShowCoinflipPopup(true)}
          aria-label="Trigger coinflip"
          title="Trigger coinflip (or press Ctrl+Shift+C)"
        />
      </div>
    </>
  )
}

export default App

