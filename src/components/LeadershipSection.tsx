"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
  FileCheck2,
  Scale,
  Briefcase,
  Users,
} from "lucide-react";

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  photo: string;
  experienceYears: string;
  specialization: string[];
  bio: string;
  statutoryRegistration: string;
  linkedInUrl: string;
}

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: "tariq-hashimi",
    name: "Tariq Al-Hashimi",
    role: "Managing Partner & Lead FTA Tax Principal",
    credentials: "FCA (ICAEW) • CTA • FTA Registered Tax Agent",
    photo: "/images/team/partner-tariq.jpg",
    experienceYears: "18+ Yrs UAE & UK",
    statutoryRegistration: "FTA Agency TAN-20038914",
    specialization: [
      "UAE Corporate Tax (9%) & SBR 0%",
      "Qualifying Free Zone Person (QFZP)",
      "FTA Audit Defense & Reconsiderations",
      "Transfer Pricing Local & Master Files",
    ],
    bio: "Former Big 4 Senior Tax Director with over 18 years across Dubai and London. Tariq oversees Auditclue's tax advisory practice and has structured statutory compliance for over 450+ GCC enterprises, family offices, and multinational regional headquarters.",
    linkedInUrl: "https://www.linkedin.com/company/auditclue",
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Partner & Head of Audit & Assurance",
    credentials: "CPA (US) • ACCA (UK) • MoE Registered Auditor",
    photo: "/images/team/partner-sarah.jpg",
    experienceYears: "15+ Yrs EMEA & GCC",
    statutoryRegistration: "Ministry of Economy Reg. No. 4921",
    specialization: [
      "Statutory Audits under IFRS & ISA",
      "Free Zone Filings (DMCC, DIFC, ADGM)",
      "Financial Due Diligence & Valuation",
      "Internal Controls (ISA 315 & 240)",
    ],
    bio: "Fellow ACCA and US-licensed CPA specializing in complex multi-entity statutory assurance and corporate governance. Sarah ensures every financial statement issued by Auditclue meets the highest standards demanded by UAE banks, Free Zone authorities, and international investors.",
    linkedInUrl: "https://www.linkedin.com/company/auditclue",
  },
  {
    id: "mohammad-alfalasi",
    name: "Mohammad Rashid Al-Falasi",
    role: "Partner & Head of Corporate Services",
    credentials: "LL.M. International Commercial Law • UAE Structuring Specialist",
    photo: "/images/team/partner-mohammad.jpg",
    experienceYears: "14+ Yrs UAE Practice",
    statutoryRegistration: "Dubai DET License No. 1094821",
    specialization: [
      "Mainland DED 100% Foreign Ownership",
      "40+ Free Zone Formations & Structuring",
      "Ultimate Beneficial Owner (UBO) & ESR",
      "Corporate Bank Account Structuring",
    ],
    bio: "Distinguished UAE corporate structuring specialist with deep institutional insight into ministerial licensing, foreign direct investment mandates, and cross-border corporate reorganizations across all seven Emirates and 40+ specialized Free Zones.",
    linkedInUrl: "https://www.linkedin.com/company/auditclue",
  },
];

