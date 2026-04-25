import { useState } from 'react'
import Button from './Button.jsx'
import TypeWriter from './TypeWriter.jsx'

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

const linkClass = "text-white/60 px-3 md:px-4 py-2 text-xs md:text-sm font-light transition-all duration-200 hover:text-white hover:scale-105 inline-block"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full sticky top-0 z-50 bg-(--bg-dark-translucent) backdrop-blur-sm">

      <div className="flex justify-between items-center px-4 md:px-8 h-14">
        <a href="/" className="hover:scale-105 transition-transform duration-200">
            <span className="font-syne font-bold text-white text-base md:text-lg tracking-tight">
                telly<span className="text-primary">.</span><span className='hover:text-primary'>sow</span>
            </span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Menu"
        >
          <span className={`w-5 h-0.5 bg-white/60 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-white/60 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-white/60 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className={linkClass}>{label}</a>
          ))}
          <Button text="↓ resume" to="/resume.pdf" download="TellySow_Resume.pdf" />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-2 px-4 py-4 bg-(--bg-darker) border-t border-white/10">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="text-white/60 text-sm font-light hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {label}
            </a>
          ))}
          <Button text="↓ resume" to="/resume.pdf" download="TellySow_Resume.pdf" />
        </div>
      )}

      <div className="border-b border-white/60 mx-4 md:mx-8 md:mr-14" />

      <div className="flex justify-end items-center gap-2.5 px-4 md:px-8 py-2 bg-(--bg-darker) overflow-hidden">
        <span className="relative flex size-2 md:size-3 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex size-full rounded-full bg-primary"></span>
        </span>
        <div className="truncate">
          <TypeWriter />
        </div>
      </div>

    </nav>
  )
}
