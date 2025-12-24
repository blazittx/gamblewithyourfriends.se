import './GameFeatures.css'

const GameFeatures = () => {
  const features = [
    {
      icon: '👥',
      title: 'Play with Friends',
      description: 'Invite your friends and compete in exciting multiplayer matches. The more, the merrier!'
    },
    {
      icon: '🎯',
      title: 'Competitive Gameplay',
      description: 'Climb the leaderboards and prove you\'re the best. Every game counts!'
    },
    {
      icon: '🎨',
      title: 'Stunning Visuals',
      description: 'Experience beautiful graphics and smooth animations that bring the game to life.'
    },
    {
      icon: '⚡',
      title: 'Fast & Responsive',
      description: 'Lightning-fast gameplay with minimal lag. Play seamlessly across all devices.'
    },
    {
      icon: '🏅',
      title: 'Achievements & Rewards',
      description: 'Unlock achievements, earn rewards, and show off your progress to friends.'
    },
    {
      icon: '🌐',
      title: 'Cross-Platform',
      description: 'Play on any device - desktop, tablet, or mobile. Your progress syncs everywhere.'
    }
  ]

  return (
    <section id="features" className="game-features">
      <div className="section-header">
        <h2 className="section-title">Why Choose Our Game?</h2>
        <p className="section-subtitle">Everything you need for the ultimate gaming experience</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GameFeatures

