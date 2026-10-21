export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__bg" aria-hidden="true"></div>
      <div className="cta-banner__overlay" aria-hidden="true"></div>
      <div className="container cta-banner__inner">
        <span className="eyebrow">Oled valmis alustama?</span>
        <h2 className="cta-banner__title">
          Esimene <span className="accent">treening</span> on tähtsam<br />kui ükski jutt.
        </h2>
        <p className="cta-banner__lead">
          Lepime kokku 20-minutilise tasuta vestluse. Vaatame üle, kus sa oled,
          kuhu tahad jõuda, ja ma selgitan täpselt, kuidas sinna jõuame.
        </p>
        <div className="cta-banner__ctas">
          <a href="#kontakt" className="btn btn--primary">
            Broneeri tasuta vestlus
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="tel:+37253480590" className="btn btn--ghost cta-banner__phone">
            +372 5348 0590
          </a>
        </div>
      </div>
    </section>
  )
}
