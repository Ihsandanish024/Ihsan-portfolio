import { HiCheckCircle, HiSparkles } from 'react-icons/hi';

export default function WhyChooseMe() {
  const reasons = [
    'Fast & reliable delivery',
    'Clean, readable code',
    'Responsive & modern UI',
    'Great communication & support',
  ];

  return (
    <section id="why" className="px-4 py-20 bg-gray-50">
      <h2 className="mb-12 text-3xl font-bold text-center inline-flex items-center gap-3">
        <HiSparkles className="w-6 h-6 text-blue-600" />
        Why Choose Me
      </h2>
      <ul className="max-w-xl mx-auto space-y-4">
        {reasons.map((reason) => (
          <li key={reason} className="flex items-start gap-3 text-gray-700">
            <HiCheckCircle className="mt-1 w-5 h-5 text-blue-600" />
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
