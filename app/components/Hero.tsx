import { HiArrowRight, HiSparkles } from 'react-icons/hi';

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 py-32 text-center bg-slate-950">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.25em] text-sky-300">
          <HiSparkles className="w-5 h-5" />
          <span>Full-stack web apps for growth</span>
        </div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">I help businesses build full-stack apps</h1>
        <p className="mb-10 text-lg leading-8 text-slate-300 md:text-2xl">Professional Next.js developer | Clean code | Scalable solutions</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-500">
            Hire Me
            <HiArrowRight className="w-4 h-4 ml-2" />
          </a>
          <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 text-slate-950 transition bg-white rounded-lg hover:bg-slate-100">
            View Work
            <HiArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
