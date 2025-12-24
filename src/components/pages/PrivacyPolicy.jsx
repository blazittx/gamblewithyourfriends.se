import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../common/Navigation'
import Footer from '../common/Footer'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Gamble With Your Friends</title>
        <meta name="description" content="Privacy Policy for Gamble With Your Friends by TENSTACK AB" />
      </Helmet>
      <Navigation />
      <div className="legal-page">
        <div className="legal-container">
          <a href="#" className="legal-back-link" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>← Back to Home</a>
          <h1>Privacy Policy</h1>
          <p className="legal-last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              TENSTACK AB ("we", "our", or "us") operates the Gamble With Your Friends website and game. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <p>We may collect information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Email address (for newsletter subscriptions)</li>
              <li>Contact information (if you reach out to us)</li>
              <li>Feedback and communications</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Send you newsletters and updates (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze website usage and trends</li>
              <li>Ensure website security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              You can control cookie preferences through our cookie consent banner. For more information, please see our Cookie Policy.
            </p>
          </section>

          <section>
            <h2>5. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
            <ul>
              <li>With service providers who assist us in operating our website</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer (merger, acquisition, etc.)</li>
            </ul>
          </section>

          <section>
            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p>To exercise these rights, please contact us at the information provided below.</p>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. 
              If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
              and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p>
              <strong>TENSTACK AB</strong><br />
              Email: privacy@tenstack.se<br />
              Website: https://gamblewithyourfriends.se
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy

