import { useState, useEffect } from 'react'

const SEQUENCES = [
  { full: 'syracuse, ny 🍊', highlight: { word: 'syracuse, ny', color: '#E85D04' } },
  { full: 'new york, ny 🗽', highlight: { word: 'new york, ny', color: '#006BB6' } },
  { full: 'atlanta, ga 🦅', highlight: { word: 'atlanta, ga', color: '#8B5CF6' } },
  { full: 'columbus, oh 🅾️', highlight: { word: 'columbus, oh', color: '#BA0C2F' }}
]

export default function HeroTypeWriter() {
  const [seqIndex, setSeqIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = SEQUENCES[seqIndex].full
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 55)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 25)
    } else {
      setDeleting(false)
      setSeqIndex(i => (i + 1) % SEQUENCES.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, seqIndex])

  const { full, highlight } = SEQUENCES[seqIndex]
  const displayed = full.slice(0, charIndex)

  const renderText = () => {
    if (!highlight) return <span>{displayed}</span>
    const idx = displayed.indexOf(highlight.word)
    if (idx === -1) return <span>{displayed}</span>
    return (
      <>
        <span>{displayed.slice(0, idx)}</span>
        <span style={{ color: highlight.color, fontWeight: 500 }}>
          {displayed.slice(idx, idx + highlight.word.length)}
        </span>
        <span>{displayed.slice(idx + highlight.word.length)}</span>
      </>
    )
  }

  return (
    <span className="text-white/40 text-xs sm:text-sm font-light mb-8 sm:mb-10 leading-relaxed">
       based in {renderText()}
      <span className="opacity-70 animate-pulse">|</span>
    </span>
  )
}