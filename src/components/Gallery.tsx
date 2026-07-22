import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, Image as ImageIcon } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "camiones" | "mudanzas" | "embalaje";
  title: string;
  description: string;
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"todos" | "camiones" | "mudanzas" | "embalaje">("todos");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: "hero-truck",
      src: "/src/assets/images/moving_truck_hero_1784151584810.jpg",
      alt: "Camión moderno de Mudanzas La Cañada",
      category: "camiones",
      title: "Camión de Larga Distancia",
      description: "Unidad equipada con rastreo satelital y suspensión neumática para máxima estabilidad."
    },
    {
      id: "res-moving",
      src: "/src/assets/images/residential_moving_1784151596954.jpg",
      alt: "Personal cargando un camión de mudanza",
      category: "mudanzas",
      title: "Mudanza Residencial Activa",
      description: "Personal especializado estibando cajas con mantas protectoras y correas tensoras."
    },
    {
      id: "fragile-pack",
      src: "/src/assets/images/fragile_packing_1784151609782.jpg",
      alt: "Embalaje de objetos frágiles",
      category: "embalaje",
      title: "Embalaje de Cristalería",
      description: "Protección individual con plástico burbuja de alta densidad para objetos delicados."
    },
    {
      id: "office-mov",
      src: "/src/assets/images/office_moving_1784151620682.jpg",
      alt: "Mudanza corporativa",
      category: "mudanzas",
      title: "Mudanza Corporativa y Oficinas",
      description: "Organización de mobiliario de oficina y equipamiento informático embalado a medida."
    },
    {
      id: "fleet-trucks",
      src: "/src/assets/images/truck_fleet_1784151633076.jpg",
      alt: "Flota de camiones de mudanza",
      category: "camiones",
      title: "Nuestra Flota Logística",
      description: "Camiones habilitados y habilitaciones CNRT correspondientes para el tránsito interprovincial."
    }
  ];

  const filteredImages = activeTab === "todos" 
    ? images 
    : images.filter(img => img.category === activeTab);

  const tabOptions = [
    { id: "todos", label: "Todos" },
    { id: "camiones", label: "Camiones" },
    { id: "mudanzas", label: "Mudanzas" },
    { id: "embalaje", label: "Embalaje y Cuidado" },
  ] as const;

  return (
    <section id="galeria" className="py-24 bg-slate-950/20 relative border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-xs md:text-sm text-orange-500 font-bold uppercase tracking-wider">
            Nuestra Galería en Acción
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 leading-tight">
            Transparencia en cada tarea que realizamos
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          <p className="font-sans text-base text-slate-300 mt-6 leading-relaxed">
            Fotografías reales de nuestras unidades, embalajes técnicos y personal en plena jornada laboral. Calidad garantizada que podés ver con tus propios ojos.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabOptions.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-sans font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 border cursor-pointer ${
                activeTab === tab.id
                  ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/10"
                  : "bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Grid with Motion Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-900/40 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-800/80 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm text-white">
                      <Eye className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <span className="inline-block bg-orange-500 text-white font-sans text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2">
                      {image.category === "camiones" ? "Camión" : image.category === "mudanzas" ? "Mudanza" : "Embalaje"}
                    </span>
                    <h4 className="font-display font-bold text-lg text-white leading-tight">
                      {image.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-300 leading-relaxed mt-1.5 line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-slate-950/80 hover:bg-slate-950 text-white p-2.5 rounded-full border border-slate-800 transition-colors focus:outline-none"
                aria-label="Cerrar modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Image Section */}
                <div className="md:col-span-8 bg-black flex items-center justify-center aspect-4/3 md:aspect-auto md:h-[500px]">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Information Section */}
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-slate-900">
                  <div>
                    <div className="flex items-center space-x-2 text-orange-400 mb-3">
                      <ImageIcon className="h-4 w-4" />
                      <span className="font-mono text-xs uppercase font-bold tracking-wider">Detalle del Servicio</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white leading-tight">
                      {selectedImage.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-orange-500 my-4" />
                    <p className="font-sans text-sm text-slate-300 leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <p className="text-xs text-slate-400">¿Querés un presupuesto para un servicio similar?</p>
                    <a
                      href={`https://wa.me/5493512345678?text=Hola%20Mudanzas%20La%20Ca%C3%B1ada%2C%20vi%20la%20foto%20de%20%22${encodeURIComponent(selectedImage.title)}%22%20y%20quiero%20solicitar%20un%20presupuesto.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-5 rounded-xl text-xs w-full shadow-md mt-3 transition-colors"
                    >
                      Consultar este servicio
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
