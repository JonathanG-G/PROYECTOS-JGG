import React from "react";
import { motion } from "motion/react";
import { 
  Award, 
  Clock, 
  UserCheck, 
  FileText, 
  Map, 
  ShieldCheck, 
  Users, 
  TrendingDown 
} from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      id: "experiencia",
      title: "Más de 10 años de experiencia",
      description: "Llevamos una década liderando el mercado de fletes y mudanzas en Córdoba, acumulando experiencia en todo tipo de traslados complejos.",
      icon: Award,
      badge: "+10 Años",
    },
    {
      id: "puntualidad",
      title: "Puntualidad garantizada",
      description: "Entendemos el valor de tu tiempo. Coordinamos horarios estrictos y cumplimos con absoluta rigurosidad en las salidas y llegadas.",
      icon: Clock,
      badge: "Eficiente",
    },
    {
      id: "atencion",
      title: "Atención 100% personalizada",
      description: "Te asignamos un asesor exclusivo desde la cotización hasta la descarga final para responder todas tus dudas en tiempo real.",
      icon: UserCheck,
      badge: "Humano",
    },
    {
      id: "presupuesto",
      title: "Presupuesto sin cargo",
      description: "Cotizaciones transparentes, detalladas y sin compromiso alguno de contratación. El precio pactado es el precio final.",
      icon: FileText,
      badge: "Gratuito",
    },
    {
      id: "cobertura",
      title: "Cobertura nacional completa",
      description: "Llegamos a cada rincón de Argentina. Unimos Córdoba con Buenos Aires, Santa Fe, Mendoza, Patagonia, Norte y todo el país.",
      icon: Map,
      badge: "Federal",
    },
    {
      id: "cuidado",
      title: "Cuidado de tus pertenencias",
      description: "Utilizamos mantas de mudanza acolchadas, fajas de seguridad y embalajes especiales de alta densidad para proteger tu mobiliario.",
      icon: ShieldCheck,
      badge: "Seguro",
    },
    {
      id: "personal",
      title: "Personal altamente capacitado",
      description: "Nuestro equipo de estibadores y choferes cuenta con amplia trayectoria en manipulación técnica de objetos frágiles y pesados.",
      icon: Users,
      badge: "Expertos",
    },
    {
      id: "precios",
      title: "Precios competitivos",
      description: "Ofrecemos tarifas justas y planes flexibles adaptados a tu presupuesto, sin costos ocultos ni cargos de último momento.",
      icon: TrendingDown,
      badge: "Al Mejor Costo",
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-slate-950/20 relative overflow-hidden border-t border-slate-900/50">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-xs md:text-sm text-orange-500 font-bold uppercase tracking-wider">
            ¿Por qué elegir Mudanzas La Cañada?
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 leading-tight">
            Garantía de tranquilidad en cada kilómetro
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          <p className="font-sans text-base text-slate-300 mt-6 leading-relaxed">
            Nuestros valores son la base de un servicio premium. Nos enfocamos en darte la seguridad de que tus cosas están en las mejores manos posibles.
          </p>
        </div>

        {/* Benefits Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-orange-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-orange-400">
                      {benefit.badge}
                    </span>
                    <IconComponent className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 mt-3 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic statistics bar */}
        <div className="bg-slate-900 rounded-3xl mt-16 p-8 md:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient(at_top_right,rgba(37,99,235,0.08),rgba(0,0,0,0))" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl font-extrabold text-white">10k+</span>
              <span className="font-sans text-xs text-slate-400 font-semibold uppercase tracking-wider mt-2">Mudanzas Exitosas</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl font-extrabold text-orange-500">23</span>
              <span className="font-sans text-xs text-slate-400 font-semibold uppercase tracking-wider mt-2">Provincias Unidas</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl font-extrabold text-white">100%</span>
              <span className="font-sans text-xs text-slate-400 font-semibold uppercase tracking-wider mt-2">Clientes Satisfechos</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl font-extrabold text-orange-500">12+</span>
              <span className="font-sans text-xs text-slate-400 font-semibold uppercase tracking-wider mt-2">Camiones Habilitados</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
