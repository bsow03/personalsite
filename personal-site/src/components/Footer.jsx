/* eslint-disable no-unused-vars */
import {motion} from 'framer-motion'

export default function Footer() {
    return(
      <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-(--bg-dark) border-t border-white/20 px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-6 w-full mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-0">
        <span className="font-syne font-bold text-white/20 text-xs sm:text-sm">telly.sow</span>
        <span className="text-white/60 text-xs font-light text-center">made it this far huh? 🤔</span>
      </motion.footer>
    )
}