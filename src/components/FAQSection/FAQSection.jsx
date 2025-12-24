import { useState } from 'react'
import './FAQSection.css'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'What is this game about?',
      answer: 'Gamble With Your Friends is an online co-op "casino crawler". You and your friends will gamble together to take down an evil gambling empire with a shared bank account. Our game is NOT A VIRTUAL CASINO. YOU WILL NOT SPEND ACTUAL MONEY TO WIN/LOSE MONEY FROM IT. You will only pay once and that\'s when you buy the game. There will be no in-game transactions that will require real money. We want to give you the fantasy of taking down an evil casino system (a.k.a "the house"). You\'ll explore the casino, learn how the system works, and use various tools at your disposal. Collaboration and communication between players will be crucial to bring the house down!'
    },
    {
      id: 2,
      question: 'What is the current state of the game?',
      answer: 'Currently the game is in early phase of the development. We are prototyping some ideas, nailing down our vision, and brainstorming. We plan to add much more and whatever we add we\'ll update you as much as we have done so far. So stick around!'
    },
    {
      id: 3,
      question: 'I want to playtest!',
      answer: 'While we\'re very happy to see so many eager to become a TESTERSTACK, we\'re a small team and can\'t really handle huge volumes of playtesters. Because of that, we really need playtesters to be those who are actually dedicated and willing to give constructive feedback that would improve our game. For now we are making an application form people can fill out if they wish to become a TESTERSTACK. We\'ll go through them, then reach out to those we selected to grant them access to playable early version of the game. Please stay tuned for future announcements regarding being a TESTERSTACK.'
    },
    {
      id: 4,
      question: 'Will the game be free?',
      answer: 'No, we got bills to pay & family to feed. But as TENSTACK, we make digestible games that respect your time and money. So be sure we\'re trying to make the game as affordable as possible. The exact price will be revealed very close to the release date.'
    },
    {
      id: 5,
      question: 'When will the game be released?',
      answer: 'We can\'t give an exact date now, but I guarantee you won\'t be waiting for TOO LONG. The exact release date will be announced once we\'re ready. But stay in our server, follow our news and updates, and you\'ll get a good idea when the game is about to be ready.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
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
                  <p>{faq.answer}</p>
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

