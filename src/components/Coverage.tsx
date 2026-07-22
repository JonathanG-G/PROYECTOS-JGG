import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Compass, 
  PawPrint, 
  Search, 
  Truck, 
  Clock, 
  Route, 
  Calendar, 
  ChevronRight, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

export interface ProvinceNode {
  id: string;
  name: string;
  capital: string;
  distance: string;
  timeDirecto: string;
  timeCompartido: string;
  route: string;
  region: "Centro / Pampeana" | "NOA" | "NEA" | "Cuyo" | "Patagonia";
  frecuencia: string;
  cx: string; // percentage for SVG
  cy: string; // percentage for SVG
  destacado?: boolean;
}

export const ALL_PROVINCES: ProvinceNode[] = [
  // HUB
  {
    id: "cordoba",
    name: "Córdoba",
    capital: "Córdoba Capital (HUB)",
    distance: "0 km",
    timeDirecto: "En el día / Inmediato",
    timeCompartido: "Inmediato",
    route: "Red Local y Provincial (Av. Circunvalación)",
    region: "Centro / Pampeana",
    frecuencia: "Salidas diarias continuas",
    cx: "48%",
    cy: "35%",
    destacado: true
  },
  // CENTRO / PAMPEANA
  {
    id: "buenos-aires",
    name: "Buenos Aires / CABA",
    capital: "CABA / La Plata / GBA",
    distance: "700 km",
    timeDirecto: "10 - 12 hs",
    timeCompartido: "24 - 48 hs",
    route: "Ruta Nacional 9 (Autopista Rosario - Baires)",
    region: "Centro / Pampeana",
    frecuencia: "Diaria (Múltiples unidades)",
    cx: "65%",
    cy: "48%",
    destacado: true
  },
  {
    id: "santa-fe",
    name: "Santa Fe",
    capital: "Rosario / Santa Fe Capital",
    distance: "400 km",
    timeDirecto: "5 - 7 hs",
    timeCompartido: "24 hs",
    route: "Ruta Nacional 19 / RN 9",
    region: "Centro / Pampeana",
    frecuencia: "Diaria",
    cx: "60%",
    cy: "36%",
    destacado: true
  },
  {
    id: "entre-rios",
    name: "Entre Ríos",
    capital: "Paraná / Concordia / Gualeguaychú",
    distance: "550 km",
    timeDirecto: "7 - 9 hs",
    timeCompartido: "24 - 48 hs",
    route: "Ruta Nacional 19 + RN 12",
    region: "Centro / Pampeana",
    frecuencia: "3 salidas semanales",
    cx: "66%",
    cy: "35%"
  },
  {
    id: "la-pampa",
    name: "La Pampa",
    capital: "Santa Rosa / General Pico",
    distance: "600 km",
    timeDirecto: "7 - 9 hs",
    timeCompartido: "48 hs",
    route: "Ruta Nacional 35",
    region: "Centro / Pampeana",
    frecuencia: "2 salidas semanales",
    cx: "46%",
    cy: "52%"
  },

  // CUYO
  {
    id: "mendoza",
    name: "Mendoza",
    capital: "Mendoza Capital / San Rafael",
    distance: "610 km",
    timeDirecto: "8 - 10 hs",
    timeCompartido: "24 - 48 hs",
    route: "Ruta Nacional 20 + RN 7",
    region: "Cuyo",
    frecuencia: "4 salidas semanales",
    cx: "26%",
    cy: "42%",
    destacado: true
  },
  {
    id: "san-luis",
    name: "San Luis",
    capital: "San Luis / Villa Mercedes",
    distance: "410 km",
    timeDirecto: "5 - 6 hs",
    timeCompartido: "24 hs",
    route: "Ruta Nacional 20 / RN 148",
    region: "Cuyo",
    frecuencia: "Diaria",
    cx: "38%",
    cy: "42%"
  },
  {
    id: "san-juan",
    name: "San Juan",
    capital: "San Juan Capital",
    distance: "580 km",
    timeDirecto: "8 - 9 hs",
    timeCompartido: "24 - 48 hs",
    route: "Ruta Nacional 20",
    region: "Cuyo",
    frecuencia: "3 salidas semanales",
    cx: "26%",
    cy: "33%"
  },

  // NOA
  {
    id: "tucuman",
    name: "Tucumán",
    capital: "San Miguel de Tucumán",
    distance: "560 km",
    timeDirecto: "7 - 8 hs",
    timeCompartido: "24 - 48 hs",
    route: "Ruta Nacional 9",
    region: "NOA",
    frecuencia: "Diaria",
    cx: "40%",
    cy: "18%",
    destacado: true
  },
  {
    id: "salta",
    name: "Salta",
    capital: "Salta Capital / Cafayate",
    distance: "860 km",
    timeDirecto: "11 - 13 hs",
    timeCompartido: "48 hs",
    route: "Ruta Nacional 9 / RN 34",
    region: "NOA",
    frecuencia: "3 salidas semanales",
    cx: "38%",
    cy: "12%"
  },
  {
    id: "jujuy",
    name: "Jujuy",
    capital: "San Salvador de Jujuy",
    distance: "980 km",
    timeDirecto: "13 - 15 hs",
    timeCompartido: "48 - 72 hs",
    route: "Ruta Nacional 9 / RN 34",
    region: "NOA",
    frecuencia: "2 salidas semanales",
    cx: "36%",
    cy: "8%"
  },
  {
    id: "santiago-del-estero",
    name: "Santiago del Estero",
    capital: "Santiago Capital / La Banda",
    distance: "440 km",
    timeDirecto: "5 - 6 hs",
    timeCompartido: "24 hs",
    route: "Ruta Nacional 9",
    region: "NOA",
    frecuencia: "Diaria",
    cx: "49%",
    cy: "20%"
  },
  {
    id: "catamarca",
    name: "Catamarca",
    capital: "San Fernando del Valle",
    distance: "440 km",
    timeDirecto: "6 - 7 hs",
    timeCompartido: "24 - 48 hs",
    route: "Ruta Nacional 60 / RN 38",
    region: "NOA",
    frecuencia: "3 salidas semanales",
    cx: "33%",
    cy: "21%"
  },
  {
    id: "la-rioja",
    name: "La Rioja",
    capital: "La Rioja Capital / Chilecito",
    distance: "430 km",
    timeDirecto: "5 - 6 hs",
    timeCompartido: "24 - 48 hs",
    route: "Ruta Nacional 38",
    region: "NOA",
    frecuencia: "3 salidas semanales",
    cx: "30%",
    cy: "27%"
  },

  // NEA
  {
    id: "chaco",
    name: "Chaco",
    capital: "Resistencia / Saenz Peña",
    distance: "880 km",
    timeDirecto: "11 - 12 hs",
    timeCompartido: "48 hs",
    route: "Ruta Nacional 16 / RN 89",
    region: "NEA",
    frecuencia: "3 salidas semanales",
    cx: "63%",
    cy: "20%"
  },
  {
    id: "corrientes",
    name: "Corrientes",
    capital: "Corrientes Capital / Goya",
    distance: "870 km",
    timeDirecto: "11 - 12 hs",
    timeCompartido: "48 hs",
    route: "Ruta Nacional 12 / RN 16",
    region: "NEA",
    frecuencia: "3 salidas semanales",
    cx: "67%",
    cy: "26%"
  },
  {
    id: "misiones",
    name: "Misiones",
    capital: "Posadas / Puerto Iguazú",
    distance: "1100 km",
    timeDirecto: "14 - 16 hs",
    timeCompartido: "48 - 72 hs",
    route: "Ruta Nacional 12 / RN 14",
    region: "NEA",
    frecuencia: "2 salidas semanales",
    cx: "82%",
    cy: "19%"
  },
  {
    id: "formosa",
    name: "Formosa",
    capital: "Formosa Capital / Clorinda",
    distance: "1050 km",
    timeDirecto: "13 - 15 hs",
    timeCompartido: "48 - 72 hs",
    route: "Ruta Nacional 11 / RN 81",
    region: "NEA",
    frecuencia: "2 salidas semanales",
    cx: "65%",
    cy: "13%"
  },

  // PATAGONIA
  {
    id: "neuquen",
    name: "Neuquén",
    capital: "Neuquén Capital / San Martín de los Andes",
    distance: "1100 km",
    timeDirecto: "13 - 15 hs",
    timeCompartido: "48 - 72 hs",
    route: "Ruta Nacional 151 / RN 22",
    region: "Patagonia",
    frecuencia: "3 salidas semanales",
    cx: "32%",
    cy: "58%",
    destacado: true
  },
  {
    id: "rio-negro",
    name: "Río Negro",
    capital: "Bariloche / Viedma / Cipolletti",
    distance: "1150 km",
    timeDirecto: "14 - 16 hs",
    timeCompartido: "48 - 72 hs",
    route: "Ruta Nacional 22 / RN 237",
    region: "Patagonia",
    frecuencia: "3 salidas semanales",
    cx: "38%",
    cy: "65%"
  },
  {
    id: "chubut",
    name: "Chubut",
    capital: "Comodoro Rivadavia / Puerto Madryn / Rawson",
    distance: "1700 km",
    timeDirecto: "20 - 24 hs",
    timeCompartido: "72 - 96 hs",
    route: "Ruta Nacional 3 / RN 25",
    region: "Patagonia",
    frecuencia: "Salidas semanales",
    cx: "34%",
    cy: "75%"
  },
  {
    id: "santa-cruz",
    name: "Santa Cruz",
    capital: "Río Gallegos / El Calafate",
    distance: "2400 km",
    timeDirecto: "28 - 32 hs",
    timeCompartido: "96 - 120 hs",
    route: "Ruta Nacional 3 / RN 40",
    region: "Patagonia",
    frecuencia: "Salidas semanales",
    cx: "30%",
    cy: "86%"
  },
  {
    id: "tierra-del-fuego",
    name: "Tierra del Fuego",
    capital: "Ushuaia / Río Grande",
    distance: "3000 km",
    timeDirecto: "36 - 48 hs",
    timeCompartido: "5 a 7 días",
    route: "Ruta Nacional 3 + Cruce Marítimo de Balsa",
    region: "Patagonia",
    frecuencia: "Salidas programadas quincenales",
    cx: "35%",
    cy: "94%"
  }
];

