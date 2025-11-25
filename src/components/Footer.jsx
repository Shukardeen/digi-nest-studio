

function Footer() {
  return (
    <footer className="rounded-4xl border border-white/10 bg-slate-950/70 px-6 py-8 text-center text-white/70">
      <div className="mx-auto flex max-w-sm flex-col items-center gap-3">
        <span className="flex h-14 w-14 overflow-hidden rounded-2xl border border-white/20 bg-black/40 p-0.5">
          <img src="/diginest-logo.jpg" alt="Digi Nest Studio logo" className="h-full w-full rounded-[0.9rem] object-cover" />
        </span>
        <p className="text-lg font-semibold text-white">Digi Nest Studio</p>
        <p>Web development agency crafting online homes for service brands.</p>
        <small>© {new Date().getFullYear()} Digi Nest Studio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer

