import { ThemeToggle } from './components/ThemeToggle'
import StarBackground from './components/StarBackground'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { About } from './components/About'

function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle />
      <StarBackground />
      <NavBar />
      <Hero />
      <About />
    </div>
  )
}

export default Home
