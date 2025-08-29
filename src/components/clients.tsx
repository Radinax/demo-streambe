import { useEffect, useRef, useState } from "react";

const TrustedBy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Run once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const clients = [
    {
      name: "BPN",
      logo: "https://streambe.com/wp-content/uploads/2023/09/clientes-streambe_bpn.png",
    },
    {
      name: "SKF",
      logo: "https://streambe.com/wp-content/uploads/2023/09/clientes-streambe_skf.png",
    },
    {
      name: "Navent",
      logo: "https://streambe.com/wp-content/uploads/2023/09/clientes-streambe_navent.png",
    },
    {
      name: "Marval",
      logo: "https://streambe.com/wp-content/uploads/2023/09/clientes-streambe_marval.png",
    },
    {
      name: "Andrómaco",
      logo: "https://streambe.com/wp-content/uploads/2023/09/clientes-streambe_andromaco.png",
    },
    {
      name: "Walmart",
      logo: "https://streambe.com/wp-content/uploads/2023/09/clientes-streambe_walmart.png",
    },
    {
      name: "Claro",
      logo: "https://streambe.com/wp-content/uploads/2023/09/clientes-streambe_claro.png",
    },
    {
      name: "Santander",
      logo: "https://streambe.com/wp-content/uploads/2023/09/clientes-streambe_santander.png",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Trusted{" "}
          <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            By Leaders
          </span>
        </h2>
        <p className="text-xl text-slate-300 mt-6 leading-relaxed">
          From global enterprises to regional innovators, we partner with
          organizations that demand excellence.
        </p>
      </div>

      {/* Logo Grid */}
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group relative flex items-center justify-center cursor-pointer transition-all duration-700 delay-${
                index * 50
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Glowing Background (on hover) */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-400/20 rounded-2xl blur-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>

              {/* Inner Glow Border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                style={{
                  boxShadow: "inset 0 0 15px rgba(59, 130, 246, 0.4)",
                }}
              ></div>

              {/* Logo */}
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 max-w-full object-contain filter drop-shadow-sm relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
              />

              {/* Spotlight Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <a
          href="https://wa.me/5491167499475"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5"
        >
          <span>See all success stories</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default TrustedBy;
