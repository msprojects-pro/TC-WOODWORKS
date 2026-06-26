/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { MapPin, Expand, Sparkles, Filter } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Bespoke Wooden Fences",
    "Custom Driveway Gates",
    "Garden Gates",
    "Timber Pergolas & Decking",
    "Bespoke Timber Structures"
  ];

  const filteredProjects = filter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="gallery" className="relative py-24 bg-[#0b0f17] overflow-hidden">
      {/* Visual highlights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-950/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-gray-300 uppercase font-mono">
              <Sparkles className="h-3.5 w-3.5" /> FINISHED WORKSHOWS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
              Bespoke Project Showcase
            </h2>
            <div className="h-1 w-20 bg-gray-300 rounded-full" />
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Explore our genuine portfolio of residential woodwork. Each fence, driveway double-gate, and custom structure was hand-constructed on-site around Kingston upon Hull.
            </p>
          </div>

          {/* Location Badge */}
          <div className="hidden lg:flex items-center gap-2.5 rounded-xl border border-gray-800 bg-[#141b2e]/40 p-4">
            <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
            <div className="text-left font-mono">
              <p className="text-[10px] text-gray-500 uppercase leading-none">RECENTLY INSTALLED</p>
              <p className="text-xs font-semibold text-white mt-1 leading-none">Anlaby • Beverley • Hessle • Cottingham</p>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-800/80 pb-6 mb-10" id="gallery-filters">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mr-2">
            <Filter className="h-3.5 w-3.5" />
            <span>FILTER WORK:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold tracking-wide transition-all uppercase cursor-pointer ${
                filter === cat
                  ? "bg-white text-gray-950 shadow-md shadow-white/5"
                  : "bg-gray-950/60 border border-gray-800/80 text-gray-400 hover:text-white hover:border-gray-700"
              }`}
            >
              {cat === "All" ? "All Projects" : cat.replace("Bespoke ", "").replace("Custom ", "")}
            </button>
          ))}
        </div>

        {/* Project Grid with Framer Motion Layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-950 aspect-[4/3] flex flex-col justify-end"
                id={`project-card-${project.id}`}
              >
                {/* Background image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="relative z-20 p-6 space-y-3 text-left">
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-gray-900/80 border border-gray-700 text-[10px] font-semibold font-mono tracking-wider text-white uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-display font-bold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Expand details section on group hover or standard on mobile */}
                  <p className="text-gray-300 text-xs font-light leading-relaxed opacity-90 lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-24 transition-all duration-300 overflow-hidden">
                    {project.description}
                  </p>

                  {/* Sizing & Location Footer */}
                  <div className="flex items-center justify-between border-t border-gray-800/80 pt-3 text-[11px] font-mono text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                      {project.location}
                    </span>
                    {project.size && (
                      <span className="flex items-center gap-1">
                        <Expand className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                        {project.size}
                      </span>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state when no filtered projects are found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-gray-800 rounded-2xl">
            <p className="text-gray-500 font-mono text-sm">No recent projects matching this category.</p>
          </div>
        )}

      </div>
    </section>
  );
}
