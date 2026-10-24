"use client";

import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus, HelpCircle, ArrowUpRight } from "lucide-react";
import FlowText from "@/components/FlowText";

const FAQS = [
  {
    q: "Who is subject to UAE Corporate Tax (9%)?",
    a:
      "Under Federal Decree-Law No. 47 of 2022, UAE Corporate Tax applies to all commercial businesses operating across the UAE. A 0% statutory rate applies to taxable net income up to AED 375,000, while a 9% rate applies to taxable net income exceeding this threshold. Qualifying Free Zone Persons may enjoy 0% on qualifying income subject to strict de minimis and substance rules.",
  },
  {
    q: "Is annual statutory audit mandatory for UAE companies?",
    a:
      "Yes. Major UAE Free Zone authorities (including DMCC, DIFC, ADGM, DAFZA, and JAFZA) legally mandate an annual independent audited financial statement prepared under IFRS to renew business trade licences. For mainland companies, audits are required by commercial law, banking covenants, and corporate tax regulations.",
  },
  {
    q: "Can our advisory engagement be completed 100% digitally?",
    a:
      "Absolutely. Auditclue operates on a 100% cloud-native delivery model. From initial requirement scoping and encrypted document upload to statutory auditor sign-off and FTA tax portal filings, all procedures are executed securely via our digital platform without any need for physical office visits.",
  },
  {
    q: "What is the threshold for mandatory UAE VAT registration?",
    a:
      "Businesses whose taxable supplies and imports exceed AED 375,000 over the preceding 12 months (or are anticipated to exceed this threshold in the next 30 days) are legally mandated to register for VAT with the Federal Tax Authority (FTA). Voluntary registration is permitted from AED 187,500.",
  },
  {
    q: "How quickly does Auditclue begin work following an enquiry?",
    a:
      "Following your query, our qualified senior advisory team reviews your business scope and delivers a transparent, fixed-fee proposal within 24 hours. Once digitally approved, your dedicated encrypted vault is provisioned immediately on Day 1.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const faqListRef = useRef<HTMLDivElement>(null);

  const toggle = (idx: number) => {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  useEffect(() => {
    // Zero forced reflows or blocking scroll triggers
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative bg-white text-[#233F5B] py-24 sm:py-28 lg:py-32 overflow-hidden border-t border-[#E1E7ED]"
    >
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#216D56] bg-[#EAF4F0] border border-[#36A783]/30 px-3.5 py-1 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#36A783]" />
            <span>Common Enquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#233F5B] leading-[1.18] tracking-tight mb-4">
            <FlowText
              text="Frequently Asked Questions"
              triggerOnScroll
              as="span"
            />
          </h2>

          <p className="text-base sm:text-lg text-[#556980] font-sans leading-relaxed">
            Essential guidance on UAE statutory audit, Corporate Tax (9%), VAT
            compliance, and our digital delivery model.
          </p>
        </div>

        {/* Accordion List */}
        <div ref={faqListRef} className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`faq-item-row rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#F8FAFC] border-[#36A783]/50 shadow-sm"
                    : "bg-white border-slate-200/90 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#233F5B] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#36A783] text-white"
                        : "bg-[#EAF4F0] text-[#216D56]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-slate-200/60">
                    <p className="text-sm sm:text-base text-[#556980] font-sans leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center text-sm text-[#556980]">
          <span>Have a specific compliance question? </span>
          <a
            href="/contact"
            className="font-semibold text-[#216D56] hover:text-[#36A783] inline-flex items-center gap-1 underline underline-offset-4"
          >
            <span>Speak directly with our senior advisors</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
