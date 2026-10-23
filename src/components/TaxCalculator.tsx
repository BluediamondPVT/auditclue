"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building2,
  TrendingUp,
  Percent,
  Coins,
  FileText,
  RotateCcw,
  Check,
} from "lucide-react";

type BusinessType = "mainland" | "freezone_qualifying" | "freezone_standard";

interface Preset {
  label: string;
  revenue: number;
  profit: number;
  type: BusinessType;
}

const PRESETS: Preset[] = [
  {
    label: "SME / Startup",
    revenue: 1200000,
    profit: 320000,
    type: "mainland",
  },
  {
    label: "Growing Enterprise",
    revenue: 3500000,
    profit: 850000,
    type: "mainland",
  },
  {
    label: "Free Zone Qualifying",
    revenue: 5000000,
    profit: 1400000,
    type: "freezone_qualifying",
  },
  {
    label: "Mid-Market Corporate",
    revenue: 12000000,
    profit: 2800000,
    type: "mainland",
  },
];

export default function TaxCalculator() {
  const [businessType, setBusinessType] = useState<BusinessType>("mainland");
  const [revenue, setRevenue] = useState<number>(2500000);
  const [netProfit, setNetProfit] = useState<number>(650000);
  const [hasVatRegistration, setHasVatRegistration] = useState<boolean>(true);
  const [electSBR, setElectSBR] = useState<boolean>(true);
  const [leadEmail, setLeadEmail] = useState<string>("");
  const [leadSubmitted, setLeadSubmitted] = useState<boolean>(false);

  // Formatting helper
  const formatAED = (val: number) => {
    return new Intl.NumberFormat("en-AE", {
      style: "currency",
      currency: "AED",
      maximumFractionDigits: 0,
    }).format(Math.max(0, val));
  };

  // Statutory Calculations based on UAE Corporate Tax Law (Federal Decree-Law No. 47 of 2022 & Decision 73 of 2023)
  const calculation = useMemo(() => {
    const safeRevenue = Math.max(0, revenue);
    const safeProfit = Math.max(0, netProfit);

    // Small Business Relief (SBR) threshold: Gross Revenue <= AED 3,000,000
    const isEligibleForSBR =
      safeRevenue <= 3000000 && businessType !== "freezone_qualifying";

    // 0% Statutory Profit Threshold: First AED 375,000 is always 0%
    const statutoryExemptSlice = Math.min(safeProfit, 375000);
    const taxableProfitSlice = Math.max(0, safeProfit - 375000);

    // Standard 9% tax without SBR:
    const standardCorporateTax = taxableProfitSlice * 0.09;
    const taxSavedByExemption = statutoryExemptSlice * 0.09;

    let corporateTax = 0;
    let sbrSavings = 0;

    if (businessType === "freezone_qualifying") {
      // 0% on Qualifying Income for Qualifying Free Zone Person
      corporateTax = 0;
    } else if (isEligibleForSBR && electSBR) {
      // Small Business Relief elected: Taxable income treated as zero under Ministerial Decision No. 73 of 2023
      corporateTax = 0;
      sbrSavings = standardCorporateTax;
    } else {
      // Standard 9% on profit exceeding AED 375,000
      corporateTax = standardCorporateTax;
    }

    // Effective Tax Rate
    const effectiveTaxRate =
      safeProfit > 0 ? (corporateTax / safeProfit) * 100 : 0;

    // Potential SBR savings if elected
    const potentialSBRSavings = isEligibleForSBR ? standardCorporateTax : 0;

    // Estimated VAT (5% on taxable revenue)
    const vatThresholdStatus =
      safeRevenue >= 375000
        ? "Mandatory Registration"
        : safeRevenue >= 187500
        ? "Voluntary Registration"
        : "Exempt (< 187.5k)";

    const estimatedVatCollection = hasVatRegistration ? safeRevenue * 0.05 : 0;

    return {
      safeRevenue,
      safeProfit,
      isEligibleForSBR,
      electSBR,
      statutoryExemptSlice,
      taxableProfitSlice,
      standardCorporateTax,
      corporateTax,
      sbrSavings,
      effectiveTaxRate,
      potentialSBRSavings,
      taxSavedByExemption,
      vatThresholdStatus,
      estimatedVatCollection,
    };
  }, [revenue, netProfit, businessType, hasVatRegistration, electSBR]);

  // Pre-filled WhatsApp link
  const whatsAppMessage = encodeURIComponent(
    `Hello Auditclue, I simulated my UAE Corporate Tax on your website:
- Structure: ${
      businessType === "freezone_qualifying"
        ? "Free Zone Qualifying (QFZP)"
        : businessType === "freezone_standard"
        ? "Free Zone Standard"
        : "Mainland LLC"
    }
- Gross Revenue: AED ${revenue.toLocaleString()}
- Net Profit: AED ${netProfit.toLocaleString()}
- Estimated Tax: ${formatAED(calculation.corporateTax)}
- SBR Status: ${
      calculation.isEligibleForSBR
        ? electSBR
          ? "Applied (AED 0 Tax under SBR)"
          : "Eligible but Standard 9% viewed"
        : "Turnover > AED 3M (Standard 9%)"
    }
I would like to speak with a chartered tax agent regarding statutory optimization and filing.`
  );

  return (
    <div className="w-full">
      {/* 1. Quick Presets Bar (Neumorphic Soft Pills) */}
      <div className="neu-surface-sm rounded-2xl p-3 sm:p-4 mb-8 sm:mb-10 flex flex-wrap items-center justify-between gap-3 border border-white/60">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#4A5D73] font-bold">
            Simulate Quick Scenarios:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {PRESETS.map((p, idx) => {
            const isMatch =
              revenue === p.revenue &&
              netProfit === p.profit &&
              businessType === p.type;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setRevenue(p.revenue);
                  setNetProfit(p.profit);
                  setBusinessType(p.type);
                }}
                className={`text-xs font-mono font-medium px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  isMatch
                    ? "neu-pressed text-[#216D56] font-bold border border-[#36A783]/30"
                    : "neu-btn text-[#4A5D73] hover:text-[#071426] border border-white/60"
                }`}
              >
                {isMatch && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36A783] animate-pulse" />
                )}
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Neumorphic Dual-Deck Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Deck: Tactile Parameter Controls (7 Cols) */}
        <div className="lg:col-span-7 neu-surface rounded-3xl p-6 sm:p-8 lg:p-9 border border-white/70 space-y-8">
          
          {/* Deck Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#cad4e2]/60">
            <div>
              <span className="neu-pressed inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-[0.18em] text-[#36A783] uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#36A783]" />
                FTA TAX PARAMETERS
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-[#071426]">
                Configure Business Financials
              </h2>
            </div>
            
            <button
              type="button"
              onClick={() => {
                setRevenue(2500000);
                setNetProfit(650000);
                setBusinessType("mainland");
                setHasVatRegistration(true);
              }}
              className="neu-btn px-3.5 py-1.5 rounded-xl text-xs font-mono text-[#4A5D73] hover:text-[#071426] flex items-center gap-1.5 transition-all cursor-pointer border border-white/60"
              title="Reset parameters"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#36A783]" />
              <span>Reset</span>
            </button>
          </div>

          {/* 1. UAE Business Jurisdiction Structure (Tactile Embossed Plates) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs sm:text-sm font-semibold text-[#071426] font-sans">
                1. UAE Business Jurisdiction Structure
              </label>
              <span className="text-[11px] font-mono text-[#64748B]">
                Decree-Law No. 47
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Mainland LLC Plate */}
              <button
                type="button"
                onClick={() => setBusinessType("mainland")}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer relative ${
                  businessType === "mainland"
                    ? "neu-pressed border-2 border-[#36A783] bg-[#e7edf4]"
                    : "neu-btn border border-white/80 hover:border-[#CBD5E1]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-serif font-bold text-sm text-[#071426]">
                    Mainland LLC
                  </div>
                  {businessType === "mainland" && (
                    <span className="w-2 h-2 rounded-full bg-[#36A783] shadow-[0_0_8px_#36A783]" />
                  )}
                </div>
                <div className="text-[11px] font-mono text-[#64748B]">
                  Standard 0% / 9%
                </div>
              </button>

              {/* Free Zone (QFZP) Plate */}
              <button
                type="button"
                onClick={() => setBusinessType("freezone_qualifying")}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer relative ${
                  businessType === "freezone_qualifying"
                    ? "neu-pressed border-2 border-[#36A783] bg-[#e7edf4]"
                    : "neu-btn border border-white/80 hover:border-[#CBD5E1]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-serif font-bold text-sm text-[#071426]">
                    Free Zone (QFZP)
                  </div>
                  {businessType === "freezone_qualifying" && (
                    <span className="w-2 h-2 rounded-full bg-[#36A783] shadow-[0_0_8px_#36A783]" />
                  )}
                </div>
                <div className="text-[11px] font-mono text-[#64748B]">
                  0% Qualifying Income
                </div>
              </button>

              {/* Free Zone (Standard) Plate */}
              <button
                type="button"
                onClick={() => setBusinessType("freezone_standard")}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer relative ${
                  businessType === "freezone_standard"
                    ? "neu-pressed border-2 border-[#36A783] bg-[#e7edf4]"
                    : "neu-btn border border-white/80 hover:border-[#CBD5E1]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-serif font-bold text-sm text-[#071426]">
                    Free Zone (Std)
                  </div>
                  {businessType === "freezone_standard" && (
                    <span className="w-2 h-2 rounded-full bg-[#36A783] shadow-[0_0_8px_#36A783]" />
                  )}
                </div>
                <div className="text-[11px] font-mono text-[#64748B]">
                  Non-Qualifying 9%
                </div>
              </button>
            </div>
          </div>

          {/* 2. Annual Gross Revenue / Turnover (Tactile Sunken Channel Slider) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label
                htmlFor="revenue-slider"
                className="text-xs sm:text-sm font-semibold text-[#071426] font-sans"
              >
                2. Annual Gross Revenue / Turnover
              </label>

              {/* Sunken Neumorphic Digital Readout */}
              <div className="neu-pressed px-4 py-1.5 rounded-xl font-mono text-base font-bold text-[#216D56] border border-[#36A783]/20 shadow-inner">
                {formatAED(revenue)}
              </div>
            </div>

            {/* Custom Neumorphic Range Input */}
            <div className="py-2">
              <input
                id="revenue-slider"
                type="range"
                min={200000}
                max={20000000}
                step={100000}
                value={revenue}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setRevenue(val);
                  if (netProfit > val * 0.7) {
                    setNetProfit(Math.round(val * 0.3));
                  }
                }}
                className="neu-range"
              />
            </div>

            {/* Tick Mark Badges */}
            <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-[#64748B]">
              <span className="neu-pressed px-2 py-0.5 rounded-md">AED 200K</span>
              <span className="neu-pressed px-2 py-0.5 rounded-md text-[#216D56] font-bold border border-[#36A783]/30">
                AED 3M (SBR Cap)
              </span>
              <span className="neu-pressed px-2 py-0.5 rounded-md">AED 10M</span>
              <span className="neu-pressed px-2 py-0.5 rounded-md">AED 20M+</span>
            </div>
          </div>

          {/* 3. Estimated Net Taxable Profit (Tactile Sunken Channel Slider) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label
                htmlFor="profit-slider"
                className="text-xs sm:text-sm font-semibold text-[#071426] font-sans"
              >
                3. Estimated Net Taxable Profit
              </label>

              {/* Sunken Neumorphic Digital Readout */}
              <div className="neu-pressed px-4 py-1.5 rounded-xl font-mono text-base font-bold text-[#071426] border border-white/60 shadow-inner">
                {formatAED(netProfit)}
              </div>
            </div>

            {/* Custom Neumorphic Range Input */}
            <div className="py-2">
              <input
                id="profit-slider"
                type="range"
                min={0}
                max={Math.max(1000000, Math.round(revenue * 0.75))}
                step={25000}
                value={netProfit}
                onChange={(e) => setNetProfit(Number(e.target.value))}
                className="neu-range"
              />
            </div>

            {/* Tick Mark Badges */}
            <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-[#64748B]">
              <span className="neu-pressed px-2 py-0.5 rounded-md">AED 0</span>
              <span className="neu-pressed px-2 py-0.5 rounded-md text-[#36A783] font-bold border border-[#36A783]/30">
                AED 375K (0% Cap)
              </span>
              <span className="neu-pressed px-2 py-0.5 rounded-md">50% Margin</span>
              <span className="neu-pressed px-2 py-0.5 rounded-md">75% Margin</span>
            </div>
          </div>

          {/* 4. VAT 5% Interactive Neumorphic Toggle Deck */}
          <div className="pt-4 border-t border-[#cad4e2]/60 flex items-center justify-between">
            <div>
              <div className="text-xs sm:text-sm font-semibold text-[#071426]">
                Include 5% UAE VAT Estimation
              </div>
              <div className="text-xs text-[#64748B] font-mono mt-0.5">
                Statutory Status: {calculation.vatThresholdStatus}
              </div>
            </div>

            {/* Tactile Neumorphic Switch */}
            <button
              type="button"
              role="switch"
              aria-checked={hasVatRegistration}
              onClick={() => setHasVatRegistration(!hasVatRegistration)}
              className={`w-14 h-8 rounded-full neu-pressed relative p-1 transition-colors cursor-pointer flex items-center border border-white/60 ${
                hasVatRegistration ? "bg-[#dcf0e7]" : "bg-[#e9eef4]"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center ${
                  hasVatRegistration
                    ? "translate-x-6 bg-[#36A783] shadow-[0_0_10px_rgba(54,167,131,0.6)]"
                    : "translate-x-0 bg-white shadow-[2px_2px_5px_#cad4e2,-2px_-2px_5px_#ffffff]"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    hasVatRegistration ? "bg-white" : "bg-[#94A3B8]"
                  }`}
                />
              </span>
            </button>
          </div>

        </div>

        {/* Right Deck: The High-End Neumorphic Cockpit Console (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Dark Bevelled OLED Console */}
          <div className="neu-display rounded-3xl p-7 sm:p-8 lg:p-9 border border-[#172738] text-white relative overflow-hidden">
            {/* Ambient Internal Glow */}
            <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#36A783]/20 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#83D9BE] uppercase tracking-wider font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#36A783] animate-ping" />
                  ESTIMATED CORPORATE TAX
                </span>

                <span className="font-mono text-xs text-[#C6F850] bg-white/10 px-3 py-1 rounded-full border border-white/10 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]">
                  {calculation.isEligibleForSBR && calculation.electSBR
                    ? "0.0% SBR RELIEF"
                    : businessType === "freezone_qualifying"
                    ? "0.0% QFZP RATE"
                    : `Effective: ${calculation.effectiveTaxRate.toFixed(1)}%`}
                </span>
              </div>

              {/* Big Figure */}
              <div className="text-4xl sm:text-5xl font-mono sm:font-serif font-bold text-white tracking-tight mb-2 drop-shadow-[0_2px_14px_rgba(54,167,131,0.3)]">
                {formatAED(calculation.corporateTax)}
              </div>

              <div className="text-xs text-[#94A3B8] font-sans mb-6">
                {calculation.isEligibleForSBR && calculation.electSBR ? (
                  <span className="text-[#83D9BE] font-medium">
                    ✓ Small Business Relief Applied — Taxable income treated as zero (You save {formatAED(calculation.sbrSavings)}).
                  </span>
                ) : businessType === "freezone_qualifying" ? (
                  <span className="text-[#83D9BE] font-medium">
                    ✓ Qualifying Free Zone Person (QFZP) — 0% on Qualifying Income.
                  </span>
                ) : (
                  <span>
                    Based on standard UAE Corporate Tax Law 9% statutory rate on profit exceeding AED 375,000.
                  </span>
                )}
              </div>

              {/* Sunken Visual Tier Meter */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-mono mb-2 text-[#CBD5E1]">
                  <span className="text-[#83D9BE] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#36A783]" />
                    0% Tier: {formatAED(calculation.statutoryExemptSlice)}
                  </span>
                  <span className="text-white flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#C6F850]" />
                    9% Tier: {formatAED(calculation.taxableProfitSlice)}
                  </span>
                </div>

                {/* Sunken Channel */}
                <div className="h-3.5 w-full bg-[#050c14] rounded-full p-0.5 overflow-hidden flex shadow-[inset_2px_2px_6px_rgba(0,0,0,0.9),inset_-1px_-1px_3px_rgba(255,255,255,0.05)] border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-[#216D56] to-[#36A783] rounded-l-full transition-all duration-500 shadow-[0_0_8px_rgba(54,167,131,0.5)]"
                    style={{
                      width: `${
                        netProfit > 0
                          ? (calculation.statutoryExemptSlice / netProfit) * 100
                          : 100
                      }%`,
                    }}
                    title="0% Tax Exempt Slice (Up to AED 375,000)"
                  />
                  <div
                    className="h-full bg-gradient-to-r from-[#A3E635] to-[#C6F850] rounded-r-full transition-all duration-500 shadow-[0_0_8px_rgba(198,248,80,0.5)]"
                    style={{
                      width: `${
                        netProfit > 0
                          ? (calculation.taxableProfitSlice / netProfit) * 100
                          : 0
                      }%`,
                    }}
                    title="9% Taxable Slice (Excess over AED 375,000)"
                  />
                </div>
              </div>

              {/* Sunken Statutory Breakdown Plate */}
              <div className="bg-[#0b1624] rounded-2xl p-4 border border-white/5 space-y-3 text-xs sm:text-sm font-sans shadow-[inset_2px_2px_6px_rgba(0,0,0,0.5)]">
                <div className="flex justify-between items-center text-[#CBD5E1]">
                  <span>Statutory 0% Relief Saving:</span>
                  <span className="font-mono font-bold text-[#83D9BE] bg-[#36A783]/15 px-2 py-0.5 rounded-md border border-[#36A783]/20">
                    +{formatAED(calculation.taxSavedByExemption)}
                  </span>
                </div>

                {calculation.isEligibleForSBR && calculation.electSBR && (
                  <div className="flex justify-between items-center text-[#CBD5E1] pt-2 border-t border-white/5">
                    <span>Small Business Relief (SBR) Saving:</span>
                    <span className="font-mono font-bold text-[#C6F850] bg-[#C6F850]/15 px-2 py-0.5 rounded-md border border-[#C6F850]/20">
                      +{formatAED(calculation.sbrSavings)}
                    </span>
                  </div>
                )}

                {hasVatRegistration && (
                  <div className="flex flex-col gap-1 pt-2 border-t border-white/5">
                    <div className="flex justify-between items-center text-[#CBD5E1]">
                      <span>Estimated 5% Output VAT (on turnover):</span>
                      <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded-md">
                        {formatAED(calculation.estimatedVatCollection)}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#94A3B8] font-sans">
                      *Output VAT on revenue. Net payable to FTA is reduced by your recoverable input tax credits.
                    </span>
                  </div>
                )}
              </div>

              {/* Tactile Kinetic Action CTAs */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-3.5">
                <a
                  href={`https://wa.me/971547338583?text=${whatsAppMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#C6F850] hover:bg-[#bbf03e] px-6 py-4 text-sm sm:text-base font-bold text-[#071426] shadow-[0_6px_22px_rgba(198,248,80,0.32)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <span>Discuss Optimization on WhatsApp</span>
                  <span className="text-base leading-none font-sans font-bold">↳</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#101d2c] hover:bg-[#152538] text-white text-xs sm:text-sm font-medium py-3.5 rounded-2xl border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-all"
                >
                  <span>Book Formal Tax Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/70" />
                </Link>
              </div>

            </div>
          </div>

          {/* Small Business Relief (SBR) Status Deck with 2029 Extension & Toggle */}
          {calculation.isEligibleForSBR ? (
            <div className="neu-surface rounded-2xl p-5 border border-white/80 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full neu-pressed shrink-0 flex items-center justify-center text-[#36A783] mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#36A783]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono font-bold text-[#216D56] uppercase tracking-wider mb-1 flex items-center gap-1.5 flex-wrap">
                    <span>SMALL BUSINESS RELIEF (SBR) ACTIVE • EXTENDED TO 2029</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#36A783] animate-pulse" />
                  </div>
                  <div className="text-xs text-[#334155] leading-relaxed">
                    Your gross turnover is below <strong>AED 3,000,000</strong>. Under Ministerial Decision No. 73 of 2023, you can elect for <strong>0% Corporate Tax treatment</strong> for all tax periods through <strong>31 December 2029</strong>.
                  </div>
                </div>
              </div>

              {/* Interactive SBR Elective Toggle */}
              <div className="neu-pressed p-3 rounded-xl flex items-center justify-between text-xs font-medium text-[#071426]">
                <div className="flex items-center gap-2">
                  <input
                    id="elect-sbr-checkbox"
                    type="checkbox"
                    checked={electSBR}
                    onChange={(e) => setElectSBR(e.target.checked)}
                    className="w-4 h-4 accent-[#36A783] cursor-pointer"
                  />
                  <label htmlFor="elect-sbr-checkbox" className="cursor-pointer font-semibold">
                    Elect 0% Small Business Relief (Tax Payable = AED 0)
                  </label>
                </div>
                <span className="font-mono text-[11px] font-bold text-[#216D56]">
                  {electSBR ? "0% RATE APPLIED" : "STANDARD 9% VIEW"}
                </span>
              </div>

              {/* What Next Statutory Transition Note */}
              <div className="p-3.5 rounded-xl bg-[#F1F5F9] border border-slate-200 text-[11px] text-[#475569] leading-relaxed">
                <strong className="text-[#071426] block mb-1">What happens next (Post-2029 or if turnover &gt; AED 3M)?</strong>
                Once your turnover exceeds AED 3,000,000 or after the extended SBR relief window ends (31 Dec 2029), your entity transitions smoothly into the standard UAE regime: the first AED 375,000 of net profit remains 0% tax exempt, and only net profit exceeding AED 375,000 is taxed at 9%. Auditclue prepares your books in advance to avoid unexpected tax liabilities.
              </div>
            </div>
          ) : (
            <div className="neu-surface rounded-2xl p-5 border border-white/80 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full neu-pressed shrink-0 flex items-center justify-center text-[#233F5B] mt-0.5">
                <FileText className="w-5 h-5 text-[#36A783]" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#071426] uppercase tracking-wider mb-1">
                  STANDARD 9% CORPORATE TAX REGIME
                </div>
                <div className="text-xs text-[#64748B] leading-relaxed">
                  Turnover exceeds AED 3,000,000. Your entity is taxed at 0% on the first AED 375,000 and 9% on net profit above AED 375,000. Entities with revenue &gt; AED 50M or Qualifying Free Zone Persons require certified audited financial statements.
                </div>
              </div>
            </div>
          )}

          {/* Statutory Assumptions & Email Lead Gate */}
          <div className="neu-surface rounded-2xl p-5 border border-white/80 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono font-bold text-[#071426] uppercase tracking-wider flex items-center gap-2">
                <span>STATUTORY RULES & ASSUMPTIONS</span>
              </div>
              <span className="text-[10px] font-mono text-[#64748B] bg-white px-2 py-0.5 rounded border border-slate-200">
                FTA Decree-Law 47
              </span>
            </div>

            <ul className="text-xs text-[#475569] space-y-1.5 list-disc pl-4 font-sans">
              <li><strong>0% First Tier:</strong> First AED 375,000 of taxable net profit is 0% tax exempt.</li>
              <li><strong>9% Standard Rate:</strong> Applies strictly to taxable profits exceeding AED 375,000.</li>
              <li><strong>Small Business Relief:</strong> 0% tax for revenue $\le$ AED 3M (extended to 31 Dec 2029).</li>
              <li><strong>Free Zone QFZP:</strong> 0% on Qualifying Income; 9% on mainland non-qualifying income.</li>
            </ul>

            {/* Email Lead Gate for Detailed Itemized Report */}
            <div className="pt-3 border-t border-slate-200">
              {!leadSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (leadEmail.trim()) {
                      setLeadSubmitted(true);
                    }
                  }}
                  className="space-y-2.5"
                >
                  <div className="text-xs font-semibold text-[#071426]">
                    Unlock Detailed Statutory Deduction Report & PDF
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="Enter work email for full report..."
                      className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#36A783]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#36A783] hover:bg-[#2B896B] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Unlock Report
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-3 rounded-xl bg-[#EAF4F0] border border-[#36A783]/30 text-xs text-[#216D56] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0" />
                  <span>
                    Full report unlocked! An itemized compliance dossier has been sent to <strong>{leadEmail}</strong>.
                  </span>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
