import { useState } from 'react'
import { FileText, Download, ExternalLink, Search, BookOpen } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import notesData from '../../../content/notes.json'

export default function Notes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const ref = useScrollReveal()

  const categories = ['All', ...new Set(notesData.map((n) => n.category))]

  const filteredNotes = notesData.filter((note) => {
    const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section id="notes" className="py-20 lg:py-28" style={{ background: 'var(--bg-subtle)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Knowledge Base"
          title="Interview Prep & Technical Notes"
          subtitle="Curated interview questions, SQL guides, and architectural cheat sheets directly from my personal study notes."
        />

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] w-4 h-4" />
            <input
              type="text"
              placeholder="Search notes, topics or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[var(--accent)] text-white shadow-sm'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notes Grid */}
        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <article
              key={note.id}
              className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-6 flex flex-col justify-between hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)]">
                    <FileText size={20} />
                  </span>
                  <Badge variant="default" className="text-[11px]">
                    {note.fileSize}
                  </Badge>
                </div>

                <Badge variant="accent" className="mb-2 text-[10px]">
                  {note.category}
                </Badge>

                <h3 className="font-bold text-[var(--text-primary)] text-base mb-2">
                  {note.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  {note.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] bg-[var(--bg-subtle)] text-[var(--text-muted)] border border-[var(--border)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-[var(--border)] mt-auto">
                <Button
                  as="a"
                  href={`/notes/${encodeURIComponent(note.fileName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  className="flex-1"
                >
                  <ExternalLink size={13} />
                  View PDF
                </Button>
                <Button
                  as="a"
                  href={`/notes/${encodeURIComponent(note.fileName)}`}
                  download={note.fileName}
                  variant="outline"
                  size="sm"
                >
                  <Download size={13} />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12 text-[var(--text-muted)]">
            <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No notes found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
