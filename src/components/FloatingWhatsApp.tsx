import React from "react";
import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "5493516828397";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%20Fletes%20y%20Mudanzas%20Mariano%2C%20estoy%20viendo%20la%20p%C3%A1gina%20web%20y%20quisiera%20solicitar%20un%20presupuesto.`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4.5 rounded-full shadow-2xl flex items-center justify-center transition-colors group cursor-pointer border border-emerald-400/20"
        aria-label="Escribinos por WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping group-hover:animate-none pointer-events-none" />

        {/* Unread message badge indicator for massive CTA improvement */}
        <span className="absolute -top-1 -right-1 bg-orange-500 border-2 border-white text-white text-[9px] font-bold w-5.5 h-5.5 rounded-full flex items-center justify-center shadow-md animate-bounce">
          1
        </span>

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.311 1.488 4.957 1.49 5.485 0 9.95-4.461 9.954-9.946.002-2.658-1.03-5.155-2.903-7.03C16.828 1.8 14.332.766 11.682.766c-5.492 0-9.959 4.461-9.963 9.946-.002 1.83.488 3.614 1.417 5.19l-.995 3.633 3.72-.975zm12.607-7.234c-.1-.166-.367-.265-.77-.466-.401-.2-2.371-1.17-2.738-1.303-.367-.133-.633-.2-.9.2-.267.4-.1.367-1.034 1.37-.2.233-.4.265-.8.065-.4-.2-1.693-.624-3.225-1.99-1.19-1.06-1.996-2.37-2.229-2.77-.234-.4-.025-.615.175-.813.18-.178.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.034-.7-.1-.2-.9-2.166-1.233-2.966-.326-.783-.656-.677-.9-.688-.234-.01-.5-.01-.767-.01s-.7.1-1.067.492c-.367.391-1.4 1.367-1.4 3.328 0 1.96 1.433 3.85 1.633 4.12.2.267 2.822 4.31 6.837 6.04 1.114.48 1.916.764 2.575.973 1.12.355 2.14.305 2.946.185.9-.133 2.738-1.119 3.12-2.148.384-1.03.384-1.913.27-2.1-.115-.187-.38-.287-.78-.487z" />
        </svg>

        {/* Hover label tooltip */}
        <span className="absolute right-18 bg-slate-900 border border-slate-800 text-white font-semibold text-xs py-2 px-3.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 scale-95 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none">
          ¿En qué te podemos ayudar hoy? 💬
        </span>
      </motion.a>
    </div>
  );
}
