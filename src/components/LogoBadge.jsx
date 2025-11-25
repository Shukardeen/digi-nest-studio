

const baseClass =
  'inline-flex items-center gap-3 rounded-full border border-white/15 bg-slate-900/80 px-4 py-2 shadow-2xl backdrop-blur'

function LogoBadge({ variant = 'default' }) {
  return (
    <div className={`${baseClass} ${variant === 'floating' ? 'md:-translate-y-3' : ''}`}>
      <img
        src="/diginest-logo.jpg"
        alt="Digi Nest Studio logo"
        className="h-12 w-12 rounded-full border border-white/20 object-cover"
      />
      <div className="leading-tight">
        <p className="font-semibold tracking-tight">Digi Nest Studio</p>
        <small className="text-sm text-white/70">Web Development Agency</small>
      </div>
    </div>
  )
}

export default LogoBadge

