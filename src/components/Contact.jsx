import { useEffect, useState } from "react";
import { Send, CheckCircle, Mail, Building2, User } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(()=>{


    const saveuser = localStorage.getItem("formdata")
    if(saveuser){
      setFormData(JSON.parse(saveuser))
      setIsSubmitted(true)
    }
  },[])

  function resetdataagainform(){
setFormData({
   name: "",
    email: "",
    company: "",
    message: "",
  });

setIsSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("formdata",JSON.stringify(formData))
    setIsSubmitted(true);
 
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="panel section-padding hero-gradient relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4">
              Get Started
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>

            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Schedule a free consultation with our AI experts and discover
              how we can help you achieve your goals.
            </p>
          </div>

          <div className="bg-transparent text-white  rounded-3xl p-8 md:p-12 card-shadow">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full accent-gradient flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Thank You! {formData.name} 👋 
                </h3>
                <p className="text-muted-foreground mb-6">
                  You are doing good with {formData.company}👍
                   Your request has been submitted successfully.
  Our team will contact you shortly  within 24 hours.
                </p>
                <button
                  onClick={resetdataagainform}
                  className="text-accent font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-b-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-b-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="your@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl  border-b-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-[25vw] group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl accent-gradient text-white font-semibold text-lg shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
