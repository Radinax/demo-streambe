import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SuccessStories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const cases = [
    {
      title: "Digital Transformation for BPN",
      subtitle: "Development of digital channels for financial institutions",
      client: "Banco de la Provincia de Neuquén - Argentina",
      image:
        "https://streambe.com/wp-content/uploads/2022/04/web_bpn_mock_up.png",
      link: "https://streambe.com/bpn/",
      tags: [
        "Web Platform",
        "Mobile App",
        "UX Optimization",
        "Agile Development",
      ],
      benefits: [
        "Improved corporate image",
        "Increased customer loyalty",
        "Online appointment & loan requests",
        "Simplified financial product selection",
        "Optimized banking procedures",
      ],
      process: [
        {
          phase: "Discovery",
          icon: "https://streambe.com/wp-content/uploads/2022/05/proceso-descubrir.gif",
          desc: "Defined strategy based on user needs",
        },
        {
          phase: "Get Ready",
          icon: "https://streambe.com/wp-content/uploads/2022/03/proceso-get-ready-1.gif",
          desc: "High-fidelity wireframes & UX design",
        },
        {
          phase: "Result",
          icon: "https://streambe.com/wp-content/uploads/2022/03/proceso-resultado.gif",
          desc: "Tailor-made web & mobile platforms",
        },
      ],
    },
    {
      title: "Business Intelligence for SKF",
      subtitle: "Data-driven solutions for the industrial sector",
      client: "SKF",
      image:
        "https://streambe.com/wp-content/uploads/2023/03/skf_mockup_1a1.png",
      link: "https://streambe.com/skf-en/",
      tags: [
        "BI Dashboard",
        "Data Integration",
        "Custom Analytics",
        "12-Month Development",
      ],
      benefits: [
        "Reorganized fragmented data",
        "Unified reporting across departments",
        "Improved production insights",
        "Enhanced sales & administration visibility",
      ],
      process: [
        {
          phase: "Discovery",
          icon: "https://streambe.com/wp-content/uploads/2022/05/proceso-descubrir.gif",
          desc: "Mapped data across production, sales, admin",
        },
        {
          phase: "Get Ready",
          icon: "https://streambe.com/wp-content/uploads/2022/03/proceso-get-ready-1.gif",
          desc: "Built scalable data models & architecture",
        },
        {
          phase: "Result",
          icon: "https://streambe.com/wp-content/uploads/2022/03/proceso-resultado.gif",
          desc: "Custom BI platform with real-time dashboards",
        },
      ],
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-slate-900" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div
        className={`relative z-10 container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Success{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-slate-300 mt-6 leading-relaxed">
            Real impact through technology. See how we’ve helped industry
            leaders innovate and grow.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-40">
          {cases.map((story, index) => (
            <a
              key={index}
              href={story.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${
                    index * 200 + 300
                  }ms`,
                }}
              >
                {/* Text Side */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-slate-600 rounded-full text-xs font-medium text-slate-300">
                    {story.client}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">
                    {story.title}
                  </h3>

                  <p className="text-lg text-slate-400 leading-relaxed">
                    {story.subtitle}
                  </p>

                  {/* Process */}
                  <div className="space-y-4 mt-6">
                    {story.process.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-slate-300 text-sm"
                      >
                        <img
                          src={step.icon}
                          alt={step.phase}
                          className="w-8 h-8 mt-0.5 opacity-80"
                        />
                        <div>
                          <div className="font-semibold text-white">
                            {step.phase}
                          </div>
                          <div className="text-slate-400">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {story.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-slate-700/60 text-slate-300 rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-blue-400 font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Explore the case</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-700 group-hover:border-slate-500 transition-colors">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-teal-500/5 rounded-2xl blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-24 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://wa.me/5491167499475"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            <span>Chat with us on WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
