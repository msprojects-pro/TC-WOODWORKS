/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Hammer, Trees, ShieldAlert, Award, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "../data";

interface AboutProps {
  onOpenQuote: () => void;
}

export default function About({ onOpenQuote }: AboutProps) {
  return (
    <section id="about" className="relative py-24 bg-[#0b0f17] overflow-hidden">
      {/* Abstract Design Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gray-900/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-950/20 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Stacks */}
          <div className="lg:col-span-5 space-y-6" id="about-visuals">
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-[#0f1420]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img
                src="/images/tc_woodwork_gate_1782448576037.jpg"
                alt="Detailed premium bespoke carpentry by TC Woodwork"
                referrerPolicy="no-referrer"
                className="w-full h-80 lg:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-gray-950 shadow-lg">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white font-display font-bold text-lg leading-tight">Hull's Premier</p>
                  <p className="text-gray-300 text-xs font-mono tracking-wider">WOODWORKING SPECIALISTS</p>
                </div>
              </div>
            </div>

            {/* Micro details panel */}
            <div className="rounded-xl border border-gray-800 bg-[#141b2e]/60 p-5 backdrop-blur-sm flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 font-mono">SITE VISITS & QUOTES</p>
                <p className="text-sm font-semibold text-white mt-0.5">Free Written Estimates</p>
              </div>
              <button
                onClick={onOpenQuote}
                className="flex items-center gap-1 text-xs font-semibold text-white hover:text-gray-300 transition-colors cursor-pointer group"
              >
                <span>Book survey</span>
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-8" id="about-narrative">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-gray-300 uppercase font-mono">
                <Hammer className="h-3 w-3" /> Bespoke Craftsmanship
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
                Expert Fencing and Gates Built to Your Exact Specifications
              </h2>
              <div className="h-1 w-20 bg-gray-300 rounded-full" />
            </div>

            <p className="text-gray-300 font-light leading-relaxed text-base sm:text-lg">
              At <strong className="font-semibold text-white">TC Woodwork</strong>, led by master carpenter Tom, we specialize in designing and crafting bespoke, high-quality timber fencing, secure garden side-gates, and luxury steel-framed driveway gates. Based in Kingston upon Hull, we pride ourselves on exceptional workmanship and materials that withstand the test of time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Point 1 */}
              <div className="flex gap-3">
                <div className="rounded-lg bg-gray-800/40 p-2 text-gray-300 shrink-0 border border-gray-700/50 h-10 w-10 flex items-center justify-center">
                  <Trees className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Pressure-Treated Timber</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    All wood is premium pre-treated (tanalised) timber, fully protected from moisture, rot, and UK storm cycles.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-3">
                <div className="rounded-lg bg-gray-800/40 p-2 text-gray-300 shrink-0 border border-gray-700/50 h-10 w-10 flex items-center justify-center">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Secure Heavy-Duty Hardware</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    We fit marine-grade steel hinges, custom lockable bolts, and robust framework to guarantee security and alignment.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-3">
                <div className="rounded-lg bg-gray-800/40 p-2 text-gray-300 shrink-0 border border-gray-700/50 h-10 w-10 flex items-center justify-center">
                  <Hammer className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Tailored Bespoke Designs</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Every garden and house boundary is unique. We mill and tailor sizes on-site for a beautiful seamless fit.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex gap-3">
                <div className="rounded-lg bg-gray-800/40 p-2 text-gray-300 shrink-0 border border-gray-700/50 h-10 w-10 flex items-center justify-center">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Unmatched Customer Service</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Tom delivers honest, transparent pricing, responsive updates, and leaves your yard meticulously clean and tidy.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct business numbers */}
            <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-gray-500 font-mono">CALL TOM DIRECT FOR AN ESTIMATE</p>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-2xl font-bold font-display text-white hover:text-gray-300 transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <button
                onClick={onOpenQuote}
                className="rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 hover:bg-gray-800 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Request Site Survey
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
