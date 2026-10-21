# Rauno Paja — Personaaltreener

React + Vite redesign for rpperformance.ee.

## Käivita

```bash
npm install
npm run dev
```

Avaneb `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Struktuur

- `src/App.jsx` — leht kokku
- `src/components/` — Navbar, Hero, Stats, About, Services, Process, Testimonials, Gallery, FAQ, Contact, Footer
- `src/index.css` — disainisüsteem (dark theme, lime aktsent)

## Sisu

Teenused ja kontaktandmed pärit avaliku lehe sisust. Tekstid ja disain uuesti kirjutatud.
Pildid: CSS gradient-kompositsioonid. Asenda `.hero__photo-inner`, `.about__photo`, `.gallery__photo` oma piltidega (lisa `/public/images/` kausta ja viita CSS-is `background-image: url(...)`).
