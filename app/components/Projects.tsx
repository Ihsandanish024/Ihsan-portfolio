import { HiExternalLink, HiFolderOpen } from 'react-icons/hi';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio and Blogging website',
      desc: 'A full stack system to share your introduction and blogs in one website.',
      tech: 'Next.js, Tailwind, Node.js, MongoDB, Vercel',
      demo: 'https://sheikh-ubaid-web.vercel.app/',
    },
    {
      title: 'Portfolio Website',
      desc: 'Professional developer portfolio built with Next.js and Tailwind.',
      tech: 'Next.js, Tailwind',
      demo: 'https://sheikh-ubaid-web.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-36 mb-24 bg-white">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="inline-flex items-center justify-center gap-3 mb-12 text-3xl font-bold text-center text-slate-900">
          <HiFolderOpen className="w-6 h-6 text-blue-600" />
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="p-8 transition-shadow border bg-slate-50 border-slate-200 rounded-3xl hover:shadow-xl">
              <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-slate-900">
                <HiFolderOpen className="w-5 h-5 text-blue-600" />
                {project.title}
              </h3>
              <p className="mb-3 text-slate-700">{project.desc}</p>
              <p className="mb-5 font-mono text-sm text-slate-500">{project.tech}</p>
              <div>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700">
                  Live Demo
                  <HiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
