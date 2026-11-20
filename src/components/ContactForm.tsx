"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Loader2,
  ShieldCheck,
  Copy,
  Check,
  Lock,
  Shield,
  Calendar,
  MessageSquare,
  Info,
} from "lucide-react";
import { ALL_FORM_SERVICES } from "@/data/formServices";

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService }: ContactFormProps = {}) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobile: "",
    service: defaultService || "",
    notes: "",
    consent: false,
    honeypot: "", // Anti-spam trap
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

  // Initialize anti-spam velocity timer
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side quick checks
    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMsg("Please enter your company name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid business email address.");
      return;
    }
    if (!formData.mobile.trim()) {
      setErrorMsg("Please enter your mobile or WhatsApp contact number.");
      return;
    }
    if (!formData.service) {
      setErrorMsg("Please select the required advisory service.");
      return;
    }
    if (!formData.consent) {
      setErrorMsg(
        "Please accept the data protection and privacy consent to proceed."
      );
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
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
        `Hello Auditclue Advisory Desk, I just submitted an inquiry on your website.\n- Reference: ${submissionMeta.referenceId}\n- Name: ${formData.fullName}\n- Company: ${formData.companyName}\n- Service: ${formData.service}\nPlease route this to the senior partner in charge.`
      )}`
    : "https://wa.me/971547338583";

  // =========================================================================
  // STATE 1: LUXURY HIGH-TRUST CONFIRMATION MODAL / SCREEN
  // =========================================================================
  if (submitted && submissionMeta) {
    return (
      <div className="bg-white rounded-3xl border border-[#CBD5E1]/80 p-7 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-[#071426] animate-in fade-in zoom-in-95 duration-300">
        {/* Subtle Ambient Background Watermark */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#36A783]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Top Security Status Bar */}
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

        {/* Icon & Congratulations */}
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

        {/* Reference Number & Timestamp Card */}
        <div className="bg-[#F8FAFC] border border-[#CBD5E1]/90 rounded-2xl p-5 mb-8 max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block mb-0.5">
                Official Reference ID
              </span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-[#071426] tracking-tight">
                {submissionMeta.referenceId}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyReference}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#EAF4F0] border border-[#CBD5E1] text-xs font-mono font-semibold text-[#071426] hover:text-[#216D56] transition-colors shadow-2xs cursor-pointer"
            >
              {copiedRef ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#36A783]" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>Copy Reference</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-3 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B] font-mono">
            <span>Log Time (UAE):</span>
            <span className="text-[#071426] font-medium">{submissionMeta.timestamp}</span>
          </div>
        </div>

        {/* Practice Commitments Checklist */}
        <div className="bg-[#EAF4F0]/60 border border-[#36A783]/20 rounded-2xl p-4 sm:p-5 mb-8 max-w-lg mx-auto text-left space-y-2.5">
          <div className="text-xs font-mono font-bold text-[#216D56] uppercase tracking-wider mb-2">
            WHAT HAPPENS NEXT:
          </div>
          <div className="flex items-start gap-2.5 text-xs text-[#334155]">
            <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0 mt-0.5" />
            <span>Assigned to a Chartered Tax Advisor / CPA Principal specializing in {formData.service}.</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-[#334155]">
            <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0 mt-0.5" />
            <span>Confidentiality covered by statutory bank-grade non-disclosure (AES-256 encrypted storage).</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-[#334155]">
            <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0 mt-0.5" />
            <span>Guaranteed advisor call or WhatsApp outreach to <strong className="text-[#071426]">{formData.mobile}</strong> within 24 hours.</span>
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
              setFormData({
                fullName: "",
                companyName: "",
                email: "",
                mobile: "",
                service: "",
                notes: "",
                consent: false,
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
  // STATE 2: THE LUXURY CONSULTATION INTAKE FORM
  // =========================================================================
  return (
    <div className="bg-white rounded-3xl border border-[#CBD5E1]/80 p-7 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden text-[#071426]">
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
        Fill in the form below and one of our qualified chartered advisors will contact you
        within 24 hours.
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
              Business Email <span className="text-[#36A783] font-bold">*</span>
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
              Mobile / WhatsApp Number <span className="text-[#36A783] font-bold">*</span>
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
            Required Advisory Practice <span className="text-[#36A783] font-bold">*</span>
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
              <option value="">Select an official UAE service practice</option>
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

        {/* Row 5: Cloudflare Turnstile & Bot Shield Verification Pill */}
        <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EAF4F0] text-[#216D56] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#36A783]" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#071426] flex items-center gap-1.5">
                <span>Cloudflare Turnstile Protected</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#36A783] animate-pulse" />
              </div>
              <div className="text-[11px] text-[#64748B] font-sans">
                Anti-bot verification & AES-256 cloud encryption active
              </div>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#216D56] bg-white border border-[#36A783]/30 px-2.5 py-1 rounded-md shadow-2xs">
            <Check className="w-3 h-3 text-[#36A783]" />
            <span>Passed</span>
          </div>
        </div>

        {/* Row 6: Mandatory Privacy & Consent Checkbox */}
        <div className="flex items-start gap-3 pt-1">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-1 h-4 w-4 rounded-md border-[#CBD5E1] text-[#36A783] focus:ring-[#36A783] cursor-pointer"
          />
          <label htmlFor="consent" className="text-xs text-[#556980] font-sans leading-relaxed cursor-pointer select-none">
            I consent to Auditclue collecting and storing my company contact information in accordance with UAE Federal Decree-Law No. 45 of 2021 (Personal Data Protection) and the{" "}
            <Link
              href="/privacy"
              target="_blank"
              className="text-[#36A783] font-semibold underline hover:text-[#216D56]"
            >
              Privacy Policy
            </Link>
            . Your information will never be shared with third parties. <span className="text-[#36A783] font-bold">*</span>
          </label>
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

          <p className="text-center text-xs text-[#64748B] font-mono mt-3">
            AES-256 Encrypted • Zero Obligation • 24-Hour Callback
          </p>
        </div>
      </form>
    </div>
  );
}