type RegionFilter = "Todas" | "Centro / Pampeana" | "NOA" | "NEA" | "Cuyo" | "Patagonia";

export default function Coverage() {
  const [selectedRoute, setSelectedRoute] = useState<ProvinceNode>(
    ALL_PROVINCES.find((p) => p.id === "buenos-aires") || ALL_PROVINCES[1]
  );
  const [activeRegion, setActiveRegion] = useState<RegionFilter>("Todas");
  const [searchQuery, setSearchQuery] = useState("");

  const regions: RegionFilter[] = [
    "Todas",
    "Centro / Pampeana",
    "NOA",
    "NEA",
    "Cuyo",
    "Patagonia"
  ];

  const filteredProvinces = useMemo(() => {
    return ALL_PROVINCES.filter((p) => {
      const matchesRegion = activeRegion === "Todas" || p.region === activeRegion;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.route.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [activeRegion, searchQuery]);

  const whatsappNumber = "5493516828397";

  const getWhatsAppQuoteUrl = (province: ProvinceNode) => {
    const text = `Hola Fletes y Mudanzas Mariano, quisiera consultar cotización y disponibilidad para un traslado hacia ${province.name} (${province.capital}).`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cobertura" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900/50">
      {/* Dynamic background element */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_left_bottom,rgba(249,115,22,0.06),rgba(0,0,0,0))" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-sans text-xs md:text-sm text-orange-400 font-bold uppercase tracking-widest inline-flex items-center gap-1.5 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Cobertura Nacional Completa
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 leading-tight">
            Mapa Federal: Las 23 Provincias de Argentina
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-5 rounded-full" />
          <p className="font-sans text-base text-slate-300 mt-5 leading-relaxed">
            Saliendo desde nuestro <strong className="text-orange-400 font-semibold">HUB central en Córdoba Capital</strong>, conectamos de forma directa y eficiente con cada rincón del país. Seleccioná cualquier provincia para ver distancias, rutas principales y tiempos estimados.
          </p>
        </div>

        {/* Feature Highlights Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="flex items-center space-x-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <div className="p-2.5 bg-orange-500/10 rounded-xl text-orange-400 shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Origen Córdoba Capital</h4>
              <p className="text-xs text-slate-400">Punto estratégico equidistante a todo el país.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
              <PawPrint className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Directos, Compartidos y Mascotas 🐾</h4>
              <p className="text-xs text-slate-400">Viajes exclusivos, cargas consolidadas y traslado de mascotas.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Documentación & Seguros</h4>
              <p className="text-xs text-slate-400">Guías interprovinciales y seguro de carga respaldado.</p>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-8">
          
          {/* Region Tabs */}
          <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeRegion === region
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {region} {region === "Todas" ? `(${ALL_PROVINCES.length})` : ""}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar provincia o ciudad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Main Grid: Interactive Map (Left) + Detailed Province Info Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Interactive Map Canvas */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-[4/5] bg-slate-950 rounded-3xl border border-slate-800/90 p-5 shadow-2xl overflow-hidden flex flex-col justify-between group">
              <div className="absolute inset-0 bg-radial-gradient(at_center_right,rgba(37,99,235,0.05),rgba(0,0,0,0))" />
              
              {/* Top bar header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 z-10">
                <div className="flex items-center space-x-2">
                  <Compass className="h-5 w-5 text-orange-500 animate-spin-slow" />
                  <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase font-semibold">
                    HUB CÓRDOBA: MAPA ARGENTINO
                  </span>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                  ● 23 Provincias Habilitadas
                </span>
              </div>

              {/* Central Map Canvas Area */}
              <div className="relative flex-1 my-3 flex items-center justify-center select-none overflow-hidden">
                
                {/* Argentina Background SVG Outline Graphic */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Argentina stylized boundary box and guide paths */}
                  <path
                    d="M 35 5 L 45 6 L 65 12 L 85 18 L 70 28 L 68 36 L 66 48 L 50 54 L 35 60 L 32 75 L 30 88 L 35 96 L 30 98"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                  />
                  <path
                    d="M 35 5 L 30 18 L 26 33 L 26 42 L 32 58 L 34 75 L 30 86 L 35 94"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                  />
                </svg>

                {/* SVG Connecting Ray Lines radiating from Córdoba HUB */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  {filteredProvinces.map((route) => {
                    const isSelected = selectedRoute?.id === route.id;
                    if (route.id === "cordoba") return null;

                    return (
                      <g key={`line-${route.id}`}>
                        <line
                          x1="48%"
                          y1="35%"
                          x2={route.cx}
                          y2={route.cy}
                          stroke={isSelected ? "#f97316" : "#3b82f6"}
                          strokeWidth={isSelected ? "2.5" : "1"}
                          strokeOpacity={isSelected ? "0.95" : "0.25"}
                          strokeDasharray={isSelected ? "4 2" : "3 3"}
                          className={isSelected ? "animate-dash" : ""}
                          style={{
                            transition: "all 0.3s ease"
                          }}
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* HUB Pin: Córdoba Capital */}
                <div 
                  className="absolute p-1 rounded-full z-30 cursor-pointer"
                  style={{ left: "48%", top: "35%", transform: "translate(-50%, -50%)" }}
                  onClick={() => setSelectedRoute(ALL_PROVINCES[0])}
                  title="Córdoba Capital - HUB Central"
                >
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-orange-500/30 animate-ping opacity-75" />
                  <span className="absolute inline-flex h-5 w-5 rounded-full bg-orange-500/60 animate-ping" />
                  <div className="relative bg-orange-500 border-2 border-white rounded-full h-3.5 w-3.5 shadow-lg flex items-center justify-center" />
                  <div className="absolute top-4 -left-6 bg-slate-900 border border-orange-500/60 rounded py-0.5 px-1.5 text-[9px] font-bold text-orange-400 shadow whitespace-nowrap z-40">
                    HUB CÓRDOBA
                  </div>
                </div>

                {/* Interactive Pins for Filtered Provinces */}
                {filteredProvinces.map((route) => {
                  if (route.id === "cordoba") return null;
                  const isSelected = selectedRoute?.id === route.id;

                  return (
                    <button
                      key={`pin-${route.id}`}
                      onMouseEnter={() => setSelectedRoute(route)}
                      onClick={() => setSelectedRoute(route)}
                      className="absolute p-1.5 rounded-full cursor-pointer z-20 group/pin transition-all focus:outline-none"
                      style={{ 
                        left: route.cx, 
                        top: route.cy, 
                        transform: "translate(-50%, -50%)" 
                      }}
                      aria-label={`Ver ruta a ${route.name}`}
                    >
                      <span className={`absolute inline-flex h-6 w-6 rounded-full transition-all ${
                        isSelected 
                          ? "bg-orange-500/40 scale-150 animate-pulse" 
                          : "bg-blue-500/20 scale-100 opacity-0 group-hover/pin:opacity-100 group-hover/pin:scale-125"
                      }`} />
                      <div className={`border-2 rounded-full h-2.5 w-2.5 shadow transition-all duration-300 ${
                        isSelected 
                          ? "bg-orange-400 border-white scale-125" 
                          : "bg-slate-700 border-slate-300 group-hover/pin:bg-blue-400 group-hover/pin:border-white"
                      }`} />
                      
                      {/* Label on Hover / Active */}
                      <div className={`absolute top-3 left-3 rounded py-0.5 px-1.5 text-[8px] font-semibold shadow transition-all duration-200 whitespace-nowrap border pointer-events-none z-30 ${
                        isSelected 
                          ? "bg-orange-600 border-orange-400 text-white font-bold opacity-100 scale-105 shadow-orange-500/20" 
                          : "bg-slate-900/90 border-slate-700 text-slate-300 opacity-0 group-hover/pin:opacity-100"
                      }`}>
                        {route.name}
                      </div>
                    </button>
                  );
                })}

                {/* Subtle Grid Radar Overlay */}
                <div className="absolute inset-0 border border-slate-800/30 rounded-2xl pointer-events-none flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border border-dashed border-slate-800/40 animate-spin-slow" />
                </div>

              </div>

              {/* Bottom stats bar */}
              <div className="flex justify-between items-center border-t border-slate-800/80 pt-2.5 text-[10px] text-slate-400 font-mono z-10">
                <span className="flex items-center gap-1">
                  <Route className="w-3 h-3 text-orange-400" />
                  <span>SELECCIONADO: <strong className="text-white">{selectedRoute.name}</strong></span>
                </span>
                <span>{selectedRoute.distance}</span>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-400 mt-3 text-center">
              💡 Hacé clic en cualquier punto del mapa o elegí una provincia de la lista para ver detalles.
            </p>
          </div>

          {/* RIGHT: Detailed Province Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRoute.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Background Accent glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Region Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                    {selectedRoute.region}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    ID: {selectedRoute.id.toUpperCase()}
                  </span>
                </div>

                {/* Title & Capital */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {selectedRoute.name}
                </h3>
                <p className="text-sm text-slate-300 font-medium mt-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                  {selectedRoute.capital}
                </p>

                <div className="w-full h-px bg-slate-800 my-6" />

                {/* Key Metrics Grid */}
                <div className="space-y-4">
                  
                  {/* Distance */}
                  <div className="flex items-start justify-between bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-orange-500/10 text-orange-400 rounded-xl">
                        <Route className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">Distancia desde Córdoba</span>
                        <span className="text-xs text-slate-500">Origen Córdoba Capital</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-white font-mono">{selectedRoute.distance}</span>
                  </div>

                  {/* Route Name */}
                  <div className="flex items-start justify-between bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl">
                        <Compass className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">Ruta Principal</span>
                        <span className="text-xs text-slate-300 font-semibold">{selectedRoute.route}</span>
                      </div>
                    </div>
                  </div>

                  {/* Times Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-950/60 rounded-2xl p-3.5 border border-slate-800/80">
                      <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-[11px] font-bold uppercase">Viaje Directo</span>
                      </div>
                      <p className="text-sm font-bold text-white">{selectedRoute.timeDirecto}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Exclusivo y a medida</p>
                    </div>

                    <div className="bg-slate-950/60 rounded-2xl p-3.5 border border-slate-800/80">
                      <div className="flex items-center space-x-2 text-blue-400 mb-1">
                        <Truck className="h-4 w-4" />
                        <span className="text-[11px] font-bold uppercase">Compartido</span>
                      </div>
                      <p className="text-sm font-bold text-white">{selectedRoute.timeCompartido}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Económico y consolidado</p>
                    </div>
                  </div>

                  {/* Frecuencia */}
                  <div className="flex items-center space-x-2 text-xs text-slate-300 bg-slate-800/40 px-3.5 py-2.5 rounded-xl border border-slate-700/40">
                    <Calendar className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>Frecuencia: <strong>{selectedRoute.frecuencia}</strong></span>
                  </div>

                  {/* Pet Friendly Tag */}
                  <div className="flex items-center space-x-2 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2.5 rounded-xl">
                    <PawPrint className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Servicio Pet Friendly disponible para traslado de mascotas a {selectedRoute.name}.</span>
                  </div>

                </div>

                {/* CTA Quote Button */}
                <a
                  href={getWhatsAppQuoteUrl(selectedRoute)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02] cursor-pointer text-sm"
                >
                  <span>Cotizar viaje a {selectedRoute.name} por WhatsApp</span>
                  <ChevronRight className="h-4 w-4" />
                </a>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* PROVINCES GRID LIST (For easy browsing of all 23 provinces) */}
        <div className="mt-16 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                Listado de Provincias ({filteredProvinces.length})
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Tocá cualquier provincia para verla en detalle en el mapa interactivo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredProvinces.map((province) => {
              const isSelected = selectedRoute.id === province.id;
              return (
                <button
                  key={`card-${province.id}`}
                  onClick={() => {
                    setSelectedRoute(province);
                    // scroll map into view if needed
                    document.getElementById("cobertura")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-left p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-orange-500/15 border-orange-500 text-white shadow-md shadow-orange-500/10"
                      : "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase">
                      {province.region.split("/")[0]}
                    </span>
                    {province.destacado && (
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    )}
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-white truncate">
                    {province.name}
                  </h4>
                  <p className="text-[11px] text-orange-400 font-mono mt-1">
                    {province.distance}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

