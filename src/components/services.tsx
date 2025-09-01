import { useAnimation } from "@/hooks/use-animation";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps built for performance and scale, enabling seamless digital experiences on iOS and Android.",
    icon: "https://streambe.com/wp-content/uploads/2023/11/soluciones_home_mobile_apps_2.svg",
    link: "https://streambe.com/en/mobile-apps/",
  },
  {
    title: "Web Applications",
    description:
      "Modern, responsive web platforms with seamless UX, tailored to your business needs and optimized for performance and scalability.",
    icon: "https://streambe.com/wp-content/uploads/2023/11/soluciones_home_aplicaciones_mobile_web_2.svg",
    link: "https://streambe.com/en/web-applications/",
  },
  {
    title: "Staff Augmentation",
    description:
      "Top-tier developers integrated into your team, providing agility and expertise to scale your product development faster.",
    icon: "https://streambe.com/wp-content/uploads/2023/11/soluciones_home_staff_augmentation.svg",
    link: "https://streambe.com/en/staff-augmentation-en/",
  },
  {
    title: "Marketplace",
    description:
      "End-to-end marketplace platforms with secure transactions, helping businesses digitize sales and scale online presence.",
    icon: "https://streambe.com/wp-content/uploads/2023/11/soluciones_home-marketplace.svg",
    link: "https://streambe.com/en/marketplace-en/",
  },
  {
    title: "Custom Software",
    description:
      "Tailored solutions that fit your unique business needs, from process automation to digital transformation.",
    icon: "https://streambe.com/wp-content/uploads/2023/11/soluciones_home_custom_software_2-1.svg",
    link: "https://streambe.com/en/custom-software/",
  },
  {
    title: "Business Intelligence",
    description:
      "Data-driven insights to power smarter decisions, with dashboards and analytics that turn information into action.",
    icon: "https://streambe.com/wp-content/uploads/2023/11/soluciones_home_business_intelligence_2.svg",
    link: "https://streambe.com/en/business-intelligence-en/",
  },
  {
    title: "IT Consulting",
    description:
      "Strategic guidance to align technology with business goals, ensuring innovation drives real impact.",
    icon: "https://streambe.com/wp-content/uploads/2023/11/soluciones_home_-consulting-IT_2.svg",
    link: "https://streambe.com/en/it-consulting-en/",
  },
  {
    title: "DevOps Solutions",
    description:
      "Automated, scalable infrastructure for rapid delivery, enabling continuous integration and deployment with full visibility.",
    icon: "https://streambe.com/wp-content/uploads/2023/11/soluciones_home_devops_2.svg",
    link: "https://streambe.com/en/devops-solutions/",
  },
];

const OurServices = () => {
  const [ref, isVisible] = useAnimation();

  return (
    <section className="relative py-28 overflow-hidden bg-slate-900" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-20 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            What We{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <p className="text-xl text-slate-300 mt-6 leading-relaxed">
            From concept to scale — we deliver end-to-end digital solutions that
            drive growth, efficiency, and innovation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className={`bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${
                    index * 100 + 200
                  }ms`,
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative group">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-24 w-24 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-teal-400/30 rounded-full blur-xl scale-125 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white text-center mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed text-center mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
