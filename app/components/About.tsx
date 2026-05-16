export default function About() {
  return (
    <section id="about" className="max-w-5xl px-4 py-20 mx-auto ">
      <h2 className="mb-6 text-3xl font-bold">About Me</h2>
      <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="w-full max-w-sm rounded-3xl aspect-[4/3] overflow-hidden md:flex-shrink-0">
          {"paste you image hare"}
        </div>
        <div className="w-full">
          <p className="mb-4 text-lg">
            I am a dedicated Full-Stack Developer who helps businesses and individuals turn ideas into fast, modern, and user-friendly web applications. I specialize in building clean, scalable, and responsive websites using modern technologies like JavaScript, Next.js, Tailwind CSS, and backend solutions that ensure performance and security.
            <br /> I don’t just write code — I focus on understanding client requirements, solving real problems, and delivering results that add real value. With strong communication skills and experience working in multiple languages, I make collaboration smooth and stress-free for my clients. My goal is simple: deliver high-quality work, on time, with complete client satisfaction.
          </p>
        </div>
      </div>
    </section>
  )
}
