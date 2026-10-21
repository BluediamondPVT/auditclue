import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import TaxCalculator from "@/components/TaxCalculator";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "UAE Corporate Tax & VAT Calculator (2024–2029 Statutory Rules) | Auditclue Advisory",
  description:
    "Calculate your UAE Corporate Tax liability (9%), check Small Business Relief eligibility (up to AED 3M revenue extended to 2029), and estimate VAT (5%) in real time.",
};

const STATUTORY_FAQS = [
  {
    num: "01",
    question: "What is the 0% UAE Corporate Tax Threshold?",
    answer:
      "Under Federal Decree-Law No. 47 of 2022, all taxable persons (Mainland LLCs and Free Zone entities) enjoy a 0% tax rate on the first AED 375,000 of taxable net profit. Only profits exceeding AED 375,000 are subject to the standard 9% rate.",
  },
  {
    num: "02",
    question: "How does Small Business Relief (SBR) apply & what happens after 2029?",
    answer:
      "Ministerial Decision No. 73 of 2023 allows resident taxable persons with gross revenue equal to or below AED 3,000,000 in a tax period to elect for Small Business Relief, treating their taxable income as zero (0% tax liability) for tax periods ending on or before Dec 31, 2029. Post-2029, or once revenue exceeds AED 3M, businesses transition to the standard regime: 0% up to AED 375,000, and 9% on net profits exceeding AED 375,000.",
  },
  {
    num: "03",
    question: "How do Free Zone companies achieve 0% tax?",
    answer:
      "A Qualifying Free Zone Person (QFZP) that maintains adequate economic substance, derives Qualifying Income from transactions with other Free Zone entities or foreign customers, and prepares audited financial statements pays 0% on Qualifying Income and 9% on non-qualifying income.",
  },
  {
    num: "04",
    question: "What is the official FTA Tax Return filing deadline?",
    answer:
      "Corporate tax returns and tax payments must be submitted to the Federal Tax Authority (FTA) within 9 months from the end of the relevant financial year (e.g. for a financial year ending Dec 31, 2024, the deadline is Sept 30, 2025).",
  },
];

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426] selection:bg-[#C6F850] selection:text-[#071426]">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ================================================================= */}
        {/* 1. HERO SECTION: Smooth Multi-Layer Ambient Gradient Mesh          */}
        {/* ================================================================= */}
        <section className="relative bg-gradient-to-b from-[#EDF5F1] via-[#F8FAFC] to-[#EEF2F7] border-b border-[#CBD5E1]/60 pt-16 pb-16 sm:pt-20 sm:pb-22 overflow-hidden">
          {/* Multi-Layer Ambient Gradient Mesh Container */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            {/* Layer 1: Emerald & Mint Aurora Orb */}
            <div className="absolute -top-32 right-1/4 w-[650px] h-[500px] bg-gradient-to-br from-[#36A783]/22 via-[#83D9BE]/18 to-transparent rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />
            
            {/* Layer 2: Deep Brand Navy Soft Ambient Aura */}
            <div className="absolute -bottom-24 -left-20 w-[600px] h-[450px] bg-gradient-to-tr from-[#233F5B]/14 via-[#36A783]/12 to-transparent rounded-full blur-[130px] pointer-events-none" />

            {/* Layer 3: Luminous Lime Warmth Focus */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[280px] bg-[#C6F850]/10 rounded-full blur-[110px] pointer-events-none" />

            {/* Layer 4: Architectural Precision Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_65%,transparent_100%)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            {/* Minimalist Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-[#64748B] font-medium mb-6"
            >
              <Link href="/" className="hover:text-[#36A783] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#071426] font-semibold">
                UAE Tax Calculator
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                <span>FTA STATUTORY SIMULATOR • 2024–2029 EXTENDED</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#071426] tracking-tight leading-[1.1] mb-6">
                <FlowText
                  text="UAE Corporate Tax & VAT Calculator."
                  as="span"
                />
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#334155] font-sans font-normal leading-relaxed max-w-3xl">
                Simulate your statutory 9% corporate tax liability, verify
                eligibility for 0% Small Business Relief (up to AED 3M revenue),
                and estimate VAT obligations in real time.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. THE INTERACTIVE CALCULATOR SUITE (Neumorphic Canvas Stage)      */}
        {/* ================================================================= */}
        <section className="py-12 sm:py-16 lg:py-24 relative bg-[#eef2f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TaxCalculator />
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. STATUTORY TAX FRAMEWORK GUIDE (Pure Editorial Typography)      */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-t border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-4 border-b border-[#071426]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                  STATUTORY FRAMEWORK
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426]">
                  Key UAE Corporate Tax Provisions
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-mono">
                Federal Decree-Law No. 47 of 2022
              </div>
            </div>

            <div className="divide-y divide-[#E2E8F0]">
              {STATUTORY_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
                >
                  <div className="lg:col-span-4 flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-serif font-light text-[#216D56]/80">
                      {faq.num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#071426] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. LUXURY ADVISORY CALLOUT (Signature Kinetic Button)             */}
        {/* ================================================================= */}
        <section className="py-18 sm:py-24 bg-[#071426] text-white relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-40" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#36A783]/15 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
            <div className="inline-flex items-center gap-2 bg-[#36A783]/20 border border-[#36A783]/40 text-[#83D9BE] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#83D9BE]" />
              <span>CLAIM ELIGIBLE RELIEFS WITH CERTIFIED TAX AGENTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
              Ready to Optimize Your Corporate Tax Position?
            </h2>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Connect with our registered FTA tax agents for a confidential,
              zero-obligation tax planning session.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#C6F850] px-7 py-4 text-base font-bold text-[#071426] shadow-lg hover:shadow-[#C6F850]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer w-full sm:w-auto"
              >
                <span
                  className="absolute inset-0 bg-[#FFFFFF] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-xl"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Schedule Tax Diagnostic</span>
                  <span className="text-lg leading-none font-sans">↳</span>
                </span>
              </Link>

              <a
                href="https://wa.me/971547338583"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white text-base font-medium px-6 py-4 rounded-xl border border-white/15 transition-colors w-full sm:w-auto"
              >
                <span>Chat With a Tax Agent</span>
                <ArrowRight className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Comprehensive Corporate Footer */}
      <Footer />
    </div>
  );
}
