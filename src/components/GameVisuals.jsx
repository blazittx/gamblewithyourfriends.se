import './GameVisuals.css'

const GameVisuals = () => {
  const visuals = [
    {
      title: 'Immersive Gameplay',
      description: 'Experience action-packed moments that keep you on the edge of your seat',
      gradient: 'gradient-1'
    },
    {
      title: 'Beautiful Design',
      description: 'Stunning visuals and polished UI that make every session enjoyable',
      gradient: 'gradient-2'
    },
    {
      title: 'Smooth Performance',
      description: 'Optimized for speed and responsiveness across all devices',
      gradient: 'gradient-3'
    }
  ]

  return (
    <section id="visuals" className="game-visuals">
      <div className="section-header">
        <h2 className="section-title">Game Visuals</h2>
        <p className="section-subtitle">See what makes our game special</p>
      </div>
      <div className="visuals-grid">
        {visuals.map((visual, index) => (
          <div key={index} className={`visual-card ${visual.gradient}`}>
            <div className="visual-placeholder">
              <div className="visual-content">
                <div className="visual-icon">🎮</div>
                <h3 className="visual-title">{visual.title}</h3>
                <p className="visual-description">{visual.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="visual-cta">
        <p>Ready to see it in action?</p>
        <a href="#play" className="btn btn-primary">Start Playing Now</a>
      </div>
    </section>
  )
}

export default GameVisuals

