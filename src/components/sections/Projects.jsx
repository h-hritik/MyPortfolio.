import { Github, ExternalLink, Youtube } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import projectsData from '../../../content/projects.json'
import rolesData from '../../../content/roles.json'
import { primaryRole } from '../../config'

export default function Projects() {
  const role = rolesData[primaryRole] || rolesData['sql-developer']
  const { featuredProjects } = role

  const visible = projectsData.filter((p) => !p.hidden && !p.archived)
  const featured = visible.filter((p) => featuredProjects.includes(p.id))
  const rest = visible.filter((p) => !featuredProjects.includes(p.id))

  const ref = useScrollReveal()

  return (
    <section id="projects" className="py-20 lg:py-28" style={{ background: 'var(--bg-subtle)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="What I've built"
          title="Projects"
          subtitle="Featured projects appear first. All source code is on GitHub."
        />

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {rest.length > 0 && (
          <>
            <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Other projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        <div className="mt-10 text-center">
          <Button
            as="a"
            href="https://github.com/h-hritik"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            <Github size={16} />
            See all projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`bg-[var(--bg-surface)] border rounded-xl overflow-hidden hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/5 flex flex-col ${
        featured ? 'border-[var(--accent)]/30' : 'border-[var(--border)]'
      }`}
    >
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className="flex flex-wrap gap-1.5">
            <Badge variant={featured ? 'accent' : 'default'}>{project.category}</Badge>
            {featured && <Badge variant="accent">Featured</Badge>}
          </div>
          <span className="text-xs text-[var(--text-muted)]">{project.year}</span>
        </div>

        <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">{project.title}</h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-4">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="tech">{tech}</Badge>
          ))}
        </div>

        <div className="flex gap-2 mt-auto flex-wrap">
          {project.liveUrl && (
            <Button
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              <ExternalLink size={13} />
              Live
            </Button>
          )}
          {project.githubUrl && (
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Github size={13} />
              Code
            </Button>
          )}
          {project.videoUrl && (
            <Button
              as="a"
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
            >
              <Youtube size={13} />
              Demo
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
