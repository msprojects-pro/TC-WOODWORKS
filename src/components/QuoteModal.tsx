/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, User, Mail, Phone, MapPin, Hammer, Sparkles, CheckCircle } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "../data";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceDefault?: string;
}

export default function QuoteModal({ isOpen, onClose, selectedServiceDefault = "" }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: selectedServiceDefault || SERVICES[0].id,
    details: "",
    budget: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Quote Request Submitted Successfully:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      serviceType: SERVICES[0].id,
      details: "",
      budget: ""
    });
    setIsSubmitted(false);
  };

  const handleFullClose = () => {
    onClose();
    // Reset state after transition completes
    setTimeout(() => {
      handleReset();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleFullClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-800 bg-[#0f1420] text-gray-100 shadow-2xl"
            id="quote-modal"
          >
            {/* Design accents */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-600" />

            {/* Close button */}
            <button
              onClick={handleFullClose}
              className="absolute top-4 right-4 z-20 rounded-full border border-gray-800 bg-[#141b2e] p-2 text-gray-400 hover:bg-[#1e2945] hover:text-white transition-all cursor-pointer"
              aria-label="Close Modal"
              id="close-modal-btn"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-gray-300 uppercase font-mono">
                    <Sparkles className="h-3 w-3" /> Professional Estimates
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-white tracking-tight mt-1">
                    Request a Free Quote
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Provide some details and Tom will get back to you to schedule your site survey.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-400 font-mono flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-gray-400" /> YOUR NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none"
                        id="quote-input-name"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-400 font-mono flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-gray-400" /> CONTACT PHONE
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="07944 040707"
                        className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none"
                        id="quote-input-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-400 font-mono flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-gray-400" /> EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none"
                        id="quote-input-email"
                      />
                    </div>

                    {/* Address / Location */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-400 font-mono flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-gray-400" /> SITE ADDRESS / AREA
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="e.g. Beverley, Hull"
                        className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none"
                        id="quote-input-address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Service Type */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-400 font-mono flex items-center gap-1.5">
                        <Hammer className="h-3.5 w-3.5 text-gray-400" /> PROJECT TYPE
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-sm text-white transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none"
                        id="quote-select-service"
                      >
                        {SERVICES.map(service => (
                          <option key={service.id} value={service.id} className="bg-[#0f1420] text-gray-200">
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Estimated Budget */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-400 font-mono flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-gray-400" /> ESTIMATED TIMELINE
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-sm text-white transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none"
                        id="quote-select-timeline"
                      >
                        <option value="" className="bg-[#0f1420] text-gray-500">Select Timeline...</option>
                        <option value="Urgent (Within 2 weeks)" className="bg-[#0f1420] text-gray-200">Urgent (Within 2 weeks)</option>
                        <option value="Within 1 month" className="bg-[#0f1420] text-gray-200">Within 1 month</option>
                        <option value="Within 2-3 months" className="bg-[#0f1420] text-gray-200">Within 2-3 months</option>
                        <option value="Flexible / Just pricing" className="bg-[#0f1420] text-gray-200">Flexible / Just pricing</option>
                      </select>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-400 font-mono">
                      PROJECT SPECIFICS & ESTIMATED MEASUREMENTS
                    </label>
                    <textarea
                      name="details"
                      required
                      rows={3}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="e.g. Fencing: Approximately 15 meters long, 6ft high. Need replacement of old rotting timber panels with concrete posts, or driveway gate details."
                      className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none resize-none"
                      id="quote-textarea-details"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full overflow-hidden rounded-lg bg-white px-6 py-3 text-sm font-bold tracking-wide text-gray-950 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                      id="quote-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-gray-950" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <span>Send Estimate Request</span>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Prefer immediate booking? Call Tom on{" "}
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white font-semibold hover:underline">
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center flex flex-col items-center justify-center min-h-[400px]"
                id="quote-success-screen"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="rounded-full bg-white/10 p-4 text-white mb-6 border border-white/20"
                >
                  <CheckCircle className="h-16 w-16" />
                </motion.div>

                <h3 className="text-2xl font-display font-semibold text-white tracking-tight">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-gray-400 mt-2 max-w-md mx-auto">
                  Tom has received your details regarding the <span className="text-white font-semibold">
                    {SERVICES.find(s => s.id === formData.serviceType)?.title || "bespoke project"}
                  </span>. We'll review your dimensions and get in touch with you shortly to finalize a site visit.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex-1 rounded-lg border border-gray-800 bg-[#141b2e] px-4 py-2.5 text-xs font-semibold text-gray-300 hover:bg-[#1e2945] hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Phone className="h-4 w-4" /> Call Tom Direct
                  </a>
                  <button
                    onClick={handleFullClose}
                    className="flex-1 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-gray-950 hover:bg-gray-200 transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
