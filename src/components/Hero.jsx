import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Gamble</span> With Your Friends
        </h1>
        <p className="hero-subtitle">
          Experience the ultimate social gaming adventure. Play together, compete together, and win together!
        </p>
        <div className="hero-buttons">
          <a href="#play" className="btn btn-primary">Play Now</a>
          <a href="#features" className="btn btn-secondary">Learn More</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Active Players</div>
          </div>
          <div className="stat">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Games Played</div>
          </div>
          <div className="stat">
            <div className="stat-number">4.8★</div>
            <div className="stat-label">Rating</div>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="floating-card card-1">
          <div className="card-content">🎮</div>
        </div>
        <div className="floating-card card-2">
          <div className="card-content">🎲</div>
        </div>
        <div className="floating-card card-3">
          <div className="card-content">🏆</div>
        </div>
      </div>
    </section>
  )
}

export default Hero

