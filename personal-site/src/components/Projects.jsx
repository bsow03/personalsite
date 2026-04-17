// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import img from '../assets/app.png'

const projects = [
  {
    id: 1,
    year: '2025 — ongoing',
    category: 'Web Development',
    title: 'yumeworks',
    description: 'Creative web agency offering design & development services for brands and startups. Built the full site, brand identity, and client pipeline from scratch.',
    tags: ['React', 'Tailwind', 'Vite'],
    link: 'https://yumeworks.co',
    bg: 'from-[#1a1a2e] to-[#16213e]',
    image: img,
  },
  {
    id: 2,
    year: '2025',
    category: 'Branding & E-Commerce',
    title: 'backends apparel',
    description: 'Developer-culture clothing brand built for the builder community. Designed the brand identity and storefront end to end.',
    tags: ['Branding', 'E-Commerce', 'UI/UX'],
    link: '#',
    bg: 'from-[#1a1212] to-[#2d1515]',
    image: null
  },
  {
    id: 3,
    year: '2025',
    category: 'Coming Soon',
    title: 'next project',
    description: 'Something new in the works. Check back soon.',
    tags: ['TBD'],
    link: '#',
    bg: 'from-[#0f1a1a] to-[#0d2020]',
    image: null
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <motion.section id="projects" className="bg-(--bg-dark) px-16 py-20 w-full">

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-primary text-xs tracking-[0.12em] lowercase mb-5 block"
      >
        .projects
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-syne font-extrabold text-4xl text-white tracking-tight leading-tight mb-14"
      >
        what i'm building
      </motion.h2>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target={project.link !== '#' ? '_blank' : undefined}
            rel="noreferrer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group block bg-[#0f0f11] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300 cursor-pointer"
          >
            <div className="grid grid-cols-[1fr_2fr] h-full">

            {/* Thumbnail */}
          <div className={`bg-linear-to-br ${project.bg} min-h-55 flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20" />
            {project.image
              ? <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              : <span className="text-white/10 font-syne font-extrabold text-6xl select-none relative z-10 group-hover:text-white/20 transition-colors duration-500">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
            }
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] text-white/20 tracking-widest uppercase">{project.category}</span>
            </div>
          </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] text-white/30 font-light">{project.year}</span>
                    <span className="text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      ↗
                    </span>
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/40 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-2 mt-6 flex-wrap">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] text-white/30 bg-white/4 border border-white/6 px-3 py-1 rounded-full tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.a>
        ))}
      </div>

    </motion.section>
  )
}