import React from "react";
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageSquare,
  Globe2,
  Heart
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5493516828397";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%20Fletes%20y%20Mudanzas%20Mariano%2C%20quisiera%20solicitar%20un%20presupuesto.`;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Column 1: Brand block */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="bg-orange-500 text-white p-2 rounded-xl shadow-md flex items-center justify-center">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-display font-bold text-lg tracking-tight text-white block">
                    FLETES Y MUDANZAS
                  </span>
                  <span className="font-sans text-[10px] tracking-widest text-orange-400 font-semibold uppercase block -mt-1">
                    Mariano
                  </span>
                </div>
              </div>
              <p className="font-sans text-sm text-slate-400 leading-relaxed max-w-sm">
                Servicios profesionales de fletes, embalajes y mudanzas locales y nacionales saliendo desde Córdoba Capital hacia todo el territorio argentino. Más de 10 años garantizando puntualidad y cuidado absoluto.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-orange-500 hover:text-white border border-slate-800 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-orange-500 hover:text-white border border-slate-800 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-500 hover:text-white border border-slate-800 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6">
              Servicios Destacados
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#servicios" className="hover:text-orange-400 transition-colors">Mudanzas Residenciales</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-orange-400 transition-colors">Relocalización de Oficinas</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-orange-400 transition-colors">Fletes Locales y Urbanos</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-orange-400 transition-colors">Transporte Larga Distancia</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-orange-400 transition-colors">Embalaje de Objetos Frágiles</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-5">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6">
              Contacto y Consultas
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3.5">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-100">Córdoba Capital, Argentina</p>
                  <p className="text-xs text-slate-400">Oficina comercial y despacho de unidades</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Phone className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+5493516828397" className="font-bold text-slate-100 hover:text-orange-400 transition-colors">
                    351 682-8397
                  </a>
                  <p className="text-xs text-slate-400">Atención Telefónica • Lunes a Domingo de 8 a 21 hs.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Mail className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-100">contacto@fletesymudanzasmariano.com.ar</p>
                  <p className="text-xs text-slate-400">Presupuestos corporativos y licitaciones</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Globe2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-100">Soporte Express por WhatsApp</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:underline font-semibold block mt-0.5"
                  >
                    Hacé clic acá para chatear con un asesor →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright area */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-slate-500 font-medium">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <p>© {currentYear} Fletes y Mudanzas Mariano. Córdoba, Argentina. Todos los derechos reservados.</p>
            <p className="text-[10px] text-slate-600 mt-1">Habilitaciones Municipales y Nacionales vigentes. Seguros de carga avalados por Compañías Líderes.</p>
          </div>
          <div className="flex items-center space-x-1 font-sans">
            <span>Desarrollado con</span>
            <Heart className="h-3 w-3 text-red-500 fill-current" />
            <span>para Córdoba</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
