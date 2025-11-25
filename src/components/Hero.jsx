import LogoBadge from './LogoBadge'

const metrics = [
  { label: 'Launch timelines', value: '4-6 weeks' },
  { label: 'Web experiences delivered', value: '120+' },
  { label: 'Avg. conversion lift', value: '38%' },
]

const panelClass =
  'relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_120px_rgba(2,6,23,0.65)] backdrop-blur'

function Hero() {
  return (
    <section id="hero" className="w-full scroll-mt-32">
      <div className={`${panelClass} space-y-6`}>
        <span aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-sky-300">
          Purpose-Build websites for ambitious brands
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
          Give your business a digital home that feels crafted, strategic, and measurable.
        </h1>
        <p className="text-lg text-white/70">
          Digi Nest Studio designs and builds websites that communicate why your brand matters, so
          customers can find you, trust you, and contact you without friction.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-sky-400 via-cyan-300 to-amber-200 px-5 py-3 font-semibold text-slate-950 shadow-lg transition hover:opacity-95"
            href="#contact"
          >
            Start a project
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-white/40"
            href="#services"
          >
            Explore services
          </a>
        </div>
        <ul className="grid gap-4 text-left sm:grid-cols-3">
          {metrics.map((item) => (
            <li
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"
            >
              <span className="block text-2xl font-semibold text-white">{item.value}</span>
              <p className="text-sm">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero

