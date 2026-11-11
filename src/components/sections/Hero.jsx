import { useState, useRef, useEffect } from 'react'
import { Github, Mail, ChevronDown, Download, ExternalLink } from 'lucide-react'
import Button from '../ui/Button'
import SqlSnippet from '../ui/SqlSnippet'
import profile from '../../data/profile'
import rolesData from '../../../content/roles.json'
import resumesData from '../../../content/resumes.json'
import { primaryRole } from '../../config'

export default function Hero() {
  const role = rolesData[primaryRole] || rolesData['sql-developer']
  const defaultResume = resumesData.find((r) => r.isDefault) || resumesData[0]
  const [resumeOpen, setResumeOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setResumeOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16"
      style={{ background: 'var(--bg-base)' }}
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest mb-4">
              Available for opportunities
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight mb-6">
              {profile.name}
            </h1>
            <p className="text-lg sm:text-xl text-[var(--accent)] font-medium mb-4 leading-relaxed">
              {role.headline}
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8 max-w-lg">
              {role.summary}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="relative" ref={dropdownRef}>
                <Button
                  onClick={() => setResumeOpen((v) => !v)}
                  aria-expanded={resumeOpen}
                  aria-haspopup="listbox"
                >
                  <Download size={16} />
                  Download Resume
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${resumeOpen ? 'rotate-180' : ''}`}
                  />
                </Button>
                {resumeOpen && (
                  <ul
                    role="listbox"
                    aria-label="Resume options"
                    className="absolute top-full left-0 mt-2 w-56 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl shadow-2xl shadow-black/40 overflow-hidden z-50"
                  >
                    {resumesData.map((r) => (
                      <li key={r.role} role="option">
                        <a
                          href={r.file}
                          download
                          onClick={() => setResumeOpen(false)}
                          className="flex items-center justify-between px-4 py-3 text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)] transition-colors min-h-[44px]"
                        >
                          <span>{r.role}</span>
                          <span className="text-xs text-[var(--text-muted)]">{r.updatedDate}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Button
                as="a"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <Github size={16} />
                GitHub
                <ExternalLink size={12} />
              </Button>

              <Button as="a" href="#contact" variant="ghost">
                <Mail size={16} />
                Contact
              </Button>
            </div>

            <p className="text-xs text-[var(--text-muted)]">
              Resume last updated: {defaultResume?.updatedDate}
            </p>
          </div>

          <div className="hidden lg:block">
            <SqlSnippet />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors animate-bounce"
          >
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
