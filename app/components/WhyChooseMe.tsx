import { HiCheckCircle, HiSparkles } from 'react-icons/hi';

export default function WhyChooseMe() {
  const reasons = [
    'Fast & reliable delivery',
    'Clean, readable code',
    'Responsive & modern UI',
    'Great communication & support',
  ];

  return (
    <section id="why" className="bg-slate-50 py-24">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-slate-900 inline-flex items-center justify-center gap-3">
          <HiSparkles className="w-6 h-6 text-blue-600" />
          Why Choose Me
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-start gap-4 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <HiCheckCircle className="mt-1 w-6 h-6 text-blue-600" />
              <p className="text-slate-700">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
