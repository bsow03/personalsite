import Button from './Button.jsx'
import TypeWriter from './TypeWriter.jsx'

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

const linkClass = "text-white/60 px-4 py-2 text-sm font-light transition-all duration-200 hover:text-white hover:scale-105 inline-block"

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-(--bg-dark-translucent) backdrop-blur-sm">

      <div className="flex justify-between items-center px-8 h-14">
        <a href="/" className="hover:scale-105 transition-transform duration-200">
            <span className="font-syne font-bold text-white text-lg tracking-tight">
                telly<span className="text-primary">.</span><span className='hover:text-primary'>sow</span>
            </span>
        </a>

        {/* 
        <button className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/40 hover:text-white/70 transition-colors">
          <span>☀</span>
          <span>light</span>
        </button>
        */}


        <div className="flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className={linkClass}>{label}</a>
          ))}
          <Button text="↓ resume" to="/resume.pdf" download="TellySow_Resume.pdf" />
        </div>
      </div>

      <div className="border-b border-white/60 mx-8 mr-14" />

      <div className="flex justify-end items-center gap-2.5 px-8 py-2 bg-(--bg-darker)">
        <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
        </span>
        <TypeWriter />
      </div>

    </nav>
  )
}
