import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock, Calendar, ArrowRight, ArrowUpRight } from "lucide-react";
import FlowText from "@/components/FlowText";

interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;
  badge: string;
  image: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  dateISO: string;
  author: string;
}

const FEATURED_BLOGS: BlogPost[] = [
  {
    slug: "uae-corporate-tax-deadlines-penalties-guide",
    category: "Corporate Tax (9%)",
    categoryColor: "bg-[#EAF4F0]/95 text-[#216D56] border-[#36A783]/40",
    badge: "STATUTORY GUIDE",
    image: "/images/blog/tax-deadlines.jpg",
    title: "UAE Corporate Tax Filing Deadlines & FTA Penalty Prevention (2025–2026)",
    excerpt:
      "A comprehensive walkthrough of the 9-month statutory filing timeline following your financial year-end, EmaraTax submission protocols, and how to prevent mandatory AED 10,000 to AED 20,000 late penalties.",
    readTime: "6 min read",
    date: "October 2026",
    dateISO: "2026-10-15",
    author: "Tax Advisory Practice",
  },
  {
    slug: "small-business-relief-sbr-extended-2029",
    category: "Reliefs & Exemptions",
    categoryColor: "bg-[#EFF6FF]/95 text-[#1D4ED8] border-[#93C5FD]/60",
    badge: "POLICY UPDATE",
    image: "/images/blog/sbr-relief.jpg",
    title: "Small Business Relief Extended to 2029: Eligibility Criteria & Revenue Caps",
    excerpt:
      "Ministerial decision updates on the AED 3,000,000 gross revenue threshold. How resident taxable persons can claim 0% effective tax and simplified cash-basis accounting through tax periods ending 2029.",
    readTime: "5 min read",
    date: "October 2026",
    dateISO: "2026-10-08",
    author: "Direct Tax Practice",
  },
  {
    slug: "ifrs-statutory-audit-checklist-uae",
    category: "Statutory Audit",
    categoryColor: "bg-[#ECFDF5]/95 text-[#047857] border-[#A7F3D0]/60",
    badge: "AUDIT PROTOCOL",
    image: "/images/blog/statutory-audit.jpg",
    title: "Annual Statutory Audit Checklist for UAE Mainland & Free Zone Enterprises",
    excerpt:
      "Key preparation schedules, bank confirmations, inventory physical counts, related party disclosures, and IFRS standards mandated for trade license renewals across DMCC, DIFC, DAFZA, and Mainland.",
    readTime: "8 min read",
    date: "September 2026",
    dateISO: "2026-09-28",
    author: "Audit & Assurance Practice",
  },
];

export default function HomeBlogSection() {
  return (
    <section
      id="insights"
      aria-labelledby="home-blog-heading"
      className="relative bg-[#F8FAFC] py-20 sm:py-24 lg:py-28 border-t border-[#E2E8F0] overflow-hidden"
    >
      {/* Subtle architectural ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#EAF4F0]/60 via-[#F1F5F9]/40 to-transparent blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12 border-b border-[#071426]/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/30 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3.5">
              <BookOpen className="w-3.5 h-3.5 text-[#36A783]" />
              <span>UAE STATUTORY INTELLIGENCE &amp; ADVISORY</span>
            </div>
            <h2
              id="home-blog-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426] tracking-tight leading-snug"
            >
              <FlowText
                text="Latest Tax, Audit & Corporate Advisory Insights"
                as="span"
              />
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
              Actionable guides, statutory deadlines, and regulatory updates curated by UAE certified tax consultants and registered auditors.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
            <span>Updated Weekly for 2026/2027</span>
          </div>
        </div>

        {/* 3 Static Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_BLOGS.map((blog) => (
            <article
              key={blog.slug}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-[#CBD5E1]/80 shadow-[0_4px_20px_rgba(7,20,38,0.04)] hover:shadow-[0_14px_36px_rgba(7,20,38,0.09)] hover:border-[#36A783]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Editorial Image */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-2xl mb-5 bg-[#E2E8F0]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/30 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill Floating on Image */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border backdrop-blur-md shadow-xs ${blog.categoryColor}`}
                    >
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Date & Metadata */}
                <div className="flex items-center justify-between gap-2 text-xs text-[#64748B] font-mono mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#94A3B8]" />
                      <time dateTime={blog.dateISO}>{blog.date}</time>
                    </span>
                    <span>•</span>
                    <span className="text-[#071426]/75 font-semibold">{blog.badge}</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <Clock className="w-3.5 h-3.5 text-[#36A783]" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#071426] group-hover:text-[#216D56] transition-colors leading-snug mb-3 line-clamp-2">
                  <Link href={`/blog/${blog.slug}`} className="focus:outline-hidden">
                    {blog.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3 mb-5">
                  {blog.excerpt}
                </p>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748B] truncate pr-2">
                  By {blog.author}
                </span>

                <Link
                  href={`/blog/${blog.slug}`}
                  aria-label={`Read article: ${blog.title}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#216D56] group-hover:text-[#36A783] transition-colors font-mono shrink-0"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Navigation CTA Button */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#071426] hover:bg-[#216D56] text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group focus:outline-hidden focus:ring-2 focus:ring-[#36A783]"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 text-[#C6F850] group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
