import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import headshot from '../assets/headshot.JPG'
import HeroTypeWriter from "./HeroTypeWriter";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 mx-auto lg:min-h-[calc(100vh-88px)] w-full bg-(--bg-dark-translucent)">

      {/* Left — text content */}
      <div className="flex-1 w-full lg:max-w-xl order-2 lg:order-1">

        <p className="text-primary/70 text-xs tracking-[0.15em] lowercase mb-4 sm:mb-6">
          .hey there
        </p>

        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.08] text-white tracking-tight mb-4 sm:mb-5">
          hi 👋🏽, i&apos;m <span className="text-primary">telly.</span>
          <br />
          welcome to my page
        </h1>

        <p className="text-white/40 text-xs sm:text-sm font-light mb-8 sm:mb-10 leading-relaxed">
          i build things 👨🏾‍💻.
          <br />
          <HeroTypeWriter />
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-7">
          <a
            href="#projects"
            className="bg-primary text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            view my work
          </a>
          <a
            href="#about"
            className="text-white/60 text-xs sm:text-sm font-light px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-white/10 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            about me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://linkedin.com/in/bsow03"
            target="_blank"
            rel="noreferrer"
            className="text-white/30 hover:text-white/70 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://github.com/bsow03"
            target="_blank"
            rel="noreferrer"
            className="text-white/30 hover:text-white/70 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="mailto:bsow2021@gmail.com"
            className="text-white/30 hover:text-white/70 transition-colors duration-200"
            aria-label="Email"
          >
            <MdEmail size={18} />
          </a>
        </div>

      </div>

      {/* Right — headshot */}
      <div className="shrink-0 w-full sm:w-72 md:w-80 lg:w-100 order-1 lg:order-2">
        <div className="w-full aspect-square rounded-2xl bg-(--bg-card) border border-white/5 flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl ring-primary ring-2" />
          {<img src={headshot} alt="Telly Sow" className="w-full h-full object-cover" />}
        </div>
      </div>

    </section>
  )
}