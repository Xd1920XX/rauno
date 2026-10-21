const services = [
  {
    tag: 'Populaarseim',
    title: 'Treeningkava',
    price: '45 €',
    unit: 'ühekordne',
    desc: 'Täiesti sinule kirjutatud treeningplaan koos harjutuste video- ja tekstijuhistega. Uuendame vastavalt sinu arengule.',
    features: [
      'Individuaalne nädalakava',
      'Video- ja tekstijuhised iga harjutuse kohta',
      'Progressi jälgimine ja uuendused',
      'Sõnumi teel tugi küsimuste puhul',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4v16M18 4v16M4 8h2M4 16h2M18 8h2M18 16h2M8 12h8" />
      </svg>
    ),
  },
  {
    title: 'Toitumisnõustamine',
    price: '40 €',
    unit: 'ühekordne',
    desc: 'Isiklik toitumiskava kaalu langetamiseks, lihasmassi kasvatamiseks või tervise hoidmiseks — ilma ebareaalsete piiranguteta.',
    features: [
      'Sinu päevakavasse sobiv menüü',
      'Makro- ja kalorsuse arvutus',
      'Juhised poodlemiseks ja valmistamiseks',
      'Regulaarsed uuendused',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    tag: 'Täispakett',
    title: 'Veebinõustamine',
    price: '130 €',
    unit: 'kuus',
    desc: 'Täielik online tugi — treeningkava, toitumine ja järjepidev kontroll ühes paketis. Sulle, kes vajab süsteemi, aga mitte asukohta.',
    features: [
      'Igakuiselt uuenev treeningkava',
      'Toitumisplaan ja makrode jälgimine',
      'Iganädalane tagasiside',
      'Pidev kontakt ja kohandused',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8M12 18v2" />
      </svg>
    ),
    highlight: true,
  },
  {
    title: 'Personaaltreening',
    price: 'Alates 35 €',
    unit: 'kord',
    desc: 'Üks-ühele treening Kuressaare jõusaalis. Tehnika, intensiivsus ja motivatsioon kohapeal — just siis, kui seda vaja on.',
    features: [
      '24/7 ligipääs jõusaali',
      'Tehnika ja soorituse ülevaatus',
      'Reaalajas kohandused',
      'Paindlik ajavalik',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="6" r="3" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="teenused" className="services">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Teenused</span>
          <h2 className="section__title">
            Vali <span className="accent">tee</span>, mis sobib sinu päevale.
          </h2>
          <p className="section__lead">
            Neli viisi tööd alustada — kõik viivad samasse kohta: tulemuseni,
            mis püsib. Pole kindel, kust pihta hakata? Esimene vestlus on tasuta.
          </p>
        </div>
        <div className="services__grid">
          {services.map((s) => (
            <article
              key={s.title}
              className={`service ${s.highlight ? 'service--highlight' : ''}`}
            >
              {s.tag && <span className="service__tag">{s.tag}</span>}
              <div className="service__icon">{s.icon}</div>
              <h3 className="service__title">{s.title}</h3>
              <div className="service__price">
                <span className="service__price-num">{s.price}</span>
                <span className="service__price-unit">/ {s.unit}</span>
              </div>
              <p className="service__desc">{s.desc}</p>
              <ul className="service__features">
                {s.features.map((f) => (
                  <li key={f}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className={`btn ${s.highlight ? 'btn--primary' : 'btn--ghost'} service__cta`}>
                Vali see pakett
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
