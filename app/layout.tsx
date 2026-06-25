import './globals.css';
import { HiUser, HiSparkles, HiBriefcase, HiMail, HiOutlineClipboardList } from 'react-icons/hi';

export const metadata = {
  title: 'Full-Stack Next.js Portfolio',
  description: 'Professional full-stack portfolio built with Next.js & Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
          <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
            <h1 className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <HiOutlineClipboardList className="w-6 h-6 text-blue-600" />
              My Portfolio
            </h1>
            <nav>
              <ul className="flex items-center gap-4 text-sm font-medium text-slate-700">
                <li className="flex items-center gap-1 transition-colors hover:text-blue-600">
                  <HiUser className="w-4 h-4" />
                  <a href="#about">About</a>
                </li>
                <li className="flex items-center gap-1 transition-colors hover:text-blue-600">
                  <HiSparkles className="w-4 h-4" />
                  <a href="#skills">Skills</a>
                </li>
                <li className="flex items-center gap-1 transition-colors hover:text-blue-600">
                  <HiBriefcase className="w-4 h-4" />
                  <a href="#projects">Projects</a>
                </li>
                <li className="flex items-center gap-1 transition-colors hover:text-blue-600">
                  <HiMail className="w-4 h-4" />
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="py-6 mt-10 text-center bg-slate-100 text-slate-700">
          &copy; {new Date().getFullYear()} My Portfolio
        </footer>
      </body>
    </html>
  )
}
