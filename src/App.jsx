import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/Whychoseus";
import HowItWorks from "./components/Howworks";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {

  return (
    <div >
     
      <Navbar />
      <Hero />


      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
