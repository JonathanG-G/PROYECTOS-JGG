import React from "react";
import { motion } from "motion/react";
import { 
  FileEdit, 
  Calendar, 
  Truck, 
  CheckCircle 
} from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Solicitás presupuesto",
      description: "Completás el formulario interactivo o nos escribís directamente por WhatsApp. Te respondemos en menos de 10 minutos con una cotización a medida, detallada y sin cargo.",
      icon: FileEdit,
      color: "border-blue-500",
      textColor: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      number: "02",
      title: "Coordinamos fecha",
      description: "Elegís el día y la hora que te queden más cómodos, incluso fines de semana. Bloqueamos el camión adecuado y el equipo de peones para asegurar disponibilidad absoluta.",
      icon: Calendar,
      color: "border-indigo-500",
      textColor: "text-indigo-400",
      bgColor: "bg-indigo-500/10"
    },
    {
      number: "03",
      title: "Realizamos la mudanza",
      description: "Llegamos puntualmente. Nuestro personal capacitado se encarga del embalaje técnico, el desarme de muebles, la carga cuidadosa y el estibado profesional en el vehículo.",
      icon: Truck,
      color: "border-orange-500",
      textColor: "text-orange-400",
      bgColor: "bg-orange-500/10"
    },
    {
      number: "04",
      title: "Entrega segura",
      description: "Transportamos tu carga por la ruta óptima. Al llegar, descargamos de forma ordenada, rearmamos tus muebles en los ambientes indicados y firmamos la conformidad.",
      icon: CheckCircle,
      color: "border-emerald-500",
      textColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10"
    }
  ];

  return (
    <section id="como-trabajamos" className="py-24 bg-slate-950/20 relative overflow-hidden border-t border-slate-900/50">
      {/* Decorative details */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-sans text-xs md:text-sm text-orange-500 font-bold uppercase tracking-wider">
            ¿Cómo Trabajamos?
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 leading-tight">
            Un proceso simple para un traslado sin estrés
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          <p className="font-sans text-base text-slate-300 mt-6 leading-relaxed">
            Eliminamos las complicaciones de mudarse. Diseñamos un paso a paso transparente y coordinado para que disfrutes del cambio de hogar desde el primer momento.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Central Connecting Line (Horizontal on large screens) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-slate-800 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center lg:items-start lg:text-left group"
                >
                  {/* Step Bubble and Icon */}
                  <div className="flex items-center justify-center lg:justify-between w-full mb-6">
                    <div className={`relative z-10 w-16 h-16 rounded-2xl ${step.bgColor} border-2 ${step.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-6 w-6 ${step.textColor}`} />
                      
                      {/* Step Number Badge */}
                      <span className="absolute -top-3 -right-3 bg-slate-900 text-white font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-slate-950 shadow">
                        {step.number}
                      </span>
                    </div>

                    {/* Desktop incremental line arrows */}
                    {index < 3 && (
                      <span className="hidden lg:block text-slate-700 font-bold text-xl select-none translate-x-1/2 pr-4">
                        →
                      </span>
                    )}
                  </div>

                  {/* Step Copy */}
                  <div className="bg-slate-900/40 lg:bg-transparent border border-slate-800/80 lg:border-none p-6 lg:p-0 rounded-2xl shadow-lg lg:shadow-none max-w-sm lg:max-w-none w-full">
                    <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
