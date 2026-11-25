"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  ShieldCheck,
  Copy,
  Check,
  Lock,
  Calendar,
  MessageSquare,
  Info,
  User,
  Phone,
  Mail,
  Briefcase,
} from "lucide-react";
import { ALL_FORM_SERVICES } from "@/data/formServices";

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService }: ContactFormProps = {}) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobile: "",
    service: defaultService || "UAE Corporate Tax",
    notes: "",
    consent: true,
    honeypot: "",
  });

  const [formLoadTime, setFormLoadTime] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submissionMeta, setSubmissionMeta] = useState<{
    referenceId: string;
    timestamp: string;
  } | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errorMsg) setErrorMsg("");
  };

  const handleCopyReference = () => {
    if (!submissionMeta?.referenceId) return;
    navigator.clipboard.writeText(submissionMeta.referenceId);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2500);
  };

  // Step 1 Validation
  const validateStep1 = () => {
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMsg("Please enter your full name (minimum 2 characters).");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  // Step 2 Validation (Client rule: Either Email OR Phone number is mandatory)
  const validateStep2 = () => {
    const emailVal = formData.email.trim();
    const phoneVal = formData.mobile.replace(/\D/g, "");

    const hasValidEmail = Boolean(emailVal && emailVal.includes("@") && emailVal.includes("."));
    const hasValidPhone = Boolean(phoneVal.length >= 7);

    if (!hasValidEmail && !hasValidPhone) {
      setErrorMsg("Please provide at least a valid email address OR mobile/WhatsApp number.");
      return false;
    }

    if (emailVal && !hasValidEmail) {
      setErrorMsg("Please enter a valid email address (or leave it blank if providing phone only).");
      return false;
    }

    setErrorMsg("");
    return true;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep2()) setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    setErrorMsg("");
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep1()) {
      setCurrentStep(1);
      return;
    }
    if (!validateStep2()) {
      setCurrentStep(2);
      return;
    }

    if (!formData.consent) {
      setErrorMsg("Please accept the privacy policy consent to proceed.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName || `${formData.fullName} (Direct Inquiry)`,
          email: formData.email,
          mobile: formData.mobile,
          service: formData.service || "UAE Corporate Tax",
          notes: formData.notes,
          consent: formData.consent,
          honeypot: formData.honeypot,
          formLoadTime,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission could not be completed.");
      }

      setSubmissionMeta({
        referenceId: data.referenceId,
        timestamp: data.timestamp,
      });
      setSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or WhatsApp us.";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  // WhatsApp instant route with pre-filled Reference ID
  const whatsAppDirectUrl = submissionMeta
    ? `https://wa.me/971547338583?text=${encodeURIComponent(
        `Hello Auditclue Advisory Desk, I just submitted an inquiry on your website.\n- Reference: ${submissionMeta.referenceId}\n- Name: ${formData.fullName}\n- Service: ${formData.service}\nPlease route this to the senior partner in charge.`
      )}`
    : "https://wa.me/971547338583";

  // =========================================================================
  // STATE 1: LUXURY HIGH-TRUST CONFIRMATION MODAL / SCREEN
  // =========================================================================
  if (submitted && submissionMeta) {
    return (
      <div className="bg-white rounded-3xl border border-[#CBD5E1]/80 p-7 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-[#071426] animate-in fade-in zoom-in-95 duration-300">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#36A783]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#E2E8F0] mb-8">
          <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full border border-[#36A783]/30">
            <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
            <span>24-HOUR STATUTORY SLA COMMITTED</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64748B]">
            <Lock className="w-3.5 h-3.5 text-[#36A783]" />
            <span>AES-256 Vault Encrypted</span>
          </div>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#216D56] to-[#36A783] text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#36A783]/20">
          <CheckCircle2 className="w-8 h-8 text-[#C6F850]" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif text-[#071426] mb-2 text-center">
          Consultation Request Confirmed
        </h3>

        <p className="text-sm sm:text-base text-[#4A5D73] max-w-lg mx-auto leading-relaxed text-center mb-6 font-sans">
          Thank you, <strong className="text-[#071426]">{formData.fullName}</strong>. Your inquiry for{" "}
          <strong className="text-[#071426]">{formData.service}</strong> has been logged directly with our Senior Partner Advisory Desk.
        </p>

        {/* Reference ID Capsule */}
        <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] mb-8">
          <div className="flex items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block mb-0.5">
                Statutory Tracking ID
              </span>
              <span className="text-base sm:text-lg font-mono font-bold text-[#216D56]">
                {submissionMeta.referenceId}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyReference}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#CBD5E1] hover:border-[#36A783] text-xs font-mono text-[#071426] transition-colors cursor-pointer shadow-2xs"
            >
              {copiedRef ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#36A783]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="mt-2 pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B] font-mono">
            <span>Logged: {submissionMeta.timestamp} GST</span>
            <span className="text-[#36A783] font-semibold">Priority 1 Queue</span>
          </div>
        </div>

        {/* High-Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
          <a
            href={whatsAppDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Instant WhatsApp Priority</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#book-session"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#071426] hover:bg-[#1E3A5F] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md"
          >
            <Calendar className="w-4 h-4 text-[#C6F850]" />
            <span>Book Video Slot</span>
          </a>
        </div>

        {/* Reset / Submit Another */}
        <div className="text-center mt-6">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setSubmissionMeta(null);
              setCurrentStep(1);
              setFormData({
                fullName: "",
                companyName: "",
                email: "",
                mobile: "",
                service: defaultService || "UAE Corporate Tax",
                notes: "",
                consent: true,
                honeypot: "",
              });
              setFormLoadTime(Date.now());
            }}
            className="inline-flex items-center text-xs font-mono text-[#64748B] hover:text-[#071426] transition-colors underline cursor-pointer"
          >
            Submit another company inquiry
          </button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // STATE 2: 3-STEP WEBSITE THEME INTAKE FORM
  // =========================================================================
  return (
    <div className="bg-white rounded-3xl border border-[#CBD5E1]/80 p-6 sm:p-9 lg:p-11 shadow-xl relative overflow-hidden text-[#071426]">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#E2E8F0]">
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

      {/* 3-Step Interactive Tab Bar (Exact Website Theme) */}
      <div className="mb-6">
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          {[
            { num: "01", label: "Your Name", icon: User, step: 1 },
            { num: "02", label: "Contact Info", icon: Phone, step: 2 },
            { num: "03", label: "Practice & Scope", icon: Briefcase, step: 3 },
          ].map((item, idx) => {
            const isActive = currentStep === item.step;
            const isCompleted = currentStep > item.step;
            return (
              <React.Fragment key={item.step}>
                {idx > 0 && (
                  <div
                    className={`flex-1 h-0.5 mx-1 sm:mx-2 transition-all duration-300 ${
                      currentStep >= item.step ? "bg-[#36A783]" : "bg-slate-200"
                    }`}
                  />
                )}
                <button
                  type="button"
                  onClick={() => {
                    if (item.step < currentStep) setCurrentStep(item.step as 1 | 2 | 3);
                  }}
                  disabled={item.step > currentStep}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    isActive
                      ? "bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/50 font-bold shadow-2xs"
                      : isCompleted
                      ? "bg-white text-[#071426] border border-[#CBD5E1] hover:border-[#36A783] cursor-pointer"
                      : "text-[#94A3B8] border border-transparent opacity-60 cursor-not-allowed"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5 text-[#36A783]" strokeWidth={2.5} />
                  ) : (
                    <span>{item.num}</span>
                  )}
                  <span className="hidden sm:inline font-sans text-xs font-medium">
                    {item.label}
                  </span>
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Step Subtitle / Guide */}
      <p className="text-xs sm:text-sm text-[#4A5D73] font-sans leading-relaxed mb-6">
        {currentStep === 1 && "Step 1 of 3: Let's start with your details."}
        {currentStep === 2 && "Step 2 of 3: How should our advisor reach you? (Email or Phone number)"}
        {currentStep === 3 && "Step 3 of 3: Select your required practice and any specific details."}
      </p>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 font-medium flex items-center gap-2.5 animate-in fade-in duration-200">
          <Info className="w-4 h-4 text-red-600 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Anti-Spam Hidden Honeypot Field */}
        <div className="opacity-0 absolute -z-10 w-0 h-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <label htmlFor="website_url_hp">Leave this field blank</label>
          <input
            type="text"
            id="website_url_hp"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* ================================================================= */}
        {/* TAB 1: NAME & OPTIONAL COMPANY                                    */}
        {/* ================================================================= */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-in fade-in duration-200">
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
                placeholder="e.g. Tariq Mansoor"
                autoFocus
                required
                className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#071426] placeholder-[#94A3B8] text-sm focus:outline-hidden focus:bg-white focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/20 transition-all font-sans"
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-xs sm:text-sm font-medium text-[#071426] mb-2 font-sans"
              >
                Company Name{" "}
                <span className="text-[#64748B] text-xs font-normal">
                  (Optional)
                </span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Horizon Trading LLC (or leave blank)"
                className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#071426] placeholder-[#94A3B8] text-sm focus:outline-hidden focus:bg-white focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/20 transition-all font-sans"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleNextStep}
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#216D56] hover:bg-[#1a5744] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Continue to Contact Info</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: EMAIL OR NUMBER (Client Rule: One is mandatory)             */}
        {/* ================================================================= */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="p-3 rounded-xl bg-[#EAF4F0] border border-[#36A783]/30 text-xs text-[#216D56] flex items-center gap-2">
              <Info className="w-4 h-4 text-[#36A783] shrink-0" />
              <span>Please provide at least one contact channel (Email or Phone/WhatsApp).</span>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-[#071426] mb-2 font-sans"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                autoFocus
                className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#071426] placeholder-[#94A3B8] text-sm focus:outline-hidden focus:bg-white focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/20 transition-all font-sans"
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block text-xs sm:text-sm font-medium text-[#071426] mb-2 font-sans"
              >
                Mobile / WhatsApp Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+971 50 000 0000"
                className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#071426] placeholder-[#94A3B8] text-sm focus:outline-hidden focus:bg-white focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/20 transition-all font-sans"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl border border-[#CBD5E1] text-[#475569] hover:bg-slate-50 text-sm font-semibold transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#216D56] hover:bg-[#1a5744] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Continue to Service Scope</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: SERVICE LIST & DESCRIPTION (Client Rule: Not mandatory)     */}
        {/* ================================================================= */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <label
                htmlFor="service"
                className="block text-xs sm:text-sm font-medium text-[#071426] mb-2 font-sans"
              >
                Required Advisory Practice
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#071426] text-sm focus:outline-hidden focus:bg-white focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/20 transition-all font-sans appearance-none cursor-pointer"
                >
                  {ALL_FORM_SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
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

            {/* Cloudflare Turnstile & Bot Shield Verification Pill */}
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#36A783] shrink-0" />
                <span className="text-xs text-[#64748B] font-sans">
                  AES-256 Cloud Encryption • 24-Hour Callback
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#216D56] bg-white border border-[#36A783]/30 px-2 py-0.5 rounded-md font-semibold">
                Protected
              </span>
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded-md border-[#CBD5E1] text-[#36A783] focus:ring-[#36A783] cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs text-[#556980] font-sans leading-relaxed cursor-pointer select-none">
                I consent to Auditclue storing my inquiry in accordance with the{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  className="text-[#36A783] font-semibold underline hover:text-[#216D56]"
                >
                  Privacy Policy
                </Link>
                . Your information will never be shared.
              </label>
            </div>

            {/* Submit & Back Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-4 rounded-xl border border-[#CBD5E1] text-[#475569] hover:bg-slate-50 text-sm font-semibold transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={loading}
                className="group/btn relative flex-1 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#C6F850] px-7 py-4 text-base font-bold text-[#071426] shadow-md hover:shadow-lg hover:shadow-[#C6F850]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span
                  className="absolute inset-0 bg-[#FFFFFF] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-xl"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center gap-2 font-sans font-bold text-sm sm:text-base">
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#071426]" />
                      <span>Transmitting to Advisor Desk...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Free Consultation</span>
                      <span className="text-lg leading-none font-sans">↳</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
