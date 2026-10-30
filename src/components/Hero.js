function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="hero__eyebrow">A little better, every day</p>
        <h1 id="hero-title">Everyday essentials,<br /><span>chosen with care.</span></h1>
        <p className="hero__description">
          Thoughtful finds for your home and routine, with quality you’ll love and prices that feel right.
        </p>
        <a className="hero__button" href="#products">
          Explore the collection
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div className="hero__art" aria-hidden="true">
        <span className="hero__sun" />
        <span className="hero__sparkle hero__sparkle--one">✳</span>
        <div className="hero__bag">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M38 8C23 8.5 13 13.7 13 23.2A8.5 8.5 0 0 0 21.5 32C31.3 32 37.6 21.9 38 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M9 40c3.7-9.3 10.5-15.9 20.5-20.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="hero__floating-note hero__floating-note--top">
          <span className="hero__note-dot" />
          <span>Thoughtful by nature</span>
        </div>
        <div className="hero__floating-note hero__floating-note--bottom">
          <span className="hero__note-check">✓</span>
          <span>Good things, every day</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
