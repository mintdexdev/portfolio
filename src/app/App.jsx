import { ReactLenis } from 'lenis/react'

import Hero from '@/components/Hero.jsx';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar.jsx';
import Contact from '../components/Contact';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';


export default function App() {

  return (
    <>
      {/* <div>

        <div className='max-w-[1920px] mx-auto px-[clamp(20px,15.3846px+1.2821vw,40px)]  fixed inset-0 z-10  grid grid-cols-12 gap-5'>
          <div className='border border-red-500'></div>
          <div className='border border-red-500'></div>
          <div className='border border-red-500'></div>
          <div className='border border-red-500'></div>
          <div className='border border-red-500'></div>
          <div className='border border-red-500'></div>
          <div className='border border-red-500'></div>
          <div className='border border-red-500'></div>
          <div className='border border-red-500'></div>
          <div className='border border-red-500'></div>
          <div className='border border-red-500'></div>
          <div className='border border-red-500'></div>
        </div>

      </div> */}

      <ReactLenis root options={{ lerp: 0.23 }} />
      <header>        <Navbar />      </header>

      {/* landing */}
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