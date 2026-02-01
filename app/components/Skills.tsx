export default function Skills() {
  const frontend = ["Next.js", "React", "Tailwind CSS"];
  const backend = ["Node.js", "Express", "MongoDB / PostgreSQL"];
  const tools = ["Git", "Vercel", "VS Code"];

  return (
    <section id="skills" className="px-4 py-20 bg-gray-50">
      <h2 className="mb-12 text-3xl font-bold text-center">Skills</h2>
      <div className="grid max-w-4xl gap-8 mx-auto text-center md:grid-cols-3">
        <div>
          <h3 className="mb-4 font-semibold">Frontend</h3>
          <ul className="space-y-2">{frontend.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Backend</h3>
          <ul className="space-y-2">{backend.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Tools</h3>
          <ul className="space-y-2">{tools.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
