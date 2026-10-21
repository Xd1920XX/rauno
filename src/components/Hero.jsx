export default function Hero() {
  return (
    <section id="avaleht" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid"></div>
        <div className="hero__glow"></div>
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Personaaltreener · Kuressaare</span>
          <h1 className="hero__title">
            Ehita <span className="accent">tugevam</span> keha.<br />
            Elu, mis <span className="accent">kannab</span>.
          </h1>
          <p className="hero__lead">
            12 aastat kogemust, tõenduspõhine lähenemine, individuaalne kava.
            Alustad algaja või tõstad lage — teen plaani, mis sobib sinu
            päevakavasse ja viib tulemuseni.
          </p>
          <div className="hero__ctas">
            <a href="#kontakt" className="btn btn--primary">
              Alusta tasuta konsultatsiooniga
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#teenused" className="btn btn--ghost">Vaata teenuseid</a>
          </div>
          <div className="hero__trust">
            <div className="hero__trust-item">
              <strong>12+</strong>
              <span>aastat kogemust</span>
            </div>
            <div className="hero__trust-divider"></div>
            <div className="hero__trust-item">
              <strong>24/7</strong>
              <span>jõusaali ligipääs</span>
            </div>
            <div className="hero__trust-divider"></div>
            <div className="hero__trust-item">
              <strong>100%</strong>
              <span>individuaalne kava</span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__card hero__card--1">
            <div className="hero__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4v16M18 4v16M4 8h2M4 16h2M18 8h2M18 16h2M8 12h8"/></svg>
            </div>
            <div>
              <strong>Jõusaalis</strong>
              <span>Kuressaare keskus</span>
            </div>
          </div>
          <div className="hero__card hero__card--2">
            <div className="hero__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
            </div>
            <div>
              <strong>Online kava</strong>
              <span>igalt poolt maailmas</span>
            </div>
          </div>
          <div className="hero__photo">
            <div className="hero__photo-inner" aria-hidden="true"></div>
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              Vastuvõtt avatud
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
