export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`
        bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-6
        ${hover ? 'hover:border-[var(--accent)]/50 hover:shadow-lg hover:shadow-[var(--accent)]/5 transition-all duration-300' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
