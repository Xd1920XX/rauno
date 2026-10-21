export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/images/logo.png" alt="Rauno Paja" className="nav__logo-img" />
            <span>Rauno Paja</span>
          </div>
          <p>Personaaltreener Kuressaares. Treeningkavad, toitumine ja üks-ühele treening — kohapeal või veebis.</p>
        </div>
        <div className="footer__col">
          <h4>Teenused</h4>
          <a href="#teenused">Treeningkava</a>
          <a href="#teenused">Toitumisnõustamine</a>
          <a href="#teenused">Veebinõustamine</a>
          <a href="#teenused">Personaaltreening</a>
          <a href="#teenused">Treeningpakett</a>
        </div>
        <div className="footer__col">
          <h4>Leht</h4>
          <a href="#minust">Minust</a>
          <a href="#protsess">Protsess</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <div className="footer__col">
          <h4>Kontakt</h4>
          <a href="tel:+37253480590">+372 5348 0590</a>
          <a href="mailto:pajarauno1@gmail.com">pajarauno1@gmail.com</a>
          <a href="https://www.instagram.com/rauno_paja" target="_blank" rel="noreferrer">@rauno_paja</a>
          <span>Tallinna tn 65, Kuressaare</span>
        </div>
      </div>
      <div className="container footer__bar">
        <span>© {year} Rauno Paja. Kõik õigused kaitstud.</span>
        <span>Ehitatud armastusega Saaremaal.</span>
      </div>
    </footer>
  )
}
