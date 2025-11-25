const benefits = [
  {
    title: 'Trust at a glance',
    description:
      'Social proof, case studies, and consistent branding reassure buyers faster than phone calls alone.',
  },
  {
    title: 'Search visibility',
    description:
      'Optimized structure and on-page SEO let your site appear when customers are actively looking.',
  },
  {
    title: 'Always-on sales',
    description:
      'Lead capture forms, chat, and downloadable resources keep interest moving toward a booked call.',
  },
  {
    title: 'Actionable analytics',
    description:
      'Dashboards highlight content that converts so we can double down and retire dead weight.',
  },
]

const wrapperClass =
  'rounded-[32px] border border-white/10 bg-slate-900/60 p-8 shadow-[0_20px_120px_rgba(2,6,23,0.55)] backdrop-blur'

function Benefits() {
  return (
    <section id="benefits" className={`${wrapperClass} space-y-8 scroll-mt-32`}>
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-cyan-200">
          Why online visibility matters
        </p>
        <h2 className="text-3xl font-semibold leading-tight">
          Every search, email, and referral points back to your website.
        </h2>
        <p className="text-white/70">
          We craft experiences that speak clearly, look intentional, and guide visitors toward your best next step.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-900/80 via-slate-900/60 to-slate-900/40 p-6"
          >
            <span aria-hidden className="bg-dots pointer-events-none absolute inset-0 opacity-25" />
            <h3 className="relative text-xl font-semibold">{benefit.title}</h3>
            <p className="relative mt-2 text-white/70">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Benefits

