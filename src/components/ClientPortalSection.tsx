"use client";

import React, { useEffect, useRef } from "react";
import {
  Lock,
  FileCheck2,
  Calendar,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Download,
  CheckCircle2,
  Clock,
  Eye,
  FileText,
  BadgeCheck,
  HardDrive,
  Users,
} from "lucide-react";
import FlowText from "@/components/FlowText";
export default function ClientPortalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Zero forced reflows or blocking scroll triggers
  }, []);

  return (
    <section
      id="portal"
      ref={sectionRef}
      className="relative bg-[#071426] text-white py-24 sm:py-28 lg:py-32 overflow-hidden border-t border-b border-white/10"
    >
      {/* Background Architectural Glows & Grid */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(54,167,131,0.09),transparent_70%)]" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(35,63,91,0.4),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Asymmetrical 2-Column Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: High-Fidelity Interactive Digital Vault Product Interface (Col 1-7) */}
          <div ref={mockupRef} className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative bg-[#0D1B30]/90 border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-black/50 backdrop-blur-md overflow-hidden">
              
              {/* Subtle top ambient glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#36A783]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Browser Window Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/40 border border-white/10 px-3 py-1 rounded-lg text-xs font-mono text-[#A8B7C9]">
                    <Lock className="w-3 h-3 text-[#36A783]" />
                    <span>vault.auditclue.com/client-console</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#36A783]/20 text-[#83D9BE] border border-[#36A783]/30 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>AES-256 Encrypted</span>
                  </span>
                </div>
              </div>

              {/* Enterprise Header Pill Inside Console */}
              <div className="portal-widget bg-white/[0.04] border border-white/10 rounded-2xl p-4 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#233F5B]/80 border border-white/10 flex items-center justify-center text-[#83D9BE] font-serif font-bold text-lg">
                    AC
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white flex items-center gap-2">
                      <span>Al-Mansoor Holdings LLC</span>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/10 text-[#83D9BE] border border-[#36A783]/30">
                        Sample
                      </span>
                      <BadgeCheck className="w-4 h-4 text-[#36A783]" />
                    </div>
                    <div className="text-xs text-[#A8B7C9] font-mono">
                      TRN: 100-****-****-0003 • Dubai Mainland
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-[#36A783]/15 text-[#83D9BE] border border-[#36A783]/30 font-medium">
                    Audit Status: Certified
                  </span>
                </div>
              </div>

              {/* Dashboard Interactive Feature Widgets */}
              <div className="space-y-3.5">
                
                {/* WIDGET 1: UAE Corporate Tax Return FY 2024–2025 Progress */}
                <div className="portal-widget p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#36A783]/40 transition-all">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#83D9BE]" />
                      <span className="font-semibold text-white">UAE Corporate Tax (9% Federal Law No. 47)</span>
                    </div>
                    <span className="text-[#83D9BE] font-mono font-semibold px-2 py-0.5 rounded bg-[#36A783]/20">
                      90% Ready
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2.5 mb-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#233F5B] via-[#36A783] to-[#83D9BE] h-full rounded-full w-[90%]" />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#A8B7C9]">
                    <span>Taxable Income & Reliefs Validated</span>
                    <span className="font-mono text-white/80">Filing Deadline: 30 Sep 2027</span>
                  </div>
                </div>

                {/* WIDGET 2: Statutory IFRS Audit Report (Signed) */}
                <div className="portal-widget p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#36A783]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#36A783]/20 border border-[#36A783]/30 flex items-center justify-center text-[#83D9BE] shrink-0">
                      <FileCheck2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white flex items-center gap-2">
                        <span>Statutory Independent Audit Report</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/80">
                          PDF Signed
                        </span>
                      </div>
                      <div className="text-xs text-[#A8B7C9]">
                        IFRS & ISA Compliant • Certified Auditor Digital Signature
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#83D9BE] border border-white/10 flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>

                {/* WIDGET 3: VAT Periodic Return & FTA Calendar Alert */}
                <div className="portal-widget p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#36A783]/40 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Upcoming UAE VAT Periodic Return
                      </div>
                      <div className="text-xs text-[#A8B7C9]">
                        EmaraTax Portal Sync • Pre-Audit Ledger Reconciled
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/25">
                    14 Days Left
                  </span>
                </div>

              </div>

              {/* Bottom Console Note */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A8B7C9]">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#36A783]" />
                  <span>Assigned Senior Partner: Alistair & Team (Dubai Desk)</span>
                </div>
                <span className="font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Portal Narrative & Pillars (Col 8-12) */}
          <div ref={copyRef} className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            
            <div className="portal-narrative-item inline-flex items-center gap-2 bg-[#36A783]/15 border border-[#36A783]/30 text-[#83D9BE] text-[13px] font-semibold px-3.5 py-1.5 rounded-full font-mono">
              <span>Proprietary Client Infrastructure</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-white leading-[1.2] tracking-tight">
              <FlowText
                text="Full Transparency With Your Digital Audit & Tax Vault"
                triggerOnScroll
                as="span"
              />
            </h2>

            <p className="portal-narrative-item text-base sm:text-lg text-[#A8B7C9] font-sans leading-relaxed">
              No more searching through lost email chains or expired wetransfer links. Every Auditclue client receives
              instant credentials to their dedicated cloud vault to view audit progress, download
              certified reports, and monitor UAE statutory tax deadlines in real-time.
            </p>

            {/* 3 Value Pillars */}
            <div className="space-y-4 pt-2">
              
              <div className="portal-narrative-item flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#36A783]/20 flex items-center justify-center text-[#83D9BE] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    Immutable Audit Documentation
                  </h3>
                  <p className="text-xs text-[#A8B7C9] leading-relaxed">
                    Bank-ready IFRS financial statements and tax return receipts archived permanently with tamper-proof audit trails.
                  </p>
                </div>
              </div>

              <div className="portal-narrative-item flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#36A783]/20 flex items-center justify-center text-[#83D9BE] shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    Automated Statutory Deadlines
                  </h3>
                  <p className="text-xs text-[#A8B7C9] leading-relaxed">
                    Automated SMS and email reminders prior to any FTA VAT or Corporate Tax due date, supporting strict statutory compliance.
                  </p>
                </div>
              </div>

              <div className="portal-narrative-item flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#36A783]/20 flex items-center justify-center text-[#83D9BE] shrink-0 mt-0.5">
                  <HardDrive className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    Multi-Entity Portfolio Consolidation
                  </h3>
                  <p className="text-xs text-[#A8B7C9] leading-relaxed">
                    Switch between Free Zone entities, mainland trading companies, and offshore holding structures within one dashboard.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Onboarding & Existing Client Login CTAs */}
            <div className="portal-narrative-item pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href="#consult-form"
                className="inline-flex items-center gap-2.5 bg-[#1d8062] hover:bg-[#16654e] text-white text-sm sm:text-base font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[#1d8062]/30 group cursor-pointer"
              >
                <span>Onboard Your Enterprise Today</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://crm.auditclue.app/client-portal/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#83D9BE] hover:text-white px-5 py-3.5 rounded-xl border border-white/10 hover:border-[#36A783]/40 bg-white/[0.04] hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                <Lock className="w-4 h-4 text-[#36A783]" />
                <span>Existing client? Log in</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
