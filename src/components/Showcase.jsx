const results = [
  {
    stat: '3x',
    label: 'increase in qualified leads after launch',
  },
  {
    stat: '2.4s',
    label: 'average page load on mobile',
  },
  {
    stat: '92%',
    label: 'of users complete key actions on first visit',
  },
]

const shellClass =
  'rounded-[32px] border border-white/10 bg-slate-900/60 p-8 shadow-[0_20px_120px_rgba(2,6,23,0.55)] backdrop-blur'

function Showcase() {
  return (
    <section id="results" className={`${shellClass} space-y-6 scroll-mt-32`}>
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
          Proof in the performance
        </p>
        <h2 className="text-3xl font-semibold leading-tight">
          We combine design, tech, and narrative to produce measurable wins.
        </h2>
      </div>
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
        <span aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-white/80">
            <p>
              Each project ends with a delivery kit - component library, content guidelines, and performance dashboard -
              so your team knows how to keep things sharp.
            </p>
            <p>
              Whether you need to validate a new offer or refresh a legacy brand, Digi Nest Studio structures the build
              so you can adapt quickly.
            </p>
          </div>
          <ul className="grid gap-4">
            {results.map((result) => (
              <li
                key={result.stat}
                className="rounded-2xl border border-white/15 bg-slate-950/50 px-5 py-4 text-white"
              >
                <span className="text-3xl font-semibold">{result.stat}</span>
                <p className="text-sm text-white/70">{result.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Showcase

