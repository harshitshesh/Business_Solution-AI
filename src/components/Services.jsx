import { Brain, Cog, Code, LineChart } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description:
      "We help you develop a comprehensive AI roadmap tailored to your business goals, identifying high-impact opportunities and building a foundation for sustainable growth.",
  },
  {
    icon: Cog,
    title: "Business Process Automation",
    description:
      "Streamline your operations with intelligent automation solutions that reduce manual work, minimize errors, and free your team to focus on high-value tasks.",
  },
  {
    icon: Code,
    title: "Custom AI Solutions",
    description:
      "From machine learning models to natural language processing, we build bespoke AI solutions designed specifically for your unique business challenges.",
  },
  {
    icon: LineChart,
    title: "Data & Predictive Analytics",
    description:
      "Transform your data into actionable insights with advanced analytics and predictive models that drive smarter decision-making across your organization.",
  },
];

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  const serviceref = useRef(null)

 useEffect(() => {
  const directions = [
    { x: -80, y: 0 },   // left
    { x: 80, y: 0 },    // right
    { x: 0, y: 80 },    // bottom
    { x: 0, y: -80 },   // top
  ];

  const random = directions[Math.floor(Math.random() * directions.length)];

  gsap.fromTo(
    serviceref.current,
    {
      opacity: 0,
      x: random.x,
      y: random.y,
      scale: 0.95,
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: serviceref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
}, []);


  return (
    <section ref={serviceref} id="services" className="section-padding bg-secondary">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Solutions That Drive Results
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer end-to-end AI consulting services to help your business
            harness the full potential of artificial intelligence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
