import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Send, 
  Phone, 
  MapPin, 
  User, 
  MessageSquare, 
  Check, 
  Sparkles, 
  DollarSign,
  Truck,
  FileCheck2,
  AlertCircle
} from "lucide-react";

interface CalculatorFormProps {
  preSelectedService: string;
  onClearPreSelected: () => void;
}

export default function CalculatorForm({ preSelectedService, onClearPreSelected }: CalculatorFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [origin, setOrigin] = useState("Córdoba Capital, Córdoba");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");
  
  // Interactive choices
  const [moveSize, setMoveSize] = useState<string>("monoambiente");
  const [additionalServices, setAdditionalServices] = useState<string[]>(["peones"]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // If a service is pre-selected from above, set it in the message field
  useEffect(() => {
    if (preSelectedService) {
      setMessage(`Hola, me interesa solicitar un presupuesto especialmente para el servicio de: ${preSelectedService}.`);
      
      // Auto adjust move size selection based on clicked service
      if (preSelectedService.toLowerCase().includes("empresa") || preSelectedService.toLowerCase().includes("oficina")) {
        setMoveSize("oficina");
      } else if (preSelectedService.toLowerCase().includes("electro") || preSelectedService.toLowerCase().includes("mueble")) {
        setMoveSize("flete-chico");
      } else if (preSelectedService.toLowerCase().includes("nacionales") || preSelectedService.toLowerCase().includes("cargas")) {
        setMoveSize("flete-grande");
      }
    }
  }, [preSelectedService]);

  const sizes = [
    { id: "flete-chico", label: "Flete Chico / Traslado de Mueble", basePrice: "25.000", description: "Sillón, heladera, sommier o pocas cajas" },
    { id: "monoambiente", label: "Monoambiente Completo", basePrice: "45.000", description: "Básico para estudiantes o departamentos chicos" },
    { id: "casa-chica", label: "Departamento 1-2 dorm.", basePrice: "85.000", description: "Vivienda familiar de tamaño estándar" },
    { id: "casa-grande", label: "Casa Grande / 3+ dorm.", basePrice: "150.000", description: "Mudanza completa con mucho mobiliario" },
    { id: "oficina", label: "Oficina / Mudanza Comercial", basePrice: "Cotización", description: "Escritorios, computadoras, archivos corporativos" }
  ];

  const extras = [
    { id: "embalaje", label: "Embalaje técnico premium", description: "Mantas, plástico burbuja y film protector" },
    { id: "peones", label: "Ayuda de peones (carga/descarga)", description: "Personal capacitado para estibar y acarrear" },
    { id: "desarme", label: "Desarmado y armado de muebles", description: "Herramientas técnicas para camas y roperos" }
  ];

  const handleExtraToggle = (id: string) => {
    if (additionalServices.includes(id)) {
      setAdditionalServices(additionalServices.filter(item => item !== id));
    } else {
      setAdditionalServices([...additionalServices, id]);
    }
  };

  const getEstimatedPriceRange = () => {
    const selected = sizes.find(s => s.id === moveSize);
    if (!selected) return "";
    if (selected.basePrice === "Cotización") return "Cotización a medida";
    
    let base = parseInt(selected.basePrice.replace(".", ""));
    
    // Add extra costs for additional services
    if (additionalServices.includes("embalaje")) base += 15000;
    if (additionalServices.includes("peones")) base += 20000;
    if (additionalServices.includes("desarme")) base += 10000;

    // Estimate based on location if interprovincial (very generic reference)
    const isInterprovincial = destination && !destination.toLowerCase().includes("córdoba") && !destination.toLowerCase().includes("cordoba");
    const multiplier = isInterprovincial ? 2.5 : 1.0;

    const finalBase = Math.round(base * multiplier);
    const finalUpper = Math.round(finalBase * 1.25);

    return `$${finalBase.toLocaleString("es-AR")} - $${finalUpper.toLocaleString("es-AR")} ARS`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !origin || !destination) {
      alert("Por favor completá los campos obligatorios.");
      return;
    }

    setSubmitting(true);

    // Simulate sending form to server
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      onClearPreSelected();

      // Format WhatsApp Message
      const whatsappNumber = "5493516828397";
      const sizeLabel = sizes.find(s => s.id === moveSize)?.label || moveSize;
      const extrasLabels = additionalServices.map(id => extras.find(e => e.id === id)?.label).filter(Boolean).join(", ");
      const formattedExtras = extrasLabels ? `• Servicios Extra: ${extrasLabels}` : "";

      const whatsappText = `Hola Fletes y Mudanzas Mariano! Solicito presupuesto para flete/mudanza:

• Nombre: ${name}
• Teléfono: ${phone}
• Origen: ${origin}
• Destino: ${destination}
• Categoría: ${sizeLabel}
${formattedExtras}
• Mensaje adicional: ${message || "Sin comentarios adicionales"}

Por favor, confirmar disponibilidad y costo aproximado. ¡Gracias!`;

      // Open WhatsApp Link
      const encodedText = encodeURIComponent(whatsappText);
      const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
      
      // Delay opening to let user see success state
      setTimeout(() => {
        window.open(url, "_blank");
      }, 1000);

    }, 1500);
  };

  return (
    <section id="presupuesto" className="py-24 bg-slate-950/20 relative overflow-hidden border-t border-slate-900/50">
      {/* Decorative details */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs md:text-sm text-orange-500 font-bold uppercase tracking-wider">
            Cotizador Digital e Inmediato
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 leading-tight">
            Solicitá tu Presupuesto Sin Cargo
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          <p className="font-sans text-base text-slate-300 mt-6 leading-relaxed">
            Completá los datos a continuación. Nuestra calculadora te dará una referencia en el acto, y al enviar se creará una ficha detallada que nos llegará por WhatsApp para confirmarte de inmediato.
          </p>
        </div>

        {/* Form and Estimator split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Column: Interactive Estimator Panel */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6.5 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.05),rgba(0,0,0,0))" />
            
            <div className="relative">
              <div className="flex items-center space-x-2.5 text-orange-400 mb-6 border-b border-slate-800 pb-4">
                <Sparkles className="h-5 w-5" />
                <h3 className="font-display font-bold text-lg text-white">Calculá tu Estimación Base</h3>
              </div>

              {/* 1. Select Size */}
              <div className="space-y-3 mb-6">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                  1. Volumen / Tamaño del Traslado
                </label>
                <div className="space-y-2">
                  {sizes.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setMoveSize(s.id)}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all duration-200 cursor-pointer flex justify-between items-center ${
                        moveSize === s.id
                          ? "bg-orange-500/10 border-orange-500 text-white shadow-lg shadow-orange-500/5"
                          : "bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <div className="pr-4">
                        <p className="font-bold">{s.label}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{s.description}</p>
                      </div>
                      <span className={`text-xs font-mono font-bold shrink-0 ${moveSize === s.id ? "text-orange-400" : "text-slate-400"}`}>
                        {s.basePrice === "Cotización" ? "Ver" : `Ref: $${s.basePrice}`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Additional Services Checkboxes */}
              <div className="space-y-3 mb-8">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                  2. Servicios Adicionales Requeridos
                </label>
                <div className="space-y-2">
                  {extras.map((ext) => {
                    const isChecked = additionalServices.includes(ext.id);
                    return (
                      <button
                        key={ext.id}
                        type="button"
                        onClick={() => handleExtraToggle(ext.id)}
                        className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all duration-200 cursor-pointer flex items-center space-x-3 ${
                          isChecked
                            ? "bg-emerald-500/10 border-emerald-500 text-white"
                            : "bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center border shrink-0 transition-colors ${
                          isChecked ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-600 bg-slate-800"
                        }`}>
                          {isChecked && <Check className="h-3.5 w-3.5" />}
                        </div>
                        <div>
                          <p className="font-semibold text-xs sm:text-sm">{ext.label}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{ext.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Estimatived Pricing Output box */}
              <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800/80 text-center">
                <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase font-semibold">Valor Estimado de Referencia</span>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-orange-400 mt-1.5 tracking-tight">
                  {getEstimatedPriceRange()}
                </p>
                <div className="flex items-center justify-center space-x-1.5 text-slate-400 mt-3 text-[10px] max-w-xs mx-auto leading-relaxed">
                  <AlertCircle className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                  <span>Los valores de referencia son indicativos y pueden variar según kilometraje y particularidades del acceso.</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Standard and compliant contact form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6.5 sm:p-8 shadow-2xl shadow-orange-500/10 text-slate-950 border border-slate-100 flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="quote-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center space-x-2 text-slate-700 mb-2 border-b border-slate-100 pb-3">
                    <FileCheck2 className="h-5 w-5 text-orange-500" />
                    <h3 className="font-display font-bold text-lg text-slate-900">Formulario de Solicitud</h3>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="form-name" className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                      Nombre Completo <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Juan Pérez"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label htmlFor="form-phone" className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                      Teléfono de Contacto <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="h-4 w-4" />
                      </div>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. +54 9 351 123 4567"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* Origin City field */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="form-origin" className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                        Ciudad de Origen <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <MapPin className="h-4 w-4 text-orange-500" />
                        </div>
                        <input
                          id="form-origin"
                          type="text"
                          required
                          value={origin}
                          onChange={(e) => setOrigin(e.target.value)}
                          placeholder="Ej. Córdoba Capital, Alberdi"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    {/* Destination City field */}
                    <div className="space-y-1">
                      <label htmlFor="form-destination" className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                        Ciudad de Destino <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <MapPin className="h-4 w-4 text-blue-500" />
                        </div>
                        <input
                          id="form-destination"
                          type="text"
                          required
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder="Ej. Villa Carlos Paz, o Buenos Aires"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1">
                    <label htmlFor="form-message" className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                      Mensaje / Inventario general de muebles
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <textarea
                        id="form-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        placeholder="Describinos un poco qué necesitás trasladar. Ej: Heladera, sillón de 3 cuerpos, 10 cajas y un mueble rack de TV."
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-2xl w-full flex items-center justify-center space-x-2.5 shadow-lg shadow-orange-500/20 hover:scale-[1.01] transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Solicitar presupuesto</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                    Al presionar el botón se abrirá WhatsApp Web/App para enviar la ficha. Tu presupuesto es libre, gratuito y no posee obligaciones de contratación.
                  </p>

                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-950 leading-tight">
                    ¡Presupuesto Generado con Éxito!
                  </h3>
                  <p className="font-sans text-sm text-slate-600 mt-3 max-w-md leading-relaxed">
                    Estamos redirigiéndote a WhatsApp para conectarte con un asesor técnico de **Mudanzas La Cañada**. Si no abre automáticamente, hacé clic en el botón de abajo.
                  </p>

                  <a
                    href={`https://wa.me/5493512345678?text=${encodeURIComponent(`Hola! Quería consultar por la cotización iniciada desde la web para ${name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-emerald-500/20 mt-8 flex items-center space-x-2"
                  >
                    <span>Abrir WhatsApp Manual</span>
                  </a>

                  <button
                    onClick={() => {
                      setSuccess(false);
                      setName("");
                      setPhone("");
                      setDestination("");
                      setMessage("");
                      setAdditionalServices(["peones"]);
                      setMoveSize("monoambiente");
                    }}
                    className="text-xs text-slate-400 hover:text-slate-600 font-semibold underline mt-6"
                  >
                    Comenzar nueva consulta
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
