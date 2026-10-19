import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import ContactForm from "@/components/ContactForm";
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  MapPin,
  Building2,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Free Consultation | Auditclue Global Advisory Services LLC",
  description:
    "Speak directly with a qualified advisor and receive practical solutions for your audit, accounting, tax, finance, and compliance requirements in the UAE.",
};

const JURISDICTION_BENCHMARKS = [
  {
    num: "01",
    title: "UAE Mainland DED",
    desc: "Dubai, Abu Dhabi, Sharjah & all Emirates",
  },
  {
    num: "02",
    title: "Major UAE Free Zones",
    desc: "DMCC, DIFC, ADGM, DAFZA, JAFZA, RAKEZ",
  },
  {
    num: "03",
    title: "FTA Registered Team",
    desc: "Certified Chartered CPAs & Tax Agents",
  },
  {
    num: "04",
    title: "100% Remote Delivery",
    desc: "Secure AES-256 cloud documentation vault",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426] selection:bg-[#C6F850] selection:text-[#071426]">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ================================================================= */}
        {/* 1. EDITORIAL HEADER SECTION with Multi-Layer Wave Gradients       */}
        {/* ================================================================= */}
        <section className="relative bg-[#F8FAFC] border-b border-[#E2E8F0] pt-14 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
          {/* Multi-Layer Flowing Gradient Waves Container */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            {/* Layer 1: Base Atmospheric Pastel Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EAF4F0]/85 via-[#F8FAFC] to-[#EEF5F2]/90" />

            {/* Layer 2: Glowing Radial Ambient Aura Orbs */}
            <div className="absolute -top-24 right-1/4 w-[650px] h-[450px] bg-gradient-to-br from-[#36A783]/18 via-[#83D9BE]/20 to-transparent rounded-full blur-[100px] pointer-events-none animate-glow-pulse" />
            <div className="absolute -bottom-20 -left-20 w-[550px] h-[400px] bg-gradient-to-tr from-[#233F5B]/12 via-[#36A783]/15 to-transparent rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[300px] bg-[#C6F850]/10 rounded-full blur-[90px] pointer-events-none" />

            {/* Layer 3: Flowing Wave Layer A (Emerald Mint Ribbon) */}
            <svg
              className="absolute inset-0 w-full h-full opacity-60 mix-blend-multiply pointer-events-none animate-wave-1"
              viewBox="0 0 1440 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="contact-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#36A783" stopOpacity="0.22" />
                  <stop offset="45%" stopColor="#83D9BE" stopOpacity="0.16" />
                  <stop offset="85%" stopColor="#216D56" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#233F5B" stopOpacity="0.04" />
                </linearGradient>
              </defs>
              <path
                d="M 0,160 C 280,240, 520,80, 800,160 C 1080,240, 1260,110, 1440,180 L 1440,0 L 0,0 Z"
                fill="url(#contact-wave-grad-1)"
              />
            </svg>

            {/* Layer 4: Flowing Wave Layer B (Counter-Swaying Cyan & Acid Lime Ribbon) */}
            <svg
              className="absolute inset-0 w-full h-full opacity-50 pointer-events-none animate-wave-2"
              viewBox="0 0 1440 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="contact-wave-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#83D9BE" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#36A783" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="#C6F850" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M 0,90 C 360,190, 680,40, 1020,130 C 1220,180, 1340,70, 1440,110 L 1440,0 L 0,0 Z"
                fill="url(#contact-wave-grad-2)"
              />
            </svg>

            {/* Layer 5: Flowing Wave Layer C (Bottom Horizon Soft Wave) */}
            <svg
              className="absolute bottom-0 left-0 right-0 w-full h-44 opacity-40 pointer-events-none"
              viewBox="0 0 1440 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="contact-wave-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#233F5B" stopOpacity="0.08" />
                  <stop offset="50%" stopColor="#36A783" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#EAF4F0" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,80 C 320,140, 640,20, 960,80 C 1200,120, 1360,50, 1440,70 L 1440,180 L 0,180 Z"
                fill="url(#contact-wave-grad-3)"
              />
            </svg>

            {/* Layer 6: Architectural Precision Dot & Grid Texture Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_45%,#000_65%,transparent_100%)]" />
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
                Contact & Advisory Booking
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                <span>DIRECT SENIOR ADVISOR ACCESS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#071426] tracking-tight leading-[1.1] mb-6">
                <FlowText
                  text="Speak Directly With a Qualified Advisor."
                  as="span"
                />
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#4A5D73] font-sans font-light leading-relaxed max-w-3xl">
                Receive practical, technology-enabled solutions for your audit,
                accounting, corporate tax, VAT, finance, and compliance
                requirements across Dubai and UAE Free Zones.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. MAIN CONSULTATION SECTION: Form + Contact Information          */}
        {/* ================================================================= */}
        <section className="py-14 sm:py-20 lg:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Direct Communication Hub & Authority Quotes (5 Cols) */}
              <div className="lg:col-span-5 space-y-10">
                
                {/* Contact Information & Channels */}
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                    REACH OUT DIRECTLY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#071426] mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    {/* Phone / Call Channel */}
                    <a
                      href="tel:+971547338583"
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1]/80 hover:border-[#36A783] hover:shadow-md transition-all"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#EAF4F0] text-[#216D56] flex items-center justify-center shrink-0 group-hover:bg-[#36A783] group-hover:text-white transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-mono font-medium text-[#64748B] uppercase tracking-wider mb-0.5">
                          Phone / Direct Line
                        </div>
                        <div className="text-base sm:text-lg font-serif font-medium text-[#071426] group-hover:text-[#216D56] transition-colors">
                          +971 54 733 8583
                        </div>
                        <div className="text-xs text-[#64748B] font-sans mt-0.5">
                          Mon – Sat • 9:00 AM – 6:00 PM GST
                        </div>
                      </div>
                    </a>

                    {/* WhatsApp Channel (Quick Response Guaranteed) */}
                    <a
                      href="https://wa.me/971547338583"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-[#071426] text-white border border-white/10 hover:border-[#25D366]/60 hover:shadow-lg transition-all"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <MessageSquare className="w-5 h-5 fill-current" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs font-mono font-medium text-[#83D9BE] uppercase tracking-wider">
                            WhatsApp Us
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#C6F850] bg-white/10 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                            Live Support
                          </span>
                        </div>
                        <div className="text-base sm:text-lg font-serif font-medium text-white group-hover:text-[#83D9BE] transition-colors">
                          +971 54 733 8583
                        </div>
                        <div className="text-xs text-[#CBD5E1] font-sans mt-0.5 flex items-center gap-1.5">
                          <span>Quick response guaranteed within minutes</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366]" />
                        </div>
                      </div>
                    </a>

                    {/* Email Channel */}
                    <a
                      href="mailto:info@auditclue.com"
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1]/80 hover:border-[#36A783] hover:shadow-md transition-all"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#EAF4F0] text-[#216D56] flex items-center justify-center shrink-0 group-hover:bg-[#36A783] group-hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-mono font-medium text-[#64748B] uppercase tracking-wider mb-0.5">
                          Formal Engagement Inquiries
                        </div>
                        <div className="text-base sm:text-lg font-serif font-medium text-[#071426] group-hover:text-[#216D56] transition-colors">
                          info@auditclue.com
                        </div>
                        <div className="text-xs text-[#64748B] font-sans mt-0.5">
                          Send RFPs, tender packs & financial statements
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Client's Exact Advisory Quote Banner */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border-l-4 border-[#36A783] border-t border-r border-b border-[#CBD5E1]/70 shadow-sm">
                  <div className="font-serif italic text-base sm:text-lg text-[#071426] leading-relaxed mb-4">
                    &ldquo;Speak directly with a qualified advisor and receive
                    practical solutions for your audit, accounting, tax,
                    finance, and compliance requirements.&rdquo;
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]">
                    <span className="font-mono text-xs font-bold text-[#216D56]">
                      AUDITCLUE ADVISORY DESK
                    </span>
                    <span className="text-xs text-[#64748B] font-mono">
                      Senior Partner Managed
                    </span>
                  </div>
                </div>

                {/* Social Proof: 500+ Businesses Served */}
                <div className="p-6 rounded-2xl bg-white border border-[#CBD5E1]/80 flex items-center gap-5 shadow-sm">
                  {/* Stacked Sleek Avatars */}
                  <div className="flex -space-x-3 shrink-0">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#071426] to-[#233F5B] text-white flex items-center justify-center font-serif text-sm font-bold border-2 border-white shadow-xs">
                      A
                    </div>
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#216D56] to-[#36A783] text-white flex items-center justify-center font-serif text-sm font-bold border-2 border-white shadow-xs">
                      B
                    </div>
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#B48325] to-[#E5AB3A] text-white flex items-center justify-center font-serif text-sm font-bold border-2 border-white shadow-xs">
                      C
                    </div>
                  </div>

                  <div>
                    <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426] leading-tight">
                      500+ Businesses Served
                    </div>
                    <div className="text-xs text-[#64748B] font-sans mt-0.5">
                      Mainland SMEs, Free Zone entities & high-growth startups
                    </div>
                  </div>
                </div>

                {/* Key Commitments Badges */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#556980]">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>Guaranteed 24-hour response on all consultation forms</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#556980]">
                    <ShieldCheck className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>Strict NDA & bank-grade data confidentiality (AES-256)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#556980]">
                    <Clock className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>Itemized milestone proposals with zero hidden fees</span>
                  </div>
                </div>

              </div>

              {/* Right Column: The Interactive Luxury Consultation Form (7 Cols) */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. JURISDICTION COVERAGE (Editorial Specifications Bar)           */}
        {/* ================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-t border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-1">
                JURISDICTIONAL CAPABILITIES
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#071426]">
                Seamless Delivery Across UAE Frameworks
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-6 border-t border-[#E2E8F0]">
              {JURISDICTION_BENCHMARKS.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="font-mono text-xs font-bold text-[#36A783] mb-1">
                    [{item.num}] — DOMAIN
                  </div>
                  <div className="text-base sm:text-lg font-serif font-medium text-[#071426] tracking-tight mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#64748B] font-sans">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive Corporate Footer */}
      <Footer />
    </div>
  );
}
