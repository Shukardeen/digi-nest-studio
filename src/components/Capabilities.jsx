const capabilities = [
  {
    title: 'Brand-ready strategy',
    description:
      'Positioning workshops, messaging frameworks, and site architecture that lead visitors toward action.',
    badge: 'Strategy',
  },
  {
    title: 'Experience design',
    description:
      'Component-driven UI inspired by Aceternity that adapts across devices without sacrificing personality.',
    badge: 'Design',
  },
  {
    title: 'Full-stack development',
    description:
      'Modern React builds, CMS integrations, and performance optimizations so updates stay fast and flexible.',
    badge: 'Development',
  },
  {
    title: 'Visibility & care',
    description:
      'Launch roadmaps, analytics dashboards, and optimization sprints to keep momentum after go-live.',
    badge: 'Growth',
  },
]

const shellClass =
  'rounded-[32px] border border-white/10 bg-slate-900/60 p-8 shadow-[0_20px_120px_rgba(2,6,23,0.55)] backdrop-blur'

function Capabilities() {
  return (
    <section id="services" className={`${shellClass} space-y-8 scroll-mt-32`}>
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-sky-300">
          What we build
        </p>
        <h2 className="text-3xl font-semibold leading-tight">Clear, modern web experiences for service-led businesses.</h2>
        <p className="text-white/70">
          From the first sitemap to the final line of code, Digi Nest Studio handles the entire build so you can stay
          focused on running the business.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner"
          >
            <span aria-hidden className="bg-texture pointer-events-none absolute inset-0 opacity-30" />
            <span className="relative inline-flex items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase text-cyan-200">
              {capability.badge}
            </span>
            <h3 className="relative mt-4 text-xl font-semibold">{capability.title}</h3>
            <p className="relative mt-2 text-white/70">{capability.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Capabilities

