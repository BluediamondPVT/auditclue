import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
// import LeadershipSection from "@/components/LeadershipSection";
import {
  Star,
  Laptop,
  ShieldCheck,
  Clock,
  Lock,
  FileText,
  Users2,
  ArrowRight,
  Building2,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Auditclue Global Advisory Services LLC",
  description:
    "A fully digital professional advisory firm providing audit, accounting, tax, finance, and corporate advisory services to businesses in the UAE and beyond.",
};

// Client's exact 5 Core Capabilities
const CORE_CAPABILITIES = [
  "End-to-end digital service delivery — anytime, anywhere",
  "UAE corporate tax, VAT & compliance expertise",
  "Fast turnaround with professional documentation",
  "Transparent pricing with no hidden charges",
  "Secure, confidential client data handling",
];

// Client's exact 6 Operational Pillars
const OPERATIONAL_PILLARS = [
  {
    icon: Laptop,
    number: "01",
    title: "Fully Digital Operations",
    description:
      "Complete digital service delivery — no physical office visits required.",
    tag: "100% Cloud Execution",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "UAE Compliance Expertise",
    description: "Deep knowledge of UAE tax, regulatory, and legal frameworks.",
    tag: "FTA & Ministry Aligned",
  },
  {
    icon: Clock,
    number: "03",
    title: "Fast Response & Execution",
    description:
      "Committed turnaround times with clear communication at every stage.",
    tag: "Committed SLAs",
  },
  {
    icon: Lock,
    number: "04",
    title: "Secure & Confidential",
    description:
      "Bank-grade document security and strict client confidentiality.",
    tag: "256-Bit Vault Security",
  },
  {
    icon: FileText,
    number: "05",
    title: "Professional Reporting",
    description:
      "Clear, accurate, and timely financial and compliance reports.",
    tag: "Board-Ready Deliverables",
  },
  {
    icon: Users2,
    number: "06",
    title: "Dedicated Advisory Support",
    description:
      "Ongoing guidance beyond a single engagement — we become your partners.",
    tag: "Continuous Partnership",
  },
];

