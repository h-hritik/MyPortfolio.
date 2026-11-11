import { GraduationCap } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import educationData from '../../../content/education.json'

export default function Education() {
  const visible = educationData.filter((e) => !e.hidden)
  const ref = useScrollReveal()

  return (
    <section id="education" className="py-20 lg:py-28" style={{ background: 'var(--bg-subtle)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader eyebrow="Academic background" title="Education" />
        <div ref={ref} className="reveal space-y-5">
          {visible.map((edu) => (
            <article
              key={edu.id}
              className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-6 flex gap-4 hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <GraduationCap size={20} className="text-[var(--accent)]" />
              </div>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-[var(--text-primary)]">{edu.degree}</h3>
                  <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-sm text-[var(--accent)] font-medium mb-0.5">{edu.institution}</p>
                {edu.college && <p className="text-xs text-[var(--text-muted)] mb-2">{edu.college}</p>}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{edu.description}</p>
                {edu.grade && (
                  <p className="text-xs text-[var(--text-muted)] mt-2 font-medium">Result: {edu.grade}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
