const stats = [
  { num: '12+', label: 'aastat treenerina' },
  { num: '400+', label: 'kliente nõustatud' },
  { num: '98%', label: 'soovitavad edasi' },
  { num: '7', label: 'päeva nädalas tugi' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat__num">{s.num}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
