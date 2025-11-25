import { useState } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Comparison', href: '#comparison' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <header className="sticky top-3 z-20 rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-sm shadow-[0_20px_60px_rgba(2,6,23,0.6)] backdrop-blur md:flex md:items-center md:gap-6 md:px-6">
      <div className="flex w-full items-center justify-between gap-3 md:w-auto md:flex-none">
        <a className="flex items-center gap-3" href="#hero">
          <span className="h-12 w-12 overflow-hidden rounded-2xl border border-white/20 bg-black/40 p-0.5">
            <img src="/diginest-logo.jpg" alt="Digi Nest Studio logo" className="h-full w-full rounded-[0.85rem] object-cover" />
          </span>
          <div className="leading-tight">
            <p className="text-base font-semibold tracking-tight">Digi Nest Studio</p>
            <small className="text-xs uppercase tracking-[0.2em] text-white/60">Web development studio</small>
          </div>
        </a>
        <button
          type="button"
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/15 text-white transition hover:border-white/30 md:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span className="sr-only">Toggle menu</span>
          <span className={`block h-0.5 w-6 bg-white transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>
      <div
        id="primary-navigation"
        className={`${isOpen ? 'mt-3 flex flex-col gap-3' : 'hidden'} text-white/80 md:mt-0 md:flex md:flex-1 md:flex-row md:items-center md:justify-between md:gap-4`}
      >
        <nav className="flex flex-col gap-2 md:flex-1 md:flex-row md:items-center md:justify-center md:gap-3">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-3 py-2 text-center transition hover:border-white/20 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-sky-400 via-cyan-300 to-amber-300 px-4 py-2 font-semibold text-slate-900 shadow-lg transition hover:opacity-95"
          href="mailto:hello@diginest.studio"
        >
          Book a strategy call
        </a>
      </div>
    </header>
  )
}

export default Navigation

