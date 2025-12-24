import './TrailersSection.css'

const TrailersSection = () => {
  const trailers = [
    {
      id: 1,
      title: 'Launch Trailer',
      game: 'Gamble With Your Friends'
    },
    {
      id: 2,
      title: 'Gameplay Trailer',
      game: 'Gamble With Your Friends'
    }
  ]

  return (
    <section id="trailers" className="trailers-section">
      <div className="trailers-container">
        <h2 className="trailers-title">Watch Trailers</h2>
        
        <div className="trailers-carousel">
          <button className="carousel-button carousel-prev" aria-label="Previous trailer">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="trailer-player-wrapper">
            <div className="trailer-player">
              <div className="trailer-video-container">
                <div className="video-thumbnail">
                  <div className="video-pattern"></div>
                  <div className="play-overlay">
                    <button className="play-button-large" aria-label="Play trailer">
                      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="50" fill="rgba(255, 0, 0, 0.9)"/>
                        <path d="M38 30L38 70L70 50L38 30Z" fill="white"/>
                      </svg>
                    </button>
                  </div>
                  <div className="video-info-overlay">
                    <div className="video-info">
                      <div className="video-logo-wrapper">
                        <span className="video-logo">GWYF</span>
                      </div>
                      <div className="video-title-wrapper">
                        <div className="video-title-main">Launch Trailer</div>
                        <div className="video-title-game">Gamble With Your Friends</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="trailer-indicators">
              <span className="trailer-count">1 / 2</span>
            </div>
          </div>

          <button className="carousel-button carousel-next" aria-label="Next trailer">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TrailersSection
