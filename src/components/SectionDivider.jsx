function SectionDivider() {
  return (
    <div className="container-shell py-16 sm:py-20">
      <div className="relative flex items-center justify-center">
        <div className="section-divider-line h-px w-full max-w-4xl" />
        <span className="section-divider-dot absolute h-2.5 w-2.5 rounded-full bg-gold" />
      </div>
    </div>
  )
}

export default SectionDivider
