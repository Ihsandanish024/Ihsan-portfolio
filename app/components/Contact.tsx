

import { HiChat ,HiMail,HiPhone} from 'react-icons/hi';
export default function Contact() {
  return (
    <section id="contact" className="py-36 mb-24 bg-white">
      <div className="max-w-4xl px-4 mx-auto text-center">
        <h2 className="inline-flex items-center justify-center gap-3 mb-6 text-3xl font-bold text-slate-900">
          <HiChat className="w-6 h-6 text-blue-600" />
          Contact Me
        </h2>
        <p className="mb-10 text-slate-700">Feel free to reach out for a project inquiry, collaboration, or a quick chat.</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
          <a href="https://wa.me/03259024536" className="inline-flex items-center gap-2 px-6 py-3 text-white transition bg-green-600 rounded-lg hover:bg-green-700">
            <HiChat className="w-5 h-5" />
            WhatsApp
          </a>
          <a href="mailto:ihsandanish096@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
            <HiMail className="w-5 h-5" />
            Email
          </a>
          <a href="tel:03259024536" className="inline-flex items-center gap-2 px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
            <HiPhone className="w-5 h-5" />
            Call me
          </a>
        </div>
      </div>
    </section>
  )
}
