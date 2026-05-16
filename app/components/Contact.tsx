export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl px-4 py-20 mx-auto text-center">
      <h2 className="mb-6 text-3xl font-bold">Contact Me</h2>
      <p className="mb-6">you can contact me freely.</p>
      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <a href="https://wa.me/03259024536" className="px-6 py-3 text-white transition bg-green-500 rounded-lg hover:bg-green-600">WhatsApp</a>
        <a href="mailto:ihsandanish096@gmail.com" className="px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">Email</a>
        <a href="tel:03259024536" className="flex flex-col items-center gap-1 px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 sm:flex-row">
          <span className="font-medium">Call me</span>
          <span>03259024536</span>
        </a>
      </div>
    </section>
  )
}
