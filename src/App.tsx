/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCall from "./components/FloatingCall";
import QuoteModal from "./components/QuoteModal";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenQuote = () => {
    setSelectedService("");
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithService = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsQuoteOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0b0f17] text-gray-100 selection:bg-white selection:text-gray-950 overflow-hidden" id="app-wrapper">
      {/* Structural boundaries */}
      <Navbar onOpenQuote={handleOpenQuote} />
      
      <main id="main-content">
        <Hero onOpenQuote={handleOpenQuote} />
        <About onOpenQuote={handleOpenQuote} />
        <Services onOpenQuoteWithService={handleOpenQuoteWithService} />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingCall />

      {/* Quote request modal overlay */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        selectedServiceDefault={selectedService}
      />
    </div>
  );
}
