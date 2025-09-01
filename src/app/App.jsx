import { ReactLenis } from 'lenis/react'

import Hero from '@/app/Hero.jsx';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar.jsx';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';


export default function App() {

  return (
    <>
      <ReactLenis root options={{
        wheelMultiplier: 1.5,
        touchMultiplier: 1.5,

      }} />
      {/* <header>        <Navbar />      </header> */}

      <main >

        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />

      </main>

      <Footer />
    </>
  )
}