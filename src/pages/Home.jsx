import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Notes from '../components/sections/Notes'
import CaseStudies from '../components/sections/CaseStudies'
import LearningRoadmap from '../components/sections/LearningRoadmap'
import Certifications from '../components/sections/Certifications'
import Education from '../components/sections/Education'
import Blog from '../components/sections/Blog'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Notes />
      <CaseStudies />
      <LearningRoadmap />
      <Certifications />
      <Education />
      <Blog />
      <Contact />
    </>
  )
}
