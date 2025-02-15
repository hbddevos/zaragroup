import Presentation from "./components/Presentation"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Mission from "./components/Mission"
import Footer from "./components/Footer"
import Teams from "./components/Teams"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Faq from "./components/Faq"
import Portefolio from "./components/Portefolio"
import Vision from "./components/Vision"


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <section className="px-8">
        {/* <AnimatedText /> */}

      <Presentation />
      <Mission />
      <Vision />
      <Services />
      <Portefolio />
      <Teams />
      <Faq />
      <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
