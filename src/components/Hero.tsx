import React from "react";
import { motion } from "motion/react";
import { CheckCircle, ShieldCheck, Clock, Award, PhoneCall } from "lucide-react";

export default function Hero() {
  const whatsappNumber = "5493512345678";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%20Mudanzas%20La%20Ca%C3%B1ada%2C%20quisiera%20solicitar%20un%20presupuesto%20para%20un%20servicio%20desde%20C%C3%B3rdoba.`;

  const scrollToCalculator = () => {
    const element = document.getElementById("presupuesto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-slate-900 pt-28 pb-16 flex items-center overflow-hidden">
      {/* Decorative background grid and ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 py-1.5 px-3.5 rounded-full w-fit mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="font-sans text-xs md:text-sm text-slate-300 font-semibold uppercase tracking-wider">
                Desde Córdoba Capital a Todo el País
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
            >
              Fletes y Mudanzas desde Córdoba Capital a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-extrabold block lg:inline">
                Todo el País
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg sm:text-xl text-slate-300 mt-6 leading-relaxed max-w-2xl"
            >
              Servicio rápido, seguro y al mejor precio. Llevamos tus pertenencias con el máximo cuidado, garantizando puntualidad y tranquilidad absoluta en cada kilómetro.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10"
            >
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 text-base"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.311 1.488 4.957 1.49 5.485 0 9.95-4.461 9.954-9.946.002-2.658-1.03-5.155-2.903-7.03C16.828 1.8 14.332.766 11.682.766c-5.492 0-9.959 4.461-9.963 9.946-.002 1.83.488 3.614 1.417 5.19l-.995 3.633 3.72-.975zm12.607-7.234c-.1-.166-.367-.265-.77-.466-.401-.2-2.371-1.17-2.738-1.303-.367-.133-.633-.2-.9.2-.267.4-.1.367-1.034 1.37-.2.233-.4.265-.8.065-.4-.2-1.693-.624-3.225-1.99-1.19-1.06-1.996-2.37-2.229-2.77-.234-.4-.025-.615.175-.813.18-.178.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.034-.7-.1-.2-.9-2.166-1.233-2.966-.326-.783-.656-.677-.9-.688-.234-.01-.5-.01-.767-.01s-.7.1-1.067.492c-.367.391-1.4 1.367-1.4 3.328 0 1.96 1.433 3.85 1.633 4.12.2.267 2.822 4.31 6.837 6.04 1.114.48 1.916.764 2.575.973 1.12.355 2.14.305 2.946.185.9-.133 2.738-1.119 3.12-2.148.384-1.03.384-1.913.27-2.1-.115-.187-.38-.287-.78-.487z" />
                </svg>
                <div className="text-left">
                  <span className="block text-xs font-medium text-emerald-100 uppercase tracking-wider leading-none">Chatear Ahora</span>
                  <span className="block text-base font-bold leading-tight">Presupuesto por WhatsApp</span>
                </div>
              </a>

              {/* Budget Estimator Scroll Button */}
              <button
                onClick={scrollToCalculator}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-2xl border border-slate-700 hover:border-slate-600 shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 text-base cursor-pointer"
              >
                <span>Solicitar Presupuesto</span>
              </button>
            </motion.div>

            {/* Horizontal trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 border-t border-slate-800/80 mt-12 pt-8"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Carga Protegida</h3>
                  <p className="text-xs text-slate-400">Seguridad asegurada</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">100% Puntual</h3>
                  <p className="text-xs text-slate-400">Coordinación estricta</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">+10 Años</h3>
                  <p className="text-xs text-slate-400">Trayectoria impecable</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Hero Image Container */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/5 border border-slate-800 group"
            >
              {/* Main image */}
              <img
                src="/src/assets/images/moving_truck_hero_1784151584810.jpg"
                alt="Camión moderno de Mudanzas La Cañada"
                className="w-full h-[350px] sm:h-[450px] lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Badge on image */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-4 rounded-2xl flex items-center justify-between shadow-xl">
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Habilitación Oficial</p>
                  <p className="text-sm font-bold text-white mt-0.5">Fletes y Mudanzas Nacionales</p>
                </div>
                <div className="bg-orange-500 text-white text-xs font-bold py-1.5 px-3 rounded-lg uppercase tracking-wide">
                  Córdoba
                </div>
              </div>
            </motion.div>
            
            {/* Visual background details */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
