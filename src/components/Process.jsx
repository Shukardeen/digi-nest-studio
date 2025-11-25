const steps = [
  {
    title: 'Discover',
    detail:
      'We unpack business goals, customer journeys, and the metrics that matter most.',
    duration: 'Week 1',
  },
  {
    title: 'Design',
    detail:
      'Low-fidelity flows evolve into polished UI systems with reusable components.',
    duration: 'Weeks 2-3',
  },
  {
    title: 'Build',
    detail:
      'We develop the site in React, integrate CMS options, and wire up analytics.',
    duration: 'Weeks 4-5',
  },
  {
    title: 'Launch & support',
    detail:
      'Quality checks, speed optimizations, and growth experiments keep momentum.',
    duration: 'Week 6 & beyond',
  },
]

const wrapperClass =
  'rounded-[32px] border border-white/10 bg-slate-900/60 p-8 shadow-[0_20px_120px_rgba(2,6,23,0.55)] backdrop-blur'

function Process() {
  return (
    <section id="process" className={`${wrapperClass} space-y-8 scroll-mt-32`}>
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-amber-200">How we work</p>
        <h2 className="text-3xl font-semibold leading-tight">
          Transparent, time-boxed sprints that keep everyone aligned.
        </h2>
      </div>
      <ol className="grid gap-4 sm:grid-cols-2">
        {steps.map((step) => (
          <li
            key={step.title}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-900/40 to-slate-900/20 p-6"
          >
            <span
              aria-hidden
              className="bg-texture pointer-events-none absolute inset-0 opacity-30"
            />
            <div className="relative">
              <span className="text-sm font-semibold text-white/70">{step.duration}</span>
              <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-white/70">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Process

