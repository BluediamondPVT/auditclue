import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import { PROCESS_STEPS_DATA, PROCESS_PAGE_INTRO } from "@/data/processData";
import {
  MessageSquareQuote,
  Calculator,
  UploadCloud,
  ShieldCheck,
  FileCheck2,
  Headphones,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Lock,
  Clock,
  Shield,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Simple 6-Step Process | Auditclue Global Advisory Services LLC",
  description:
    "From your first query to ongoing support — a clear, transparent, and fully digital process designed for modern UAE businesses.",
};

const STEP_ICONS = [
  MessageSquareQuote,
  Calculator,
  UploadCloud,
  ShieldCheck,
  FileCheck2,
  Headphones,
];

const OPERATIONAL_PILLARS = [
  {
    icon: Laptop,
    title: "100% Digital Execution",
    desc: "Complete your onboarding, file transfer, and compliance reviews without a single in-office visit.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Encryption",
    desc: "All client ledgers, audit workpapers, and tax filings are secured in our 256-bit encrypted digital vault.",
  },
  {
    icon: ShieldCheck,
    title: "Certified UAE Expertise",
    desc: "Chartered accountants and registered FTA Tax Agents directly manage and sign off on your deliverables.",
  },
  {
    icon: Clock,
    title: "Guaranteed Turnarounds",
    desc: "Predictable milestones with real-time tracking, proactive reminders, and zero unexpected surcharges.",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden bg-[#F6F8FA] text-[#233F5B]">
      {/* Navigation Header */}
      <Navbar />

      {/* Editorial Process Hero */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 border-b border-[#E1E7ED] bg-white">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-40" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#36A783]/8 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-[#EAF4F0] border border-[#36A783]/30 text-[#216D56] text-xs sm:text-[13px] font-semibold px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#36A783]" />
            <span>HOW WE WORK • OPERATING MODEL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#233F5B] leading-[1.14] tracking-tight mb-6">
            <FlowText text={PROCESS_PAGE_INTRO.heading} startDelay={0.1} as="span" />
          </h1>

          <p className="text-lg sm:text-xl text-[#556980] font-sans leading-relaxed max-w-3xl mx-auto mb-10">
            {PROCESS_PAGE_INTRO.subtitle}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-100 text-left">
            {OPERATIONAL_PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <Icon className="w-5 h-5 text-[#36A783] mb-2" />
                  <div className="text-xs font-semibold text-[#233F5B] leading-snug">{p.title}</div>
                  <div className="text-[11px] text-[#718096] leading-snug mt-1">{p.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complete 6-Step Detailed Process Section */}
      <section className="py-20 sm:py-24 lg:py-28 relative z-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          
          <div className="space-y-10 sm:space-y-12">
            {PROCESS_STEPS_DATA.map((item, index) => {
              const Icon = STEP_ICONS[index] || CheckCircle2;

              return (
                <article
                  key={item.step}
                  id={`step-${item.step}`}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 lg:p-10 shadow-[0_4px_24px_rgba(35,63,91,0.04)] hover:shadow-[0_12px_40px_rgba(35,63,91,0.08)] hover:border-[#36A783]/50 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Subtle decorative step watermarking in background */}
                  <span className="pointer-events-none absolute -bottom-6 -right-3 text-7xl sm:text-8xl lg:text-9xl font-serif font-bold text-slate-100 select-none opacity-60 group-hover:text-[#EAF4F0] group-hover:opacity-80 transition-colors">
                    {item.number}
                  </span>

                  <div className="relative z-10">
                    {/* Step Header Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#216D56] bg-[#EAF4F0] border border-[#36A783]/30 px-3.5 py-1 rounded-full">
                          Step {item.number}
                        </span>
                        <span className="text-xs font-mono text-[#556980] bg-slate-100 px-3 py-1 rounded-md">
                          {item.slaBadge}
                        </span>
                      </div>

                      <div className="text-xs font-medium text-[#216D56] flex items-center gap-1.5 bg-[#EAF4F0]/60 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783]" />
                        <span>{item.deliverableHighlight}</span>
                      </div>
                    </div>

                    {/* Step Title & Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#EAF4F0] border border-[#36A783]/30 flex items-center justify-center text-[#216D56] shrink-0 group-hover:bg-[#36A783] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#233F5B] tracking-tight leading-snug">
                          Step {item.number} — {item.title}
                        </h2>
                      </div>
                    </div>

                    {/* Full Comprehensive Step Description (Exact wording preserved) */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-base sm:text-lg text-[#363636] font-sans leading-relaxed">
                        {item.fullDescription}
                      </p>
                    </div>

                    {/* Step Practical Takeaways */}
                    <div className="mt-6 flex flex-wrap gap-2 pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#556980] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-lg">
                        <CheckCircle2 className="w-3 h-3 text-[#36A783]" />
                        <span>Zero physical visits required</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#556980] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-lg">
                        <CheckCircle2 className="w-3 h-3 text-[#36A783]" />
                        <span>Dedicated senior partner assigned</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#556980] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-lg">
                        <CheckCircle2 className="w-3 h-3 text-[#36A783]" />
                        <span>Encrypted audit-ready vault</span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="bg-[#071426] text-white py-16 sm:py-20 border-t border-white/10 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#36A783]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-[#36A783]/20 border border-[#36A783]/40 text-[#83D9BE] text-xs font-semibold px-3.5 py-1 rounded-full mb-4 font-mono">
            <span>READY TO BEGIN STEP 01?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-4 tracking-tight">
            Initiate Your 100% Digital Advisory Engagement
          </h2>

          <p className="text-base sm:text-lg text-[#A8B7C9] max-w-2xl mx-auto mb-8 leading-relaxed">
            Submit your enquiry today. Our senior chartered advisors will review your requirements and provide a clear, fixed-fee proposal within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#consult-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#36A783] hover:bg-[#2B896B] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-[#36A783]/30 transition-all text-base cursor-pointer"
            >
              <span>Submit Your Service Query</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-8 py-4 rounded-xl border border-white/15 transition-all text-base cursor-pointer"
            >
              <span>Explore All Practices</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Corporate Footer */}
      <Footer />
    </main>
  );
}
