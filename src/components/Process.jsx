const steps = [
  {
    n: '01',
    title: 'Tasuta vestlus',
    desc: 'Räägime läbi, kus sa täna oled, kuhu tahad jõuda ja mis on senini takistanud. 20 minutit, ei mingit müüki.',
  },
  {
    n: '02',
    title: 'Individuaalne kava',
    desc: 'Teen sulle plaani, mis arvestab sinu ajakava, kogemust ja eesmärki. Treeningud ja toitumine koos.',
  },
  {
    n: '03',
    title: 'Alusta',
    desc: 'Jõusaalis või online — alustame. Esimesed nädalad on tehnikas ja harjumuste ehitamises.',
  },
  {
    n: '04',
    title: 'Kohanda ja kasva',
    desc: 'Iganädalane tagasiside, kuujooksev kohandamine. Kava areneb koos sinuga, mitte sinust mööda.',
  },
]

export default function Process() {
  return (
    <section id="protsess" className="process">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Kuidas me koos töötame</span>
          <h2 className="section__title">
            Nelja sammuga <span className="accent">tulemuseni</span>.
          </h2>
        </div>
        <div className="process__grid">
          {steps.map((s, i) => (
            <div className="process__step" key={s.n}>
              <div className="process__num">{s.n}</div>
              <h3 className="process__title">{s.title}</h3>
              <p className="process__desc">{s.desc}</p>
              {i < steps.length - 1 && <div className="process__arrow" aria-hidden="true">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
