import { useState } from "react";
import { Brain, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "How It Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-none  border-black/10">

    <nav className=" ">
     
        <div className="flex items-center justify-around h-16 md:h-20">

          {/* Logo */}
          <div>

          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg accent-gradient flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold mask-b-from-5% font-serif text-purple-900">
              DEAL
            </span>
          </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={scrollToContact}
              className="px-5 py-2.5 rounded-lg accent-gradient text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent/30 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 px-4 border-t border-black/10 bg-white/90 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={scrollToContact}
                className="px-5 py-3 rounded-lg accent-gradient text-white font-semibold text-sm mt-2"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      
    </nav>
                </div>
  );
};

export default Navbar;
