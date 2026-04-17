/* eslint-disable no-unused-vars */
import {motion} from 'framer-motion'

export default function Footer() {
    return(
      <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-(--bg-dark) border-t border-white/20 px-16 py-6 w-full mx-auto flex justify-between items-center">
        <span className="font-syne font-bold text-white/20 text-sm">telly.sow</span>
        <span className="text-white/60 text-xs font-light">made it this far huh? 🤔</span>
      </motion.footer>
    )
}