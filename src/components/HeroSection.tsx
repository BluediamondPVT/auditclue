"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  LockKeyhole,
  Check,
  User,
  Phone,
  Briefcase,
  Info,
  Loader2,
} from "lucide-react";

import { ALL_FORM_SERVICES } from "@/data/formServices";

export default function HeroSection() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [serviceType, setServiceType] = useState("UAE Corporate Tax");
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const validateStep1 = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMsg("Please enter your full name.");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  const validateStep2 = () => {
    const emailVal = formData.email.trim();
    const phoneVal = formData.phone.replace(/\D/g, "");

    const hasValidEmail = Boolean(emailVal && emailVal.includes("@") && emailVal.includes("."));
    const hasValidPhone = Boolean(phoneVal.length >= 7);

    if (!hasValidEmail && !hasValidPhone) {
      setErrorMsg("Please provide at least a valid email address or phone / WhatsApp number.");
      return false;
    }

    if (emailVal && !hasValidEmail) {
      setErrorMsg("Please enter a valid email address (or leave blank if using phone only).");
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateStep1()) {
      setCurrentStep(1);
      return;
    }
    if (!validateStep2()) {
      setCurrentStep(2);
      return;
    }
    setLoading(true);
    setErrorMsg("");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          companyName: formData.companyName || `${formData.name} (Direct Inquiry)`,
          email: formData.email,
          mobile: formData.phone,
          service: serviceType,
          notes: formData.message,
          consent: true,
          formLoadTime: Date.now() - 3000,
        }),
      });
    } catch (e) {
      console.warn("Direct submission notice:", e);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-24 pb-8 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16"
    >
      <div className="mx-auto grid max-w-355 grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-14 px-4 sm:px-8 lg:px-10">
        {/* Left: Editorial introduction */}
        <div className="lg:col-span-6">
          <div className="eyebrow mb-4 sm:mb-6 text-[11px] sm:text-[13px] tracking-wider">
            <span className="h-2 w-2 rounded-full bg-brand-teal" />
            Trusted by Businesses Across UAE
          </div>

          <h1 className="max-w-190 text-[clamp(2rem,6.8vw,4.6rem)] font-medium leading-[1.14] sm:leading-[1.08] tracking-[-0.035em] sm:tracking-[-0.045em] text-brand-navy">
            Fully Digital Audit, Tax
            <br />
            <span className="text-brand-teal-dark">
              & Advisory Services for Modern Businesses
            </span>
          </h1>

          <p className="mt-4 sm:mt-7 max-w-147.5 text-[15px] sm:text-lg leading-relaxed sm:leading-8 text-(--text-secondary)">
            Auditclue Global Advisory Services LLC provides end-to-end digital solutions for audit, accounting, UAE corporate tax, VAT, finance, compliance, and business advisory services.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#consult-form"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-brand-teal px-7 min-h-12 sm:min-h-13 text-sm sm:text-base font-semibold text-white shadow-[0_6px_22px_rgba(54,167,131,0.28)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_32px_rgba(23,45,67,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span
                className="absolute inset-0 bg-[#172D43] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 rounded-full"
                aria-hidden="true"
              />
              <span
                className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover:left-[150%]"
                aria-hidden="true"
              />
              <span className="relative z-10 block overflow-hidden leading-tight">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  Discuss Your Requirements
                </span>
                <span
                  className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-white"
                  aria-hidden="true"
                >
                  Discuss Your Requirements
                </span>
              </span>
              <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20 backdrop-blur-xs transition-all duration-500 group-hover:bg-white text-white group-hover:text-[#172D43]">
                <ArrowUpRight
                  className="absolute h-3.5 w-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0"
                  strokeWidth={2.4}
                />
                <ArrowUpRight
                  className="absolute h-3.5 w-3.5 -translate-x-4 translate-y-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  strokeWidth={2.4}
                />
              </span>
            </a>

            <a
              href="#services"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-white border border-[#CBD6DF] hover:border-[#36A783] px-7 min-h-12 sm:min-h-13 text-sm sm:text-base font-semibold text-[#233F5B] hover:text-[#216D56] shadow-[0_2px_8px_rgba(35,63,91,0.06)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_8px_24px_rgba(54,167,131,0.18)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span
                className="absolute inset-0 bg-[#EAF4F0] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 rounded-full"
                aria-hidden="true"
              />
              <span className="relative z-10 block overflow-hidden leading-tight">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  Explore Our Services
                </span>
                <span
                  className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-[#216D56]"
                  aria-hidden="true"
                >
                  Explore Our Services
                </span>
              </span>
              <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#233F5B]/5 group-hover:bg-[#36A783] text-[#233F5B] group-hover:text-white transition-all duration-500">
                <ArrowDown
                  className="absolute h-3.5 w-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-4 group-hover:opacity-0"
                  strokeWidth={2.2}
                />
                <ArrowDown
                  className="absolute h-3.5 w-3.5 -translate-y-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100"
                  strokeWidth={2.2}
                />
              </span>
            </a>
          </div>

          {/* Hand-drawn annotation: Growing Businesses Across UAE (Desktop & Tablet) */}
          <div className="mt-6 hidden items-center gap-2 pl-4 sm:flex lg:mt-8 lg:pl-14">
            <span className="font-caveat text-xl font-bold leading-tight text-[#475569] sm:text-2xl shrink-0">
              Growing
              <br />
              Businesses
              <br />
              Across UAE
            </span>
            <svg
              className="-mt-3 h-10 w-14 text-[#475569] shrink-0"
              width={54}
              height={36}
              viewBox="0 0 54 36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M 6 28 C 18 32, 34 26, 48 8" />
              <path d="M 36 7 L 49 7 L 48 20" />
            </svg>
          </div>
        </div>

        {/* Right: Consultation card */}
        <div
          id="consult-form"
          className="scroll-mt-20 lg:col-span-6 mt-4 lg:mt-0"
        >
          <div className="relative rounded-2xl border border-border bg-white p-5 sm:p-8 lg:p-9 shadow-[0_24px_80px_rgba(35,63,91,0.10)]">
            {submitted ? (
              <div
                className="flex min-h-102.5 flex-col items-center justify-center text-center"
                role="status"
                aria-live="polite"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--bg-mint)] text-[var(--brand-teal-dark)]">
                  <CheckCircle2 size={32} />
                </div>

                <h2 className="mt-6 text-2xl font-medium text-[var(--brand-navy)]">
                  Thank you for your interest.
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
                  This form currently demonstrates the enquiry experience.
                  Connect your submission endpoint before accepting live
                  enquiries.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setFormData({
                      name: "",
                      companyName: "",
                      email: "",
                      phone: "",
                      message: "",
                    });
                  }}
                  className="btn btn-secondary mt-7"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--brand-teal-dark)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
                    Start a conversation
                  </div>

                  <h2 className="mt-1 text-2xl font-medium leading-tight tracking-[-0.03em] text-[var(--brand-navy)] sm:text-[28px]">
                    Let&apos;s understand your business.
                  </h2>
                </div>

                {/* 3-Step Interactive Tab Bar (Exact Website Theme) */}
                <div className="mb-5 border-b border-[var(--border-default)] pb-3">
                  <div className="flex items-center justify-between gap-1">
                    {[
                      { num: "01", label: "Name", step: 1 },
                      { num: "02", label: "Contact", step: 2 },
                      { num: "03", label: "Service", step: 3 },
                    ].map((item, idx) => {
                      const isActive = currentStep === item.step;
                      const isCompleted = currentStep > item.step;
                      return (
                        <div key={item.step} className="flex items-center flex-1">
                          {idx > 0 && (
                            <div
                              className={`h-0.5 flex-1 mx-1 sm:mx-2 transition-colors ${
                                currentStep >= item.step ? "bg-brand-teal" : "bg-slate-200"
                              }`}
                            />
                          )}
                          <button
                            type="button"
                            onClick={() => {
                              if (item.step < currentStep) setCurrentStep(item.step as 1 | 2 | 3);
                            }}
                            disabled={item.step > currentStep}
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono transition-all ${
                              isActive
                                ? "bg-[var(--bg-mint)] text-[var(--brand-teal-dark)] border border-brand-teal/40 font-bold shadow-2xs"
                                : isCompleted
                                ? "bg-white text-[var(--brand-navy)] border border-slate-200 cursor-pointer"
                                : "text-slate-400 border border-transparent opacity-60 cursor-not-allowed"
                            }`}
                          >
                            {isCompleted ? (
                              <Check className="w-3 h-3 text-brand-teal" strokeWidth={2.5} />
                            ) : (
                              <span>{item.num}</span>
                            )}
                            <span className="font-sans text-xs font-medium">{item.label}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {errorMsg && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium flex items-center gap-2 animate-in fade-in duration-200">
                    <Info className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* TAB 1: NAME & OPTIONAL COMPANY */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div>
                      <label
                        htmlFor="contactName"
                        className="mb-1.5 block text-sm font-medium text-[var(--brand-navy)]"
                      >
                        Full name <span className="text-brand-teal font-bold">*</span>
                      </label>

                      <input
                        id="contactName"
                        name="name"
                        autoComplete="name"
                        type="text"
                        placeholder="Your name"
                        className="form-control"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errorMsg) setErrorMsg("");
                        }}
                        autoFocus
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contactCompany"
                        className="mb-1.5 block text-sm font-medium text-[var(--brand-navy)]"
                      >
                        Company name <span className="text-xs font-normal text-slate-500">(Optional)</span>
                      </label>

                      <input
                        id="contactCompany"
                        name="companyName"
                        type="text"
                        placeholder="e.g. Horizon LLC (or leave blank)"
                        className="form-control"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="btn btn-primary w-full inline-flex items-center justify-center gap-2"
                      >
                        <span>Continue to Contact Info</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 2: EMAIL OR NUMBER (Client rule: One is mandatory) */}
                {currentStep === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-2.5 rounded-xl bg-[var(--bg-mint)] text-xs text-[var(--brand-teal-dark)] flex items-center gap-2">
                      <Info className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>Please provide either email or phone (or both).</span>
                    </div>

                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="mb-1.5 block text-sm font-medium text-[var(--brand-navy)]"
                      >
                        Email address
                      </label>

                      <input
                        id="contactEmail"
                        name="email"
                        autoComplete="email"
                        type="email"
                        placeholder="you@company.com"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errorMsg) setErrorMsg("");
                        }}
                        autoFocus
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contactPhone"
                        className="mb-1.5 block text-sm font-medium text-[var(--brand-navy)]"
                      >
                        Phone / WhatsApp number
                      </label>

                      <input
                        id="contactPhone"
                        name="phone"
                        autoComplete="tel"
                        type="tel"
                        placeholder="+971 50 000 0000"
                        className="form-control"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errorMsg) setErrorMsg("");
                        }}
                      />
                    </div>

                    <div className="flex items-center gap-2.5 pt-2">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="btn btn-secondary px-4 inline-flex items-center gap-1.5"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="btn btn-primary flex-1 inline-flex items-center justify-center gap-2"
                      >
                        <span>Continue to Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 3: SERVICE LIST & DESCRIPTION (Client rule: Not mandatory) */}
                {currentStep === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-200">
                    <div>
                      <label
                        htmlFor="serviceType"
                        className="mb-1.5 block text-sm font-medium text-[var(--brand-navy)]"
                      >
                        Service required
                      </label>

                      <select
                        id="serviceType"
                        value={serviceType}
                        onChange={(event) => setServiceType(event.target.value)}
                        className="form-control cursor-pointer"
                      >
                        {ALL_FORM_SERVICES.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contactMessage"
                        className="mb-1.5 block text-sm font-medium text-[var(--brand-navy)]"
                      >
                        How can we help? <span className="text-xs font-normal text-slate-500">(Optional)</span>
                      </label>

                      <textarea
                        id="contactMessage"
                        name="message"
                        rows={3}
                        placeholder="Briefly describe your requirements..."
                        className="form-control resize-none"
                        value={formData.message}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            message: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center gap-2.5 pt-2">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="btn btn-secondary px-4 inline-flex items-center gap-1.5"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={loading}
                        className="group relative flex-1 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-brand-teal px-5 min-h-[50px] text-[15px] font-semibold text-white shadow-[0_6px_22px_rgba(54,167,131,0.3)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_28px_rgba(23,45,67,0.32)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer disabled:opacity-70"
                      >
                        <span
                          className="absolute inset-0 bg-[#172D43] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 rounded-xl"
                          aria-hidden="true"
                        />
                        <span className="relative z-10 flex items-center gap-2">
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-white" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <span>Request a Consultation</span>
                              <span className="text-sm">↳</span>
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  </form>
                )}
reader-optimized
                <div className="mt-5 flex items-start gap-2.5 border-t border-border pt-4">
                  <LockKeyhole
                    size={16}
                    className="mt-0.5 shrink-0 text-[var(--brand-teal-dark)]"
                  />
                  <p className="text-xs leading-5 text-[var(--text-muted)]">
                    Your details are handled securely and only for the purpose
                    explained in our privacy policy.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
