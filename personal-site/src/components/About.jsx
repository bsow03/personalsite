// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import { TbFileTypeSql } from "react-icons/tb";
import { IoIosGitBranch } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";


export default function About() {
  const experience = [
    {
      role: 'Info Mgmt & Tech (B.S.)',
      date: '2021 – Present',
      place: 'Syracuse University — iSchool',
      placeClass: 'text-[#E85D04]',
    },
    {
      role: 'yumeworks',
      date: '2025 – Present',
      place: 'Founder & CEO',
      placeClass: 'bg-gradient-to-b from-[#cb6ce6] to-[#ff66c4] bg-clip-text text-transparent',
    },
    {
      role: 'E-Gaming Specialist',
      date: '2025 – Present',
      place: 'City of Syracuse',
      placeClass: 'text-[#3B82F6]',
    },
  ]

  const skills = [
    { icon: <FaReact className="text-white/20 group-hover:text-primary transition-colors duration-300" />, name: 'React', isIcon: true },
    { icon: <IoLogoJavascript className="text-white/20 group-hover:text-primary transition-colors duration-300" />, name: 'JavaScript', isIcon: true },
    { icon: <FaPython className="text-white/20 group-hover:text-primary transition-colors duration-300" />, name: 'JavaScript', isIcon: true },
    { icon: <RiTailwindCssFill className="text-white/20 group-hover:text-primary transition-colors duration-300" />, name: 'Tailwind', isIcon: true },
    { icon: <TbFileTypeSql className="text-white/20 group-hover:text-primary transition-colors duration-300" />, name: 'SQL', isIcon: true },
    { icon: <IoIosGitBranch className="text-white/20 group-hover:text-primary transition-colors duration-300" />, name: 'Git', isIcon: true },
    { icon: <BiLogoTypescript className="text-white/20 group-hover:text-primary transition-colors duration-300" />, name: 'TypeScript', isIcon: true },
    { icon: <FaNode className="text-white/20 group-hover:text-primary transition-colors duration-300" />, name: 'Node.js', isIcon: true },
    { icon: <FaFigma className="text-white/20 group-hover:text-primary transition-colors duration-300" />, name: 'Figma', isIcon: true },
  ]

  return (
    <section id="about" className="bg-(--bg-dark-translucent) px-16 py-20 w-full">

      <span className="text-primary text-xs tracking-[0.12em] lowercase mb-5 block">
        .about
      </span>

      <div className="grid grid-cols-[1.2fr_0.8fr] gap-16 items-start">

        {/* Left — bio + skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-syne font-extrabold text-4xl text-white tracking-tight leading-tight mb-8">
            who i am
          </h2>

          <p className="text-sm text-white/40 font-light leading-loose mb-6">
            My name is{' '}
            <span className="text-white/70">Boubacar Sow</span>, but I go by <span className="text-white/70"> Telly</span>
            . I'm an undergraduate at{' '}
            <span className="text-[#E85D04]/70">Syracuse University</span>{' '}
            studying Information Management & Technology at the <span className="text-[#E85D04]/70"> School of Information Studies</span>
            . My passion lies in using technical expertise to solve real-world problems —
            from building web apps to creating tools that actually help people.
          </p>

          <div className="flex gap-3 mb-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-primary border border-primary/20 px-4 py-2 rounded-md hover:bg-primary/10 transition-colors duration-200"
            >
              here's what I've done →
            </a>
            <a
              href="#projects"
              className="text-xs text-primary border border-primary/20 px-4 py-2 rounded-md hover:bg-primary/10 transition-colors duration-200"
            >
              what I'm building →
            </a>
          </div>
        </motion.div>

        {/* Right — experience */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xs text-white/25 tracking-widest uppercase mb-4">Experience</p>
          <div>
            {experience.map(({ role, date, place, placeClass }) => (
              <div key={role} className="py-4 border-b border-white/4 last:border-none">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <span className="text-sm text-white/70 font-normal">{role}</span>
                  <span className="text-[10px] text-white/20 font-light whitespace-nowrap">{date}</span>
                </div>
                <span className={`text-xs font-light ${placeClass}`}>{place}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* skills grid */}
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col justify-center items-center py-4 my-4">
                <p className="text-xs text-white/25 tracking-widest uppercase mb-4">Skills</p>
                <div className="grid grid-cols-3 gap-3 w-full">
                    {skills.map(({ icon, name, isIcon }) => (
                    <div
                        key={name}
                        className="group w-full h-32 bg-[#111113] border border-white/6 rounded-lg py-6 px-4 flex flex-col items-center gap-2 cursor-pointer hover:border-primary/30 hover:bg-[#161618] transition-all duration-200"
                    >
                        <span className={`text-6xl transition-all duration-300 ${!isIcon ? 'grayscale group-hover:grayscale-0' : ''}`}>
                        {icon}
                        </span>
                        <span className="text-xs text-white/25 font-light group-hover:text-white/60 transition-colors duration-200">
                        {name}
                        </span>
                    </div>
                    ))}
                </div>
        </motion.div>
      </section>
  )
}