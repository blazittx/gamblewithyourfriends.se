import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../common/Navigation'
import Footer from '../common/Footer'
import './PrivacyPolicy.css'

const GamePrivacyPolicyV1 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Helmet>
        <title>Game Privacy Policy v1 - Gamble With Your Friends</title>
        <meta name="description" content="Game Privacy Policy v1 for Gamble With Your Friends by TENSTACK AB" />
      </Helmet>
      <Navigation />
      <div className="legal-page">
        <div className="legal-container">
          <a href="#" className="legal-back-link" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>← Back to Home</a>
          <h1>Game Privacy Policy v1</h1>
          <p className="legal-last-updated">Effective: May 1, 2026</p>

          <section>
            <h2>GWYF Privacy Policy</h2>
            <p>
              This Privacy Policy describes how TENSTACK AB (&quot;TENSTACK&quot;, &quot;we&quot;, &quot;us&quot;) processes data in connection with the video game GAMBLE WITH YOUR FRIENDS (the &quot;Game&quot;). It forms part of the GWYF End User License Agreement (&quot;EULA&quot;) and is incorporated into the EULA by reference.
            </p>
            <p>
              <strong>Compliance framing.</strong> References to specific privacy regimes (CCPA/CPRA, LGPD, UK GDPR, GDPR, COPPA) are included to explain rights that may apply to you. They are not a representation that every procedural requirement of every listed regime applies to TENSTACK in all circumstances. Where mandatory local rules apply, those rules prevail.
            </p>
            <p>
              <strong>Scope.</strong> This Privacy Policy covers data processing in the Game. It does not cover the TENSTACK marketing website at gamblewithyourfriends.se, which has its own privacy notice.
            </p>
          </section>

          <section>
            <h2>1. Who We Are (Data Controller)</h2>
            <p><strong>TENSTACK AB</strong></p>
            <p>Registered office: Magnus Ladulasgatan 65, 118 27 Stockholm, Sweden</p>
            <p>Organisation number: 559506-8353</p>
            <p>Sweden, European Union</p>
            <p>Email for privacy enquiries: support@tenstack.se</p>
          </section>

          <section>
            <h2>2. How the Game Runs</h2>
            <p>Multiplayer sessions of the Game run peer-to-peer via Steam&apos;s matchmaking infrastructure. TENSTACK does not host the Game&apos;s real-time gameplay sessions. The Game does not contact TENSTACK when you launch it.</p>
            <p>
              <strong>Lobby creation.</strong> When a player creates a multiplayer lobby (becomes the &quot;host&quot;), their Game client contacts a TENSTACK webhook endpoint to receive Game configuration data, including the current Game version and gameplay settings. This is a one-way push from TENSTACK to the host&apos;s client; it happens whenever a lobby is created. TENSTACK does not receive personal data from the host through this channel.
            </p>
          </section>

          <section>
            <h2>3. What Data We Collect</h2>
            <p><strong>Telemetry during gameplay.</strong> During play, the Game transmits the following telemetry to a TENSTACK server in Sweden in real time:</p>
            <ul>
              <li>Your current Steam Profile Name (public display name on Steam, e.g. &quot;johndoe123&quot;). If you change your Steam Profile Name later, only the new name is recorded going forward.</li>
              <li>Round-level events from the Game&apos;s mini-games: bet amounts, outcomes, win/loss results, and aggregate totals across rounds.</li>
            </ul>
            <p>
              <strong>Bug reports (voluntary).</strong> Voluntary bug reports may be submitted via an in-Game form or by email to support@tenstack.se. The report contains the description you write plus, automatically, technical context provided by the Unity engine: Game version and build, platform and operating system, hardware specifications (GPU, CPU, RAM, graphics driver), the in-Game scene at the time of report, network statistics, session ID, role (host/client), player count, network backend, and a timestamp.
            </p>
            <p>We do not intentionally collect, store, or process:</p>
            <ul>
              <li>Your Steam ID (SteamID64) in our telemetry database.</li>
              <li>Steam login credentials.</li>
              <li>Payment information.</li>
              <li>Contact details (email, phone, address).</li>
              <li>IP address.</li>
              <li>Sensitive personal information under California law.</li>
              <li>Special categories of personal data under GDPR Article 9.</li>
            </ul>
          </section>

          <section>
            <h2>4. Why We Process This Data</h2>
            <p>Telemetry and webhook configuration data are used only for:</p>
            <ul>
              <li>Delivery of the correct Game version and gameplay settings to the host of a multiplayer lobby.</li>
              <li>Game design analysis and balance tuning of the Game&apos;s mini-games and mechanics.</li>
              <li>Defect detection and quality improvement of the Game.</li>
              <li>Manual review by TENSTACK staff via an internal dashboard to monitor game health.</li>
              <li>Future operation of optional in-game features such as competitive leaderboards (if added).</li>
            </ul>
            <p>Voluntary bug reports are used only to reproduce, diagnose, and fix the issues described in them.</p>
            <p><strong>Automated decision-making.</strong> We do not engage in automated decision-making, including profiling, that produces legal or similarly significant effects on you (GDPR Article 22).</p>
            <p>We do not sell or share your data, do not use it for advertising or behavioural profiling, and do not match it against external datasets.</p>
          </section>

          <section>
            <h2>5. Legal Basis for Processing (GDPR / UK GDPR)</h2>
            <p>Different processing flows have different legal bases:</p>
            <p><strong>Webhook configuration push.</strong> This flow does not involve TENSTACK collecting personal data from the host; it is a one-way push of Game configuration to the host&apos;s client. To the extent any host data is processed, it is necessary for the performance of the contract under GDPR Article 6(1)(b).</p>
            <p><strong>Telemetry processing.</strong> Telemetry data is processed on the basis of legitimate interests under GDPR Article 6(1)(f).</p>
            <p>Our legitimate interests include improving game design and balancing, identifying defects and unintended behaviour, manual integrity review, and preparing optional in-game features such as future leaderboards.</p>
            <p>We have conducted a documented Legitimate Interest Assessment (LIA) and consider these interests not to be overridden by players&apos; rights and freedoms.</p>
            <p><strong>Note:</strong> We do not rely on GDPR Article 6(1)(b) for telemetry processing because the Game can be played peer-to-peer via Steam without TENSTACK collecting telemetry.</p>
          </section>

          <section>
            <h2>6. Where Your Data Is Stored</h2>
            <p>Telemetry is stored on a private TENSTACK telemetry server located in Sweden (European Union). This is not a game session server.</p>
            <p>The webhook configuration endpoint is operated by TENSTACK from infrastructure in the European Union.</p>
            <p>Voluntary bug reports submitted via the in-Game form or to support@tenstack.se are processed using TENSTACK&apos;s internal tools and reviewed by TENSTACK personnel.</p>
            <p>We implement appropriate technical and organisational measures to protect the data, including access controls and encryption in transit.</p>
          </section>

          <section>
            <h2>7. Who Has Access</h2>
            <p>Access to telemetry stored on TENSTACK&apos;s server in Sweden is limited to:</p>
            <ul>
              <li>TENSTACK employees.</li>
              <li>Consultants and contractors engaged by TENSTACK under written confidentiality obligations.</li>
            </ul>
            <p>Voluntary bug reports are reviewed by TENSTACK personnel. We may use internal tools to organise and resolve reported issues; access is limited to TENSTACK personnel.</p>
            <p>No data is shared with external third parties beyond what is necessary for the purposes described above.</p>
          </section>

          <section>
            <h2>8. Data Retention</h2>
            <p>Identifiable telemetry described in Section 3 is retained for up to 24 months from collection unless earlier deletion is requested under Section 9 or retention is required to investigate misuse, security, legal, or technical issues.</p>
            <p>After that period, TENSTACK will delete or irreversibly anonymise the data.</p>
            <p>Aggregated or irreversibly anonymised statistics may be retained indefinitely for game design purposes.</p>
            <p>Voluntary bug reports are retained for as long as needed to resolve the reported issue and for a reasonable period afterwards for reference and regression-checking, then archived or deleted.</p>
            <p><strong>Right to deletion.</strong> You may request deletion of your data at any time. We will action such requests within 30 days.</p>
          </section>

          <section>
            <h2>9. Your Privacy Rights</h2>
            <p>Depending on your location, you have rights which may include:</p>
            <ul>
              <li>Access to your data.</li>
              <li>Correction of inaccurate data.</li>
              <li>Deletion of your data.</li>
              <li>Restriction of processing.</li>
              <li>Data portability.</li>
              <li>Objection to processing (GDPR Article 21).</li>
            </ul>
            <p><strong>Right to object (Article 21 GDPR).</strong> Because we process telemetry based on legitimate interests, you can object at any time by contacting support@tenstack.se.</p>
            <p>On receiving an objection, we will cease processing your telemetry. The Game will continue to function in peer-to-peer multiplayer; certain optional TENSTACK-side features (such as future leaderboards) will not be available while the objection is in effect.</p>
            <p>To exercise any privacy right, contact support@tenstack.se. We aim to respond within 30 days.</p>
            <p>Right to lodge a complaint: IMY (Sweden): https://www.imy.se, ICO (UK): https://ico.org.uk, ANPD (Brazil): https://www.gov.br/anpd.</p>
          </section>

          <section>
            <h2>10. California Residents (CCPA / CPRA)</h2>
            <p>If you are a California resident, this section applies in addition to Section 9.</p>
            <p>We do not sell or share your personal information as those terms are defined under California law. We do not discriminate against consumers who exercise CCPA rights.</p>
            <p>Categories of personal information collected: identifiers (Steam Profile Name) and commercial information (gameplay events: bets, outcomes, win/loss).</p>
            <p>Sources: directly from gameplay events and from Steam via the Steamworks API (Steam Profile Name).</p>
            <p>Business purposes: operating the Game, design analysis, defect detection, and manual integrity review.</p>
            <p>Retention: up to 24 months for identifiable personal information, as described in Section 8. Aggregated or irreversibly anonymised statistics may be retained indefinitely.</p>
            <p>Submit CCPA/CPRA rights requests to support@tenstack.se.</p>
          </section>

          <section>
            <h2>11. Brazil Residents (LGPD)</h2>
            <p>For purposes of LGPD, TENSTACK acts as the Controller (Controlador) of gameplay data. Requests under Articles 18-21 LGPD may be addressed to support@tenstack.se.</p>
            <p>The legal basis under LGPD Article 7 corresponds to legitimate interests (Article 7, IX), with the analysis described in Section 5.</p>
          </section>

          <section>
            <h2>12. International Data Transfers</h2>
            <p>Telemetry processed by TENSTACK is stored in Sweden and does not leave the EU/EEA.</p>
            <p>Voluntary bug reports may be processed using internal tools that may include cloud-based services with global infrastructure. Where bug report content contains personal data, TENSTACK takes reasonable steps to protect it consistent with applicable law.</p>
            <p>If you are located outside the EU, accessing the Game involves your gameplay telemetry being transmitted to and stored in the EU.</p>
          </section>

          <section>
            <h2>13. Children&apos;s Privacy</h2>
            <p>The Game is intended for players aged 13 and over (see EULA Section 4 for full age requirements). We do not knowingly collect data from children under 13.</p>
            <p>If we obtain actual knowledge that a player is under 13, we will delete their data unless we have first obtained verifiable parental or guardian consent in accordance with COPPA.</p>
            <p>If you believe data has been processed from a child (under 13) without appropriate parental or guardian consent, contact support@tenstack.se and we will delete it promptly.</p>
          </section>

          <section>
            <h2>14. Security</h2>
            <p>We implement appropriate technical and organisational measures to protect data against unauthorised access, alteration, disclosure, or destruction, including access controls and encryption in transit.</p>
            <p>No system is perfectly secure; we do not guarantee absolute security.</p>
          </section>

          <section>
            <h2>15. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, the Game, or applicable law. The current version is always available at https://gamblewithyourfriends.se/game-privacy-policy.</p>
            <p>For material changes that significantly affect your rights or obligations, we will present the updated Privacy Policy in-game on next launch and require your active acceptance before you can continue to play.</p>
            <p>Minor or non-material changes will be notified via the Steam news feed for the Game and/or an in-game notice.</p>
            <p>Prior versions of this Privacy Policy are available on request at support@tenstack.se or at https://gamblewithyourfriends.se/game-privacy-policy/changelog.</p>
          </section>

          <section>
            <h2>16. Contact</h2>
            <p>For privacy enquiries, requests to exercise your rights, or any other privacy matter, contact: support@tenstack.se.</p>
            <p>
              <strong>TENSTACK AB</strong><br />
              Postal address: Magnus Ladulasgatan 65, 118 27 Stockholm, Sweden
            </p>
            <p>This Privacy Policy is incorporated by reference into the GWYF EULA. By accepting the EULA, you acknowledge this Privacy Policy.</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default GamePrivacyPolicyV1
