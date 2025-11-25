const withWebsite = [
  'Brand story available 24/7 with clear calls-to-action.',
  'Organic search visibility compounds month over month.',
  'Data-backed insights reveal what visitors need.',
  'Automations capture leads even while you sleep.',
]

const withoutWebsite = [
  'Referrals stall because there is nowhere to validate the offer.',
  'Paid ads leak money with no trusted landing space.',
  'Updates rely on manual conversations and PDFs.',
  'Competitors appear more credible and get the first call.',
]

const sectionClass =
  'rounded-[32px] border border-white/10 bg-slate-900/60 p-8 shadow-[0_20px_120px_rgba(2,6,23,0.55)] backdrop-blur'

function Comparison() {
  return (
    <section id="comparison" className={`${sectionClass} space-y-8 scroll-mt-32`}>
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-amber-300">
          With vs. without a website
        </p>
        <h2 className="text-3xl font-semibold leading-tight">
          Visibility online decides whether customers discover you or scroll past you.
        </h2>
        <p className="text-white/70">
          We show founders what changes when their business owns a deliberate digital presence - and what it costs when
          they don't.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-cyan-500/10 p-6">
          <span aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
          <h3 className="relative text-xl font-semibold text-cyan-100">
            Business with a Digi Nest website
          </h3>
          <ul className="relative mt-4 space-y-3 text-white/80">
            {withWebsite.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-red-500/5 p-6">
          <span aria-hidden className="bg-dots pointer-events-none absolute inset-0 opacity-30" />
          <h3 className="relative text-xl font-semibold text-white">
            Business without a website
          </h3>
          <ul className="relative mt-4 space-y-3 text-white/80">
            {withoutWebsite.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Comparison

