"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Building2,
  Scale,
  ShieldCheck,
  Calculator,
  Briefcase,
  Percent,
  TrendingUp,
  Sparkles,
  Repeat,
  Compass,
  ShieldAlert,
  Cpu,
} from "lucide-react";

interface NavLinkItem {
  name: string;
  href: string;
  dropdown?: boolean;
  badge?: string;
}

const navLinks: NavLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services", dropdown: true },
  { name: "Tax Calculator", href: "/calculator" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

const MEGA_SERVICES_COL_1 = [
  {
    title: "Business Setup & Formation",
    href: "/services/business-setup",
    svcs: "16 Svcs",
    desc: "Mainland DED, Free Zones & bank-ready setup",
    icon: Building2,
  },
  {
    title: "UAE Corporate Tax (9%)",
    href: "/services/corporate-tax",
    svcs: "16 Svcs",
    desc: "Small Business Relief, QFZP 0% & FTA filing",
    icon: Scale,
  },
  {
    title: "Statutory Audit & Assurance",
    href: "/services/audit-assurance",
    svcs: "18 Svcs",
    desc: "IFRS financial statements & Free Zone renewal",
    icon: ShieldCheck,
  },
  {
    title: "UAE VAT Services (5%)",
    href: "/services/vat-services",
    svcs: "15 Svcs",
    desc: "Registrations, return filing & refund claims",
    icon: Percent,
  },
  {
    title: "Virtual CFO Advisory",
    href: "/services/cfo-advisory",
    svcs: "17 Svcs",
    desc: "Financial modeling, budgeting & board reporting",
    icon: TrendingUp,
  },
  {
    title: "Accounting & Bookkeeping",
    href: "/services/accounting-bookkeeping",
    svcs: "20 Svcs",
    desc: "Monthly bookkeeping, MIS & year-end closing",
    icon: Calculator,
  },
];

const MEGA_SERVICES_COL_2 = [
  {
    title: "Transfer Pricing",
    href: "/services/transfer-pricing",
    svcs: "11 Svcs",
    desc: "Arm's length policy, Local & Master file",
    icon: Repeat,
  },

  {
    title: "Corporate Finance",
    href: "/services/corporate-finance",
    svcs: "16 Svcs",
    desc: "Bank loan facilities, trade finance & debt advisory",
    icon: Briefcase,
  },
  {
    title: "Business Advisory",
    href: "/services/business-advisory",
    svcs: "16 Svcs",
    desc: "Valuations, M&A due diligence & restructuring",
    icon: Compass,
  },
  {
    title: "Compliance Services",
    href: "/services/compliance-services",
    svcs: "13 Svcs",
    desc: "AML, GoAML, ESR, UBO & regulatory filing",
    icon: ShieldAlert,
  },
  {
    title: "Technology & Digital Finance",
    href: "/services/technology-digital",
    svcs: "13 Svcs",
    desc: "Zoho, QuickBooks, Xero & e-invoicing Peppol",
    icon: Cpu,
  },
  {
    title: "UAE Tax Calculator",
    href: "/calculator",
    svcs: "Interactive",
    desc: "Simulate corporate tax & VAT liability in seconds",
    icon: Sparkles,
    highlight: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!mounted) return false;
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  useEffect(() => {
    // Avoid synchronous cascading render lint error
    const timer = setTimeout(() => setMounted(true), 0);
    const handleScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-[0_8px_30px_rgba(35,63,91,0.07)]" : "shadow-none"
        }`}
      >
        <div className="mx-auto flex h-19 max-w-330 items-center justify-between px-5 sm:px-8 lg:h-21.5 lg:px-10">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="relative z-60 flex shrink-0 items-center"
            aria-label="Auditclue home"
          >
            <Image
              src="/logo-transparent.png"
              alt="Auditclue Global Advisory Services LLC"
              width={340}
              height={120}
              priority
              className="h-auto w-43.75 object-contain sm:w-62.5"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-4 xl:gap-6 2xl:gap-7 lg:flex"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`nav-link inline-flex items-center gap-1.5 py-3 text-[13px] xl:text-[14px] font-medium transition-colors ${
                      active
                        ? "text-brand-teal-dark font-semibold"
                        : "text-brand-navy hover:text-brand-teal"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="hidden xl:inline-flex items-center gap-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#36A783] animate-pulse" />
                        {link.badge}
                      </span>
                    )}
                    {link.dropdown && (
                      <ChevronDown
                        size={14}
                        strokeWidth={1.8}
                        className="transition-transform duration-200 group-hover:rotate-180"
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* STUDIO-GRADE BESPOKE MEGA-DROPDOWN ON HOVER */}
                  {link.dropdown && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50 before:content-[''] before:absolute before:-top-3 before:inset-x-0 before:h-4">
                      <div className="w-195 max-w-[95vw] rounded-3xl bg-white p-5 shadow-2xl border border-slate-200/90 backdrop-blur-2xl text-[#071426]">
                        {/* Two Columns Grid 50% - 50% */}
                        <div className="grid grid-cols-2 gap-5">
                          {/* Column 1: Core Corporate, Tax & Assurance Portals (50%) */}
                          <div className="pr-3 border-r border-slate-100">
                            <div className="space-y-1">
                              {MEGA_SERVICES_COL_1.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    className="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-slate-200 transition-all"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-[#EAF4F0] text-[#216D56] flex items-center justify-center shrink-0 group-hover/item:bg-[#36A783] group-hover/item:text-white transition-colors mt-0.5">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="text-xs font-bold text-[#071426] group-hover/item:text-[#216D56] transition-colors truncate">
                                          {item.title}
                                        </span>
                                        <span className="text-[9px] font-mono font-bold text-[#36A783] bg-[#EAF4F0] px-1.5 py-0.2 rounded">
                                          {item.svcs}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-[#64748B] leading-snug mt-0.5 line-clamp-1">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          {/* Column 2: Strategic, Finance & Technology Portals (50%) */}
                          <div className="pl-1">
                            <div className="space-y-1">
                              {MEGA_SERVICES_COL_2.map((item, idx) => {
                                const Icon = item.icon;
                                const isCalc = item.highlight;
                                return (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    className={`group/item flex items-start gap-2.5 p-2 rounded-xl transition-all ${
                                      isCalc
                                        ? "bg-linear-to-r from-[#EAF4F0] to-[#F1F6F4] border border-[#36A783]/20 hover:border-[#36A783]"
                                        : "hover:bg-[#F8FAFC] border border-transparent hover:border-slate-200"
                                    }`}
                                  >
                                    <div
                                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                                        isCalc
                                          ? "bg-[#36A783] text-white"
                                          : "bg-[#EAF4F0] text-[#216D56] group-hover/item:bg-[#36A783] group-hover/item:text-white"
                                      }`}
                                    >
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="text-xs font-bold text-[#071426] group-hover/item:text-[#216D56] transition-colors truncate">
                                          {item.title}
                                        </span>
                                        <span
                                          className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded ${
                                            isCalc
                                              ? "bg-[#C6F850] text-[#071426]"
                                              : "text-[#36A783] bg-[#EAF4F0]"
                                          }`}
                                        >
                                          {item.svcs}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-[#64748B] leading-snug mt-0.5 line-clamp-1">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Primary CTA (Desktop Only) */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-brand-teal px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(54,167,131,0.25)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_8px_24px_rgba(23,45,67,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span
                className="absolute inset-0 bg-[#172D43] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 rounded-full"
                aria-hidden="true"
              />
              <span
                className="absolute -left-full top-0 h-full w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover:left-[150%]"
                aria-hidden="true"
              />
              <span className="relative z-10 block overflow-hidden leading-tight">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  Book a Consultation
                </span>
                <span
                  className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-[#C6F850]"
                  aria-hidden="true"
                >
                  Book a Consultation
                </span>
              </span>
              <span className="relative z-10 text-xs font-sans">↳</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="group relative z-60 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100/80 p-2 transition-colors hover:bg-slate-200/80 lg:hidden cursor-pointer"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
              <span
                className={`h-0.5 rounded-full bg-brand-navy transition-all duration-300 ease-in-out ${
                  menuOpen
                    ? "w-5 translate-y-2 rotate-45 bg-brand-teal-dark"
                    : "w-5 group-hover:bg-brand-teal"
                }`}
              />
              <span
                className={`h-0.5 rounded-full bg-brand-navy transition-all duration-300 ease-in-out ${
                  menuOpen
                    ? "w-5 opacity-0 translate-x-2"
                    : "w-3.5 self-start group-hover:w-5 group-hover:bg-brand-teal"
                }`}
              />
              <span
                className={`h-0.5 rounded-full bg-brand-navy transition-all duration-300 ease-in-out ${
                  menuOpen
                    ? "w-5 -translate-y-2 -rotate-45 bg-brand-teal-dark"
                    : "w-5 group-hover:bg-brand-teal"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      <div
        className={`fixed inset-0 z-40 lg:hidden overflow-hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close navigation"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
          className={`absolute inset-0 h-full w-full bg-[rgba(23,45,67,0.45)] backdrop-blur-xs transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-dvh w-[min(90%,420px)] flex-col bg-white px-7 pb-8 pt-24 shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            visibility: menuOpen ? "visible" : "hidden",
          }}
        >
          <div className="mb-4">
            <p className="eyebrow">Auditclue Advisory</p>
            <p className="mt-1 text-xs text-muted">
              100% digital audit, tax & corporate advisory.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-slate-100">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              // If link has dropdown, render expandable mobile submenu
              if (link.dropdown) {
                return (
                  <div key={link.name} className="py-3">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between text-base font-semibold text-[#071426] py-1 cursor-pointer"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#216D56] transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="mt-2 pl-3 space-y-2 border-l-2 border-[#36A783] py-2 bg-slate-50 rounded-r-xl">
                        <Link
                          href="/services/business-setup"
                          onClick={closeMenu}
                          className="block text-xs font-semibold text-[#071426] hover:text-[#216D56]"
                        >
                          🏢 Business Setup & Formation (16 Svcs)
                        </Link>
                        <Link
                          href="/services/corporate-tax"
                          onClick={closeMenu}
                          className="block text-xs font-semibold text-[#071426] hover:text-[#216D56]"
                        >
                          ⚖️ UAE Corporate Tax (9%) (16 Svcs)
                        </Link>
                        <Link
                          href="/services/audit-assurance"
                          onClick={closeMenu}
                          className="block text-xs font-semibold text-[#071426] hover:text-[#216D56]"
                        >
                          🛡️ Statutory Audit & Assurance (18 Svcs)
                        </Link>
                        <Link
                          href="/services/vat-services"
                          onClick={closeMenu}
                          className="block text-xs font-semibold text-[#071426] hover:text-[#216D56]"
                        >
                          🏛️ UAE VAT Services (15 Svcs)
                        </Link>
                        <Link
                          href="/services/cfo-advisory"
                          onClick={closeMenu}
                          className="block text-xs font-semibold text-[#071426] hover:text-[#216D56]"
                        >
                          📈 CFO & Finance Advisory (17 Svcs)
                        </Link>
                        <Link
                          href="/services/accounting-bookkeeping"
                          onClick={closeMenu}
                          className="block text-xs font-semibold text-[#071426] hover:text-[#216D56]"
                        >
                          📊 Accounting & Bookkeeping (20 Svcs)
                        </Link>
                        <Link
                          href="/services/transfer-pricing"
                          onClick={closeMenu}
                          className="block text-xs font-semibold text-[#071426] hover:text-[#216D56]"
                        >
                          🔄 Transfer Pricing (11 Svcs)
                        </Link>
                        <Link
                          href="/services/corporate-finance"
                          onClick={closeMenu}
                          className="block text-xs font-semibold text-[#071426] hover:text-[#216D56]"
                        >
                          💼 Corporate Finance (16 Svcs)
                        </Link>
                        <Link
                          href="/services/business-advisory"
                          onClick={closeMenu}
                          className="block text-xs font-semibold text-[#071426] hover:text-[#216D56]"
                        >
                          🧭 Business Advisory (16 Svcs)
                        </Link>
                        <Link
                          href="/services/compliance-services"
                          onClick={closeMenu}
                          className="block text-xs font-semibold text-[#071426] hover:text-[#216D56]"
                        >
                          🚨 Compliance Services (13 Svcs)
                        </Link>
                        <Link
                          href="/services/technology-digital"
                          onClick={closeMenu}
                          className="block text-xs font-semibold text-[#071426] hover:text-[#216D56]"
                        >
                          ⚡ Technology & Digital Finance (13 Svcs)
                        </Link>
                        <Link
                          href="/#services"
                          onClick={closeMenu}
                          className="block text-xs font-medium text-[#64748B] hover:text-[#071426]"
                        >
                          📂 All 11 Practice Directories
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  className={`flex items-center justify-between py-3.5 text-base font-medium transition-colors ${
                    active
                      ? "text-brand-teal-dark font-semibold"
                      : "text-brand-navy hover:text-brand-teal-dark"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#36A783] animate-pulse" />
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <ArrowUpRight size={17} className="text-brand-teal" />
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="group relative mt-6 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-brand-teal py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(54,167,131,0.25)] transition-all duration-500 active:scale-[0.98]"
          >
            <span>Book a Consultation</span>
            <span className="text-xs">↳</span>
          </Link>

          <div className="mt-auto pt-6 text-center text-xs text-[#64748B]">
            UAE Toll-Free / WhatsApp: <br />
            <a
              href="tel:+971547338583"
              className="font-bold text-[#071426] hover:text-[#216D56]"
            >
              +971 54 733 8583
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
