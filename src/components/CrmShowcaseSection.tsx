"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  Lock,
  CalendarCheck2,
  Smartphone,
  X,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowText from "@/components/FlowText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CrmTab {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  imageSrc: string;
  icon: React.ElementType;
  highlights: string[];
  metrics: { label: string; value: string };
}

const CRM_TABS: CrmTab[] = [
  {
    id: "dashboard",
    number: "01",
    title: "Client Overview Dashboard",
    subtitle: "Live Engagement & Task Visibility",
    tagline: "All Active Engagements, Pending Actions & Deliverables in One View",
    description:
      "Log in anytime to check the real-time status of your ongoing accounting, audit, or advisory work — see what is completed, what is in progress, and which documents are requested from your team.",
    imageSrc: "/images/portal/auditclue-portal-dashboard.png",
    icon: LayoutDashboard,
    highlights: [
      "Live progress tracking per task",
      "Clear pending-document checklist",
      "1-click download of completed files",
    ],
    metrics: { label: "Portal Access", value: "24/7 Cloud Live" },
  },
  {
    id: "vault",
    number: "02",
    title: "Secure Document Vault",
    subtitle: "Share Records & Access Final Reports",
    tagline:
      "Encrypted Cloud Workspace Replacing Scattered Email Attachments",
    description:
      "Upload trade licenses, bank statements, contracts, and company records into organized digital folders — and retrieve digitally signed financial statements or deliverables whenever you need them.",
    imageSrc: "/images/portal/auditclue-portal-vault.png",
    icon: Lock,
    highlights: [
      "AES-256 encrypted file storage",
      "Structured folders by entity & year",
      "Instant signed deliverable archive",
    ],
    metrics: { label: "File Security", value: "AES-256 GCM" },
  },
  {
    id: "calendar",
    number: "03",
    title: "Milestone & Deadline Tracker",
    subtitle: "Scheduled Deliverables & Smart Alerts",
    tagline: "Stay Ahead of Every Engagement Milestone & Renewal Window",
    description:
      "View upcoming submission timelines, company license renewals, and agreed deliverable dates tailored to your entity schedule — with automated alerts sent ahead of every key date.",
    imageSrc: "/images/portal/auditclue-portal-calendar.png",
    icon: CalendarCheck2,
    highlights: [
      "Custom company milestone schedule",
      "Automated email & portal alerts",
      "Complete log of past submissions",
    ],
    metrics: { label: "Reminders", value: "Automated Alerts" },
  },
  {
    id: "mobile",
    number: "04",
    title: "Direct Messaging & Mobile Access",
    subtitle: "Seamless Oversight From Any Device",
    tagline: "Review Updates, Share Files & Message Advisors On the Go",
    description:
      "Access your Auditclue Client Portal from any desktop, tablet, or mobile browser. Respond directly to advisor requests, approve drafts, and manage multiple UAE entities under a single login.",
    imageSrc: "/images/portal/auditclue-portal-mobile.png",
    icon: Smartphone,
    highlights: [
      "Mobile & desktop browser ready",
      "Direct advisor conversation threads",
      "Multi-entity workspace switching",
    ],
    metrics: { label: "Multi-Device", value: "Web & Mobile" },
  },
];

const AUTOPLAY_INTERVAL = 6000; // 6 seconds per screen

