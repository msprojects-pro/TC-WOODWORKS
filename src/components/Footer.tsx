/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BUSINESS_INFO } from "../data";
import { Hammer, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="bg-[#06090f] border-t border-gray-900 text-gray-400 py-16 relative overflow-hidden" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-900 pb-12">
          {/* Col 1: Brand details */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-950 font-display font-bold text-sm text-white">
                TC
              </div>
              <div>
                <span className="font-display font-bold text-white tracking-tight uppercase block">
                  TC Woodwork
                </span>
                <span className="text-[9px] font-mono tracking-wider text-gray-500 uppercase">
                  Bespoke Fencing & Gates
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Premium timber installations, driveway double-gates, and bespoke garden features. Crafted to withstand British weather and built to elevate your property.
            </p>
          </div>

          {/* Col 2: Navigation links */}
          <div className="space-y-4 text-left">
            <h4 className="font-display font-bold text-sm text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about" },
                { name: "Services", id: "services" },
                { name: "Recent Projects", id: "gallery" },
                { name: "Customer Reviews", id: "testimonials" },
                { name: "Get in Touch", id: "contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="space-y-4 text-left">
            <h4 className="font-display font-bold text-sm text-white tracking-wider uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                <span>Kingston upon Hull, UK</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Business hours */}
          <div className="space-y-4 text-left">
            <h4 className="font-display font-bold text-sm text-white tracking-wider uppercase">
              Business Hours
            </h4>
            <ul className="space-y-2 text-xs">
              {BUSINESS_INFO.workingHours.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-gray-900 pb-1.5 last:border-none last:pb-0">
                  <span className="text-gray-500">{item.days}</span>
                  <span className="text-gray-300 font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
            <Hammer className="h-3 w-3 text-gray-400" />
            <span>Premium Carpentry from Hull, East Yorkshire</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
