export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl px-4 py-20 mx-auto text-center">
      <h2 className="mb-6 text-3xl font-bold">Contact Me</h2>
      <p className="mb-6">Reach me via WhatsApp or Email for your next project.</p>
      <div className="flex justify-center space-x-4">
        <a href="https://wa.me/03259024536" className="px-6 py-3 text-white transition bg-green-500 rounded-lg hover:bg-green-600">WhatsApp</a>
        <a href="ihsandanish096@gmail.com" className="px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">Email</a>
      </div>
    </section>
  )
}
