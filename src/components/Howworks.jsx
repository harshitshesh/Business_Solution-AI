import { MessageSquare, Search, Rocket, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a free consultation to understand your business challenges, goals, and current technology landscape.",
  },
  {
    icon: Search,
    step: "02",
    title: "Assessment & Strategy",
    description:
      "Our experts analyze your data, processes, and opportunities to develop a tailored AI strategy and roadmap.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Implementation",
    description:
      "We design, develop, and deploy custom AI solutions with rigorous testing and seamless integration.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Optimize & Scale",
    description:
      "Continuous monitoring, optimization, and support to ensure your AI solutions deliver lasting value.",
  },
];

gsap.registerPlugin(ScrollTrigger);


const HowItWorks = () => {


    const worksref = useRef(null)

 useEffect(() => {
  const directions = [
    { x: -80, y: 0 },   // left
    { x: 80, y: 0 },    // right
    { x: 0, y: 80 },    // bottom
    { x: 0, y: -80 },   // top
  ];

  const random = directions[Math.floor(Math.random() * directions.length)];

  gsap.fromTo(
    worksref.current,
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
        trigger: worksref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
}, []);



  return (
    <section ref={worksref} id="process" className="section-padding bg-secondary">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Our Process
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Work Together
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful AI implementation
            from initial concept to long-term growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="relative">
                {/* CONNECTOR LINE */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/10" />
                )}

                <div className="relative bg-card rounded-2xl p-8 card-shadow h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <span className="text-4xl font-bold text-accent/20">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
