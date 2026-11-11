export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default:
      'bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border)]',
    accent:
      'bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]',
    success:
      'bg-green-900/20 text-[var(--success)] border border-[var(--success)]/30',
    warning:
      'bg-yellow-900/20 text-[var(--warning)] border border-[var(--warning)]/30',
    tech:
      'bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
