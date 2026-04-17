export default function Button({ text, type = "cta", to, onClick, download }) {
  const typeClass = type === "secondary"
    ? "bg-transparent ring ring-[#E978FF] text-[#E978FF] hover:bg-[#E978FF] hover:text-white hover:ring-white hover:ring-offset-1"
    : "text-white/60 px-4 py-2 text-sm font-light transition-all duration-200 hover:text-[#8B5CF6] hover:scale-105 inline-block"

  const classes = `px-6 py-2 mx-1 rounded-lg font-semibold transition-colors duration-200 ${typeClass}`

  if (to) {
    return (
      <a href={to} className={classes} onClick={onClick} download={download ?? undefined}>
        {text}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  )
}