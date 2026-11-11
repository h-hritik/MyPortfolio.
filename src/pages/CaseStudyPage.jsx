import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useCaseStudies } from '../hooks/usePosts'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useEffect } from 'react'

SyntaxHighlighter.registerLanguage('sql', sql)

export default function CaseStudyPage() {
  const { slug } = useParams()
  const { posts, loading } = useCaseStudies()

  const post = posts.find((p) => p.slug === slug)

  useEffect(() => {
    if (post) document.title = `${post.title} | Hritik Maurya`
    return () => { document.title = 'Hritik Maurya | MS SQL Developer' }
  }, [post])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--text-muted)]">Loading…</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-[var(--text-secondary)]">Case study not found.</p>
        <Link to="/" className="text-[var(--accent)] hover:underline">Back to home</Link>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-28">
      <Link
        to="/#case-studies"
        className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] mb-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
      >
        <ArrowLeft size={16} /> Back to case studies
      </Link>

      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {(post.tags || []).map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30"
            >
              {t}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">{post.title}</h1>
        <p className="text-[var(--text-secondary)] text-base">{post.summary}</p>
        <p className="text-xs text-[var(--text-muted)] mt-2">
          {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      <div
        className="prose prose-invert max-w-none text-[var(--text-secondary)] leading-relaxed
          [&_h2]:text-[var(--text-primary)] [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
          [&_h3]:text-[var(--text-primary)] [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
          [&_p]:mb-4 [&_ul]:list-disc [&_ul]:ml-5 [&_li]:mb-1
          [&_pre]:bg-[#0D1117] [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:p-4 [&_pre]:my-6
          [&_code]:font-mono [&_code]:text-sm [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--accent)] [&_blockquote]:pl-4 [&_blockquote]:text-[var(--text-muted)] [&_blockquote]:italic"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
