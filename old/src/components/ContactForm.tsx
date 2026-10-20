"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Loader2, Sparkles, Send } from "lucide-react";

const SERVICES_LIST = [
  "Audit & Assurance",
  "Accounting & Bookkeeping",
  "UAE VAT Services",
  "UAE Corporate Tax",
  "Transfer Pricing",
  "CFO & Finance Advisory",
  "Corporate Finance",
  "Business Advisory",
  "Compliance Services",
  "Technology & Digital Finance",
  "Other / General Enquiry",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobile: "",
    service: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMsg("Please enter your company name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid work email address.");
      return;
    }
    if (!formData.mobile.trim()) {
      setErrorMsg("Please enter your mobile or WhatsApp number.");
      return;
    }
    if (!formData.service) {
      setErrorMsg("Please select the required service.");
      return;
    }

    setLoading(true);

    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-[#CBD5E1]/80 p-8 sm:p-12 shadow-xl relative overflow-hidden text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#EAF4F0] text-[#216D56] flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#36A783]/30">
          <CheckCircle2 className="w-8 h-8 text-[#36A783]" />
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
          INQUIRY RECEIVED • 24-HOUR SLA ACTIVE
        </span>

        <h3 className="text-2xl sm:text-3xl font-serif text-[#071426] mb-4">
          Thank You, {formData.fullName.split(" ")[0]}!
        </h3>

        <p className="text-sm sm:text-base text-[#4A5D73] max-w-md mx-auto leading-relaxed mb-8 font-sans">
          Your consultation request for{" "}
          <strong className="text-[#071426] font-semibold">
            {formData.service}
          </strong>{" "}
          has been assigned to a senior chartered advisor. We will connect with
          you at{" "}
          <span className="text-[#071426] font-semibold">{formData.mobile}</span>{" "}
          within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/971547338583"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <span>Chat on WhatsApp Directly</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                companyName: "",
                email: "",
                mobile: "",
                service: "",
                notes: "",
              });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center text-xs font-mono text-[#64748B] hover:text-[#071426] px-5 py-3 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#CBD5E1]/80 p-7 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
      {/* Subtle top indicator */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E2E8F0]">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-1">
            CONSULTATION INTAKE
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#071426]">
            Request a Free Consultation
          </h2>
        </div>
        <div className="hidden sm:inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] text-xs font-mono font-semibold px-3 py-1.5 rounded-full border border-[#36A783]/20">
          <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
          <span>24h Response</span>
        </div>
      </div>

      <p className="text-sm sm:text-base text-[#4A5D73] font-sans leading-relaxed mb-8">
        Fill in the form below and one of our qualified advisors will contact you
        within 24 hours.
      </p>

      {errorMsg && (
        <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 font-medium">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Full Name & Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs sm:text-sm font-medium text-[#071426] mb-2 font-sans"
            >
              Full Name <span className="text-[#36A783] font-bold">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#071426] placeholder-[#94A3B8] text-sm focus:outline-hidden focus:bg-white focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/20 transition-all font-sans"
            />
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-xs sm:text-sm font-medium text-[#071426] mb-2 font-sans"
            >
              Company Name <span className="text-[#36A783] font-bold">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your company name"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#071426] placeholder-[#94A3B8] text-sm focus:outline-hidden focus:bg-white focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/20 transition-all font-sans"
            />
          </div>
        </div>

        {/* Row 2: Email Address & Mobile Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-medium text-[#071426] mb-2 font-sans"
            >
              Email Address <span className="text-[#36A783] font-bold">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#071426] placeholder-[#94A3B8] text-sm focus:outline-hidden focus:bg-white focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/20 transition-all font-sans"
            />
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-xs sm:text-sm font-medium text-[#071426] mb-2 font-sans"
            >
              Mobile Number <span className="text-[#36A783] font-bold">*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+971 50 000 0000"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#071426] placeholder-[#94A3B8] text-sm focus:outline-hidden focus:bg-white focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/20 transition-all font-sans"
            />
          </div>
        </div>

        {/* Row 3: Service Required Dropdown */}
        <div>
          <label
            htmlFor="service"
            className="block text-xs sm:text-sm font-medium text-[#071426] mb-2 font-sans"
          >
            Service Required <span className="text-[#36A783] font-bold">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#071426] text-sm focus:outline-hidden focus:bg-white focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/20 transition-all font-sans appearance-none cursor-pointer"
            >
              <option value="">Select a service</option>
              {SERVICES_LIST.map((srv, idx) => (
                <option key={idx} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#64748B]">
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 4: Brief Requirement Notes (Optional) */}
        <div>
          <label
            htmlFor="notes"
            className="block text-xs sm:text-sm font-medium text-[#071426] mb-2 font-sans"
          >
            Brief Details or Statutory Deadlines{" "}
            <span className="text-[#64748B] text-xs font-normal">
              (Optional)
            </span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Tell us about your business structure (Mainland DED or Free Zone), required service timeline, or questions..."
            className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#071426] placeholder-[#94A3B8] text-sm focus:outline-hidden focus:bg-white focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/20 transition-all font-sans resize-none"
          />
        </div>

        {/* Submit Kinetic Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="group/btn relative w-full inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#C6F850] px-7 py-4 text-base font-bold text-[#071426] shadow-md hover:shadow-lg hover:shadow-[#C6F850]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span
              className="absolute inset-0 bg-[#FFFFFF] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-xl"
              aria-hidden="true"
            />
            <span className="relative z-10 flex items-center gap-2 font-sans font-bold text-sm sm:text-base">
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#071426]" />
                  <span>Transmitting to Advisor...</span>
                </>
              ) : (
                <>
                  <span>Request Free Consultation</span>
                  <span className="text-lg leading-none font-sans">↳</span>
                </>
              )}
            </span>
          </button>

          <p className="text-center text-xs text-[#64748B] font-mono mt-3">
            AES-256 Encrypted • Zero Obligation • 24-Hour Callback
          </p>
        </div>
      </form>
    </div>
  );
}