export default function CrmShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play progress loop
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
      return;
    }

    setProgress(0);
    const stepMs = 50;
    const increment = (stepMs / AUTOPLAY_INTERVAL) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + increment;
      });
    }, stepMs);

    timerRef.current = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % CRM_TABS.length);
      setProgress(0);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    };
  }, [activeTab, isPaused]);

  // GSAP ScrollTrigger Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Header entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Frame 3D lift entrance
      if (frameRef.current) {
        gsap.fromTo(
          frameRef.current,
          {
            opacity: 0,
            y: 70,
            scale: 0.96,
            rotateX: 8,
            transformPerspective: 1200,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: frameRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentTab = CRM_TABS[activeTab];

  return (
    <section
      ref={sectionRef}
      id="crm-showcase"
      className="relative bg-[#071426] text-white pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-24 lg:pb-28 overflow-hidden border-t border-b border-white/10"
    >
      {/* Background Architectural Studio Lighting & Aurora (No grid lines) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        {/* Top Center Dramatic Spotlight Cone */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1150px] h-[550px] bg-[radial-gradient(ellipse_75%_50%_at_50%_15%,rgba(54,167,131,0.24),transparent_75%)] blur-[100px]" />

        {/* Deep Cyan/Teal Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-8 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(35,63,91,0.5),transparent_70%)] blur-[120px]" />
        <div className="absolute top-1/3 right-8 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(54,167,131,0.15),transparent_70%)] blur-[110px]" />
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[350px] bg-[radial-gradient(ellipse,rgba(14,32,56,0.6),transparent_70%)] blur-[90px]" />

        {/* Soft Depth Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#050E1A_100%)] opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Editorial Header (Compact & High Impact) */}
        <div
          ref={headerRef}
          className="max-w-4xl mx-auto text-center mb-8 sm:mb-11"
        >
          <div className="inline-flex items-center gap-2 bg-[#36A783]/15 border border-[#36A783]/30 text-[#83D9BE] text-xs sm:text-[13px] font-semibold px-4 py-1.5 rounded-full mb-3.5 font-mono shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
            <span>DIGITAL CLIENT PORTAL & WORKSPACE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-white leading-[1.14] tracking-[-0.03em] max-w-4xl mx-auto mb-3.5">
            <FlowText
              text="One Secure Client Portal for Every Document, Update & Deliverable"
              triggerOnScroll
              as="span"
            />
          </h2>

          <p className="text-base sm:text-lg text-[#CBD5E1] font-sans leading-relaxed max-w-2xl mx-auto">
            Built for UAE founders, CFOs, and finance teams — log in anytime to
            upload documents safely, track ongoing work in real time, download
            signed reports, and collaborate directly with your advisory team.
          </p>
        </div>

        {/* Interactive Feature Switcher Tabs (Glass Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {CRM_TABS.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(idx);
                  setProgress(0);
                }}
                className={`relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between overflow-hidden group cursor-pointer ${
                  isActive
                    ? "bg-[#0E2038]/95 border-[#36A783]/70 shadow-lg shadow-[#36A783]/10 -translate-y-0.5"
                    : "bg-[#0A182A]/60 border-white/10 hover:border-white/20 hover:bg-[#0D1E32]/70"
                }`}
              >
                {/* Active Tab Top Glow Line */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#36A783] via-[#83D9BE] to-[#36A783]" />
                )}

                {/* Progress bar inside active tab */}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 h-0.5 bg-[#36A783] transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive
                          ? "text-[#83D9BE]"
                          : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {tab.number}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#36A783]/20 text-[#83D9BE]"
                          : "bg-white/5 text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3
                    className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {tab.title}
                  </h3>
                  <p className="text-xs text-white/50 mt-1 line-clamp-1">
                    {tab.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span>{tab.metrics.label}</span>
                  <span
                    className={isActive ? "text-[#83D9BE] font-semibold" : ""}
                  >
                    {tab.metrics.value}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Cinema Screen & Interactive Device Frame */}
        <div
          ref={frameRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-gradient-to-b from-[#0D1F35] via-[#0A1728] to-[#071322] border border-white/15 rounded-3xl p-3 sm:p-5 lg:p-6 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden"
        >
          {/* Subtle Ambient Studio Light behind mockup */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-[#36A783]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Screenshot Display Screen with Smooth Crossfade */}
          <div
            onClick={() => setLightboxImage(currentTab.imageSrc)}
            className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full rounded-2xl overflow-hidden bg-[#040A12] border border-white/10 shadow-inner group cursor-zoom-in"
            title="Click to view full screen"
          >
            {CRM_TABS.map((tab, idx) => (
              <div
                key={tab.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  activeTab === idx
                    ? "opacity-100 scale-100 pointer-events-auto z-10"
                    : "opacity-0 scale-[1.015] pointer-events-none z-0"
                }`}
              >
                <Image
                  src={tab.imageSrc}
                  alt={tab.title}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                  quality={90}
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>

          {/* Contextual Narrative Footer Beneath Active Screen */}
          <div className="mt-5 sm:mt-6 p-4 sm:p-6 rounded-2xl bg-[#09172A]/80 border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#83D9BE] font-semibold mb-1">
                {currentTab.tagline}
              </div>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {currentTab.description}
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-3 pt-3 border-t border-white/10">
                {currentTab.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-white/80"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783] shrink-0" />
                    <span className="line-clamp-1">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://crm.auditclue.app/client-portal/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#36A783] hover:bg-[#2E8C6D] text-[#071426] text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-md shadow-[#36A783]/20 hover:scale-[1.02]"
              >
                <span>Launch Client Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                href="/#consult-form"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all border border-white/15"
              >
                <span>Request Enterprise Demo</span>
                <ChevronRight className="w-4 h-4 text-white/60" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div className="flex items-center justify-between text-white pb-4 border-b border-white/15 max-w-7xl w-full mx-auto">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#36A783]" />
              <span className="font-serif text-lg text-white">
                Auditclue Client Console — High Resolution Preview
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Close Preview (Esc)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            className="flex-1 relative max-w-7xl w-full mx-auto my-auto mt-4 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Auditclue CRM Fullscreen"
              fill
              className="object-contain"
              quality={95}
            />
          </div>
        </div>
      )}
    </section>
  );
}
