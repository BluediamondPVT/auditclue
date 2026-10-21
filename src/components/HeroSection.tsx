"use client";

import { useState, useEffect, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  LockKeyhole,
} from "lucide-react";
import FlowText from "@/components/FlowText";

const services = [
  { value: "corporate-tax", label: "UAE Corporate Tax" },
  { value: "audit-assurance", label: "Statutory Audit & Assurance" },
  { value: "vat-services", label: "VAT Registration & Filing" },
  { value: "business-setup", label: "Business Setup & Formation" },
  { value: "accounting-bookkeeping", label: "Accounting & Bookkeeping" },
  { value: "transfer-pricing", label: "Transfer Pricing" },
  { value: "cfo-advisory", label: "Virtual CFO & Financial Advisory" },
  { value: "other", label: "Other Advisory Requirements" },
];

export default function HeroSection() {
  const [serviceType, setServiceType] = useState("corporate-tax");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [heroActive, setHeroActive] = useState(false);

  useEffect(() => {
    const triggerHero = () => {
      setHeroActive(true);
    };

    window.addEventListener("auditclue:curtainOpen", triggerHero);

    // Fallback: in case event was already fired or page accessed directly
    const fallback = setTimeout(() => {
      setHeroActive(true);
    }, 1000);

    return () => {
      window.removeEventListener("auditclue:curtainOpen", triggerHero);
      clearTimeout(fallback);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // UI demonstration only. Connect your backend or CRM here
    // before using this form for live enquiries.
    setSubmitted(true);
  }

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-24 pb-8 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16"
    >
      <div className="mx-auto grid max-w-355 grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-14 px-4 sm:px-8 lg:px-10">
        {/* Left: Editorial introduction */}
        <div className="lg:col-span-6">
          <div
            className={`eyebrow mb-4 sm:mb-6 text-[11px] sm:text-[13px] tracking-wider transition-opacity duration-500 ${
              heroActive ? "hero-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 rounded-full bg-brand-teal" />
            Trusted by Businesses Across UAE
          </div>

          <h1
            aria-label="Fully Digital Audit, Tax & Advisory Services for Modern Businesses"
            className="max-w-190 text-[clamp(2rem,6.8vw,4.6rem)] font-medium leading-[1.14] sm:leading-[1.08] tracking-[-0.035em] sm:tracking-[-0.045em] text-brand-navy"
          >
            <span aria-hidden="true">
              {heroActive ? (
                <>
                  <FlowText
                    text="Fully Digital Audit, Tax"
                    startDelay={0.05}
                    charDelay={0.018}
                  />
                  <br />
                  <FlowText
                    text="& Advisory Services for Modern Businesses"
                    startDelay={0.32}
                    charDelay={0.018}
                    className="text-brand-teal-dark"
                  />
                </>
              ) : (
                <span className="opacity-0">
                  Fully Digital Audit, Tax
                  <br />
                  <span className="text-brand-teal-dark">
                    & Advisory Services for Modern Businesses
                  </span>
                </span>
              )}
            </span>
          </h1>

          <p
            className={`mt-4 sm:mt-7 max-w-147.5 text-[15px] sm:text-lg leading-relaxed sm:leading-8 text-(--text-secondary) transition-opacity duration-500 ${
              heroActive ? "hero-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.55s" }}
          >
            Auditclue Global Advisory Services LLC provides end-to-end digital solutions for audit, accounting, UAE corporate tax, VAT, finance, compliance, and business advisory services.
          </p>

          <div
            className={`mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center transition-opacity duration-500 ${
              heroActive ? "hero-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.7s" }}
          >
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
          <div
            className={`mt-6 hidden items-center gap-2 pl-4 sm:flex lg:mt-8 lg:pl-14 transition-opacity duration-500 ${
              heroActive ? "hero-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.85s" }}
          >
            <span className="font-caveat text-xl font-bold leading-tight text-[#475569] sm:text-2xl">
              Growing
              <br />
              Businesses
              <br />
              Across UAE
            </span>
            <svg
              className="-mt-3 h-10 w-14 text-[#475569]"
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
          className={`scroll-mt-20 lg:col-span-6 mt-4 lg:mt-0 transition-opacity duration-500 ${
            heroActive ? "hero-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative rounded-2xl border border-[var(--border-default)] bg-white p-5 sm:p-8 lg:p-9 shadow-[0_24px_80px_rgba(35,63,91,0.10)]">
            {submitted ? (
              <div
                className="flex min-h-[410px] flex-col items-center justify-center text-center"
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
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary mt-7"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-1">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--brand-teal-dark)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
                    Start a conversation
                  </div>

                  <h2 className="mt-1 text-2xl font-medium leading-tight tracking-[-0.03em] text-[var(--brand-navy)] sm:text-[30px]">
                    Let&apos;s understand your business.
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                    Tell us what you need. Our team can review your requirements
                    and advise on the next step.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Service required
                    </label>

                    <select
                      id="serviceType"
                      value={serviceType}
                      onChange={(event) => setServiceType(event.target.value)}
                      className="form-control"
                      required
                    >
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contactName"
                        className="mb-1.5 block text-sm font-medium"
                      >
                        Full name
                      </label>

                      <input
                        id="contactName"
                        name="name"
                        autoComplete="name"
                        type="text"
                        placeholder="Your name"
                        className="form-control"
                        value={formData.name}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            name: event.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contactPhone"
                        className="mb-1.5 block text-sm font-medium"
                      >
                        Phone number
                      </label>

                      <input
                        id="contactPhone"
                        name="phone"
                        autoComplete="tel"
                        type="tel"
                        placeholder="+971 ..."
                        className="form-control"
                        value={formData.phone}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            phone: event.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contactEmail"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Business email
                    </label>

                    <input
                      id="contactEmail"
                      name="email"
                      autoComplete="email"
                      type="email"
                      placeholder="you@company.com"
                      className="form-control"
                      value={formData.email}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          email: event.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactMessage"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      How can we help?
                    </label>

                    <textarea
                      id="contactMessage"
                      name="message"
                      rows={3}
                      placeholder="Briefly describe your requirements..."
                      className="form-control"
                      value={formData.message}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          message: event.target.value,
                        })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-brand-teal px-5 min-h-[52px] w-full text-[15px] font-semibold text-white shadow-[0_6px_22px_rgba(54,167,131,0.3)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_28px_rgba(23,45,67,0.32)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                  >
                    <span
                      className="absolute inset-0 bg-[#172D43] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 rounded-xl"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover:left-[150%]"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 block overflow-hidden leading-tight">
                      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                        Request a Consultation
                      </span>
                      <span
                        className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-white"
                        aria-hidden="true"
                      >
                        Request a Consultation
                      </span>
                    </span>
                    <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20 transition-all duration-500 group-hover:bg-white text-white group-hover:text-[#172D43]">
                      <ArrowUpRight
                        className="absolute h-3.5 w-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0"
                        strokeWidth={2.4}
                      />
                      <ArrowUpRight
                        className="absolute h-3.5 w-3.5 -translate-x-4 translate-y-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                        strokeWidth={2.4}
                      />
                    </span>
                  </button>
                </form>

                <div className="mt-5 flex items-start gap-2.5 border-t border-[var(--border-default)] pt-4">
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
