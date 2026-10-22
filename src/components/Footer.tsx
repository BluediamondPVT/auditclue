"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const brandAreaRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 92%",
          once: true,
        },
      });

      if (brandAreaRef.current) {
        tl.fromTo(
          brandAreaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", force3D: false },
          0
        );
      }

      if (dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power2.out" },
          0.1
        );
      }

      if (columnsRef.current) {
        const columns = columnsRef.current.children;
        tl.fromTo(
          columns,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            force3D: false,
          },
          0.15
        );
      }
    }, footer);

    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" ref={footerRef} className="bg-[#071426] text-white">

      {/* ── TOP AREA: Logo Icon + Giant Brand Wordmark ── */}
      <div
        ref={brandAreaRef}
        className="w-full px-5 sm:px-12 lg:px-20 xl:px-28 pt-10 sm:pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden"
      >

        {/* Left: Auditclue Logo (white version) */}
        <a href="#hero" aria-label="Auditclue Home" className="shrink-0">
          <Image
            src="/logo-white-transparent.png"
            alt="Auditclue Global Advisory Services LLC"
            width={320}
            height={90}
            className="h-12 sm:h-16 lg:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </a>

        {/* Right: Massive Editorial Wordmark */}
        <div className="flex items-start select-none leading-none max-w-full overflow-hidden">
          <span className="text-[36px] xs:text-[44px] sm:text-[76px] md:text-[100px] lg:text-[120px] xl:text-[136px] font-bold font-sans tracking-tight text-[#EAF4F0] lowercase leading-none">
            auditclue
          </span>
          <span className="text-lg sm:text-3xl lg:text-4xl font-normal text-[#36A783] ml-1 sm:ml-2 mt-0.5 sm:mt-2">
            ®
          </span>
        </div>

      </div>

      {/* ── WAVY DIVIDER LINE ── */}
      <div ref={dividerRef} className="w-full px-5 sm:px-12 lg:px-20 xl:px-28 mt-6 sm:mt-10 mb-8 sm:mb-12 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1280 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0 28 C 200 8, 380 46, 580 26 C 780 6, 960 46, 1280 24"
            stroke="url(#footer-wave)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="footer-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#233F5B" stopOpacity="0.3" />
              <stop offset="25%"  stopColor="#36A783" stopOpacity="0.6" />
              <stop offset="55%"  stopColor="#83D9BE" stopOpacity="1"   />
              <stop offset="80%"  stopColor="#36A783" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#233F5B" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── LINKS COLUMNS ── */}
      <div className="w-full px-5 sm:px-12 lg:px-20 xl:px-28 pb-12 sm:pb-16">
        <div ref={columnsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Column 1 — Links & Tools */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Navigation & Tools</h4>
            <ul className="space-y-2.5 text-[14px] text-[#A8B7C9]">
              <li><Link href="/#hero" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="/compliance-calendar" className="text-[#83D9BE] hover:text-white font-medium transition-colors inline-flex items-center gap-1.5">Compliance Calendar 2026/27</Link></li>
              <li><Link href="/freezone-vs-mainland" className="text-[#83D9BE] hover:text-white font-medium transition-colors inline-flex items-center gap-1.5">Mainland vs Free Zone Guide</Link></li>
              <li><Link href="/calculator" className="hover:text-white transition-colors">Tax & SBR Calculator</Link></li>
              <li><Link href="/#consult-form" className="hover:text-white transition-colors">Book a Consultation</Link></li>
              <li><Link href="/#portal" className="hover:text-white transition-colors">Client Portal Login</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 2 — Practices */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Practices</h4>
            <ul className="space-y-3 text-[15px] text-[#A8B7C9]">
              <li><Link href="/services/corporate-tax" className="hover:text-white transition-colors">Corporate Tax (9%)</Link></li>
              <li><Link href="/services/audit-assurance" className="hover:text-white transition-colors">Statutory Audit</Link></li>
              <li><Link href="/services/vat-services" className="hover:text-white transition-colors">UAE VAT Compliance (5%)</Link></li>
              <li><Link href="/services/accounting-bookkeeping" className="hover:text-white transition-colors">Accounting & Bookkeeping</Link></li>
              <li><Link href="/services/business-setup" className="hover:text-white transition-colors">Business Setup (Mainland & Free Zone)</Link></li>
              <li><Link href="/services/cfo-advisory" className="hover:text-white transition-colors">Virtual CFO & Financial Advisory</Link></li>
              <li><Link href="/services/transfer-pricing" className="hover:text-white transition-colors">Transfer Pricing</Link></li>
              <li><Link href="/services/corporate-finance" className="hover:text-white transition-colors">Corporate Finance</Link></li>
              <li><Link href="/services/business-advisory" className="hover:text-white transition-colors">Business Advisory</Link></li>
              <li><Link href="/services/compliance-services" className="hover:text-white transition-colors">Compliance Services (AML/ESR)</Link></li>
              <li><Link href="/services/technology-digital" className="hover:text-white transition-colors">Technology & Digital Finance</Link></li>
            </ul>
          </div>

          {/* Columns 3 + 4 — Connect (Two UAE Offices + Official Socials) */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Heading spanning both */}
            <div className="col-span-1 sm:col-span-2">
              <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Connect & Verify</h4>
            </div>

            {/* Dubai Desk */}
            <div className="-mt-5">
              <p className="text-[15px] text-[#A8B7C9] leading-relaxed">
                <span className="text-white font-semibold">Auditclue® Dubai</span><br />
                Boulevard Plaza Tower 1, Level 14<br />
                Downtown Dubai / Business Bay<br />
                Dubai, UAE
              </p>
              <a
                href="mailto:info@auditclue.com"
                className="block mt-3 text-[15px] text-[#A8B7C9] hover:text-white transition-colors"
              >
                info@auditclue.com
              </a>
              <p className="text-xs text-[#64748B] font-mono mt-2">
                DET License No. 1094821
              </p>
            </div>

            {/* Abu Dhabi Desk */}
            <div className="-mt-5">
              <p className="text-[15px] text-[#A8B7C9] leading-relaxed">
                <span className="text-white font-semibold">Auditclue® Abu Dhabi</span><br />
                Al Maryah Island<br />
                ADGM Financial Square<br />
                Abu Dhabi, UAE
              </p>
              <a
                href="tel:+971547338583"
                className="block mt-3 text-[15px] text-[#A8B7C9] hover:text-white transition-colors"
              >
                +971 54 733 8583
              </a>
              <p className="text-xs text-[#64748B] font-mono mt-2">
                FTA Agency TAN-20038914
              </p>
            </div>

            {/* Verified Social & Review Proof Bar */}
            <div className="col-span-1 sm:col-span-2 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs font-mono">
                <a
                  href="https://www.linkedin.com/company/auditclue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#83D9BE] hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36A783]" />
                  <span>LinkedIn Official Page</span>
                </a>

                <span className="text-white/20">•</span>

                <a
                  href="https://wa.me/971547338583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#83D9BE] hover:text-white transition-colors"
                >
                  <span>WhatsApp VIP Desk</span>
                </a>
              </div>

              {/* 5-Star Client Rating Badge */}
              <div className="inline-flex items-center gap-1.5 text-xs text-[#CBD5E1] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <div className="flex text-amber-400 text-xs">
                  ★ ★ ★ ★ ★
                </div>
                <span className="font-mono text-[11px] text-[#83D9BE] font-bold">5.0</span>
                <span className="text-white/40">| Verified Client Rating</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/10">
        <div className="w-full px-5 sm:px-12 lg:px-20 xl:px-28 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#6A7B8E] text-center sm:text-left">
          <span>© 2026 Auditclue Global Advisory Services LLC</span>
          <span className="text-center">FTA Registered · IFRS / ISA Compliant · 100% Digital UAE Delivery</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#A8B7C9] hover:text-white transition-colors cursor-pointer font-medium group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

    </footer>
  );
}
