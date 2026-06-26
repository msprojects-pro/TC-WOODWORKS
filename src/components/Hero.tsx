/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Hammer, Phone, ShieldCheck, MapPin, Award } from "lucide-react";
import { BUSINESS_INFO } from "../data";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Expanded Background Image with Dark Vignette/Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/75 to-[#0b0f17]/55 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f17]/95 via-[#0b0f17]/60 to-transparent z-10" />
        <img
          src="/images/tc_woodwork_hero_1782448556547.jpg"
          alt="Bespoke Modern Cedar Wooden Fence and Gate in Kingston upon Hull"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center scale-105 animate-subtle-zoom"
          style={{ animation: "subtleZoom 20s infinite alternate ease-in-out" }}
        />
      </div>

      {/* Styled inline zoom animation in style block to prevent complex class compilation */}
      <style>{`
        @keyframes subtleZoom {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.08); }
        }
      `}</style>

      {/* Hero Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-start text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-6 md:space-y-8"
          id="hero-content-block"
        >
          {/* Hull Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-[#141b2e]/90 px-4 py-1.5 backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-gray-400" />
            <span className="font-mono text-xs font-semibold tracking-wider text-gray-300 uppercase">
              Kingston upon Hull & East Yorkshire
            </span>
          </motion.div>

          {/* Core Captivating Headline */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Bespoke Fences <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                & Gates Specialists
              </span>
            </h1>
            <p className="font-mono text-sm sm:text-base font-semibold tracking-widest text-gray-400 uppercase">
              Premium Joinery & Woodworking Excellence
            </p>
          </motion.div>

          {/* Descriptive Text */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-light"
          >
            We design, handcraft, and professionally install heavy-duty, bespoke timber barriers, automated entrance gates, and landscape structures tailored to secure and elevate your Hull property.
          </motion.p>

          {/* Badges/Credentials Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 md:flex md:items-center md:gap-8 pt-2"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gray-400 shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white leading-tight">Heavy Duty Build</span>
                <span className="text-xs text-gray-400">Storm-resilient timber</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-gray-400 shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white leading-tight">Expert Joinery</span>
                <span className="text-xs text-gray-400">Perfect alignment guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* Action Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
            id="hero-ctas"
          >
            <button
              onClick={onOpenQuote}
              className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-gray-950 shadow-xl shadow-white/5 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              id="hero-primary-quote-btn"
            >
              <Hammer className="h-4 w-4" />
              <span>Request Site Survey</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="group rounded-xl border border-gray-800 bg-gray-950/80 px-8 py-4 text-sm font-bold uppercase tracking-wider text-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-700 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
              id="hero-secondary-call-btn"
            >
              <Phone className="h-4 w-4 text-gray-400 transition-transform group-hover:rotate-12" />
              <span>Call Tom direct</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Soft Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0b0f17] to-transparent z-10" />
    </section>
  );
}
