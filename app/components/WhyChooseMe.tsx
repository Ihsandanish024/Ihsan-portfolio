export default function WhyChooseMe() {
  const reasons = [
    "Fast & reliable delivery",
    "Clean, readable code",
    "Responsive & modern UI",
    "Great communication & support"
  ];

  return (
    <section id="why" className="px-4 py-20 bg-gray-50">
      <h2 className="mb-12 text-3xl font-bold text-center">Why Choose Me</h2>
      <ul className="max-w-xl mx-auto space-y-4 list-disc list-inside">
        {reasons.map(r => <li key={r}>{r}</li>)}
      </ul>
    </section>
  )
}
