import { HiArrowRight, HiDesktopComputer, HiServer, HiSparkles } from 'react-icons/hi';

export default function Skills() {
  const frontend = ['Next.js', 'React', 'Tailwind CSS'];
  const backend = ['Node.js', 'Express', 'MongoDB / PostgreSQL'];
  const tools = ['Git', 'Vercel', 'VS Code'];

  return (
    <section id="skills" className="bg-slate-50 py-36 mb-24">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-slate-900">Skills</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="inline-flex items-center justify-center gap-2 mb-4 text-lg font-semibold text-slate-900">
              <HiDesktopComputer className="w-5 h-5 text-blue-600" />
              Frontend
            </h3>
            <ul className="space-y-3">
              {frontend.map((skill) => (
                <li key={skill} className="flex items-center justify-center gap-2 text-slate-700">
                  <HiArrowRight className="w-4 h-4 text-blue-600" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="inline-flex items-center justify-center gap-2 mb-4 text-lg font-semibold text-slate-900">
              <HiServer className="w-5 h-5 text-blue-600" />
              Backend
            </h3>
            <ul className="space-y-3">
              {backend.map((skill) => (
                <li key={skill} className="flex items-center justify-center gap-2 text-slate-700">
                  <HiArrowRight className="w-4 h-4 text-blue-600" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="inline-flex items-center justify-center gap-2 mb-4 text-lg font-semibold text-slate-900">
              <HiSparkles className="w-5 h-5 text-blue-600" />
              Tools
            </h3>
            <ul className="space-y-3">
              {tools.map((skill) => (
                <li key={skill} className="flex items-center justify-center gap-2 text-slate-700">
                  <HiArrowRight className="w-4 h-4 text-blue-600" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
