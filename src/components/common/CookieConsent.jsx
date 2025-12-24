import { useState, useEffect } from 'react'
import './CookieConsent.css'
import Button from './Button'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    } else {
      const preferences = JSON.parse(consent)
      setCookiePreferences(preferences)
    }
  }, [])

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setCookiePreferences(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleRejectAll = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setCookiePreferences(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleTogglePreference = (type) => {
    if (type === 'necessary') return // Necessary cookies can't be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent">
        {!showSettings ? (
          <>
            <div className="cookie-consent-content">
              <h3 className="cookie-consent-title">Cookie Preferences</h3>
              <p className="cookie-consent-text">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies. You can also choose to customize your preferences.
              </p>
              <div className="cookie-consent-links">
                <a href="#privacy-policy">Privacy Policy</a>
                <span>•</span>
                <a href="#terms-of-service">Terms of Service</a>
              </div>
            </div>
            <div className="cookie-consent-actions">
              <Button onClick={() => setShowSettings(true)} variant="secondary">
                Customize
              </Button>
              <Button onClick={handleRejectAll} variant="secondary">
                Reject All
              </Button>
              <Button onClick={handleAcceptAll} variant="accent">
                Accept All
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-consent-content">
              <h3 className="cookie-consent-title">Customize Cookie Preferences</h3>
              <div className="cookie-settings">
                <div className="cookie-setting-item">
                  <div className="cookie-setting-header">
                    <label className="cookie-setting-label">
                      <strong>Necessary Cookies</strong>
                      <span className="cookie-setting-required">Required</span>
                    </label>
                  </div>
                  <p className="cookie-setting-description">
                    These cookies are essential for the website to function properly. They cannot be disabled.
                  </p>
                  <div className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.necessary}
                      disabled
                      readOnly
                    />
                    <span className="cookie-toggle-label">Always Active</span>
                  </div>
                </div>

                <div className="cookie-setting-item">
                  <div className="cookie-setting-header">
                    <label className="cookie-setting-label">
                      <strong>Analytics Cookies</strong>
                    </label>
                  </div>
                  <p className="cookie-setting-description">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <div className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.analytics}
                      onChange={() => handleTogglePreference('analytics')}
                    />
                    <span className="cookie-toggle-label">
                      {cookiePreferences.analytics ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>

                <div className="cookie-setting-item">
                  <div className="cookie-setting-header">
                    <label className="cookie-setting-label">
                      <strong>Marketing Cookies</strong>
                    </label>
                  </div>
                  <p className="cookie-setting-description">
                    These cookies are used to deliver advertisements and track campaign performance.
                  </p>
                  <div className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.marketing}
                      onChange={() => handleTogglePreference('marketing')}
                    />
                    <span className="cookie-toggle-label">
                      {cookiePreferences.marketing ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cookie-consent-actions">
              <Button onClick={() => setShowSettings(false)} variant="secondary">
                Back
              </Button>
              <Button onClick={handleSavePreferences} variant="accent">
                Save Preferences
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CookieConsent

