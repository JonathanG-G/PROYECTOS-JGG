import React from "react";
import { motion } from "motion/react";
import { 
  Home, 
  Briefcase, 
  Truck, 
  Compass, 
  Layers, 
  Tv, 
  Package, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: "particulares",
      title: "Mudanzas Particulares",
      description: "Mudamos tu hogar completo de manera rápida y segura. Contamos con embalaje integral, desarmado y peones especializados.",
      icon: Home,
      color: "from-blue-500/10 to-blue-600/5",
      borderColor: "group-hover:border-blue-500/30",
      iconColor: "text-blue-500"
    },
    {
      id: "empresas",
      title: "Mudanzas de Empresas",
      description: "Relocalización integral de oficinas, comercios e industrias sin frenar tu operación. Traslado de servidores y puestos de trabajo.",
      icon: Briefcase,
      color: "from-slate-500/10 to-slate-600/5",
      borderColor: "group-hover:border-slate-500/30",
      iconColor: "text-slate-400"
    },
    {
      id: "locales",
      title: "Fletes Locales",
      description: "Servicio de transporte ágil dentro de Córdoba Capital. Ideal para compras rápidas de materiales o envíos urgentes.",
      icon: Truck,
      color: "from-orange-500/10 to-orange-600/5",
      borderColor: "group-hover:border-orange-500/30",
      iconColor: "text-orange-500"
    },
    {
      id: "nacionales",
      title: "Fletes Nacionales",
      description: "Traslados de media y larga distancia desde Córdoba a cualquier provincia del país. Monitoreo constante de tu mercadería.",
      icon: Compass,
      color: "from-amber-500/10 to-amber-600/5",
      borderColor: "group-hover:border-amber-500/30",
      iconColor: "text-amber-500"
    },
    {
      id: "muebles",
      title: "Traslado de Muebles",
      description: "Especialistas en transporte de sofás, mesas, camas y placares. Desarmamos y armamos tus muebles con herramientas adecuadas.",
      icon: Layers,
      color: "from-indigo-500/10 to-indigo-600/5",
      borderColor: "group-hover:border-indigo-500/30",
      iconColor: "text-indigo-500"
    },
    {
      id: "electro",
      title: "Traslado de Electrodomésticos",
      description: "Cuidado absoluto para heladeras, lavarropas, aires acondicionados y Smart TVs. Embalaje especial para evitar cualquier daño.",
      icon: Tv,
      color: "from-cyan-500/10 to-cyan-600/5",
      borderColor: "group-hover:border-cyan-500/30",
      iconColor: "text-cyan-500"
    },
    {
      id: "cargas",
      title: "Envíos de Cargas",
      description: "Servicio logístico para cargas comerciales y paletizadas de mediana y gran envergadura, con la mayor eficiencia de costo.",
      icon: Package,
      color: "from-violet-500/10 to-violet-600/5",
      borderColor: "group-hover:border-violet-500/30",
      iconColor: "text-violet-500"
    },
    {
      id: "puerta",
      title: "Servicio Puerta a Puerta",
      description: "Retiramos tu mercadería directamente en el punto de origen y la entregamos de mano en mano en el destino final sin intermediarios.",
      icon: ShieldCheck,
      color: "from-emerald-500/10 to-emerald-600/5",
      borderColor: "group-hover:border-emerald-500/30",
      iconColor: "text-emerald-500"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-950/20 relative border-t border-slate-900/50">
      {/* Background designs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-xs md:text-sm text-orange-500 font-bold uppercase tracking-wider">
            Nuestros Servicios Profesionales
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 leading-tight">
            Soluciones de Logística adaptadas a tus necesidades
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          <p className="font-sans text-base text-slate-300 mt-6 leading-relaxed">
            Ya sea una pequeña mudanza de un departamento de un ambiente, o el traslado corporativo completo de una gran empresa a otra provincia, lo resolvemos de manera ágil y profesional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, index) => {
            const IconComponent = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-3xl p-6.5 shadow-lg hover:shadow-orange-500/5 hover:-translate-y-2 transition-all duration-300 ${svc.borderColor} flex flex-col justify-between`}
              >
                <div>
                  {/* Icon Frame */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-6`}>
                    <IconComponent className={`h-6 w-6 ${svc.iconColor}`} />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-orange-400 transition-colors duration-300">
                    {svc.title}
                  </h3>

                  <p className="font-sans text-sm text-slate-400 leading-relaxed mt-3">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60">
                  <button
                    onClick={() => onSelectService(svc.title)}
                    className="flex items-center text-xs font-bold text-slate-300 hover:text-orange-400 transition-colors duration-200 group-hover:translate-x-1 uppercase tracking-wider cursor-pointer"
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
