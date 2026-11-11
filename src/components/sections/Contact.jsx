import { Mail, Phone, Linkedin, Github, ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import profile from '../../data/profile'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="py-20 lg:py-28" style={{ background: 'var(--bg-subtle)' }}>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <SectionHeader
          eyebrow="Get in touch"
          title="Contact"
          subtitle="I'm open to opportunities in SQL development, database work and BI roles. The best way to reach me is email."
        />
        <div ref={ref} className="reveal flex flex-col items-center gap-4">
          <Button
            as="a"
            href={`mailto:${profile.email}`}
            size="lg"
            className="w-full sm:w-auto"
          >
            <Mail size={18} />
            {profile.email}
            <ArrowRight size={16} />
          </Button>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              as="a"
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              variant="outline"
            >
              <Phone size={16} />
              {profile.phone}
            </Button>
            <Button
              as="a"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              <Linkedin size={16} />
              LinkedIn
            </Button>
            <Button
              as="a"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              <Github size={16} />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
