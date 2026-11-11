import { ExternalLink, Award } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import certificationsData from '../../../content/certifications.json'

export default function Certifications() {
  const visible = certificationsData.filter((c) => !c.hidden)
  const ref = useScrollReveal()

  return (
    <section id="certifications" className="py-20 lg:py-28" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader eyebrow="Credentials" title="Certifications" />
        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visible.map((cert) => (
            <article
              key={cert.id}
              className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 flex flex-col hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/5"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-4 flex-shrink-0">
                <Award size={20} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-1">{cert.title}</h3>
              <p className="text-xs text-[var(--text-muted)] mb-1">{cert.issuer} · {cert.date}</p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                {cert.description}
              </p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded mt-auto"
              >
                View certificate <ExternalLink size={12} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
