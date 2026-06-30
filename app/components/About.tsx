import Image from 'next/image';
import { HiBadgeCheck, HiLightBulb, HiUserCircle } from 'react-icons/hi';
import profilePic from '../../images/my portfolio picture.png';

const highlights = [
  {
    icon: HiLightBulb,
    title: 'Problem Solver',
    description: 'Building solutions that deliver real user and business value.',
  },
  {
    icon: HiBadgeCheck,
    title: 'Quality Code',
    description: 'Readable, maintainable, and production-ready architecture.',
  },
  {
    icon: HiUserCircle,
    title: 'Client Focused',
    description: 'Clear communication and smooth collaboration every step of the way.',
  },
];

export default function About() {
  return (
    <section id="about" className="mb-24 bg-white py-36">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="flex items-center gap-3 mb-8 text-4xl font-extrabold tracking-tight text-slate-900">
          <HiUserCircle className="w-8 h-8 text-blue-600" />
          About Me
        </h2>
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-start">
          <div className="relative w-full max-w-md h-150 overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm md:w-1/2 md:flex-shrink-0">
            <Image
              src={profilePic}
              alt="Profile picture"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mb-8 text-lg leading-8 text-slate-700">
              I am a dedicated Full-Stack Developer who helps businesses and individuals turn ideas into fast, modern, and user-friendly web applications. I specialize in building clean, scalable, and responsive websites using modern technologies like JavaScript, Next.js, Tailwind CSS, and backend solutions that ensure performance and security.
              <br /> I don’t just write code — I focus on understanding client requirements, solving real problems, and delivering results that add real value. With strong communication skills and experience working in multiple languages, I make collaboration smooth and stress-free for my clients. My goal is simple: deliver high-quality work, on time, with complete client satisfaction.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div key={highlight.title} className="p-5 border shadow-sm bg-slate-50 border-slate-200 rounded-3xl">
                    <div className="flex items-center gap-3 mb-3 text-blue-600">
                      <Icon className="w-6 h-6" />
                      <h3 className="font-semibold text-slate-900">{highlight.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{highlight.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
