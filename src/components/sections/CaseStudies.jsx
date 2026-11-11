import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useCaseStudies } from '../../hooks/usePosts'
import { features } from '../../config'

export default function CaseStudies() {
  const { posts, loading } = useCaseStudies()
  const ref = useScrollReveal()

  if (!features.caseStudies || (!loading && posts.length === 0)) return null

  return (
    <section id="case-studies" className="py-20 lg:py-28" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="SQL deep dives"
          title="Case Studies"
          subtitle="Real problems, anonymised data. Each study shows the problem, approach, sample SQL and what I learned."
        />
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <FlaskConical size={16} className="text-[var(--accent)]" />
                <div className="flex flex-wrap gap-1.5">
                  {(post.tags || []).map((tag) => (
                    <Badge key={tag} variant="accent">{tag}</Badge>
                  ))}
                </div>
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">{post.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{post.summary}</p>
              <Link
                to={`/case-studies/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
              >
                Read case study <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
