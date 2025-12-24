import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">About the Game</h2>
          <p className="about-description">
            Gamble With Your Friends is the ultimate social gaming experience designed to bring people together. 
            Whether you're competing for the top spot on the leaderboard or just having fun with friends, 
            our game offers endless entertainment.
          </p>
          <p className="about-description">
            Built with cutting-edge technology, we've created a platform that's fast, reliable, and most importantly, 
            fun. Join thousands of players who have already discovered the thrill of gaming with friends.
          </p>
          <div className="about-features">
            <div className="about-feature">
              <span className="check-icon">✓</span>
              <span>Free to Play</span>
            </div>
            <div className="about-feature">
              <span className="check-icon">✓</span>
              <span>No Downloads Required</span>
            </div>
            <div className="about-feature">
              <span className="check-icon">✓</span>
              <span>Regular Updates</span>
            </div>
            <div className="about-feature">
              <span className="check-icon">✓</span>
              <span>Community Driven</span>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="about-card">
            <div className="card-glow"></div>
            <div className="card-inner">
              <h3>Join the Community</h3>
              <p>Connect with players from around the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

