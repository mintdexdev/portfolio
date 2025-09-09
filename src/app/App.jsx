import { ReactLenis } from 'lenis/react'

import Hero from '@/components/Hero.jsx';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar.jsx';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function App() {

  return (
    <>

      <ReactLenis root options={{ lerp: 0.23 }} />
      <header>        <Navbar />      </header>

      {/* landing */}
      <main >

        <Hero />
        <Projects />
        <Stack />
        <Skills />
        <About />
        <Contact />

      </main>

      <Footer />

    </>
  )
}