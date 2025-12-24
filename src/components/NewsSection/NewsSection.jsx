import './NewsSection.css'
import Button from '../common/Button'

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Game Update 1.2.0 - New Features',
      date: 'January 15, 2025',
      category: null,
      image: 'Update Screenshot'
    },
    {
      id: 2,
      title: 'Thank you, Players!',
      date: 'January 10, 2025',
      category: null,
      image: 'Community Image'
    },
    {
      id: 3,
      title: 'Hotfix - Jan 8',
      date: 'January 8, 2025',
      category: 'Patch Notes',
      image: 'Hotfix Screenshot'
    },
    {
      id: 4,
      title: 'January Update 1.1.0',
      date: 'January 5, 2025',
      category: 'Patch Notes',
      image: 'Update Screenshot'
    }
  ]

  return (
    <section id="news" className="news-section">
      <div className="news-container">
        <h2 className="news-title">Latest News</h2>
        
        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-image">
                <div className="news-image-placeholder">
                  <span>{item.image}</span>
                </div>
              </div>
              <div className="news-content">
                {item.category && (
                  <span className="news-category">{item.category}</span>
                )}
                <h3 className="news-card-title">{item.title}</h3>
                <time className="news-date">{item.date}</time>
              </div>
            </article>
          ))}
        </div>

        <div className="news-footer">
          <Button href="#" variant="accent">See More Articles</Button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection

