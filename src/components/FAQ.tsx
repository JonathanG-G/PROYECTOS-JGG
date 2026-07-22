import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "¿Cuánto cuesta una mudanza?",
      answer: "El costo de una mudanza depende de varios factores principales: la distancia total a recorrer, el tamaño del camión que se requiera, si se necesitan peones (personal de carga y descarga), y si contratás servicios adicionales de embalaje (plástico burbuja, mantas, film) o desarme de mobiliario. Al completar nuestro formulario interactivo o escribirnos por WhatsApp, te brindamos una cotización fija y transparente, sin sorpresas ni recargos adicionales."
    },
    {
      question: "¿Trabajan los fines de semana?",
      answer: "Sí, trabajamos de lunes a domingos, incluyendo sábados, domingos y feriados. Entendemos que para las familias y empresas la mudanza suele ser más viable durante el fin de semana para no interferir en las actividades laborales y escolares. Recomendamos reservar la fecha con antelación para asegurar disponibilidad de vehículos y peones."
    },
    {
      question: "¿Realizan viajes largos a otras provincias?",
      answer: "¡Sí, totalmente! Realizamos fletes y mudanzas de larga distancia desde Córdoba Capital hacia cualquier ciudad y provincia de la República Argentina. Contamos con todos los permisos interprovinciales obligatorios, habilitaciones de la CNRT, y seguro de carga activa sobre la mercadería transportada para tu tranquilidad absoluta."
    },
    {
      question: "¿Cómo solicito un presupuesto oficial?",
      answer: "Es muy sencillo: podés usar el 'Calculador de Presupuesto' que se encuentra abajo completando tus datos, o simplemente presionar el botón verde de WhatsApp para hablar directamente con nosotros. Te pediremos detalles básicos como el barrio de origen, destino, si hay escaleras o ascensores, y un listado general de los muebles (o fotos). Con eso te enviamos un valor cerrado en menos de 10 minutos."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-950/20 relative overflow-hidden border-t border-slate-900/50">
      {/* Decorative details */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-xs md:text-sm text-orange-500 font-bold uppercase tracking-wider">
            Preguntas Frecuentes
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 leading-tight">
            Despejá tus dudas al instante
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-900/40 border border-slate-800/80 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:border-slate-700/80"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none group"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="h-5.5 w-5.5 text-orange-500 shrink-0" />
                    <span className="font-display font-bold text-white group-hover:text-orange-400 text-base transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 group-hover:text-slate-300 transition-all duration-300 ${
                    isOpen ? "rotate-180 bg-orange-500 text-white" : ""
                  }`}>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 border-t border-slate-800/60 pt-4">
                        <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl text-center mt-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient(circle_at_top,rgba(249,115,22,0.06),rgba(0,0,0,0))" />
          <p className="font-display font-bold text-lg">¿Tenés otra consulta específica?</p>
          <p className="font-sans text-xs text-slate-400 mt-2">Escribinos directamente. Respondemos consultas particulares y corporativas al instante.</p>
          <a
            href="https://wa.me/5493516828397?text=Hola%20Fletes%20y%20Mudanzas%20Mariano%2C%20tengo%20una%20pregunta%20adicional%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl mt-5 shadow-lg shadow-emerald-500/10 hover:scale-[1.02] transition-all text-xs uppercase tracking-wider cursor-pointer"
          >
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
