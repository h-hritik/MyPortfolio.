import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import profile from '../../data/profile'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-20 lg:py-28" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader eyebrow="Who I am" title="About Me" />
        <div ref={ref} className="reveal grid lg:grid-cols-5 gap-10 items-start max-w-4xl mx-auto">
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-2 border-[var(--border)] shadow-xl shadow-black/30">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={`${profile.name} — profile photo`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[var(--bg-subtle)] text-5xl font-bold text-[var(--accent)]">
                  {profile.initials}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <p className="text-[var(--text-secondary)] leading-relaxed text-base">{profile.bio}</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: MapPin, label: profile.location, href: null },
                { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  href: profile.linkedin,
                  external: true,
                },
                {
                  icon: Github,
                  label: 'GitHub',
                  href: profile.github,
                  external: true,
                },
              ].map(({ icon: Icon, label, href, external }) => {
                const cls =
                  'flex items-center gap-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors min-h-[44px] group'
                const inner = (
                  <>
                    <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--bg-subtle)] border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors flex-shrink-0">
                      <Icon size={15} />
                    </span>
                    <span className="truncate">{label}</span>
                  </>
                )
                return href ? (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={cls}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className={cls}>
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
