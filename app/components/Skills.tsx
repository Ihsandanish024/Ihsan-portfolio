import { HiArrowRight, HiDesktopComputer, HiServer, HiSparkles } from 'react-icons/hi';

export default function Skills() {
  const frontend = ['Next.js', 'React', 'Tailwind CSS'];
  const backend = ['Node.js', 'Express', 'MongoDB / PostgreSQL'];
  const tools = ['Git', 'Vercel', 'VS Code'];

  return (
    <section id="skills" className="px-4 py-20 bg-gray-50">
      <h2 className="mb-12 text-3xl font-bold text-center">Skills</h2>
      <div className="grid max-w-4xl gap-8 mx-auto text-center md:grid-cols-3">
        <div className="p-6 bg-white border shadow-sm rounded-3xl">
          <h3 className="inline-flex items-center justify-center gap-2 mb-4 text-lg font-semibold">
            <HiDesktopComputer className="w-5 h-5 text-blue-600" />
            Frontend
          </h3>
          <ul className="space-y-2">
            {frontend.map((skill) => (
              <li key={skill} className="flex items-center justify-center gap-2 text-gray-700">
                <HiArrowRight className="w-4 h-4 text-blue-600" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-white border shadow-sm rounded-3xl">
          <h3 className="inline-flex items-center justify-center gap-2 mb-4 text-lg font-semibold">
            <HiServer className="w-5 h-5 text-blue-600" />
            Backend
          </h3>
          <ul className="space-y-2">
            {backend.map((skill) => (
              <li key={skill} className="flex items-center justify-center gap-2 text-gray-700">
                <HiArrowRight className="w-4 h-4 text-blue-600" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-white border shadow-sm rounded-3xl">
          <h3 className="inline-flex items-center justify-center gap-2 mb-4 text-lg font-semibold">
            <HiSparkles className="w-5 h-5 text-blue-600" />
            Tools
          </h3>
          <ul className="space-y-2">
            {tools.map((skill) => (
              <li key={skill} className="flex items-center justify-center gap-2 text-gray-700">
                <HiArrowRight className="w-4 h-4 text-blue-600" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
