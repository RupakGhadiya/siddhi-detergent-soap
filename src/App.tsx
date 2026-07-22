import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Showcase from './components/Showcase'
import Products from './components/Products'
import Marquee from './components/Marquee'
import Why from './components/Why'
import MapSection from './components/MapSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatActions from './components/FloatActions'

export default function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Products />
        <Marquee />
        <Why />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <FloatActions />
    </>
  )
}
