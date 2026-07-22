import React from "react";
import { motion } from "motion/react";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: "test-1",
      name: "Carlos M.",
      location: "Córdoba Capital",
      role: "Mudanza Residencial (3 dormitorios)",
      comment: "Excelente servicio de principio a fin. Llegaron exactamente a la hora acordada y trabajaron con una rapidez asombrosa. Cuidaron cada mueble con mantas de mudanza. El precio fue exactamente el presupuestado. ¡100% recomendados!",
      rating: 5,
      date: "Hace 2 semanas",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      id: "test-2",
      name: "Sofía G.",
      location: "Nueva Córdoba",
      role: "Flete de Monoambiente a Buenos Aires",
      comment: "Tenía mucho miedo de enviar mis pertenencias a otra provincia por primera vez, pero los chicos de La Cañada me dieron tranquilidad absoluta. El chofer me iba avisando el estado del recorrido por WhatsApp. Llegó todo impecable y súper rápido.",
      rating: 5,
      date: "Hace 1 mes",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      id: "test-3",
      name: "Javier R.",
      location: "Zona Norte (Córdoba)",
      role: "Mudanza Comercial de Oficinas",
      comment: "Contratamos el servicio para mudar nuestras oficinas corporativas durante el fin de semana. Desarmaron y volvieron a armar más de 12 escritorios y estanterías en tiempo récord. El lunes pudimos operar con total normalidad. Muy profesionales.",
      rating: 5,
      date: "Hace 3 semanas",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      id: "test-4",
      name: "Mariana L.",
      location: "Cerro de las Rosas",
      role: "Traslado de Electrodomésticos y Muebles",
      comment: "Los contraté para llevar heladera, lavarropas y sillón nuevo. Los embalaron con plástico de burbujas grueso y los acomodaron con fajas en el camión. La amabilidad del personal es para destacar. ¡Excelente trato y precios justos!",
      rating: 5,
      date: "Hace 2 meses",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120"
    }
  ];

  return (
    <section id="opiniones" className="py-24 bg-slate-950/20 relative overflow-hidden border-t border-slate-900/50">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-xs md:text-sm text-orange-500 font-bold uppercase tracking-wider">
            ¿Qué dicen nuestros clientes?
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 leading-tight">
            Opiniones de quienes confiaron en nosotros
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          
          {/* Trust Badge Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 bg-slate-900/40 border border-slate-800/80 rounded-2xl py-3.5 px-6 w-fit mx-auto shadow-lg backdrop-blur-sm">
            <div className="flex items-center space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="font-sans font-bold text-white text-sm">
              4.9 / 5 estrellas
            </span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span className="font-sans text-xs text-slate-300 font-medium">
              Más de 450 valoraciones reales en Google Maps
            </span>
            <div className="flex items-center text-emerald-400 space-x-1">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Verificadas</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-3xl p-6.5 sm:p-8 shadow-lg hover:shadow-orange-500/5 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Quote icon watermark */}
              <div className="absolute top-6 right-8 text-slate-800 pointer-events-none">
                <Quote className="h-10 w-10 rotate-180 opacity-30" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center space-x-1 text-amber-500 mb-5">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 border-t border-slate-800/60 mt-6 pt-5">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-800"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-sm sm:text-base text-white truncate">
                    {test.name}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 truncate">
                    {test.location} • <span className="text-orange-400 font-semibold">{test.role}</span>
                  </p>
                </div>
                <span className="font-sans text-xs text-slate-400 font-medium shrink-0">
                  {test.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
