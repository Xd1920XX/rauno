const items = [
  { title: 'Vorm, mis räägib ise', tag: 'Treener' },
  { title: 'Toitumine, mis töötab', tag: 'Toitumine' },
  { title: 'Plaan paberil', tag: 'Nõustamine' },
  { title: 'Treeneri tase', tag: 'Treener' },
  { title: 'Liikuvuse töö', tag: 'Treening' },
  { title: 'Üks-ühele seanss', tag: 'Treening' },
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
