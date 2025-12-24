import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Gamble With Your Friends</h3>
          <p className="footer-description">
            The ultimate social gaming experience. Play together, win together.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#visuals">Visuals</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#play">Play Now</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <ul className="footer-links">
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Gamble With Your Friends. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

