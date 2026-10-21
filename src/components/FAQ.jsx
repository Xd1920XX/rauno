import { useState } from 'react'

const faqs = [
  {
    q: 'Ma pole kunagi varem trenni teinud. Kas see on probleem?',
    a: 'Vastupidi — paljud mu klientidest on alustanud nullist. Esimesed nädalad on tehnikas ja harjumuste ehitamises, mitte rasketes raskustes. Alustame sealt, kus sa oled.',
  },
  {
    q: 'Kui kiiresti ma tulemusi näen?',
    a: 'Esimesed muutused enesetundes 2–3 nädalaga, nähtavad muutused 6–12 nädalaga sõltuvalt eesmärgist ja järjepidevusest. Ei luba imesid — luban süsteemi, mis töötab.',
  },
  {
    q: 'Kas veebinõustamine töötab sama hästi kui kohapeal?',
    a: 'Kui oled valmis end filmima ja ausalt tagasisidet andma — jah. Paljud veebi klientidest on jõudnud sama kaugele kui kohapealsed. Peamine on järjepidevus.',
  },
  {
    q: 'Mis juhtub, kui ma vahele jään?',
    a: 'Elu juhtub. Kava kohandub. Üks nädal haige voodis või reisil ei nulli progressi — see on sisse ehitatud süsteemi.',
  },
  {
    q: 'Kuidas ma maksan?',
    a: 'Arve e-posti, ülekanne. Veebinõustamine on kuutasuga, ühekordsed teenused ettemaksuga. Lepingu pikkust ega sunniviisil siduvat ei ole.',
  },
  {
    q: 'Kus jõusaal asub?',
    a: 'Kuressaare kesklinnas. Täpne aadress ja ligipääsu üksikasjad saadan pärast esimest kõnet.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq">
      <div className="container faq__inner">
        <div className="faq__head">
          <span className="eyebrow">Korduvad küsimused</span>
          <h2 className="section__title">
            Enne <span className="accent">esimest</span> kõnet.
          </h2>
          <p className="section__lead">
            Kui su küsimust siin ei ole, kirjuta otse — vastan sama päeva jooksul.
          </p>
          <a href="#kontakt" className="btn btn--primary">Kirjuta mulle</a>
        </div>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <div className={`faq__item ${open === i ? 'faq__item--open' : ''}`} key={f.q}>
              <button
                className="faq__question"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="faq__answer"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
