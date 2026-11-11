import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import skillsData from '../../../content/skills.json'
import rolesData from '../../../content/roles.json'
import { primaryRole } from '../../config'

export default function Skills() {
  const role = rolesData[primaryRole] || rolesData['sql-developer']
  const { skillCategoryOrder } = role

  const orderedCategories = [
    ...skillCategoryOrder
      .map((id) => skillsData.categories.find((c) => c.id === id))
      .filter(Boolean),
    ...skillsData.categories.filter((c) => !skillCategoryOrder.includes(c.id)),
  ]

  const ref = useScrollReveal()

  return (
    <section id="skills" className="py-20 lg:py-28" style={{ background: 'var(--bg-subtle)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="What I work with"
          title="Skills"
          subtitle="Grouped by area. Skills in the Learning category are actively being studied."
        />
        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orderedCategories.map((cat) => {
            const visible = cat.skills.filter((s) => !s.hidden)
            if (!visible.length) return null
            const isLearning = cat.id === 'learning'
            return (
              <div
                key={cat.id}
                className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)]/50 transition-colors"
              >
                <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-3 flex items-center gap-2">
                  {cat.label}
                  {isLearning && (
                    <span className="text-[8px] font-bold bg-[var(--warning)]/20 text-[var(--warning)] border border-[var(--warning)]/30 rounded-full px-2 py-0.5 uppercase tracking-widest">
                      In progress
                    </span>
                  )}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {visible.map((skill) => (
                    <Badge key={skill.name} variant={isLearning ? 'warning' : 'default'}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
