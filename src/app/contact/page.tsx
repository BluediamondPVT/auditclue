import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import ContactForm from "@/components/ContactForm";
import BookingCalendar from "@/components/BookingCalendar";
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  MapPin,
  Building2,
  Layers,
  Compass,
  Navigation,
  ExternalLink,
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
        {/* 1. HERO SECTION: Smooth Multi-Layer Ambient Gradient Mesh          */}
        {/* ================================================================= */}
        <section className="relative bg-gradient-to-b from-[#EDF5F1] via-[#F8FAFC] to-[#EEF2F7] border-b border-[#CBD5E1]/60 pt-16 pb-16 sm:pt-20 sm:pb-22 overflow-hidden">
          {/* Multi-Layer Ambient Gradient Mesh Container */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            {/* Layer 1: Glowing Radial Ambient Aura Orbs */}
            <div className="absolute -top-32 right-1/4 w-[650px] h-[500px] bg-gradient-to-br from-[#36A783]/20 via-[#83D9BE]/16 to-transparent rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />
            <div className="absolute -bottom-24 -left-20 w-[600px] h-[450px] bg-gradient-to-tr from-[#233F5B]/14 via-[#36A783]/12 to-transparent rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[280px] bg-[#C6F850]/10 rounded-full blur-[110px] pointer-events-none" />

            {/* Layer 2: Architectural Precision Dot & Grid Texture Overlay */}
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
                Contact & Advisory Booking
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                <span>DIRECT SENIOR ADVISOR ACCESS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#071426] tracking-tight leading-[1.1] mb-6">
                <FlowText
                  text="Speak Directly With a Qualified Advisor."
                  as="span"
                />
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#334155] font-sans font-normal leading-relaxed max-w-3xl">
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

                    {/* Head Office Address */}
                    <a
                      href="#offices"
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1]/80 hover:border-[#36A783] hover:shadow-md transition-all"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#EAF4F0] text-[#216D56] flex items-center justify-center shrink-0 group-hover:bg-[#36A783] group-hover:text-white transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-mono font-medium text-[#64748B] uppercase tracking-wider mb-0.5">
                          Dubai Head Office
                        </div>
                        <div className="text-base font-serif font-medium text-[#071426] group-hover:text-[#216D56] transition-colors leading-snug">
                          Boulevard Plaza Tower 1, Level 14
                        </div>
                        <div className="text-xs text-[#64748B] font-sans mt-0.5">
                          Downtown Dubai / Business Bay, UAE
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
        {/* 3. CALENDAR RESERVATION: Direct Senior Advisor Booking            */}
        {/* ================================================================= */}
        <section id="book-session" className="py-16 sm:py-20 bg-gradient-to-b from-[#F8FAFC] via-[#EDF5F1]/40 to-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                SCHEDULE INSTANT CONSULTATION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426] mb-3">
                Prefer a Dedicated Video or Phone Call?
              </h2>
              <p className="text-sm sm:text-base text-[#475569] font-sans">
                Select your preferred date and time slot in Gulf Standard Time (GST • UTC+4). An invite with meeting credentials will be sent directly to your calendar.
              </p>
            </div>

            <BookingCalendar />
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. PHYSICAL OFFICE LOCATIONS & INTERACTIVE MAP                    */}
        {/* ================================================================= */}
        <section id="offices" className="py-16 sm:py-24 bg-white border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                STRATEGIC PRESENCE ACROSS THE UAE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                Verified Office Locations & In-Person Advisory
              </h2>
              <p className="text-base text-[#475569]">
                While our digital client portal enables 100% remote advisory and document submission, our senior partners are available for scheduled boardroom meetings at our UAE offices.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Office Details Cards (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Dubai Headquarters Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-[#071426] text-white border border-white/10 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#36A783]/15 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#83D9BE] bg-white/10 px-2.5 py-1 rounded-full mb-4">
                      <Building2 className="w-3.5 h-3.5 text-[#36A783]" />
                      <span>DUBAI HEADQUARTERS</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                      Boulevard Plaza Tower 1
                    </h3>
                    <div className="text-sm font-sans text-[#CBD5E1] mb-5">
                      Level 14, Downtown Dubai / Business Bay<br />
                      Opposite Burj Khalifa, Dubai, United Arab Emirates
                    </div>

                    <div className="space-y-2 text-xs font-sans text-[#94A3B8] border-t border-white/10 pt-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[#CBD5E1]">Office Hours:</span>
                        <span>Mon – Sat: 9:00 AM – 6:00 PM GST</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[#CBD5E1]">Metro Access:</span>
                        <span>Burj Khalifa / Dubai Mall Station (Red Line)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[#CBD5E1]">Visitor Parking:</span>
                        <span>Dedicated basement guest parking available</span>
                      </div>
                    </div>

                    <a
                      href="https://maps.google.com/?q=Boulevard+Plaza+Tower+1+Downtown+Dubai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#36A783] hover:bg-[#216D56] text-white text-xs font-semibold uppercase tracking-wider font-mono transition-colors shadow-md"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  </div>
                </div>

                {/* Abu Dhabi Office Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#CBD5E1]/80 shadow-md">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#216D56] bg-[#EAF4F0] px-2.5 py-1 rounded-full mb-4">
                    <Building2 className="w-3.5 h-3.5 text-[#36A783]" />
                    <span>ABU DHABI REGIONAL HUB</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#071426] mb-2">
                    Al Khatem Tower, ADGM Square
                  </h3>
                  <div className="text-sm font-sans text-[#475569] mb-5">
                    Level 8, Abu Dhabi Global Market Square<br />
                    Al Maryah Island, Abu Dhabi, United Arab Emirates
                  </div>

                  <div className="space-y-2 text-xs font-sans text-[#64748B] border-t border-[#E2E8F0] pt-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-medium text-[#071426]">Office Hours:</span>
                      <span>Mon – Fri: 9:00 AM – 5:00 PM GST</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-medium text-[#071426]">Practice Focus:</span>
                      <span>ADGM SPVs, Free Zone Audit & Structuring</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-medium text-[#071426]">Direct Line:</span>
                      <span>+971 54 733 8583</span>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Al+Khatem+Tower+ADGM+Square+Abu+Dhabi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#F8FAFC] hover:bg-[#EDF5F1] text-[#071426] hover:text-[#216D56] border border-[#CBD5E1] text-xs font-semibold uppercase tracking-wider font-mono transition-colors"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#36A783]" />
                    <span>Directions to ADGM Office</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>

              </div>

              {/* Interactive Google Map Embed (7 cols) */}
              <div className="lg:col-span-7 h-full">
                <div className="rounded-3xl overflow-hidden border border-[#CBD5E1]/80 shadow-xl bg-white p-2 h-full flex flex-col">
                  <div className="relative w-full h-[480px] lg:h-[590px] rounded-2xl overflow-hidden bg-[#EDF2F7]">
                    <iframe
                      title="Auditclue Dubai Head Office Location"
                      src="https://maps.google.com/maps?q=Boulevard%20Plaza%20Tower%201%2C%20Downtown%20Dubai%20UAE&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full grayscale-[25%] contrast-[1.05]"
                    />
                    
                    {/* Floating Info Pill on the Map */}
                    <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#071426]/95 backdrop-blur-md text-white p-3.5 rounded-xl border border-white/10 shadow-lg text-xs font-sans">
                      <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-[#83D9BE] uppercase mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#36A783]" />
                        <span>Boulevard Plaza Tower 1</span>
                      </div>
                      <p className="text-[#CBD5E1] leading-relaxed">
                        Level 14, Downtown Dubai / Business Bay. Free visitor parking on basement levels B1 & B2.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 text-center text-xs text-[#64748B] font-mono">
                    Official UAE Commercial Registry: Auditclue Global Advisory Services LLC
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. JURISDICTION COVERAGE (Editorial Specifications Bar)           */}
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
