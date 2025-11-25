import LogoBadge from './LogoBadge'

const panelClass =
  'relative overflow-hidden rounded-[32px] border border-white/10 bg-linear-to-br from-slate-900/80 via-slate-900/60 to-slate-900/30 p-8 shadow-[0_20px_120px_rgba(2,6,23,0.6)] backdrop-blur'

function CTA() {
  return (
    <section id="contact" className={`${panelClass} space-y-6 scroll-mt-32`}>
      <span aria-hidden className="bg-dots pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">Ready when you are</p>
        <h2 className="text-3xl font-semibold leading-tight">
          Let's map the first version of your next website - and ship it in six weeks.
        </h2>
        <p className="text-white/70">
          Tell us about your goals, timelines, and the audience you serve. We'll respond within one business day with the
          next steps.
        </p>
      </div>
      <div className="relative flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-sky-400 via-cyan-300 to-amber-300 px-5 py-3 font-semibold text-slate-950 shadow-lg transition hover:opacity-95"
            href="mailto:hello@diginest.studio"
          >
            info.digineststudio@gmail.com
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 font-semibold text-white transition hover:border-white/40"
            href="tel:+123456789"
          >
            +91 97286-57016
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA

