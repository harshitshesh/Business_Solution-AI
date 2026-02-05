import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    image: "SC",
    content:
      "Working with this team transformed our entire approach to data. Their AI strategy helped us reduce operational costs by 40% and uncover insights we never knew existed. Truly exceptional partners.",
  },
  {
    name: "Michael Roberts",
    role: "VP of Operations, Global Logistics Co.",
    image: "MR",
    content:
      "The automation solutions they implemented saved us over 10,000 hours annually. Their team understood our complex requirements and delivered beyond expectations. Highly recommended.",
  },
  {
    name: "Emily Martinez",
    role: "Director of Innovation, HealthTech Solutions",
    image: "EM",
    content:
      "Their predictive analytics platform revolutionized our patient care protocols. The collaborative approach and deep expertise made this partnership invaluable for our digital transformation.",
  },
];

gsap.registerPlugin(ScrollTrigger)
const Testimonials = () => {

  const testimonref = useRef(null)

 useEffect(() => {
  const directions = [
    { x: -80, y: 0 },   // left
    { x: 80, y: 0 },    // right
    { x: 0, y: 80 },    // bottom
    { x: 0, y: -80 },   // top
  ];

  const random = directions[Math.floor(Math.random() * directions.length)];

  gsap.fromTo(
    testimonref.current.children,
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
        trigger: testimonref.current.children,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
}, []);



  return (
    <section ref={testimonref} className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders
            have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center text-white font-semibold">
                  {testimonial.image}
                </div>

                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
