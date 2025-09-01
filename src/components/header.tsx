import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "About",
    dropdown: [
      { name: "How We Work", href: "#how" },
      { name: "The Team", href: "#team" },
    ],
  },
  {
    label: "Services",
    dropdown: [
      { name: "Mobile Apps", href: "#mobile" },
      { name: "Web Applications", href: "#web" },
      { name: "Staff Augmentation", href: "#staff" },
      { name: "DevOps & Cloud", href: "#devops" },
    ],
  },
  {
    label: "Success",
    dropdown: [
      { name: "AESA", href: "#aesa" },
      { name: "Navent", href: "#navent" },
      { name: "SKF", href: "#skf" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-semibold text-lg bg-white py-1 px-2 rounded"
          >
            <img
              src="http://streambe.com/wp-content/uploads/2022/07/streambe_isologotipo_vector.svg"
              alt="Streambe"
              className="h-7"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <button className="text-white hover:text-primary font-medium transition-colors">
                    {item.label}
                    <ChevronDown className="inline w-4 h-4 ml-1 opacity-60 group-hover:opacity-100" />
                  </button>

                  {/* Dropdown - Tight & Close */}
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-slate-600 hover:bg-green-50 hover:text-primary border-b border-slate-100 last:border-b-0 last:rounded-b-lg first:rounded-t-lg text-sm"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Primary CTA Button */}
          <a
            href="https://wa.me/5491167499475"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors shadow-sm hover:shadow"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col px-6 overflow-y-auto">
            <div className="flex justify-end pb-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 space-y-8">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <details className="group">
                      <summary className="font-medium text-slate-900 list-none cursor-pointer">
                        {item.label}
                      </summary>
                      <div className="mt-3 space-y-2 pl-4">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block text-slate-600 hover:text-green-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <a
                      href={item.href}
                      className="block font-medium text-slate-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}

              <div className="pt-6 border-t">
                <a
                  href="https://wa.me/5491167499475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-green-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
