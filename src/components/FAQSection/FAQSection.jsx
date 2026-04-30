import { useState } from 'react'
import './FAQSection.css'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'What platforms can you play Gamble With Your Friends on?',
      answer: 'For now, we are only supporting Windows PCs. But who knows? We might decide to support more platforms in the future.'
    },
    {
      id: 2,
      question: 'Is there matchmaking?',
      answer: 'Nope! Gamble With Your Friends is a Steam-friends only game. We recommend you play with your friends, but if you do not have anyone to play with, join our community at gwyf.se.'
    },
    {
      id: 3,
      question: 'Can I play single-player?',
      answer: 'Yes, solo play is possible, but not advised (hence the name "Gamble With Your Friends") unless you are feeling really lucky. We designed the game to be played with friends, but if you are up for going solo, we cannot stop you.'
    },
    {
      id: 4,
      question: 'What are the future plans? We want updates!!!',
      answer: 'Gamble With Your Friends is not a live-service game. It is a finished game at launch, and any updates should be seen as bonuses. TENSTACK is a small collective making creative, digestible games that respect your money and time. We want games you can finish in a couple of sessions, without feeling stuffed.'
    },
    {
      id: 5,
      question: 'Where do I report bugs?',
      answer: 'You can report bugs on Steam forums (https://steamcommunity.com/app/3892270/discussions/) or through our community at gwyf.se. We also added an in-game button (Pause Menu > Report A Bug) for bug reporting. Screenshots, videos, and player logs are always very helpful for us.'
    },
    {
      id: 6,
      question: 'I am having issues with the game - where can I get support?',
      answer: 'Please first check our troubleshooting steps below. If it does not fix your issue, reach out to support@tenstack.se. Screenshots, videos, and player logs are always very helpful for us.'
    },
    {
      id: 7,
      question: 'How could I prevent random players from joining my lobby?',
      answer: 'There are two lobby settings in Gamble With Your Friends: Friends Only and Invite Only. Your lobby is not exposed to the public. To prevent unwanted friends from joining uninvited, everyone in the lobby should set Lobby Mode to Invite Only (next to your Player Profile on Main Menu, or via Settings > General > Lobby Mode). If you are a streamer, we also recommend using a separate Steam profile name you do not show on stream. Please remember to re-host the lobby after changing these settings. If someone can still invade your lobby, send us your player log so we can investigate.'
    },
    {
      id: 8,
      question: 'Where to find player logs?',
      answer: 'When reporting bugs, player logs are useful as they help us track down the issue. The log only contains info from your latest game session, so get it right after the issue occurs. Press Windows key + R, type appdata, then navigate to LocalLow\\TENSTACK\\Gamble With Your Friends, locate the file called "Player", and send it to support@tenstack.se.'
    },
    {
      id: 9,
      question: 'I got motion sick while playing Gamble With Your Friends, what should I do?',
      answer: 'We have accessibility features to disable head bobbing and adjust camera smoothing values (Settings > Accessibility), which can help prevent motion sickness. We also advise players sensitive to motion sickness to avoid the Body Shredding Machine, as selling your body could be triggering. Ask your friends not to throw you into this machine.'
    },
    {
      id: 10,
      question: 'I am having connection problems and/or cannot join my friend\'s game!',
      answer: 'Make sure you are not using a VPN or other software/modification that tweaks your connection. We use the Steam API for lobby creation, and VPNs are known to cause problems in similar games. Also make sure the friend with the best connection and PC hosts the lobby.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const renderAnswer = (text) => {
    const pattern = /(https?:\/\/[^\s)]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}|(?:[a-z0-9-]+\.)+[a-z]{2,})(?=[\s.,!?)]|$)/gi
    const matches = [...text.matchAll(pattern)]
    if (!matches.length) return text

    const nodes = []
    let lastIndex = 0

    matches.forEach((match, index) => {
      const value = match[0]
      const start = match.index ?? 0

      if (start > lastIndex) {
        nodes.push(text.slice(lastIndex, start))
      }

      let href = value
      const isEmail = value.includes('@')
      if (isEmail) {
        href = `mailto:${value}`
      } else if (!value.startsWith('http://') && !value.startsWith('https://')) {
        href = `https://${value}`
      }

      nodes.push(
        <a
          key={`faq-link-${index}`}
          href={href}
          target={isEmail ? undefined : '_blank'}
          rel={isEmail ? undefined : 'noopener noreferrer'}
        >
          {value}
        </a>
      )

      lastIndex = start + value.length
    })

    if (lastIndex < text.length) {
      nodes.push(text.slice(lastIndex))
    }

    return nodes
  }

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className="faq-chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{renderAnswer(faq.answer)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection

