import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../common/Navigation'
import Footer from '../common/Footer'
import './TermsOfService.css'

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Helmet>
        <title>Terms of Service - Gamble With Your Friends</title>
        <meta name="description" content="Terms of Service for Gamble With Your Friends by TENSTACK AB" />
      </Helmet>
      <Navigation />
      <div className="legal-page">
        <div className="legal-container">
          <a href="#" className="legal-back-link" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>← Back to Home</a>
          <h1>Terms of Service</h1>
          <p className="legal-last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the Gamble With Your Friends website and services operated by TENSTACK AB ("we", "our", or "us"), 
              you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily access the materials on our website for personal, non-commercial transitory viewing only. This license does not include:</p>
            <ul>
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose</li>
              <li>Removing any copyright or other proprietary notations</li>
              <li>Transferring the materials to another person</li>
            </ul>
          </section>

          <section>
            <h2>3. Game Services</h2>
            <h3>3.1 Game Purchase</h3>
            <p>
              Gamble With Your Friends is a paid game available on Steam. By purchasing the game, you obtain a license to use the game 
              in accordance with these terms and Steam's terms of service.
            </p>

            <h3>3.2 No Real Money Gambling</h3>
            <p>
              This game is NOT a virtual casino. You will NOT spend actual money to win or lose money from it. 
              You will only pay once when you buy the game. There will be no in-game transactions that require real money.
            </p>

            <h3>3.3 Account Responsibility</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility 
              for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2>4. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the service for any unlawful purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any harmful code or malware</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the service, including but not limited to text, graphics, logos, images, 
              and software, are the property of TENSTACK AB and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2>6. Disclaimer</h2>
            <p>
              The materials on our website and in our game are provided on an "as is" basis. TENSTACK AB makes no warranties, 
              expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions 
              of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2>7. Limitations</h2>
            <p>
              In no event shall TENSTACK AB or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
              or due to business interruption) arising out of the use or inability to use the materials on our website or in our game, 
              even if TENSTACK AB or a TENSTACK AB authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2>8. Refunds</h2>
            <p>
              Refund requests for the game should be made through Steam's refund policy. We follow Steam's standard refund terms and conditions.
            </p>
          </section>

          <section>
            <h2>9. Modifications</h2>
            <p>
              TENSTACK AB may revise these terms of service at any time without notice. By using this service, 
              you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2>10. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Sweden, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2>11. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p>
              <strong>TENSTACK AB</strong><br />
              Email: legal@tenstack.se<br />
              Website: https://gamblewithyourfriends.se
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TermsOfService

