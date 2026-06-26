/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone, Hammer, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BUSINESS_INFO } from "../data";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scrolling to add backdrop blur and solid background to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link tracker on scroll
      const sections = ["home", "about", "services", "gallery", "testimonials", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Our Work", href: "#gallery", id: "gallery" },
    { name: "Reviews", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0f17]/95 border-b border-gray-800/85 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent border-b border-transparent py-5"
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("home");
              }}
              className="flex items-center gap-3 group focus:outline-none"
              id="brand-logo-anchor"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-400 bg-gray-950 font-display text-sm font-black text-white shadow-md group-hover:scale-105 group-hover:border-white transition-all">
                TC
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-gray-300 transition-colors uppercase">
                  TC Woodwork
                </span>
                <span className="font-mono text-[9px] font-medium tracking-widest text-gray-400 uppercase">
                  Bespoke Fencing & Gates
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-3" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-all cursor-pointer select-none rounded-md hover:text-white ${
                    activeSection === link.id ? "text-white font-semibold" : "text-gray-400"
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Desktop Contact CTA */}
            <div className="hidden md:flex items-center gap-4" id="desktop-cta-container">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-1.5 text-xs lg:text-sm font-mono text-gray-300 hover:text-white transition-colors"
                id="header-phone-link"
              >
                <Phone className="h-4 w-4 text-gray-400" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <button
                onClick={onOpenQuote}
                className="rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-950 hover:bg-gray-200 shadow-md hover:shadow-white/5 hover:shadow-lg transition-all duration-300 active:scale-[0.98] cursor-pointer"
                id="header-quote-btn"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <div className="flex md:hidden items-center gap-3" id="mobile-toggle-container">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-[#141b2e] text-white"
                aria-label="Call Tom Direct"
              >
                <Phone className="h-4 w-4 text-gray-300" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-[#141b2e] text-gray-400 hover:text-white"
                aria-label="Toggle Menu"
                id="menu-toggle-btn"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm md:hidden"
              id="mobile-nav-backdrop"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 z-30 w-72 bg-[#0c101b] border-l border-gray-800 p-6 pt-24 md:hidden flex flex-col justify-between shadow-2xl"
              id="mobile-drawer"
            >
              <div className="space-y-6">
                <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                  NAVIGATION MENU
                </span>

                <div className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium transition-all text-left border cursor-pointer ${
                        activeSection === link.id
                          ? "bg-gray-800/50 border-gray-700 text-white font-semibold"
                          : "bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-gray-900/40"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`h-4 w-4 text-gray-600 transition-transform ${activeSection === link.id ? "text-white transform translate-x-0.5" : ""}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Drawer Footer Details */}
              <div className="space-y-4 border-t border-gray-800 pt-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Hull's Timber Specialists</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="block text-white font-semibold text-sm hover:text-gray-300">
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-gray-400">{BUSINESS_INFO.email}</p>
                </div>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full rounded-lg bg-white py-3 text-xs font-bold uppercase tracking-wider text-gray-950 hover:bg-gray-200 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  id="mobile-drawer-quote-btn"
                >
                  <Hammer className="h-4 w-4" />
                  <span>Request Free Quote</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
