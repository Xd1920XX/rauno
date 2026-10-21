const items = [
  { title: 'Jõusaal · Kuressaare', tag: 'Ruum' },
  { title: 'Jõutõmme tehnika', tag: 'Treening' },
  { title: 'Vabade raskuste tsoon', tag: 'Ruum' },
  { title: 'Kükitehnika seansil', tag: 'Treening' },
  { title: 'Toitumisplaani näide', tag: 'Toitumine' },
  { title: 'Online tagasiside', tag: 'Veeb' },
]

export default function Gallery() {
  return (
    <section id="galerii" className="gallery">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Galerii</span>
          <h2 className="section__title">
            Hetked <span className="accent">tööpäevast</span>.
          </h2>
        </div>
        <div className="gallery__grid">
          {items.map((it, i) => (
            <div className={`gallery__item gallery__item--${i + 1}`} key={it.title}>
              <div className="gallery__photo" aria-hidden="true"></div>
              <div className="gallery__overlay">
                <span className="gallery__tag">{it.tag}</span>
                <strong>{it.title}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
