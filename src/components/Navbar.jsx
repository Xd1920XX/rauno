import { useEffect, useState } from 'react'

const links = [
  { href: '#avaleht', label: 'Avaleht' },
  { href: '#minust', label: 'Minust' },
  { href: '#teenused', label: 'Teenused' },
  { href: '#protsess', label: 'Protsess' },
  { href: '#galerii', label: 'Galerii' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#avaleht" className="nav__logo" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Rauno Paja" className="nav__logo-img" />
          <span className="nav__logo-text">Rauno Paja</span>
        </a>
        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#kontakt" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
            Broneeri treening
          </a>
        </nav>
        <button
          className="nav__burger"
          aria-label="Menüü"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
