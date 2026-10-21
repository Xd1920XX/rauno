export default function About() {
  return (
    <section id="minust" className="about">
      <div className="container about__grid">
        <div className="about__visual">
          <div className="about__photo" aria-hidden="true"></div>
          <div className="about__sticker">
            <div>
              <strong>12+</strong>
              <span>aastat<br />praktikat</span>
            </div>
          </div>
        </div>
        <div className="about__content">
          <span className="eyebrow">Minust</span>
          <h2 className="section__title">
            Treener, kes käib sinuga <span className="accent">lõpuni</span>.
          </h2>
          <p className="about__motto">
            Koos muudame head kavatsused <span className="accent">püsivateks harjumusteks</span>.
          </p>
          <p className="section__lead">
            Mina olen Rauno Paja. Alustasin personaaltreeneri teed, kui nägin
            oma silmaga, kuidas õige treening ja toitumine suudavad inimese
            elu päriselt muuta. Tänaseks on sellest saanud rohkem kui töö —
            see on kutsumus.
          </p>
          <ul className="about__list">
            <li>
              <span className="about__list-dot"></span>
              <div>
                <strong>Individuaalne lähenemine.</strong> Iga kava algab sellest, kus sina täna oled — mitte universaalsest šabloonist.
              </div>
            </li>
            <li>
              <span className="about__list-dot"></span>
              <div>
                <strong>Tõenduspõhine metoodika.</strong> Treeningud ja toitumine, mis töötavad reaalses elus, mitte ainult paberil.
              </div>
            </li>
            <li>
              <span className="about__list-dot"></span>
              <div>
                <strong>Paindlik ajakava.</strong> Hommik enne tööd, õhtu pärast peret — leiame aja, mis töötab sinule.
              </div>
            </li>
            <li>
              <span className="about__list-dot"></span>
              <div>
                <strong>Pikaajaline tulemus.</strong> Ei kiirlahendust, vaid harjumusi, mis püsivad pärast viimast trenni.
              </div>
            </li>
          </ul>
          <a href="#kontakt" className="btn btn--primary">Räägime sinu eesmärkidest</a>
        </div>
      </div>
    </section>
  )
}
