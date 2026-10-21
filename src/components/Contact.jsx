import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Nimi: ${form.name}\nE-post: ${form.email}\nTeenus: ${form.service}\n\n${form.message}`,
    )
    window.location.href = `mailto:pajarauno1@gmail.com?subject=${encodeURIComponent('Päring kodulehelt — ' + form.name)}&body=${body}`
    setSent(true)
  }

  return (
    <section id="kontakt" className="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="eyebrow">Võta ühendust</span>
          <h2 className="section__title">
            Esimene samm on <span className="accent">kõige lihtsam</span>.
          </h2>
          <p className="section__lead">
            Kirjuta või helista — lepime kokku 20-minutilise tasuta vestluse,
            kus arutame sinu eesmärke ja ma selgitan, kuidas edasi liikuda.
          </p>

          <div className="contact__cards">
            <a href="tel:+37253480590" className="contact__card">
              <div className="contact__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.9 9.8a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
                </svg>
              </div>
              <div>
                <span>Helista</span>
                <strong>+372 5348 0590</strong>
              </div>
            </a>
            <a href="mailto:pajarauno1@gmail.com" className="contact__card">
              <div className="contact__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </div>
              <div>
                <span>Kirjuta</span>
                <strong>pajarauno1@gmail.com</strong>
              </div>
            </a>
            <a href="https://www.instagram.com/rauno_paja" target="_blank" rel="noreferrer" className="contact__card">
              <div className="contact__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span>Jälgi</span>
                <strong>@rauno_paja</strong>
              </div>
            </a>
            <div className="contact__card contact__card--static">
              <div className="contact__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <span>Asukoht</span>
                <strong>Tallinna tn 65, Kuressaare</strong>
              </div>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={submit}>
          <h3>Saada päring</h3>
          <label>
            Nimi
            <input type="text" required value={form.name} onChange={update('name')} placeholder="Sinu nimi" />
          </label>
          <label>
            E-post
            <input type="email" required value={form.email} onChange={update('email')} placeholder="sinu@email.ee" />
          </label>
          <label>
            Mis sind huvitab?
            <select value={form.service} onChange={update('service')}>
              <option value="">Vali teenus</option>
              <option>Treeningkava</option>
              <option>Toitumisnõustamine</option>
              <option>Veebinõustamine</option>
              <option>Personaaltreening</option>
              <option>Treeningpakett</option>
              <option>Tasuta konsultatsioon</option>
            </select>
          </label>
          <label>
            Sõnum
            <textarea rows="4" value={form.message} onChange={update('message')} placeholder="Räägi lühidalt oma eesmärkidest..."></textarea>
          </label>
          <button type="submit" className="btn btn--primary btn--full">
            Saada päring
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
          {sent && <p className="contact__ok">Avan sinu e-posti kliendi — kinnita saatmine sealt.</p>}
          <p className="contact__fine">Vastan hiljemalt 24 tunni jooksul.</p>
        </form>
      </div>
    </section>
  )
}
