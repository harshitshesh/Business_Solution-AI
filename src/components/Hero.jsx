import { ArrowRight, Sparkle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";


const Hero = () => {
  const heroRef = useRef(null);
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>
     

      <section ref={heroRef} className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        {/* Background blur blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="container my-26 mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Unlock the Power of{" "}
              <span className="text-gradient">Artificial Intelligence</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              We help forward-thinking companies leverage AI to drive innovation,
              streamline operations, and gain a competitive edge in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl accent-gradient text-white font-semibold text-lg shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Trust section */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm mb-4">
                Trusted by innovative companies
              </p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                <span className="text-white font-semibold text-lg">TechCorp</span>
                <span className="text-white font-semibold text-lg">DataFlow</span>
                <span className="text-white font-semibold text-lg">InnovateLabs</span>
                <span className="text-white font-semibold text-lg">FutureTech</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
