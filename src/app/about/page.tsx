import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import { REGULATORY_FRAMEWORKS } from "@/data/servicesData";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Laptop,
  FileCheck2,
  Lock,
  Building2,
  Users2,
  Sparkles,
  BarChart3,
  Award,
  Compass,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Auditclue Global Advisory Services LLC",
  description:
    "Learn about Auditclue, the UAE's digital-first audit, tax, and corporate advisory firm. Combining international standards (IFRS, ISA) with deep UAE regulatory expertise across Mainland and 40+ Free Zones.",
};

export default function AboutPage() {
  const whyAuditcluePillars = [
    {
      title: "Digital-First Operations",
      desc: "Cloud-native workflows, encrypted document repositories, and real-time ledger access replace outdated paper-heavy processes.",
      icon: Laptop,
      badge: "100% Cloud Delivery",
    },
    {
      title: "UAE Regulatory Rigor",
      desc: "In-depth compliance with UAE Federal Decree-Law No. 47 on Corporate Tax, Cabinet Decisions, and FTA Tax Agent regulations.",
      icon: ShieldCheck,
      badge: "FTA & Ministry Aligned",
    },
    {
      title: "Actionable Executive Reporting",
      desc: "Beyond historical compliance, we generate structured monthly MIS reports and strategic financial dashboards that guide board decisions.",
      icon: BarChart3,
      badge: "Decision-Ready MIS",
    },
    {
      title: "Bank-Grade Confidentiality",
      desc: "All client workpapers, tax documents, and financial data are protected by 256-bit AES encryption and strict confidentiality agreements.",
      icon: Lock,
      badge: "256-Bit Encryption",
    },
    {
      title: "Fixed Transparent Engagements",
      desc: "Clear milestone-based agreements with no hidden billable hours or unexpected surcharges. Predictable finance management from day one.",
      icon: FileCheck2,
      badge: "Predictable Pricing",
    },
    {
      title: "Cross-Emirate Jurisdiction Reach",
      desc: "End-to-end structuring and advisory across Mainland licensing authorities and 40+ specialized UAE Free Zones including DMCC, DIFC, and ADGM.",
      icon: Building2,
      badge: "40+ Free Zones & Mainland",
    },
  ];

  const approachSteps = [
    {
      number: "01",
      title: "Requirement Assessment",
      desc: "We analyze your business activities, corporate structure, accounting backlog, and upcoming regulatory deadlines within 24 hours.",
    },
    {
      number: "02",
      title: "Scope & Milestone Definition",
      desc: "We formulate a transparent, fixed-fee engagement letter outlining deliverables, timelines, and compliance milestones with complete clarity.",
    },
    {
      number: "03",
      title: "Technical Execution",
      desc: "Qualified senior Chartered Accountants and FTA Tax Agents execute fieldwork, audit testing, reconciliations, or tax return computations.",
    },
    {
      number: "04",
      title: "Partner Review & Validation",
      desc: "Every workpaper, audit pack, and statutory filing undergoes multi-tier partner review to ensure total adherence to IFRS, ISA, and FTA laws.",
    },
    {
      number: "05",
      title: "Ongoing Compliance Continuity",
      desc: "Post-delivery, your business benefits from compliance calendar alerts, regulatory tax updates, and direct advisor support year-round.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        
        {/* Page Hero Section */}
        <section className="relative bg-[#FFFFFF] border-b border-slate-200/80 pt-14 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(54,167,131,0.08),transparent_60%)]" />

          <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-6">
              <Link href="/" className="hover:text-[var(--brand-teal)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--brand-navy)] font-semibold">About Us</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-mint)] text-[var(--brand-teal-dark)] text-xs font-semibold tracking-[0.16em] uppercase mb-5 border border-[var(--brand-teal)]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-teal)]" />
                  ABOUT AUDITCLUE GLOBAL ADVISORY
                </div>

                <h1 className="font-serif text-[34px] sm:text-[46px] lg:text-[54px] font-normal leading-[1.12] tracking-[-0.035em] text-[var(--brand-navy)] mb-6">
                  <FlowText
                    text="A modern advisory partner for a"
                    as="span"
                    className="text-[var(--brand-navy)]"
                  />{" "}
                  <FlowText
                    text="changing business landscape."
                    as="span"
                    startDelay={0.3}
                    className="text-[var(--brand-teal)] italic"
                  />
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-sans leading-[1.8] max-w-[640px] mb-8">
                  Auditclue Global Advisory Services LLC provides digital-first audit,
                  accounting, taxation, and corporate advisory services for enterprises
                  across the UAE. We replace outdated legacy practices with high-velocity
                  digital delivery, senior technical acumen, and absolute transparency.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/#consult-form"
                    className="inline-flex items-center gap-3 bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-hover)] text-white text-[14px] sm:text-[15px] font-medium px-6 py-3.5 rounded-full shadow-[0_4px_18px_rgba(54,167,131,0.25)] hover:shadow-[0_8px_24px_rgba(54,167,131,0.35)] transition-all duration-300 group"
                  >
                    <span>Talk to an Advisor</span>
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" strokeWidth={2.2} />
                    </span>
                  </Link>

                  <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 bg-[var(--bg-main)] hover:bg-slate-100 text-[var(--brand-navy)] text-[14px] sm:text-[15px] font-medium px-6 py-3.5 rounded-full border border-slate-200 transition-colors"
                  >
                    <span>Explore 11 Practice Areas</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </Link>
                </div>
              </div>

              {/* Right Hero Image Composition */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(35,63,91,0.08)] bg-white">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/about-advisory.jpg"
                      alt="Auditclue advisory headquarters and executive meeting"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy-dark)]/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[var(--brand-navy-dark)]">
                        UAE Headquartered Advisory
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Mainland & 40+ Free Zone Regulatory Practice
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[var(--brand-teal-dark)] bg-[var(--bg-mint)] px-2.5 py-1 rounded-md">
                      100% Digital
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-18 sm:py-24 bg-[#FFFFFF]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Mission Card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[var(--bg-main)] border border-slate-200/80 relative overflow-hidden group hover:border-[var(--brand-teal)]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-mint)] text-[var(--brand-teal)] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-teal-dark)] mb-2">
                  OUR PURPOSE
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--brand-navy)] mb-4">
                  Our Mission
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-[1.8]">
                  To empower businesses operating in the UAE with transparent, technology-driven
                  financial advisory, statutory assurance, and tax structuring. We eliminate
                  administrative friction, protect clients against punitive non-compliance
                  penalties, and deliver actionable clarity at every growth milestone.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[var(--bg-main)] border border-slate-200/80 relative overflow-hidden group hover:border-[var(--brand-teal)]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-mint)] text-[var(--brand-teal)] flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-teal-dark)] mb-2">
                  OUR HORIZON
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--brand-navy)] mb-4">
                  Our Vision
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-[1.8]">
                  To become the UAE&apos;s most trusted digital-first professional services firm,
                  recognized globally for setting the benchmark in automated client workflows,
                  ethical governance, and comprehensive statutory excellence for the next
                  generation of multinational enterprises.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Auditclue — 6 Strategic Pillars */}
        <section className="py-18 sm:py-24 bg-[var(--bg-main)] border-y border-slate-200/80">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[var(--brand-teal-dark)] text-xs font-semibold tracking-wider uppercase mb-3 border border-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                FOUNDATIONAL STRENGTHS
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--brand-navy)] leading-tight tracking-tight mb-4">
                Why Industry Leaders Choose Auditclue
              </h2>
              <p className="text-base text-slate-600 font-sans leading-relaxed">
                Combining senior professional judgment with a modern digital operating
                model designed specifically for the UAE&apos;s regulatory landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {whyAuditcluePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-[var(--brand-teal)]/50 hover:shadow-[0_12px_32px_rgba(35,63,91,0.06)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="w-11 h-11 rounded-xl bg-[var(--bg-mint)] flex items-center justify-center text-[var(--brand-teal)]">
                          <Icon className="w-5 h-5" strokeWidth={1.8} />
                        </div>
                        <span className="text-[11px] font-semibold text-[var(--brand-teal-dark)] bg-[var(--bg-main)] border border-slate-200/70 px-2.5 py-1 rounded-full">
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--brand-navy)] mb-2.5 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-sans">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regulatory Framework Alignment */}
        <section className="py-18 sm:py-24 bg-[#FFFFFF]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-mint)] text-[var(--brand-teal-dark)] text-xs font-semibold tracking-wider uppercase mb-4 border border-[var(--brand-teal)]/20">
                  <Award className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                  STANDARDS & MANDATES
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--brand-navy)] leading-tight mb-5">
                  Strict Alignment with Global & UAE Frameworks
                </h2>
                <p className="text-base text-slate-600 font-sans leading-relaxed mb-6">
                  Every engagement is executed according to globally recognized accounting
                  and assurance benchmarks, backed by active compliance with local UAE
                  statutory laws and Cabinet Decisions.
                </p>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-navy-dark)] font-medium bg-[var(--bg-main)] p-4 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand-teal)] shrink-0" />
                  <span>Penalty-proof filing defense & verifiable audit trail</span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {REGULATORY_FRAMEWORKS.map((framework) => (
                    <div
                      key={framework.code}
                      className="p-5 rounded-xl bg-[var(--bg-main)] border border-slate-200/70 hover:border-[var(--brand-teal)]/40 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base font-bold text-[var(--brand-navy)] font-mono">
                          {framework.code}
                        </span>
                        <span className="text-[11px] font-semibold text-[var(--brand-teal-dark)] bg-[var(--bg-mint)] px-2.5 py-0.5 rounded-full">
                          Compliant
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-800 mb-1">
                        {framework.name}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">
                        {framework.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach — 5-Step Structured Engagement */}
        <section className="py-18 sm:py-24 bg-[var(--bg-main)] border-t border-slate-200/80">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[var(--brand-teal-dark)] text-xs font-semibold tracking-wider uppercase mb-3 border border-slate-200">
                <Layers className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                HOW WE ENGAGE
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--brand-navy)] tracking-tight mb-4">
                Our Structured Advisory Approach
              </h2>
              <p className="text-base text-slate-600 font-sans leading-relaxed">
                A disciplined, five-phase methodology engineered to deliver clarity,
                punctuality, and complete regulatory defensibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
              {approachSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 relative flex flex-col justify-between hover:border-[var(--brand-teal)]/50 transition-colors"
                >
                  <div>
                    <span className="text-2xl font-serif font-light text-[var(--brand-teal)] mb-3 block">
                      {step.number}
                    </span>
                    <h3 className="text-base font-semibold text-[var(--brand-navy)] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 sm:py-20 bg-[#FFFFFF] border-t border-slate-200/80">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
            <div className="rounded-3xl bg-[var(--brand-navy)] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
              {/* Subtle background glow */}
              <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[var(--brand-teal)]/20 blur-3xl" />
              
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[var(--brand-teal)] text-xs font-semibold tracking-wider uppercase mb-5 border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                  READY TO ELEVATE YOUR COMPLIANCE?
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white mb-5">
                  Start a Conversation with a Senior Advisor Today.
                </h2>

                <p className="text-base text-white/80 font-sans leading-relaxed mb-8">
                  Schedule an initial diagnostic consultation with our Chartered
                  Accountants and FTA Tax Agents. We examine your requirements and
                  provide fixed-fee scoping within 24 hours.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/#consult-form"
                    className="inline-flex items-center gap-3 bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-hover)] text-white text-[15px] font-medium px-7 py-4 rounded-full shadow-lg transition-all duration-300 group"
                  >
                    <span>Talk to an Advisor</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[15px] font-medium px-6 py-4 rounded-full border border-white/20 hover:border-white/40 transition-colors"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
