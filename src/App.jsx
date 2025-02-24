import Presentation from "./components/Presentation";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Vision from "./components/Vision";
import Drapeau from "./components/Drapeau";
import SolidBento from "./components/Beto";
import Top from "./components/Top";

const items = [
  { img: "drapeaux/togo.jpg", pays: "TOGO" },
  { img: "drapeaux/bf.jpg", pays: "BURKINA-FASO" },
  { img: "drapeaux/chine.jpg", pays: "CHINE" },
  { img: "drapeaux/european.jpg", pays: "UNION EUROPE" },
  { img: "drapeaux/ci.jpg", pays: "CÔTE D'IVOIRE" },
  { img: "drapeaux/uea.jpg", pays: "EMIRATES ARABE" },
];

function App() {
  return (
    <>
      <Top />
      <Navbar />
      <Hero />
      <section className="">
        <Presentation />
        <Mission />
        <Vision />
        <Services />
        <Drapeau items={items} speed={10} />
        <SolidBento />
        <Teams />
        <Faq />
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
