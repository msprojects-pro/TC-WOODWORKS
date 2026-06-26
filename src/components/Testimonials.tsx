/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MessageSquare, Quote, Hammer } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#0a0d16] border-t border-gray-900 overflow-hidden">
      {/* Abstract mesh lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-900/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-gray-300 uppercase font-mono">
            <MessageSquare className="h-3.5 w-3.5" /> REPUTATION & REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
            Trusted by Homeowners Across Hull
          </h2>
          <div className="h-1 w-20 bg-gray-300 rounded-full mx-auto" />
          <p className="text-gray-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            Read real client feedback regarding our bespoke craftsmanship, on-time delivery, and honest customer service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="relative flex flex-col justify-between rounded-2xl border border-gray-800 bg-[#0f1422] p-6 lg:p-8"
              id={`testimonial-card-${review.id}`}
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-6 right-6 text-gray-800/40 z-0">
                <Quote className="h-10 w-10 rotate-180" />
              </div>

              <div className="relative z-10 space-y-4">
                {/* Stars and Project Type */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-0.5" aria-label="5 Star Rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-gray-300 text-gray-300" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-wider text-gray-300 uppercase font-semibold">
                    <Hammer className="h-3 w-3" /> {review.projectType}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-200 text-sm sm:text-base font-light leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Customer Author Details */}
              <div className="relative z-10 flex items-center gap-3 border-t border-gray-800/85 pt-4 mt-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 flex items-center justify-center font-display font-bold text-sm text-white shadow-inner select-none">
                  {review.name.split(" ")[0][0]}
                  {review.name.split(" ").length > 1 ? review.name.split(" ")[1][0] : ""}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white leading-none">{review.name}</p>
                  <p className="text-[11px] font-mono text-gray-500 uppercase mt-1 leading-none">
                    {review.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Local Verification Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-xl border border-gray-800/80 bg-[#141b2e]/30 px-5 py-3.5 max-w-md mx-auto">
            <p className="text-xs text-gray-400 font-light">
              We are proud local tradesmen with a reputation built purely on 100% word-of-mouth recommendations in Kingston upon Hull.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
