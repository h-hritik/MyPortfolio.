import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import learningData from '../../../content/learning.json'
import { features } from '../../config'

function formatMonthYear(str) {
  if (!str) return ''
  const [year, month] = str.split('-')
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return `${months[parseInt(month, 10) - 1]} ${year}`
}

export default function LearningRoadmap() {
  const visible = learningData.filter((item) => !item.hidden)
  const ref = useScrollReveal()

  if (!features.learningRoadmap || visible.length === 0) return null

  return (
    <section id="learning" className="py-20 lg:py-28" style={{ background: 'var(--bg-subtle)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader
          eyebrow="Growth"
          title="Learning Roadmap"
          subtitle="Current focus areas as I move from SQL Developer toward Database Developer, DBA and BI roles."
        />
        <div ref={ref} className="reveal space-y-4">
          {visible.map((item) => {
            const statusVariant =
              item.status === 'Completed' ? 'success' : item.status === 'Learning' ? 'warning' : 'default'
            return (
              <div
                key={item.id}
                className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-[var(--accent)]/40 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[var(--text-primary)] text-sm">{item.topic}</h3>
                    <Badge variant={statusVariant}>{item.status}</Badge>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
                {item.startDate && (
                  <div className="text-xs text-[var(--text-muted)] whitespace-nowrap">
                    Started {formatMonthYear(item.startDate)}
                    {item.completedDate && ` · Done ${formatMonthYear(item.completedDate)}`}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
