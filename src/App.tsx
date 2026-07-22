import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Coverage from "./components/Coverage";
import Gallery from "./components/Gallery";
import HowWeWork from "./components/HowWeWork";
import FAQ from "./components/FAQ";
import CalculatorForm from "./components/CalculatorForm";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [preSelectedService, setPreSelectedService] = useState("");

  const handleSelectService = (serviceName: string) => {
    setPreSelectedService(serviceName);
    
    // Smooth scroll to budget estimator
    const element = document.getElementById("presupuesto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClearPreSelected = () => {
    setPreSelectedService("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white antialiased selection:bg-orange-500 selection:text-white relative overflow-hidden">
      {/* Background Glow Decorations */}
      <div className="pointer-events-none fixed top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] z-0"></div>
      <div className="pointer-events-none fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] z-0"></div>

      {/* Fixed Sticky Header Navbar */}
      <Header />

      {/* Main Content Layout Sections */}
      <main className="flex-1">
        {/* 1. Hero banner with intro copy & truck image */}
        <Hero />

        {/* 2. Services section with 8 cards and CTA clicks */}
        <Services onSelectService={handleSelectService} />

        {/* 3. Coverage area with interactive SVG Argentina map */}
        <Coverage />

        {/* 5. Filterable photo gallery for cargo/trucks/packaging */}
        <Gallery />

        {/* 6. Step by step methodology progression timeline */}
        <HowWeWork />

        {/* 8. Accordion frequently asked questions */}
        <FAQ />

        {/* 9. Fully interactive cost estimator & contact submission form */}
        <CalculatorForm 
          preSelectedService={preSelectedService}
          onClearPreSelected={handleClearPreSelected}
        />
      </main>

      {/* 10. Rich footer */}
      <Footer />

      {/* Floating UX Actions */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
