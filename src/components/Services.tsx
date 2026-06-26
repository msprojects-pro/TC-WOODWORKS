/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fence, Key, DoorOpen, TreePine, ShieldCheck, Hammer, Wrench, ChevronRight, Check } from "lucide-react";
import { SERVICES } from "../data";

interface ServicesProps {
  onOpenQuoteWithService: (serviceId: string) => void;
}

export default function Services({ onOpenQuoteWithService }: ServicesProps) {
  // Map icon strings to Lucide icon components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FenceIcon":
        return <Fence className="h-6 w-6" />;
      case "GateIcon":
        return <Key className="h-6 w-6" />; // Key/Access representation or we can use Gate if supported
      case "DoorOpenIcon":
        return <DoorOpen className="h-6 w-6" />;
      case "TreePineIcon":
        return <TreePine className="h-6 w-6" />;
      case "ShieldCheckIcon":
        return <ShieldCheck className="h-6 w-6" />;
      case "HammerIcon":
        return <Hammer className="h-6 w-6" />;
      case "WrenchIcon":
        return <Wrench className="h-6 w-6" />;
      default:
        return <Hammer className="h-6 w-6" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#0a0d16] border-y border-gray-900">
      {/* Background visual texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-gray-300 uppercase font-mono">
            <Hammer className="h-3.5 w-3.5" /> EXPERT TIMBER SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
            Specialist Solutions Crafted to Suit Your Home
          </h2>
          <div className="h-1 w-20 bg-gray-300 rounded-full mx-auto" />
          <p className="text-gray-400 text-sm sm:text-base font-light max-w-2xl mx-auto">
            From strong storm-resilient boundary fencing to automated grand hardwood driveway gates, we deliver exceptional timber joinery tailored for residential properties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="services-grid">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-800/85 bg-[#0f1422] p-6 lg:p-8 hover:border-gray-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-white/5"
              id={`service-card-${service.id}`}
            >
              {/* Highlight Overlay */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-gray-500/5 to-transparent rounded-tr-2xl group-hover:from-gray-300/10 transition-colors" />

              <div>
                {/* Icon Container */}
                <div className="inline-flex rounded-xl bg-gray-800/40 p-3.5 text-gray-300 border border-gray-700/50 group-hover:bg-white group-hover:text-gray-950 group-hover:border-white transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Details */}
                <h3 className="text-xl font-display font-bold text-white tracking-tight mt-6 group-hover:text-gray-200 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mt-3">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="mt-6 space-y-2.5 border-t border-gray-800/80 pt-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-normal">
                      <Check className="h-3.5 w-3.5 text-gray-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger */}
              <div className="mt-8 pt-4">
                <button
                  onClick={() => onOpenQuoteWithService(service.id)}
                  className="flex w-full items-center justify-between rounded-lg border border-gray-800 bg-[#141b2e]/60 py-3 px-4 text-xs font-semibold text-gray-300 hover:text-white hover:border-white hover:bg-gray-800 transition-all group/btn cursor-pointer"
                >
                  <span>Request Custom Estimate</span>
                  <ChevronRight className="h-4 w-4 text-gray-500 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
