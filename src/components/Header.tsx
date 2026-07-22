import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Truck, Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Cobertura", href: "#cobertura" },
    { name: "Galería", href: "#galeria" },
    { name: "Cómo Trabajamos", href: "#como-trabajamos" },
    { name: "Opiniones", href: "#opiniones" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappNumber = "5493512345678"; // Representative Córdoba WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%20Mudanzas%20La%20Ca%C3%B1ada%2C%20quisiera%20consultar%20por%20un%20servicio%20de%20mudanza/flete.`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#inicio");
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="bg-orange-500 text-white p-2 rounded-xl shadow-md group-hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight text-white block">
                MUDANZAS
              </span>
              <span className="font-sans text-xs tracking-widest text-orange-400 font-semibold uppercase block -mt-1">
                La Cañada
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-sans font-medium text-sm text-slate-300 hover:text-orange-400 transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact CTA Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+543512345678"
              className="flex items-center text-slate-300 hover:text-orange-400 font-semibold text-sm transition-colors duration-300 mr-2"
            >
              <Phone className="h-4 w-4 mr-2 text-orange-500" />
              0351 152-345678
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-5 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-sm"
            >
              <svg
                className="w-4.5 h-4.5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.311 1.488 4.957 1.49 5.485 0 9.95-4.461 9.954-9.946.002-2.658-1.03-5.155-2.903-7.03C16.828 1.8 14.332.766 11.682.766c-5.492 0-9.959 4.461-9.963 9.946-.002 1.83.488 3.614 1.417 5.19l-.995 3.633 3.72-.975zm12.607-7.234c-.1-.166-.367-.265-.77-.466-.401-.2-2.371-1.17-2.738-1.303-.367-.133-.633-.2-.9.2-.267.4-.1.367-1.034 1.37-.2.233-.4.265-.8.065-.4-.2-1.693-.624-3.225-1.99-1.19-1.06-1.996-2.37-2.229-2.77-.234-.4-.025-.615.175-.813.18-.178.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.034-.7-.1-.2-.9-2.166-1.233-2.966-.326-.783-.656-.677-.9-.688-.234-.01-.5-.01-.767-.01s-.7.1-1.067.492c-.367.391-1.4 1.367-1.4 3.328 0 1.96 1.433 3.85 1.633 4.12.2.267 2.822 4.31 6.837 6.04 1.114.48 1.916.764 2.575.973 1.12.355 2.14.305 2.946.185.9-.133 2.738-1.119 3.12-2.148.384-1.03.384-1.913.27-2.1-.115-.187-.38-.287-.78-.487z" />
              </svg>
              <span>Consultar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center space-x-4">
            <a
              href="tel:+543512345678"
              className="flex items-center text-slate-300 hover:text-orange-400 transition-colors py-2 mr-1"
            >
              <Phone className="h-5 w-5 text-orange-500" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg bg-slate-800/40 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="block font-sans font-medium text-base text-slate-300 hover:text-orange-400 hover:bg-slate-800/40 py-2.5 px-3 rounded-lg transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800/60 mt-3 flex flex-col space-y-3 px-3">
                <a
                  href="tel:+543512345678"
                  className="flex items-center text-slate-300 hover:text-orange-400 font-semibold text-base transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3 text-orange-500" />
                  0351 152-345678
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-5 rounded-xl shadow-md hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center space-x-2 text-base w-full"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.311 1.488 4.957 1.49 5.485 0 9.95-4.461 9.954-9.946.002-2.658-1.03-5.155-2.903-7.03C16.828 1.8 14.332.766 11.682.766c-5.492 0-9.959 4.461-9.963 9.946-.002 1.83.488 3.614 1.417 5.19l-.995 3.633 3.72-.975zm12.607-7.234c-.1-.166-.367-.265-.77-.466-.401-.2-2.371-1.17-2.738-1.303-.367-.133-.633-.2-.9.2-.267.4-.1.367-1.034 1.37-.2.233-.4.265-.8.065-.4-.2-1.693-.624-3.225-1.99-1.19-1.06-1.996-2.37-2.229-2.77-.234-.4-.025-.615.175-.813.18-.178.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.034-.7-.1-.2-.9-2.166-1.233-2.966-.326-.783-.656-.677-.9-.688-.234-.01-.5-.01-.767-.01s-.7.1-1.067.492c-.367.391-1.4 1.367-1.4 3.328 0 1.96 1.433 3.85 1.633 4.12.2.267 2.822 4.31 6.837 6.04 1.114.48 1.916.764 2.575.973 1.12.355 2.14.305 2.946.185.9-.133 2.738-1.119 3.12-2.148.384-1.03.384-1.913.27-2.1-.115-.187-.38-.287-.78-.487z" />
                  </svg>
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
