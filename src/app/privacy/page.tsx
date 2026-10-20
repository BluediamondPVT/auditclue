import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import { ShieldCheck, Lock, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Auditclue Global Advisory Services LLC",
  description:
    "Auditclue Global Advisory Services LLC privacy policy and data governance practices in compliance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL).",
};




export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426] selection:bg-[#C6F850] selection:text-[#071426]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-b from-[#EDF5F1] via-[#F8FAFC] to-[#EEF2F7] border-b border-[#CBD5E1]/60 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-[#64748B] font-medium mb-6"
            >
              <Link href="/" className="hover:text-[#36A783] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#071426] font-semibold">Privacy Policy</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#36A783]" />
              <span>UAE PDPL COMPLIANT · DATA GOVERNANCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif text-[#071426] tracking-tight mb-4">
              <FlowText text="Privacy Policy" as="span" />
            </h1>
            <p className="text-sm sm:text-base text-[#4A5D73] font-sans">
              Last updated: October 2026 · Auditclue Global Advisory Services LLC
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#334155] leading-relaxed font-sans text-base">
            <div>
              <h2 className="text-2xl font-serif text-[#071426] mb-3">
                1. Commitment to Confidentiality & Data Privacy
              </h2>
              <p>
                Auditclue Global Advisory Services LLC (&quot;Auditclue&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy, confidentiality, and security of personal and corporate financial data entrusted to us by our clients, partners, and website visitors. We adhere strictly to UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection (&quot;PDPL&quot;) and applicable international standards of professional confidentiality (including ISA 200 / IESBA Code of Ethics for Professional Accountants).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-[#071426] mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                In the course of delivering audit, corporate tax, VAT, accounting, and advisory services, we collect information including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475569]">
                <li><strong>Corporate & Identity Records:</strong> Trade licenses, certificates of incorporation, Memorandum of Association (MOA), passport copies, and Emirates ID of directors, Ultimate Beneficial Owners (UBO), and authorized signatories as mandated by UAE AML/CFT regulations.</li>
                <li><strong>Financial & Operational Data:</strong> Trial balances, bank statements, audited financial statements, tax invoices, VAT returns, and general ledger records uploaded via our secure client portal.</li>
                <li><strong>Contact Inquiries:</strong> Full name, corporate email address, UAE phone number, and consultation requests submitted through auditclue.com or WhatsApp.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-[#071426] mb-3">
                3. Purpose of Processing
              </h2>
              <p className="mb-3">
                All client information is collected and processed exclusively for lawful advisory and statutory compliance purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475569]">
                <li>Executing statutory audits, review engagements, and agreed-upon procedures.</li>
                <li>Filing Corporate Tax and VAT returns with the Federal Tax Authority (FTA).</li>
                <li>Conducting Customer Due Diligence (CDD) and AML/GoAML risk screening required by UAE regulatory authorities.</li>
                <li>Providing financial insights, virtual CFO reporting, and corporate structuring guidance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-[#071426] mb-3">
                4. Bank-Grade Security & Storage
              </h2>
              <p>
                Client financial documents are safeguarded using AES-256 encryption at rest and TLS 1.3 encryption in transit. Access is strictly role-based and limited to certified auditors, tax agents, and accountants assigned to your specific engagement under non-disclosure agreements (NDAs).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-[#071426] mb-3">
                5. Contact Data Protection Officer
              </h2>
              <p className="mb-4">
                If you have questions regarding our data practices or wish to exercise your rights under UAE PDPL (such as access or deletion of personal data), please contact our compliance desk:
              </p>
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] space-y-2 font-mono text-sm">
                <div><strong>Entity:</strong> Auditclue Global Advisory Services LLC</div>
                <div><strong>Address:</strong> Business Bay, Level 14, Boulevard Plaza Tower, Dubai, UAE</div>
                <div><strong>Email:</strong> <a href="mailto:info@auditclue.com" className="text-[#216D56] hover:underline">info@auditclue.com</a></div>
                <div><strong>Direct Telephone:</strong> <a href="tel:+971547338583" className="text-[#216D56] hover:underline">+971 54 733 8583</a></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