export const REGULATORY_CREDENTIALS = [
  {
    authority: "Federal Tax Authority (FTA)",
    detail: "Registered Tax Agent & Corporate Tax Agency (TAN-20038914)",
    code: "FTA / EmaraTax",
  },
  {
    authority: "Ministry of Economy (MoE)",
    detail: "Statutory Financial Reporting strictly aligned to IFRS & ISA Standards",
    code: "MoE Regulated",
  },
  {
    authority: "Dubai DET Commercial License",
    detail: "Auditclue Global Advisory Services LLC — Commercial License No. 1094821",
    code: "DET License 1094821",
  },
  {
    authority: "UAE PDPL Privacy Compliance",
    detail: "Certified data confidentiality under Federal Decree-Law No. 45 of 2021",
    code: "UAE PDPL Law",
  },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="py-18 sm:py-24 lg:py-28 bg-white border-b border-[#E2E8F0] relative overflow-hidden"
    >
      {/* Subtle Grid Backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-1/3 w-[600px] h-[350px] bg-[#36A783]/6 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#216D56] bg-[#EAF4F0] border border-[#36A783]/30 px-3.5 py-1.5 rounded-full mb-3.5">
            <Users className="w-3.5 h-3.5 text-[#36A783]" />
            <span>Senior Leadership & Partners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#071426] tracking-tight leading-[1.16] mb-4">
            Led by Chartered CPAs, Licensed FTA Tax Agents & Legal Specialists
          </h2>

          <p className="text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed">
            Auditclue combines Big 4 technical rigor with modern digital agility. Every client engagement is directly supervised and signed off by qualified senior partners who hold recognized statutory credentials in the UAE and internationally.
          </p>
        </div>

        {/* 3 Partner Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {LEADERSHIP_TEAM.map((partner) => (
            <div
              key={partner.id}
              className="group rounded-3xl bg-[#F8FAFC] border border-[#CBD5E1]/80 hover:border-[#36A783]/60 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/70 flex flex-col justify-between overflow-hidden"
            >
              {/* Partner Portrait Container with Realistic Proportions */}
              <div className="relative w-full aspect-square overflow-hidden bg-slate-200">
                <Image
                  src={partner.photo}
                  alt={`${partner.name} - ${partner.role} at Auditclue`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient Bottom Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/90 via-[#071426]/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-semibold text-[#071426] shadow-sm">
                    <Award className="w-3 h-3 text-[#36A783]" />
                    {partner.experienceYears}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#071426]/80 backdrop-blur-md text-[11px] font-mono text-[#83D9BE] border border-white/10">
                    <ShieldCheck className="w-3 h-3 text-[#36A783]" />
                    VERIFIED
                  </span>
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-white tracking-tight leading-snug">
                    {partner.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#83D9BE] font-mono mt-0.5">
                    {partner.credentials}
                  </p>
                </div>
              </div>

              {/* Partner Details Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Role Title */}
                  <div className="mb-4 pb-3 border-b border-[#E2E8F0]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block mb-1">
                      Practice Leadership
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-[#071426] leading-snug">
                      {partner.role}
                    </h4>
                    <span className="inline-block mt-1 text-[11px] font-mono text-[#216D56] bg-[#EAF4F0] px-2 py-0.5 rounded">
                      {partner.statutoryRegistration}
                    </span>
                  </div>

                  {/* Bio Description */}
                  <p className="text-xs sm:text-sm text-[#4A5D73] leading-relaxed mb-5 font-sans">
                    {partner.bio}
                  </p>

                  {/* Practice Specializations */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block mb-2 font-semibold">
                      Statutory Focus Areas
                    </span>
                    <div className="space-y-1.5">
                      {partner.specialization.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-[#071426]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783] shrink-0" />
                          <span className="leading-tight">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <Link
                    href="/#consult-form"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#216D56] hover:text-[#071426] transition-colors"
                  >
                    <span>Schedule Partner Advisory</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={partner.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#64748B] hover:text-[#0A66C2] transition-colors"
                    title={`Connect with ${partner.name} on LinkedIn`}
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================================== */}
        {/* FIRM STATUTORY LICENSING & REGULATORY COMPLIANCE BLOCK                */}
        {/* ===================================================================== */}
        <div className="rounded-3xl bg-[#071426] text-white p-7 sm:p-10 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#36A783]/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 5 Cols: Regulatory Statement */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#83D9BE] bg-[#36A783]/15 border border-[#36A783]/30 px-3 py-1 rounded-full mb-3">
                <Scale className="w-3.5 h-3.5" />
                <span>Statutory Governance</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white tracking-tight leading-snug mb-3">
                Licensed Practice & Commercial Credentials
              </h3>

              <p className="text-sm text-[#A8B7C9] leading-relaxed mb-6 font-sans">
                Auditclue Global Advisory Services LLC operates under valid statutory commercial licensing issued by the Dubai Department of Economy & Tourism (DET) and direct authorization by the Federal Tax Authority.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/#consult-form"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C6F850] text-[#071426] text-xs font-bold hover:bg-white transition-all shadow-md"
                >
                  <span>Request Corporate Credentials Pack</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/privacy"
                  className="text-xs text-[#83D9BE] underline hover:text-white transition-colors"
                >
                  UAE PDPL Compliance Statement
                </Link>
              </div>
            </div>

            {/* Right 7 Cols: Verifiable Credential Tiles */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REGULATORY_CREDENTIALS.map((cred, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#36A783]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-[#83D9BE] uppercase tracking-wider">
                      {cred.code}
                    </span>
                    <FileCheck2 className="w-4 h-4 text-[#36A783]" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1 leading-snug">
                    {cred.authority}
                  </h4>
                  <p className="text-xs text-[#A8B7C9] leading-relaxed font-sans">
                    {cred.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
