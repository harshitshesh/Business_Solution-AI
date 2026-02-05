import { Brain, Linkedin, Twitter, Mail } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">DEAL</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              Empowering businesses with cutting-edge DEAL AI solutions. We transform 
              challenges into opportunities through innovation and expertise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>hello@DEAL.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-primary-foreground/50 text-sm">
          <p>© {currentYear} DEAL AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;