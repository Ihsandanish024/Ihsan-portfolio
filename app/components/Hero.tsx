export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
      <h1 className="mb-4 text-4xl font-bold md:text-6xl">I help businesses build full-stack apps</h1>
      <p className="mb-6 text-lg md:text-2xl">Professional Next.js developer | Clean code | Scalable solutions</p>
      <div className="flex space-x-4">
        <a href="#contact" className="px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">Hire Me</a>
        <a href="#projects" className="px-6 py-3 text-blue-600 transition border border-blue-600 rounded-lg hover:bg-blue-50">View Work</a>
      </div>
    </section>
  )
}
