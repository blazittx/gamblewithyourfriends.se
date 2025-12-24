import { Helmet } from 'react-helmet-async'
import './App.css'
import Hero from './components/Hero'
import GameFeatures from './components/GameFeatures'
import GameVisuals from './components/GameVisuals'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Gamble With Your Friends - Play Together, Win Together</title>
        <meta name="title" content="Gamble With Your Friends - Play Together, Win Together" />
        <meta name="description" content="Experience the ultimate social gaming experience. Play exciting games with your friends and compete for the top spot. Join thousands of players in the most fun multiplayer game!" />
        <meta name="keywords" content="gaming, multiplayer game, social game, play with friends, online game, competitive gaming" />
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
            "gamePlatform": "Web Browser",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250"
            }
          })}
        </script>
      </Helmet>

      <div className="App">
        <Hero />
        <GameFeatures />
        <GameVisuals />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App

