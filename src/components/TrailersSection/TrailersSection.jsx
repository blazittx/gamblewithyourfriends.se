import { useState, useRef, useEffect } from 'react'
import './TrailersSection.css'

const TrailersSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const videoRef = useRef(null)
  const dashPlayerRef = useRef(null)
  
  const trailerUrl = 'https://video.fastly.steamstatic.com/store_trailers/3892270/758756043/c2165ea5d8f341fd12f3cf001b10fd07cb2a9ec0/1755276063/dash_av1.mpd?t=1756824014'
  // Steam thumbnail URL - using a placeholder that should work with Steam's CDN
  const thumbnailUrl = 'https://cdn.akamai.steamstatic.com/steam/apps/3892270/header.jpg'

  useEffect(() => {
    // Initialize dash.js player when video element is ready and has started
    if (hasStarted && videoRef.current) {
      if (window.dashjs && window.dashjs.MediaPlayer) {
        const player = window.dashjs.MediaPlayer().create()
        player.initialize(videoRef.current, trailerUrl, false) // false = no autoplay
        dashPlayerRef.current = player
        
        return () => {
          if (dashPlayerRef.current) {
            dashPlayerRef.current.destroy()
            dashPlayerRef.current = null
          }
        }
      } else {
        console.warn('dash.js not loaded, video may not play')
      }
    }
  }, [hasStarted, trailerUrl])

  const handlePlay = () => {
    setHasStarted(true)
    // Small delay to ensure video element is ready, then play
    setTimeout(() => {
      if (videoRef.current && dashPlayerRef.current) {
        dashPlayerRef.current.play()
        setIsPlaying(true)
      } else if (videoRef.current) {
        videoRef.current.play().then(() => {
          setIsPlaying(true)
        }).catch(err => {
          console.error('Error playing video:', err)
        })
      }
    }, 100)
  }

  const handlePlayPause = () => {
    if (hasStarted) {
      setIsPlaying(!isPlaying)
      if (dashPlayerRef.current) {
        if (isPlaying) {
          dashPlayerRef.current.pause()
        } else {
          dashPlayerRef.current.play()
        }
      } else if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause()
        } else {
          videoRef.current.play()
        }
      }
    } else {
      handlePlay()
    }
  }

  return (
    <section id="trailers" className="trailers-section">
      <div className="trailers-container">
        <h2 className="trailers-title">Watch Trailers</h2>
        
        <div className="trailers-carousel">
          <div className="trailer-player-wrapper">
            <div className="trailer-player">
              <div className="trailer-video-container">
                {!hasStarted ? (
                  <div className="video-thumbnail" style={{ backgroundImage: `url(${thumbnailUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="video-pattern"></div>
                    <div className="play-overlay" onClick={handlePlay}>
                      <button className="play-button-large" aria-label="Play trailer">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="40" cy="40" r="40" fill="rgba(0, 0, 0, 0.6)" className="play-button-circle"/>
                          <circle cx="40" cy="40" r="38" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" fill="none"/>
                          <path d="M32 26L32 54L54 40L32 26Z" fill="white"/>
                        </svg>
                      </button>
                    </div>
                    <div className="video-info-overlay">
                      <div className="video-info">
                        <div className="video-logo-wrapper">
                          <img src="/logo.svg" alt="Gamble With Your Friends" className="video-logo-img" />
                        </div>
                        <div className="video-title-wrapper">
                          <div className="video-title-main">Teaser Trailer</div>
                          <div className="video-title-game">Gamble With Your Friends</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="video-wrapper">
                    <video
                      ref={videoRef}
                      className="trailer-video"
                      controls
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => {
                        setIsPlaying(false)
                        setHasStarted(false)
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrailersSection
