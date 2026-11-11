import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useBlogPosts } from '../../hooks/usePosts'
import { features } from '../../config'

export default function Blog() {
  const { posts, loading } = useBlogPosts()
  const ref = useScrollReveal()

  if (!features.blog || (!loading && posts.length === 0)) return null

  return (
    <section id="blog" className="py-20 lg:py-28" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Notes & writing"
          title="Blog"
          subtitle="Short notes on SQL, databases and my learning journey."
        />
        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 flex flex-col hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={14} className="text-[var(--accent)]" />
                <div className="flex flex-wrap gap-1">
                  {(post.tags || []).slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-[var(--text-primary)] text-sm mb-2 leading-snug">{post.title}</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1 mb-4">{post.summary}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-[var(--text-muted)]">
                  {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
                >
                  Read <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
