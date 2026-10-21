export default function Showcase() {
  return (
    <section className="showcase">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Treeneri standard</span>
          <h2 className="section__title">
            Teen seda, mida <span className="accent">õpetan</span>.
          </h2>
          <p className="section__lead">
            Treenerina ei saa küsida teiselt midagi, mida ise ei ela.
            Igapäevane töö köök- ja saaliplaani kallal — enne kui see sinuni jõuab.
          </p>
        </div>
        <div className="showcase__grid">
          <div className="showcase__item showcase__item--1" aria-hidden="true"></div>
          <div className="showcase__item showcase__item--2" aria-hidden="true"></div>
          <div className="showcase__item showcase__item--3" aria-hidden="true"></div>
          <div className="showcase__item showcase__item--4" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  )
}
