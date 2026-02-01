import './globals.css';

export const metadata = {
  title: 'Full-Stack Next.js Portfolio',
  description: 'Professional full-stack portfolio built with Next.js & Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
            <h1 className="text-xl font-bold">My Portfolio</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#about" className="hover:text-blue-600">About</a></li>
                <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="py-4 mt-10 text-center bg-gray-100">
          &copy; {new Date().getFullYear()} My Portfolio
        </footer>
      </body>
    </html>
  )
}
