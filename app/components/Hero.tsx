import { HiArrowRight, HiSparkles } from 'react-icons/hi';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
      <div className="mb-6 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.25em] text-blue-600">
        <HiSparkles className="w-5 h-5" />
        <span>Full-stack web apps for growth</span>
      </div>
      <h1 className="mb-4 text-4xl font-bold md:text-6xl">I help businesses build full-stack apps</h1>
      <p className="mb-6 text-lg md:text-2xl">Professional Next.js developer | Clean code | Scalable solutions</p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
          Hire Me
          <HiArrowRight className="w-4 h-4 ml-2" />
        </a>
        <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 text-blue-600 transition border border-blue-600 rounded-lg hover:bg-blue-50">
          View Work
          <HiArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </section>
  )
}
