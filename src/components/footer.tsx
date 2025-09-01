import ClutchWidget from "@/components/clutch";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-gray-200 font-inter overflow-hidden"
      style={{ backgroundColor: "rgb(81, 81, 81)" }}
    >
      {/* Main Footer Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Location Section */}
          <div className="space-y-6">
            <img
              src="https://streambe.com/wp-content/uploads/2022/07/streambe_isologotipo_vector.svg"
              alt="Streambe"
              className="h-10 rounded-md bg-white px-2 py-1"
            />
            <div className="border border-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-lg text-white mb-3">
                Argentina Office
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Av. Regimiento de los Patricios 1052.
                <br />
                Barracas, CABA. Complejo Molina Ciudad.
                <br />
                Piso 4 oficina 407.
              </p>
            </div>
          </div>

          {/* About Us Section */}
          <div className="space-y-5">
            <h3 className="font-semibold text-xl text-white">About us</h3>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  href="https://streambe.com/how-we-work/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  How we work
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/the-team/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  The team
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/contact-en/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-5">
            <h3 className="font-semibold text-xl text-white">Services</h3>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  href="https://streambe.com/en/mobile-apps/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Mobile apps
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/en/web-applications/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Web applications
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/en/staff-augmentation-en/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Staff Augmentation
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/en/marketplace-en/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/en/custom-software/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Custom software
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/en/business-intelligence-en/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Business intelligence
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/en/it-consulting-en/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  IT Consulting
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/en/devops-solutions/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Devops Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Success Stories, Politics & Newsletters Section */}
          <div className="space-y-5">
            <h3 className="font-semibold text-xl text-white">
              Success stories
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  href="https://streambe.com/succes-stories/aesa-en/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  AESA
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/succes-stories/andromaco-en/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Andrómaco
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/succes-stories/bpn/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  BPN
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/succes-stories/innovamed-en/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Innovamed
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/succes-stories/marval-en/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Marval O'Farrell & Mairal
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/succes-stories/navent-en/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Navent
                </a>
              </li>
              <li>
                <a
                  href="https://streambe.com/succes-stories/skf-en/"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  SKF
                </a>
              </li>
            </ul>

            <h3 className="font-semibold text-xl text-white mt-8">Politics</h3>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  href="https://streambe.com/wp-content/uploads/2022/10/GC.GC_.MA_.001-V.02-Politica-de-Calidad.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Quality
                </a>
              </li>
            </ul>

            <h3 className="font-semibold text-xl text-white mt-8">
              Newsletters
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  href="mailto:info@streambe.com"
                  className="hover:text-indigo-400 transition-colors duration-200 ease-in-out block"
                >
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="w-full bg-stone-800">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-sm text-gray-300 space-y-4 md:space-y-0 mx-auto px-6 py-6 container">
          <ClutchWidget />

          <div>
            <img
              src="https://streambe.com/wp-content/uploads/2024/08/ISO_9001.svg"
              alt="ISO 9001 Certified"
              className="h-12 rounded-md"
            />
          </div>

          <div className="flex space-x-4">
            {" "}
            {/* Adjusted spacing for icons */}
            {/* Social Icons with squared background */}
            <a
              href="https://www.linkedin.com/company/streambe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-8 h-8 bg-gray-600 rounded-md text-gray-200 hover:bg-indigo-500 hover:text-white transition-colors duration-200 ease-in-out"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.facebook.com/Streambe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center w-8 h-8 bg-gray-600 rounded-md text-gray-200 hover:bg-indigo-500 hover:text-white transition-colors duration-200 ease-in-out"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/cmstreambe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-8 h-8 bg-gray-600 rounded-md text-gray-200 hover:bg-indigo-500 hover:text-white transition-colors duration-200 ease-in-out"
            >
              <Instagram size={18} />
            </a>
            {/* WordPress Icon */}
            <a
              href="https://www.streambe.com/" // Assuming this is the WordPress link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WordPress"
              className="flex items-center justify-center w-8 h-8 bg-gray-600 rounded-md text-gray-200 hover:bg-indigo-500 hover:text-white transition-colors duration-200 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.75 17.5c-.25.5-.75 1-1.25 1-1.5 0-2.5-1-2.5-2.5 0-.5.25-1 .5-1.5-.75-.5-1.5-1.5-1.5-2.5 0-1.5 1-2.5 2.5-2.5.5 0 1 .25 1.5.5.25-.5.75-1 1.25-1 1.5 0 2.5 1 2.5 2.5 0 .5-.25 1-.5 1.5.75.5 1.5 1.5 1.5 2.5 0 1.5-1 2.5-2.5 2.5zm-5-8.5c-.5.5-.75 1-.75 1.5 0 .5.25 1 .75 1.5.5.5 1 .75 1.5.75 1 0 2-.75 2.5-1.5.25-.5.75-1 1.25-1 1 0 1.5.75 1.5 1.5 0 .5-.25 1-.75 1.5-.5.5-1 .75-1.5.75-1 0-2-.75-2.5-1.5-.25.5-.75 1-1.25 1-1 0-1.5-.75-1.5-1.5 0-.5.25-1 .75-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-1 font-semibold">
          <p className="text-center text-white text-sm pb-4">
            Made with ❤️ by Adrian Beria -
          </p>
          <p className="text-center text-white text-sm pb-4">
            Check the repo{" "}
            <a
              href="https://github.com/Radinax/demo-streambe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors duration-200 ease-in-out underline"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
