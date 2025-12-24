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
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsOfService from './components/pages/TermsOfService'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [showSteamNotification, setShowSteamNotification] = useState(false)

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
        <title>Gamble With Your Friends - Play Together, Win Together</title>
        <meta name="title" content="Gamble With Your Friends - Play Together, Win Together" />
        <meta name="description" content="Experience the ultimate social gaming experience. Play exciting games with your friends and compete for the top spot. The most fun multiplayer game!" />
        <meta name="keywords" content="gaming, multiplayer game, social game, play with friends, online game, competitive gaming, steam game" />
        <meta name="author" content="Gamble With Your Friends" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gamblewithyourfriends.se/" />
        <meta property="og:title" content="Gamble With Your Friends - Play Together, Win Together" />
        <meta property="og:description" content="Experience the ultimate social gaming experience. Play exciting games with your friends and compete for the top spot!" />
        <meta property="og:image" content="https://gamblewithyourfriends.se/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gamblewithyourfriends.se/" />
        <meta property="twitter:title" content="Gamble With Your Friends - Play Together, Win Together" />
        <meta property="twitter:description" content="Experience the ultimate social gaming experience. Play exciting games with your friends and compete for the top spot!" />
        <meta property="twitter:image" content="https://gamblewithyourfriends.se/og-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Gamble With Your Friends",
            "description": "Experience the ultimate social gaming experience. Play exciting games with your friends and compete for the top spot.",
            "url": "https://gamblewithyourfriends.se/",
            "genre": "Social Game, Multiplayer Game",
            "gamePlatform": "Steam, Web Browser",
          })}
        </script>
      </Helmet>

      <div className="App">
        <Navigation showSteamNotification={() => setShowSteamNotification(true)} />
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
      </div>
    </>
  )
}

export default App

