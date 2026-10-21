const reviews = [
  {
    name: 'Marti',
    role: 'Klient 2 aastat',
    text: 'Alustasin täiesti nullist. Rauno ei suru kaasa, ta ehitab plaani, mida päriselt jaksad teha. Pool aastat hiljem olen tugevam ja hoian seda kerge vaevaga.',
  },
  {
    name: 'Rünno',
    role: 'Veebinõustamine',
    text: 'Olen pidev välismaal, aga kava töötab igal pool. Iganädalane tagasiside hoiab fookust, kui enda motivatsioon kõigub. Parim raha, mis treeningusse pannud.',
  },
  {
    name: 'Taavi',
    role: 'Personaaltreeningud',
    text: 'Käin kaks korda nädalas. Tehnika, mida ise poleks märganud, on paigas ja kaelavaev kadunud. Rauno oskab seletada nii, et jääb meelde.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">Klientide sõnad</span>
          <h2 className="section__title">
            Tulemused, mis <span className="accent">räägivad</span> ise.
          </h2>
        </div>
        <div className="testimonials__grid">
          {reviews.map((r) => (
            <figure className="review" key={r.name}>
              <div className="review__stars" aria-label="5 tärni">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3 7 7 .5-5.5 4.5 2 7-6.5-4-6.5 4 2-7L2 9.5 9 9z" />
                  </svg>
                ))}
              </div>
              <blockquote className="review__text">"{r.text}"</blockquote>
              <figcaption className="review__author">
                <div className="review__avatar" aria-hidden="true">{r.name[0]}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
