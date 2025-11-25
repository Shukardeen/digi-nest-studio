import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Comparison from './components/Comparison'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Showcase from './components/Showcase'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#03040a] bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.25),transparent_55%),radial-gradient(circle_at_30%_70%,rgba(45,212,191,0.18),transparent_60%)] px-4 pb-10 pt-6 text-slate-100 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <Navigation />
        <main className="flex flex-col gap-8">
          <Hero />
          <Capabilities />
          <Comparison />
          <Benefits />
          <Process />
          <Showcase />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
