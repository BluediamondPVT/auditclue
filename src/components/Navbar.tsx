"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown } from "lucide-react";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!mounted) return false;
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-[0_8px_30px_rgba(35,63,91,0.07)]" : "shadow-none"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:h-[86px] lg:px-10">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            className="relative z-[60] flex shrink-0 items-center"
            aria-label="Auditclue home"
          >
            <Image
              src="/logo-transparent.png"
              alt="Auditclue Global Advisory Services LLC"
              width={340}
              height={120}
              priority
              className="h-auto w-[175px] object-contain sm:w-[250px]"
            />
          </Link>

          {/* Desktop navigation */}
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
                        ? "text-[var(--brand-teal-dark)] font-semibold"
                        : "text-[var(--brand-navy)] hover:text-[var(--brand-teal)]"
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

                  {/* Elegant Dropdown on Hover for Services */}
                  {link.dropdown && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                      <div className="w-72 rounded-2xl bg-white/95 p-3 shadow-2xl border border-slate-200/90 backdrop-blur-xl">
                        <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#718096]">
                          Core Practice Areas
                        </div>
                        <div className="space-y-0.5 mt-1">
                          {[
                            { title: "Audit & Assurance", href: "/#services" },
                            {
                              title: "Accounting & Bookkeeping",
                              href: "/#services",
                            },
                            { title: "UAE VAT Services", href: "/#services" },
                            { title: "UAE Corporate Tax", href: "/#services" },
                            {
                              title: "CFO & Finance Advisory",
                              href: "/#services",
                            },
                            { title: "Business Advisory", href: "/#services" },
                          ].map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="block px-3 py-2 text-xs font-medium text-[#233F5B] hover:text-[#36A783] hover:bg-[#EAF4F0] rounded-lg transition-colors"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>

                        {/* Direct Tax Calculator Callout inside Dropdown */}
                        <div className="mt-2 pt-2 border-t border-slate-100 px-1">
                          <Link
                            href="/calculator"
                            className="flex items-center justify-between p-2 rounded-xl bg-gradient-to-r from-[#EAF4F0] to-[#F1F6F4] border border-[#36A783]/20 hover:border-[#36A783] transition-all group/calc"
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                              <span className="text-[11px] font-bold text-[#071426]">
                                UAE Tax Calculator
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-[#216D56] font-bold group-hover/calc:translate-x-0.5 transition-transform">
                              Try ↳
                            </span>
                          </Link>
                        </div>

                        <div className="mt-1 pt-1 border-t border-slate-100 px-3 py-1">
                          <Link
                            href="/#services"
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#36A783] hover:text-[#216D56]"
                          >
                            <span>Explore all 10 practices</span>
                            <ArrowUpRight size={12} />
                          </Link>
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
              {/* Liquid Fill Wipe */}
              <span
                className="absolute inset-0 bg-[#172D43] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 rounded-full"
                aria-hidden="true"
              />
              {/* Shimmer Streak */}
              <span
                className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover:left-[150%]"
                aria-hidden="true"
              />
              {/* Kinetic Text Roll */}
              <span className="relative z-10 block overflow-hidden leading-tight">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  Book a Consultation
                </span>
                <span
                  className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-white"
                  aria-hidden="true"
                >
                  Book a Consultation
                </span>
              </span>
              {/* Dual-Arrow Flight */}
              <span className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20 transition-all duration-500 group-hover:bg-white text-white group-hover:text-[#172D43]">
                <ArrowUpRight
                  className="absolute h-3 w-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3.5 group-hover:-translate-y-3.5 group-hover:opacity-0"
                  strokeWidth={2.4}
                />
                <ArrowUpRight
                  className="absolute h-3 w-3 -translate-x-3.5 translate-y-3.5 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  strokeWidth={2.4}
                />
              </span>
            </Link>
          </div>

          {/* Stylish Mobile & Tablet Toggle (Below LG) */}
          <button
            type="button"
            className="group relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-[var(--brand-navy)] shadow-[0_2px_10px_rgba(35,63,91,0.08)] backdrop-blur-md transition-all duration-300 hover:border-[var(--brand-teal)] hover:shadow-[0_4px_16px_rgba(54,167,131,0.2)] active:scale-95 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
              <span
                className={`h-[2px] rounded-full bg-[var(--brand-navy)] transition-all duration-300 ease-in-out ${
                  menuOpen
                    ? "w-5 translate-y-[8px] rotate-45 bg-[var(--brand-teal-dark)]"
                    : "w-5 group-hover:bg-[var(--brand-teal)]"
                }`}
              />
              <span
                className={`h-[2px] rounded-full bg-[var(--brand-navy)] transition-all duration-300 ease-in-out ${
                  menuOpen
                    ? "w-5 opacity-0 translate-x-2"
                    : "w-3.5 self-start group-hover:w-5 group-hover:bg-[var(--brand-teal)]"
                }`}
              />
              <span
                className={`h-[2px] rounded-full bg-[var(--brand-navy)] transition-all duration-300 ease-in-out ${
                  menuOpen
                    ? "w-5 -translate-y-[8px] -rotate-45 bg-[var(--brand-teal-dark)]"
                    : "w-5 group-hover:bg-[var(--brand-teal)]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile navigation drawer */}
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
          className={`absolute inset-0 h-full w-full bg-[rgba(23,45,67,0.35)] transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-[100dvh] w-[min(88%,400px)] flex-col bg-white px-7 pb-8 pt-28 shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            visibility: menuOpen ? "visible" : "hidden",
          }}
        >
          <div className="mb-6">
            <p className="eyebrow">Auditclue Advisory</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Digital audit, tax and corporate advisory.
            </p>
          </div>

          <div className="flex flex-col">
            {navLinks.map((link, index) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  className={`flex items-center justify-between border-b border-[var(--border-default)] py-4 text-base font-medium transition-colors ${
                    active
                      ? "text-[var(--brand-teal-dark)] font-semibold"
                      : "text-[var(--brand-navy)] hover:text-[var(--brand-teal-dark)]"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                  }}
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
                  <ArrowUpRight
                    size={17}
                    className="text-[var(--brand-teal)]"
                  />
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="group relative mt-7 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-brand-teal py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(54,167,131,0.25)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_8px_24px_rgba(23,45,67,0.3)] active:scale-[0.98]"
          >
            <span
              className="absolute inset-0 bg-[#172D43] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 rounded-full"
              aria-hidden="true"
            />
            <span
              className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover:left-[150%]"
              aria-hidden="true"
            />
            <span className="relative z-10 block overflow-hidden leading-tight">
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                Book a Consultation
              </span>
              <span
                className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-white"
                aria-hidden="true"
              >
                Book a Consultation
              </span>
            </span>
            <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20 transition-all duration-500 group-hover:bg-white text-white group-hover:text-[#172D43]">
              <ArrowUpRight
                className="absolute h-3.5 w-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0"
                strokeWidth={2.4}
              />
              <ArrowUpRight
                className="absolute h-3.5 w-3.5 -translate-x-4 translate-y-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                strokeWidth={2.4}
              />
            </span>
          </Link>

          <p className="mt-auto pt-8 text-xs text-[var(--text-muted)]">
            UAE · Digital Audit · Tax · Advisory
          </p>
        </nav>
      </div>
    </>
  );
}
