import { ThemeToggle } from './components/ThemeToggle'
import StarBackground from './components/StarBackground'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/footer'
import { Experience } from './components/Experiences'
import { Education } from './components/Education'

function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle />
      <StarBackground />
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
