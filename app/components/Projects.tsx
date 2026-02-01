export default function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      desc: "A full-stack system for tracking products, billing, and stock control.",
      tech: "Next.js, Tailwind, Node.js, MongoDB",
      demo: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      desc: "Professional developer portfolio built with Next.js and Tailwind.",
      tech: "Next.js, Tailwind",
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="max-w-6xl px-4 py-20 mx-auto">
      <h2 className="mb-12 text-3xl font-bold text-center">Projects</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map(p => (
          <div key={p.title} className="p-6 transition border rounded-lg hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
            <p className="mb-2">{p.desc}</p>
            <p className="mb-4 font-mono text-sm">{p.tech}</p>
            <div className="flex space-x-4">
              <a href={p.demo} className="text-blue-600 hover:underline">Live Demo</a>
              <a href={p.github} className="text-blue-600 hover:underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
