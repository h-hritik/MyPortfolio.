import { Calendar } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import experienceData from '../../../content/experience.json'

function formatDate(str) {
  if (!str) return 'Present'
  const [year, month] = str.split('-')
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return `${months[parseInt(month, 10) - 1]} ${year}`
}

export default function Experience() {
  const visible = experienceData.filter((e) => !e.hidden)
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-20 lg:py-28" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader eyebrow="Career" title="Experience" />
        <div ref={ref} className="reveal relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'var(--border)' }}
            aria-hidden="true"
          />

          <ol className="space-y-8">
            {visible.map((job) => (
              <li key={job.id} className="relative sm:pl-14">
                <span
                  className="absolute left-3.5 top-5 w-3 h-3 rounded-full border-2 hidden sm:block"
                  style={{
                    background: job.isCurrent ? 'var(--accent)' : 'var(--bg-subtle)',
                    borderColor: job.isCurrent ? 'var(--accent)' : 'var(--border)',
                  }}
                  aria-hidden="true"
                />

                <article
                  className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)]/40 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      {job.isCurrent && (
                        <Badge variant="accent" className="mb-2">Current</Badge>
                      )}
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">{job.role}</h3>
                      <p className="text-[var(--accent)] font-medium text-sm mt-0.5">{job.company}</p>
                      {job.companyNote && (
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">{job.companyNote}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] bg-[var(--bg-subtle)] border border-[var(--border)] rounded-lg px-3 py-1.5 whitespace-nowrap">
                      <Calendar size={12} />
                      <span>{formatDate(job.startDate)} – {formatDate(job.endDate)}</span>
                      <Badge variant="default" className="ml-1 text-[10px]">{job.type}</Badge>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--accent)' }}
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
