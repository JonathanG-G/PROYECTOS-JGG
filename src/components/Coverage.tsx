import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Compass, ArrowUpRight, ShieldAlert, Navigation } from "lucide-react";

interface RouteNode {
  id: string;
  name: string;
  distance: string;
  time: string;
  region: string;
  cx: string; // SVG x
  cy: string; // SVG y
}

export default function Coverage() {
  const [selectedRoute, setSelectedRoute] = useState<RouteNode | null>(null);

  const mainRoutes: RouteNode[] = [
    {
      id: "buenos-aires",
      name: "Buenos Aires",
      distance: "700 km",
      time: "12 - 24 hs",
      region: "Región Pampeana",
      cx: "62%",
      cy: "60%"
    },
    {
      id: "santa-fe",
      name: "Rosario / Santa Fe",
      distance: "400 km",
      time: "8 - 12 hs",
      region: "Litoral",
      cx: "58%",
      cy: "45%"
    },
    {
      id: "mendoza",
      name: "Mendoza / San Juan",
      distance: "600 km",
      time: "12 - 18 hs",
      region: "Región de Cuyo",
      cx: "32%",
      cy: "52%"
    },
    {
      id: "tucuman",
      name: "Tucumán / Salta / Jujuy",
      distance: "600 - 850 km",
      time: "12 - 24 hs",
      region: "Norte Argentino (NOA)",
      cx: "38%",
      cy: "18%"
    },
    {
      id: "neuquen",
      name: "Neuquén / Río Negro",
      distance: "1100 km",
      time: "24 - 36 hs",
      region: "Patagonia Norte",
      cx: "34%",
      cy: "80%"
    },
    {
      id: "patagonia-sur",
      name: "Chubut / Santa Cruz",
      distance: "1600 - 2400 km",
      time: "48 - 72 hs",
      region: "Patagonia Sur",
      cx: "28%",
      cy: "92%"
    }
  ];

  return (
    <section id="cobertura" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900/50">
      {/* Dynamic background element */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_left_bottom,rgba(249,115,22,0.05),rgba(0,0,0,0))" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content Description */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-xs md:text-sm text-orange-400 font-bold uppercase tracking-wider">
              Área de Cobertura Federal
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 leading-tight">
              Desde el corazón de Córdoba a todo el territorio nacional
            </h2>
            <div className="w-16 h-1 bg-orange-500 mt-6 rounded-full" />
            
            <p className="font-sans text-base text-slate-300 mt-6 leading-relaxed">
              Nuestra base operativa se encuentra estratégicamente ubicada en la Ciudad de Córdoba. Esto nos otorga una ventaja geográfica única para conectar de forma óptima el centro del país con todas las provincias argentinas.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="p-1.5 bg-orange-500/10 rounded-lg text-orange-400 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Origen Córdoba Capital</h4>
                  <p className="text-sm text-slate-400">Coordinamos mudanzas residenciales y fletes de carga general saliendo desde cualquier barrio de Córdoba Capital y Gran Córdoba.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Destino Federal Sin Límites</h4>
                  <p className="text-sm text-slate-400">Viajes directos y compartidos a todas las provincias. Cumplimos con todas las normativas fiscales, guías de transporte interprovincial y seguros requeridos.</p>
                </div>
              </div>
            </div>

            {/* Interactive Selector Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 mt-10">
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest block mb-1">
                Mapa Interactivo
              </span>
              <p className="text-xs text-slate-300 mb-4">
                Hace clic o pasa el mouse sobre los nodos del mapa para ver los tiempos de tránsito y distancias desde Córdoba Capital.
              </p>

              <AnimatePresence mode="wait">
                {selectedRoute ? (
                  <motion.div
                    key={selectedRoute.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-2 gap-4 border-t border-slate-700/50 pt-4"
                  >
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-medium">Destino</span>
                      <p className="text-base font-bold text-white mt-0.5">{selectedRoute.name}</p>
                      <span className="text-[10px] text-slate-400">{selectedRoute.region}</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-medium">Distancia / Tiempo</span>
                      <p className="text-sm font-bold text-orange-400 mt-0.5">{selectedRoute.distance}</p>
                      <p className="text-xs text-slate-300">Aprox: {selectedRoute.time}</p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="border-t border-slate-700/50 pt-4 text-center py-2">
                    <p className="text-sm text-slate-400 italic">Seleccioná una ruta en el mapa para calcular tiempos...</p>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Right: Modern Interactive Map Representation */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="relative w-full max-w-[420px] aspect-[4/5] bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-2xl overflow-hidden flex flex-col justify-between group">
              <div className="absolute inset-0 bg-radial-gradient(at_center_right,rgba(37,99,235,0.03),rgba(0,0,0,0))" />
              
              {/* Top bar header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 z-10">
                <div className="flex items-center space-x-2">
                  <Compass className="h-5 w-5 text-orange-500 animate-spin-slow" />
                  <span className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">COOR_HUB: CÓRDOBA</span>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                  ● Sistema Activo
                </span>
              </div>

              {/* Central Map Canvas */}
              <div className="relative flex-1 my-4 flex items-center justify-center">
                
                {/* SVG lines radiating from Córdoba */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  {/* Central Node is Cordoba Capital: let's set it as 50%, 38% */}
                  
                  {/* Connecting radiating lines */}
                  {mainRoutes.map((route) => (
                    <g key={`line-${route.id}`}>
                      {/* Animated dash line */}
                      <line
                        x1="50%"
                        y1="38%"
                        x2={route.cx}
                        y2={route.cy}
                        stroke="#f97316"
                        strokeWidth="1.5"
                        strokeOpacity={selectedRoute?.id === route.id ? "0.9" : "0.3"}
                        strokeDasharray={selectedRoute?.id === route.id ? "4 2" : "5 5"}
                        className={selectedRoute?.id === route.id ? "animate-dash" : ""}
                        style={{
                          transition: "stroke-opacity 0.3s ease, stroke-width 0.3s ease"
                        }}
                      />
                    </g>
                  ))}
                </svg>

                {/* Central Córdoba Node Pin */}
                <div 
                  className="absolute p-1 rounded-full z-30 cursor-default"
                  style={{ left: "50%", top: "38%", transform: "translate(-50%, -50%)" }}
                >
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-orange-500/30 animate-ping opacity-75" />
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-orange-500/60 animate-ping" />
                  <div className="relative bg-orange-500 border-2 border-white rounded-full h-3 w-3 shadow-lg flex items-center justify-center" />
                  <div className="absolute top-4 left-4 bg-slate-900 border border-slate-700 rounded py-0.5 px-1.5 text-[9px] font-bold text-white shadow whitespace-nowrap">
                    Córdoba Capital (HUB)
                  </div>
                </div>

                {/* Route Nodes Pinpoints */}
                {mainRoutes.map((route) => {
                  const isSelected = selectedRoute?.id === route.id;
                  return (
                    <button
                      key={`pin-${route.id}`}
                      onMouseEnter={() => setSelectedRoute(route)}
                      onClick={() => setSelectedRoute(route)}
                      className="absolute p-2 rounded-full cursor-pointer z-20 group/pin transition-all focus:outline-none"
                      style={{ 
                        left: route.cx, 
                        top: route.cy, 
                        transform: "translate(-50%, -50%)" 
                      }}
                    >
                      <span className={`absolute inline-flex h-6 w-6 rounded-full bg-blue-500/20 transition-all ${
                        isSelected ? "scale-150 opacity-100 animate-pulse" : "scale-100 opacity-0 group-hover/pin:opacity-100 group-hover/pin:scale-125"
                      }`} />
                      <div className={`border-2 rounded-full h-2.5 w-2.5 shadow transition-all duration-300 ${
                        isSelected 
                          ? "bg-blue-400 border-white scale-125" 
                          : "bg-slate-700 border-slate-400 group-hover/pin:bg-blue-400 group-hover/pin:border-white"
                      }`} />
                      <div className={`absolute top-4 left-4 rounded py-0.5 px-1.5 text-[8px] font-semibold shadow transition-all duration-300 whitespace-nowrap border ${
                        isSelected 
                          ? "bg-blue-600 border-blue-500 text-white font-bold opacity-100 scale-105" 
                          : "bg-slate-800 border-slate-700 text-slate-300 opacity-60 group-hover/pin:opacity-100"
                      }`}>
                        {route.name}
                      </div>
                    </button>
                  );
                })}

                {/* Aesthetic Map Coordinates / Shape Overlay for realism */}
                <div className="absolute inset-0 border border-slate-800/40 rounded-2xl pointer-events-none flex items-center justify-center">
                  <div className="w-4/5 h-4/5 rounded-full border border-dashed border-slate-900/40 animate-spin-slow" />
                </div>

              </div>

              {/* Bottom stats bar */}
              <div className="flex justify-between items-center border-t border-slate-800/80 pt-3 text-[10px] text-slate-500 font-mono z-10">
                <span>RUTAS HAB.: 100% DISP.</span>
                <span>CBA - ARGENTINA</span>
              </div>
            </div>

            {/* Back glowing light behind map */}
            <div className="absolute -z-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
