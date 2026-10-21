import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
