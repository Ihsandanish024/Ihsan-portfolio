import { HiEnvelope, HiPhone, HiChatBubbleLeftRight } from 'react-icons/hi';

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl px-4 py-20 mx-auto text-center">
      <h2 className="mb-6 text-3xl font-bold inline-flex items-center gap-3 justify-center">
        <HiChatBubbleLeftRight className="w-6 h-6 text-blue-600" />
        Contact Me
      </h2>
      <p className="mb-6 text-gray-700">You can contact me freely.</p>
      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <a href="https://wa.me/03259024536" className="inline-flex items-center gap-2 px-6 py-3 text-white transition bg-green-500 rounded-lg hover:bg-green-600">
          <HiChatBubbleLeftRight className="w-5 h-5" />
          WhatsApp
        </a>
        <a href="mailto:ihsandanish096@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
          <HiEnvelope className="w-5 h-5" />
          Email
        </a>
        <a href="tel:03259024536" className="inline-flex items-center gap-2 px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
          <HiPhone className="w-5 h-5" />
          Call me
        </a>
      </div>
    </section>
  )
}
