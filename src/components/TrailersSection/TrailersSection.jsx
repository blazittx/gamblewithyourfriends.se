import './TrailersSection.css'

const TrailersSection = () => {
  const youtubeEmbedUrl = 'https://www.youtube.com/embed/zM4epVwh_ZY?si=oMO-SG1fMd2n-noS'

  return (
    <section id="trailers" className="trailers-section">
      <div className="trailers-container">
        <h2 className="trailers-title">Watch Trailers</h2>

        <div className="trailer-video-container">
          <iframe
            className="trailer-youtube-player"
            src={youtubeEmbedUrl}
            title="Gamble With Your Friends trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default TrailersSection
