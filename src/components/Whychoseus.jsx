import { Award, Users, Target, Shield } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Over 10 years of experience delivering AI solutions across industries, with a team of PhD-level data scientists and engineers.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description:
      "We work as an extension of your team, ensuring knowledge transfer and building internal AI capabilities that last.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every project is measured by business outcomes. We focus on ROI and tangible improvements, not just technology.",
  },
  {
    icon: Shield,
    title: "Enterprise-Ready",
    description:
      "Our solutions are built with security, scalability, and compliance in mind, meeting the highest enterprise standards.",
  },
];



gsap.registerPlugin(ScrollTrigger)
const WhyChooseUs = () => {

  const choseref = useRef(null)
  const forchild = useRef(null)

  useEffect(() => {
  gsap.fromTo(
    choseref.current.children,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 3.5,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: choseref.current,
        start: "top 75%",
      },
    }
  );
}, []);

 useEffect(() => {
  const directions = [
    { x: -80, y: 0 },   // left
    { x: 80, y: 0 },    // right
    { x: 0, y: 80 },    // bottom
    { x: 0, y: -80 },   // top
  ];

  const random = directions[Math.floor(Math.random() * directions.length)];

  gsap.fromTo(
    forchild.current,
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
      duration: 8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: forchild.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
}, []);





  return (
    <section ref={choseref}  className="section-padding ">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div ref={forchild}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Why Choose Us
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in AI Transformation
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Choosing the right AI consulting partner can make or break your
              digital transformation journey. Here's why leading companies trust us.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {reason.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

         {/* RIGHT STATS CARD */}
{/* RIGHT STATS CARD */}
<div ref={forchild} className="relative">
  <div className="aspect-square bg-gradient-to-br from-primary to-primary/80 rounded-3xl overflow-hidden relative">

    {/* DARK OVERLAY – THIS IS THE KEY */}
    <div className="absolute inset-0 bg-violet-100 z-[1]" />

    {/* MAIN CONTENT */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="text-center text-black p-8">
        <div className="text-6xl font-bold mb-2">150+</div>
        <div className="text-xl opacity-90 mb-8">
          Projects Delivered
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-3xl font-bold">98%</div>
            <div className="text-sm opacity-80">
              Client Satisfaction
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold">40+</div>
            <div className="text-sm opacity-80">
              Industry Experts
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* BLOBS */}
    <div className="absolute top-6 right-6 w-24 h-24 bg-accent rounded-full opacity-20 blur-xl" />
    <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl" />
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
