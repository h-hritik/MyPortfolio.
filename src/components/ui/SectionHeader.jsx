export default function SectionHeader({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {eyebrow && (
        <p className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">{title}</h2>
      <div className="h-1 w-16 bg-[var(--accent)] mx-auto rounded-full mb-4" />
      {subtitle && (
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