// UAE Regulatory & Authority Coverage
const REGULATORY_BADGES = [
  {
    badge: "UAE Tax Advisory",
    title: "Corporate Tax & VAT",
    subtitle: "UAE Federal Tax Framework Aligned",
  },
  {
    badge: "Global Standard",
    title: "IFRS & ISA Standards",
    subtitle: "Statutory Audit & Assurance",
  },
  {
    badge: "Mainland & Free Zones",
    title: "All 7 Emirates & 40+ Free Zones",
    subtitle: "Mainland DED + DMCC, IFZA, DAFZA, JAFZA, ADGM & DIFC",
  },
  {
    badge: "Digital First",
    title: "Paperless Operations",
    subtitle: "Encrypted Cloud Workflows",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ================================================================= */}
        {/* 1. HERO SECTION: Brand Statement & Thesis                         */}
        {/* ================================================================= */}
        <section className="relative bg-white border-b border-[#E2E8F0] pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-18 lg:pb-22 overflow-hidden">
          {/* Subtle Ambient Background Texture */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-40"
            aria-hidden="true"
          >
            <div className="absolute -top-24 right-1/4 w-[600px] h-[350px] bg-[#36A783]/8 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-[#64748B] font-medium mb-8"
            >
              <Link href="/" className="hover:text-[#36A783] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#071426] font-semibold">About Us</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Client's Core Identity */}
              <div className="lg:col-span-7">
                {/* Eyebrow Label */}
                <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                  <span>About Auditclue Global Advisory</span>
                </div>

                {/* Client's Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#071426] tracking-tight leading-[1.15] mb-6">
                  <FlowText
                    text="A Fully Digital Advisory Firm Built for the UAE"
                    as="span"
                  />
                </h1>

                {/* Client's Exact Intro Paragraphs */}
                <div className="space-y-4 text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed max-w-2xl mb-6">
                  <p>
                    <strong className="text-[#071426] font-semibold">
                      Auditclue Global Advisory Services LLC
                    </strong>{" "}
                    is a fully digital professional advisory firm providing
                    audit, accounting, tax, finance, and corporate advisory
                    services to businesses in the UAE and beyond.
                  </p>
                  <p>
                    We focus on technology-enabled service delivery, timely
                    reporting, transparent communication, and practical business
                    solutions — helping SMEs, startups, and growing businesses
                    navigate UAE&apos;s complex regulatory landscape with
                    confidence.
                  </p>
                </div>

                {/* Verified Digital Practice Capability Strip */}
                <div className="mb-8 p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
                  <div className="flex items-center gap-2 text-[#071426] font-medium">
                    <Laptop className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>100% Digital UAE Delivery</span>
                  </div>
                  <span className="hidden sm:inline text-[#CBD5E1]">•</span>
                  <div className="flex items-center gap-2 text-[#071426] font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>Mainland DED & Major Free Zones</span>
                  </div>
                  <span className="hidden sm:inline text-[#CBD5E1]">•</span>
                  <div className="flex items-center gap-2 text-[#216D56] font-mono font-semibold">
                    <span>IFRS & ISA Standards</span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  {/* Signature Kinetic Lime Button */}
                  <Link
                    href="/#consult-form"
                    className="group/btn relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-[#C6F850] px-6 py-3.5 text-sm sm:text-base font-bold text-[#071426] shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lg hover:shadow-[#C6F850]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                  >
                    <span
                      className="absolute inset-0 bg-[#071426] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-xl"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover/btn:left-[150%]"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 block overflow-hidden leading-tight">
                      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                        Book a Consultation
                      </span>
                      <span
                        className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-y-0 text-[#C6F850]"
                        aria-hidden="true"
                      >
                        Book a Consultation
                      </span>
                    </span>
                    <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#071426]/10 group-hover/btn:bg-[#C6F850] text-[#071426] transition-all duration-500">
                      <span className="absolute text-base sm:text-lg leading-none font-sans transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-4 group-hover/btn:translate-y-4 group-hover/btn:opacity-0">
                        ↳
                      </span>
                      <span className="absolute text-base sm:text-lg leading-none font-sans -translate-x-4 -translate-y-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100">
                        ↳
                      </span>
                    </span>
                  </Link>

                  <Link
                    href="/process"
                    className="inline-flex items-center gap-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#071426] text-sm sm:text-base font-semibold px-5 py-3.5 rounded-xl border border-[#CBD5E1] transition-colors"
                  >
                    <span>Explore Our Process</span>
                    <ArrowRight className="w-4 h-4 text-[#64748B]" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Digital Advisory Practice Snapshot (No Stock Photos) */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-[#071426] text-white p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                  <div
                    className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 bg-[#36A783]/20 rounded-full blur-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-mono uppercase tracking-wider text-[#83D9BE] mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#C6F850]" />
                      <span>DIGITAL-FIRST UAE PRACTICE</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-serif font-medium text-white mb-2 leading-snug">
                      Built for Speed, Accuracy & Statutory Confidence
                    </h2>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6">
                      Modern cloud accounting, tax, audit, and corporate advisory delivered remotely with dedicated partner oversight.
                    </p>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#36A783]/20 text-[#83D9BE] flex items-center justify-center shrink-0">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">11 Integrated Practices</div>
                            <div className="text-[11px] text-[#94A3B8]">Setup, Tax, VAT, Audit & CFO</div>
                          </div>
                        </div>
                        <span className="font-mono text-[11px] text-[#C6F850] font-bold">UAE</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#36A783]/20 text-[#83D9BE] flex items-center justify-center shrink-0">
                            <Lock className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Encrypted Client Portal</div>
                            <div className="text-[11px] text-[#94A3B8]">Paperless intake & real-time tracking</div>
                          </div>
                        </div>
                        <span className="font-mono text-[11px] text-[#83D9BE] font-bold">AES-256</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#36A783]/20 text-[#83D9BE] flex items-center justify-center shrink-0">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">24-Hour Scoping Turnaround</div>
                            <div className="text-[11px] text-[#94A3B8]">Fixed-fee, zero hidden costs</div>
                          </div>
                        </div>
                        <span className="font-mono text-[11px] text-[#C6F850] font-bold">SLA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. THE 5 CORE CAPABILITIES (With Star Icons)                      */}
        {/* ================================================================= */}
        <section className="py-14 sm:py-20 bg-[#F1F6F9] border-b border-[#E2E8F0] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#216D56] bg-[#EAF4F0] border border-[#36A783]/30 px-3 py-1 rounded-full mb-3">
                <span>Our Core Delivery Model</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426] tracking-tight">
                Designed for Velocity, Precision & Certainty
              </h2>
            </div>

            {/* The 5 Star Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {CORE_CAPABILITIES.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#CBD5E1]/80 hover:border-[#36A783]/50 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EAF4F0] text-[#216D56] flex items-center justify-center shrink-0 group-hover:bg-[#36A783] group-hover:text-white transition-colors duration-300">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[#64748B] block mb-1">
                      STANDARD [0{idx + 1}]
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-[#071426] leading-snug">
                      {point}
                    </p>
                  </div>
                </div>
              ))}

              {/* 6th Complementary Summary Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#071426] to-[#12273F] text-white flex flex-col justify-between shadow-sm">
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#83D9BE] block mb-1">
                    CLIENT GUARANTEE
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-normal text-white leading-snug mb-2">
                    Contractual SLAs & 100% Statutory Compliance
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    Every deliverable is reviewed by qualified financial,
                    audit, and UAE tax professionals strictly adhering to
                    statutory compliance mandates.
                  </p>
                </div>
                <Link
                  href="/process"
                  className="pt-3 inline-flex items-center gap-2 text-xs font-bold text-[#C6F850] hover:text-white transition-colors group/cta w-fit"
                >
                  <span>Explore Practice Standards</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. THE 6 OPERATIONAL PILLARS (Architectural 3x2 Grid)             */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#216D56] bg-[#EAF4F0] border border-[#36A783]/30 px-3 py-1 rounded-full mb-3">
                <Building2 className="w-3.5 h-3.5 text-[#36A783]" />
                <span>Operational Pillars</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#071426] tracking-tight leading-[1.15]">
                Six Strategic Pillars Behind Our Digital Practice
              </h2>
            </div>

            {/* 3x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {OPERATIONAL_PILLARS.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.number}
                    className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#36A783]/50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Row: Icon + Number */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-white border border-[#CBD5E1] text-[#216D56] flex items-center justify-center group-hover:bg-[#36A783] group-hover:text-white group-hover:border-[#36A783] transition-colors duration-300 shadow-sm">
                          <Icon className="w-6 h-6" strokeWidth={1.75} />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#64748B] bg-white border border-[#E2E8F0] px-2.5 py-1 rounded-md">
                          {pillar.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#071426] mb-3 tracking-tight leading-snug">
                        {pillar.title}
                      </h3>

                      {/* Client's Exact Description */}
                      <p className="text-sm sm:text-base text-[#4A5D73] font-sans leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Tag Footer */}
                    <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#216D56] font-semibold">
                      <span>{pillar.tag}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#36A783]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. SENIOR LEADERSHIP & PRACTICE DIRECTORS                         */}
        {/* ================================================================= */}
        {/* <LeadershipSection />\ */}

        {/* ================================================================= */}
        {/* 5. UAE REGULATORY COVERAGE STRIP                                 */}
        {/* ================================================================= */}
        <section className="py-14 sm:py-16 bg-[#F1F6F9] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {REGULATORY_BADGES.map((b, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#CBD5E1] text-left shadow-sm"
                >
                  <span className="inline-block text-[11px] font-mono font-bold text-[#216D56] bg-[#EAF4F0] px-2.5 py-0.5 rounded-full mb-2.5">
                    {b.badge}
                  </span>
                  <div className="text-sm sm:text-base font-bold text-[#071426] leading-snug mb-1">
                    {b.title}
                  </div>
                  <div className="text-xs text-[#64748B] leading-relaxed">
                    {b.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. CLOSING CONVERSION BANNER (Signature Kinetic Callout)          */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-[#071426] text-white relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-40"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#36A783]/15 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
            <div className="inline-flex items-center gap-2 bg-[#36A783]/20 border border-[#36A783]/40 text-[#83D9BE] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 font-mono">
              <span>EXPERIENCE DIGITAL ADVISORY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
              Ready to Navigate UAE Regulations with Absolute Confidence?
            </h2>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Schedule an introductory consultation with our senior advisors. We
              analyze your requirements and provide transparent, fixed-fee
              scoping within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#consult-form"
                className="group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#C6F850] px-7 py-4 text-base font-bold text-[#071426] shadow-lg hover:shadow-[#C6F850]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer w-full sm:w-auto"
              >
                <span
                  className="absolute inset-0 bg-[#FFFFFF] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-xl"
                  aria-hidden="true"
                />
                <span className="relative z-10 block overflow-hidden leading-tight">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                    Book a Free Consultation
                  </span>
                  <span
                    className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-y-0 text-[#071426]"
                    aria-hidden="true"
                  >
                    Book a Free Consultation
                  </span>
                </span>
                <span className="relative z-10 text-lg leading-none font-sans">
                  ↳
                </span>
              </Link>

              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white text-base font-medium px-6 py-4 rounded-xl border border-white/15 transition-colors w-full sm:w-auto"
              >
                <span>View All 10 Services</span>
                <ArrowRight className="w-4 h-4 text-white/70" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
