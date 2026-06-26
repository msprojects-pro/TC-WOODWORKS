/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { BUSINESS_INFO, FAQ } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      console.log("Contact Message Submitted Successfully:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setIsSubmitted(false);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0b0f17] overflow-hidden">
      {/* Background visual glows */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-950/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-gray-300 uppercase font-mono">
            <Sparkles className="h-3.5 w-3.5" /> START YOUR PROJECT TODAY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
            Get in Touch With Tom
          </h2>
          <div className="h-1 w-20 bg-gray-300 rounded-full mx-auto" />
          <p className="text-gray-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            Ready to secure your garden or upgrade your driveway? Message or call us to arrange a convenient site survey and discussion.
          </p>
        </div>

        {/* Contact Layout Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Contact Info Card & Hours (Col span 5) */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-panel">
            
            {/* Direct Connect Card */}
            <div className="rounded-2xl border border-gray-800 bg-[#0f1422] p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-display font-bold text-white tracking-tight">
                Business Details
              </h3>
              
              <div className="space-y-5">
                {/* Phone */}
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-start gap-4 group focus:outline-none"
                  id="contact-info-phone-link"
                >
                  <div className="rounded-xl bg-gray-800/40 p-3 text-gray-300 border border-gray-700/50 group-hover:bg-white group-hover:text-gray-950 group-hover:border-white transition-all shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">CALL DIRECT</p>
                    <p className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-gray-200 transition-colors">
                      {BUSINESS_INFO.phone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-4 group focus:outline-none"
                  id="contact-info-email-link"
                >
                  <div className="rounded-xl bg-gray-800/40 p-3 text-gray-300 border border-gray-700/50 group-hover:bg-white group-hover:text-gray-950 group-hover:border-white transition-all shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">EMAIL ENQUIRIES</p>
                    <p className="text-sm sm:text-base font-semibold text-white mt-1 group-hover:text-gray-200 transition-colors break-all">
                      {BUSINESS_INFO.email}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gray-800/40 p-3 text-gray-300 border border-gray-700/50 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">LOCATION COVERAGE</p>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 font-light leading-relaxed">
                      {BUSINESS_INFO.location}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 border-t border-gray-800/80 pt-5">
                  <div className="rounded-xl bg-gray-800/40 p-3 text-gray-300 border border-gray-700/50 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">WORKING HOURS</p>
                    <div className="mt-2 space-y-1">
                      {BUSINESS_INFO.workingHours.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-xs text-gray-300">
                          <span className="font-light">{item.days}</span>
                          <span className="font-semibold text-white">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Trust Note */}
            <div className="rounded-xl border border-gray-800/60 bg-[#141b2e]/30 p-5 flex items-start gap-3">
              <HelpCircle className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 leading-normal">
                Need answers fast? Tom is often out in the yard or building on-site during business hours. Call or text <strong className="text-white">{BUSINESS_INFO.phoneFormatted}</strong> for immediate response.
              </p>
            </div>

          </div>

          {/* Right Panel: Form + FAQs Accordion (Col span 7) */}
          <div className="lg:col-span-7 space-y-10" id="contact-form-faqs-panel">
            
            {/* Contact Form */}
            <div className="rounded-2xl border border-gray-800 bg-[#0f1422] p-6 sm:p-8 relative">
              
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white tracking-tight">
                      Send a Message
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Tom will respond to your queries within 24 business hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400 font-mono">YOUR NAME</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none"
                          id="contact-input-name"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400 font-mono">PHONE NUMBER</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="07944 040707"
                          className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none"
                          id="contact-input-phone"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400 font-mono">EMAIL ADDRESS</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none"
                          id="contact-input-email"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400 font-mono">SUBJECT / INQUIRY</label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="e.g. Backyard fencing estimate"
                          className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none"
                          id="contact-input-subject"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 font-mono">MESSAGE DETAILS</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please include any design requirements, approximate size dimensions, or access details here..."
                        className="w-full rounded-lg border border-gray-800 bg-[#141b2e]/60 px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-all focus:border-white focus:bg-[#141b2e] focus:outline-none resize-none"
                        id="contact-textarea-message"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-950 hover:bg-gray-200 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        id="contact-submit-btn"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-gray-950" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Successful Submission Screen */
                <div className="text-center py-12 flex flex-col items-center justify-center" id="contact-success-block">
                  <div className="rounded-full bg-white/10 p-3 text-white mb-4 border border-white/20">
                    <CheckCircle className="h-12 w-16" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white tracking-tight">
                    Message Received!
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 max-w-sm mx-auto leading-relaxed">
                    Thank you for your inquiry, <span className="text-white font-semibold">{formData.name}</span>. Tom will review your details and reply shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 rounded-lg border border-gray-800 hover:border-gray-700 bg-gray-900 px-5 py-2 text-xs font-medium text-gray-300 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Premium FAQs Accordion */}
            <div className="space-y-4" id="contact-faqs-block">
              <h3 className="text-lg font-display font-bold text-white tracking-tight text-left">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-2.5">
                {FAQ.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-gray-800 bg-[#0f1422] overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-4 text-left text-xs sm:text-sm font-semibold text-white hover:text-white transition-colors cursor-pointer focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${openFaq === idx ? "transform rotate-180 text-white" : ""}`} />
                    </button>
                    
                    {openFaq === idx && (
                      <div className="px-4 pb-4 pt-1 border-t border-gray-800/60">
                        <p className="text-gray-400 text-xs leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
