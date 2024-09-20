import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./compnents/Benefits";
import Collaboration from "./compnents/Collaboration";
import Footer from "./compnents/Footer";
import Header from "./compnents/Header";
import Hero from "./compnents/Hero";
import Pricing from "./compnents/pricing";
import Roadmap from "./compnents/Roadmap";
import Services from "./compnents/Services";

const App = () => {
  return (
    <>
    
    <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
     <Header />
     <Hero />
     <Benefits />
     <Collaboration />
     <Services />
     <Pricing />
     <Roadmap />
     <Footer />
    </div>
    <ButtonGradient />
    </>
  )
}

export default App;