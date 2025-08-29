import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Animated Grid Pattern (Subtle) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120, 119, 198, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120, 119, 198, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          mask: "radial-gradient(circle at center, transparent 60%, black 100%)",
        }}
      ></div>

      {/* Floating Shape Elements (Minimal) */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-6">
              {/* Tagline */}
              <p className="text-sm uppercase tracking-wider text-blue-300 font-medium">
                Digital Product Studio
              </p>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                We{" "}
                <span className="bg-gradient-to-r from-blue-400 via-white to-primary bg-clip-text text-transparent">
                  optimize
                </span>{" "}
                your business.
              </h1>

              {/* Subhead */}
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                From concept to scale — we partner with startups and enterprises
                to design and build high-performance digital products.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#services"
                className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Play className="w-5 h-5 text-blue-400" />
                <span>Watch Company Story</span>
              </a>
            </div>

            {/* Minimal Stats */}
            <div className="flex items-center gap-8 pt-8 text-sm">
              <div>
                <div className="font-bold text-white">10+ years</div>
                <div className="text-slate-400">Innovation & Growth</div>
              </div>
              <div className="w-px h-6 bg-slate-600"></div>
              <div>
                <div className="font-bold text-white">5 countries</div>
                <div className="text-slate-400">Global Impact</div>
              </div>
            </div>
          </div>

          {/* Right Side – Visual */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Replace with Lottie, Spline embed, or 3D model in production */}
            <div className="relative w-full max-w-lg aspect-[4/3]">
              {/* Simulated App Canvas */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-800/20 rounded-2xl border border-slate-700 backdrop-blur-sm flex items-center justify-center">
                <img
                  src="https://streambe.com/wp-content/uploads/2021/02/01_streambe_ilustracion_home.svg"
                  alt="Streambe Product Vision"
                  className="max-w-full h-auto drop-shadow-2xl opacity-90"
                />
              </div>

              {/* Corner Badge */}
              <div className="absolute -top-2 -left-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                In Production
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer">
        <button
          className="w-10 h-16 border-2 border-slate-500 rounded-full flex justify-center items-center p-2 hover:border-blue-400 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={handleScroll}
          aria-label="Scroll to explore"
        >
          <div className="w-2 h-4 bg-slate-400 rounded-full animate-bounce group-hover:bg-blue-300 group-hover:scale-125 transition-transform duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
