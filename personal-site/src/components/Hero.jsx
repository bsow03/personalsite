import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import headshot from '../assets/headshot.JPG'

export default function Hero() {
  return (
    <section className="flex items-center justify-between px-16 py-20 mx-auto min-h-[calc(100vh-88px)] w-full bg-(--bg-dark-translucent)">

      {/* Left — text content */}
      <div className="flex-1 max-w-xl">

        <p className="text-primary/70 text-xs tracking-[0.15em] lowercase mb-6">
          .hey there
        </p>

        <h1 className="font-syne font-extrabold text-5xl leading-[1.08] text-white tracking-tight mb-5">
          hi 👋🏽, i&apos;m <span className="text-primary">telly.</span>
          <br />
          welcome to my page
        </h1>

        <p className="text-white/40 text-sm font-light mb-10 leading-relaxed">
          i build things for the web.
          <br />
          currently based in syracuse, ny.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 mb-7">
          <a
            href="#projects"
            className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            view my work
          </a>
          <a
            href="#about"
            className="text-white/60 text-sm font-light px-5 py-2.5 rounded-lg border border-white/10 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            about me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/bsow03"
            target="_blank"
            rel="noreferrer"
            className="text-white/30 hover:text-white/70 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/bsow03"
            target="_blank"
            rel="noreferrer"
            className="text-white/30 hover:text-white/70 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:bsow03@syr.edu"
            className="text-white/30 hover:text-white/70 transition-colors duration-200"
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </div>

      </div>

      {/* Right — headshot */}
      <div className="shrink-0">
        <div className="w-100 h-100 rounded-2xl bg-(--bg-card) border border-white/5 flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl ring-primary ring-2" />
          {<img src={headshot} alt="Telly Sow" className="w-full h-full object-cover" />}
        </div>
      </div>

    </section>
  )
}