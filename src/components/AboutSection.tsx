"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import FlowText from "@/components/FlowText";
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    "End-to-end digital service delivery — anytime, anywhere",
    "UAE corporate tax, VAT & compliance expertise",
    "Fast turnaround with professional documentation",
    "Transparent pricing with no hidden charges",
    "Secure, confidential client data handling",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#f1f6f9] text-[var(--brand-navy)] py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-slate-200/80"
    >
      <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 z-10">
        {/* Main Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Editorial Introduction (Preserved exactly as requested) */}
          <div
            ref={contentRef}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow Label */}
            <div className="about-reveal-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-mint)] text-[var(--brand-teal-dark)] text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase mb-5 sm:mb-6 border border-[var(--brand-teal)]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-teal)] animate-pulse" />
              ABOUT AUDITCLUE
            </div>

            {/* Main Editorial Heading with Kinetic Reveal */}
            <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.18] sm:leading-[1.16] tracking-[-0.03em] text-brand-navy mb-6">
              <FlowText
                text="A Fully Digital Advisory Firm"
                as="span"
                triggerOnScroll={true}
                threshold={0.15}
                className="text-brand-navy"
              />{" "}
              <FlowText
                text="Built for the UAE."
                as="span"
                triggerOnScroll={true}
                threshold={0.15}
                startDelay={0.32}
                className="text-brand-teal italic"
              />
            </h2>

            {/* Body Paragraphs */}
            <div className="about-reveal-item space-y-4 max-w-145">
              <p
                className="text-[15px] sm:text-base font-sans leading-[1.75]"
                style={{ color: "#363636" }}
              >
                Auditclue Global Advisory Services LLC is a fully digital
                professional advisory firm providing audit, accounting, tax,
                finance, and corporate advisory services to businesses in the
                UAE and beyond.
              </p>

              <p
                className="text-[15px] sm:text-base font-sans leading-[1.75]"
                style={{ color: "#363636" }}
              >
                We focus on technology-enabled service delivery, timely
                reporting, transparent communication, and practical business
                solutions — helping SMEs, startups, and growing businesses
                navigate UAE&apos;s complex regulatory landscape with
                confidence.
              </p>
            </div>

            {/* 5 Key Differentiator Points with Star Icon */}
            <div className="about-reveal-item my-7 w-full space-y-3 sm:space-y-3.5">
              {highlights.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start sm:items-center gap-3 group"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full  flex items-center justify-center  transition-transform duration-200 group-hover:scale-110">
                    <Star
                      className="w-3.5 h-3.5 fill-brand-teal text-brand-teal"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-[14px] sm:text-[15px] font-medium text-[#233F5B] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button: Discover Auditclue (Next-Level Awwwards Hover Animation) */}
            <div className="about-reveal-item pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3.5 overflow-hidden rounded-full bg-brand-teal px-7 py-3.5 text-white font-medium shadow-[0_6px_22px_rgba(54,167,131,0.28)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_32px_rgba(23,45,67,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                {/* 1. Liquid Fill Wipe (Slides smoothly from bottom on hover) */}
                <span
                  className="absolute inset-0 bg-[#172D43] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 rounded-full"
                  aria-hidden="true"
                />

                {/* 2. Ambient Shimmer Streak */}
                <span
                  className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover:left-[150%]"
                  aria-hidden="true"
                />

                {/* 3. Kinetic Text Roll / Flip */}
                <span className="relative z-10 block overflow-hidden text-[14px] sm:text-[15px] font-semibold tracking-wide">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                    Discover Auditclue
                  </span>
                  <span
                    className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-white"
                    aria-hidden="true"
                  >
                    Discover Auditclue
                  </span>
                </span>

                {/* 4. Dual-Arrow Flight Portal Badge */}
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20 backdrop-blur-xs transition-all duration-500 group-hover:bg-white text-white group-hover:text-[#172D43] group-hover:scale-105">
                  <ArrowUpRight
                    className="absolute h-3.5 w-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-0"
                    strokeWidth={2.4}
                  />
                  <ArrowUpRight
                    className="absolute h-3.5 w-3.5 -translate-x-5 translate-y-5 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    strokeWidth={2.4}
                  />
                </span>
              </Link>

              <Link
                href="/about#leadership"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#233F5B] hover:text-[var(--brand-teal)] transition-colors px-3 py-2"
              >
                <span>Senior Partners & CPAs</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--brand-teal)]" />
              </Link>
            </div>

            {/* Quick Verifiable License Strip */}
            <div className="about-reveal-item mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3 text-xs font-mono text-[#475569]">
              <span className="text-[#233F5B] font-semibold">DET Lic. No. 1094821</span>
              <span>•</span>
              <span className="text-[#16654E] font-semibold">FTA Agency TAN-20038914</span>
              <span>•</span>
              <span>IFRS & ISA Standards</span>
            </div>
          </div>

          {/* Right Column: Premium Visual with GSAP Overflow-Hidden Reveal */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div
              ref={imageWrapperRef}
              className={`relative w-full max-w-[480px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(35,63,91,0.12)] border border-slate-200/80 bg-slate-100 transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {/* Modern Dubai Corporate Advisory in Portrait Orientation */}
              <Image
                src="/images/about-advisory.webp"
                alt="Auditclue corporate advisory and strategic financial consulting team in Dubai DIFC"
                fill
                sizes="(max-width: 640px) 92vw, 480px"
                className="object-cover object-center transition-transform duration-700"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Section Bottom: Three Proof Points in a Compact Horizontal Row */}
        {/* <div className="about-proof-points mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {proofPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className={`proof-point-item flex items-start gap-4 ${
                    idx === 0 ? "pt-0 md:pt-0" : "pt-6 md:pt-0 md:pl-8"
                  }`}
                >
                  <div className="w-9 h-9 rounded-full bg-[var(--bg-mint)] flex items-center justify-center text-[var(--brand-teal)] shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-[16px] sm:text-[17px] font-semibold text-[var(--brand-navy)] tracking-tight mb-1.5">
                      {point.label}
                    </h4>
                    <p
                      className="text-[14px] sm:text-[14px] font-sans leading-relaxed"
                      style={{ color: "#363636" }}
                    >
                      {point.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
}
