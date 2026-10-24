import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BLOG_POSTS,
  getBlogPostBySlug,
  getAllBlogSlugs,
  BlogPostDetail,
} from "@/data/blogData";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  HelpCircle,
  Share2,
  PhoneCall,
  Calculator,
  Building2,
  FileText,
} from "lucide-react";

import { ArticleSchema, BreadcrumbSchema } from "@/components/JsonLd";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Auditclue Advisory",
    };
  }

  return {
    title: `${post.title} | Auditclue Advisory`,
    description: post.excerpt,
    alternates: {
      canonical: `https://auditclue.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateISO,
      url: `https://auditclue.com/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is BlogPostDetail => Boolean(p));

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426] selection:bg-[#C6F850] selection:text-[#071426]">
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        url={`https://auditclue.com/blog/${post.slug}`}
        image={post.image}
        datePublished={post.dateISO}
        authorName={post.author.name}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Blog", url: "https://auditclue.com/blog" },
          { name: post.title, url: `https://auditclue.com/blog/${post.slug}` },
        ]}
      />
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* Article Editorial Header */}
        <section className="relative bg-gradient-to-b from-[#EDF5F1] via-[#F8FAFC] to-[#F8FAFC] border-b border-[#CBD5E1]/60 pt-10 sm:pt-14 pb-8 sm:pb-12 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-[#64748B] font-mono mb-6"
            >
              <Link href="/" className="hover:text-[#36A783] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#36A783] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-[#071426] font-semibold truncate max-w-[200px] sm:max-w-xs">
                {post.category}
              </span>
            </nav>

            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#216D56] hover:text-[#36A783] mb-6 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Articles</span>
            </Link>

            {/* Category & Read Time Row */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`text-xs font-mono font-bold px-3.5 py-1 rounded-full border shadow-xs ${post.categoryColor}`}
              >
                {post.category}
              </span>
              <span className="text-xs font-mono text-[#071426]/70 font-semibold bg-white border border-[#CBD5E1]/70 px-3 py-1 rounded-full">
                {post.badge}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-mono ml-auto">
                <Clock className="w-3.5 h-3.5 text-[#36A783]" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* H1 Main Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#071426] tracking-tight leading-tight mb-5">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-4xl mb-8">
              {post.excerpt}
            </p>

            {/* Author Byline & Date */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#071426]/10">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#EAF4F0] border border-[#36A783]/40 flex items-center justify-center text-[#216D56] font-serif font-bold text-sm shrink-0">
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-serif font-bold text-[#071426] text-sm sm:text-base">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-[#64748B] font-mono">
                    {post.author.credentials}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                <Calendar className="w-3.5 h-3.5 text-[#36A783]" />
                <span>Published {post.date}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured High-Res Header Image */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4 mb-12">
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-[#CBD5E1]/80 bg-[#E2E8F0]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </section>

        {/* Main Editorial Content & Sticky Sidebar Grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Main Article Column */}
            <article className="lg:col-span-8 flex flex-col gap-10">
              {/* Executive Summary / Key Takeaways Box */}
              <div className="bg-[#EAF4F0] rounded-2xl p-6 sm:p-7 border border-[#36A783]/30 shadow-xs">
                <div className="flex items-center gap-2 text-[#216D56] font-mono text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#36A783]" />
                  <span>Executive Summary &amp; Key Takeaways</span>
                </div>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#1E3A34] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Content Sections */}
              {post.sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#071426] mb-4 pb-2 border-b border-[#E2E8F0]">
                    {section.heading}
                  </h2>

                  {/* Paragraphs */}
                  <div className="space-y-4 mb-6">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-sm sm:text-base text-[#334155] leading-relaxed font-sans">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Optional Table */}
                  {section.table && (
                    <div className="overflow-x-auto rounded-xl border border-[#CBD5E1] bg-white shadow-xs my-6">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-[#071426] text-white font-mono text-xs uppercase tracking-wider">
                          <tr>
                            {section.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3.5 sm:p-4 border-r border-[#1E293B] last:border-r-0">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2E8F0]">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-[#F8FAFC] transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3.5 sm:p-4 text-[#334155] font-sans">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Optional Bullet Points */}
                  {section.bulletPoints && (
                    <ul className="space-y-2.5 my-5 bg-white rounded-xl p-5 sm:p-6 border border-[#CBD5E1]/80 shadow-xs">
                      {section.bulletPoints.map((pt, ptIdx) => (
                        <li key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#36A783] shrink-0 mt-2" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Optional Callout Box */}
                  {section.callout && (
                    <div
                      className={`p-5 rounded-xl border my-6 flex items-start gap-3.5 ${
                        section.callout.type === "warning"
                          ? "bg-[#FEF2F2] border-[#FCA5A5] text-[#991B1B]"
                          : section.callout.type === "important"
                          ? "bg-[#EFF6FF] border-[#BFDBFE] text-[#1E40AF]"
                          : "bg-[#F0FDF4] border-[#BBF7D0] text-[#166534]"
                      }`}
                    >
                      {section.callout.type === "warning" ? (
                        <AlertTriangle className="w-5 h-5 shrink-0 text-[#DC2626] mt-0.5" />
                      ) : (
                        <Info className="w-5 h-5 shrink-0 text-[#2563EB] mt-0.5" />
                      )}
                      <div>
                        <div className="font-bold text-sm mb-1">{section.callout.title}</div>
                        <div className="text-xs sm:text-sm leading-relaxed">{section.callout.text}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Frequently Asked Questions */}
              {post.faqs.length > 0 && (
                <div className="mt-6 pt-8 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-2 text-[#216D56] font-mono text-xs font-bold uppercase tracking-wider mb-4">
                    <HelpCircle className="w-4 h-4 text-[#36A783]" />
                    <span>Frequently Asked Questions</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#071426] mb-6">
                    Common Queries on This Topic
                  </h3>
                  <div className="space-y-4">
                    {post.faqs.map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className="bg-white rounded-2xl p-5 sm:p-6 border border-[#CBD5E1]/80 shadow-xs"
                      >
                        <h4 className="font-serif font-bold text-[#071426] text-base mb-2">
                          {faq.q}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio Footer Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#CBD5E1]/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#EAF4F0] border border-[#36A783]/40 flex items-center justify-center text-[#216D56] font-serif font-bold text-lg shrink-0">
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#36A783] uppercase tracking-wider">
                      Author &amp; Advisory Lead
                    </div>
                    <div className="text-base sm:text-lg font-serif font-bold text-[#071426]">
                      {post.author.name}
                    </div>
                    <div className="text-xs text-[#64748B] font-mono">
                      {post.author.role} • {post.author.credentials}
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#071426] hover:bg-[#216D56] text-white text-xs font-semibold font-mono tracking-wide transition-all shadow-xs shrink-0"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>

            {/* Right Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Sticky Table of Contents */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#CBD5E1]/80 shadow-xs lg:sticky lg:top-28">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#36A783] mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-2">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs text-[#475569] hover:text-[#216D56] hover:translate-x-1 transition-all py-1 font-medium"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                  <div className="text-xs font-mono font-bold text-[#071426] mb-2">
                    Need Direct Advisory Assistance?
                  </div>
                  <p className="text-xs text-[#64748B] mb-4 leading-relaxed">
                    Our registered tax agents and auditors assist UAE businesses with complete filing and audit preparation.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#36A783] hover:bg-[#2E8C6D] text-[#071426] font-semibold text-xs tracking-wider font-mono transition-all shadow-sm"
                  >
                    <span>Schedule Partner Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Fast Direct Contact Card */}
              <div className="bg-[#071426] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-[#1E293B]">
                <div className="text-xs font-mono text-[#83D9BE] font-bold uppercase tracking-wider mb-2">
                  VIP Direct Desk
                </div>
                <h4 className="font-serif font-bold text-white text-base mb-2">
                  Talk to a Certified Specialist Today
                </h4>
                <p className="text-xs text-[#CBD5E1] mb-5 leading-relaxed font-sans">
                  Fast 24-hour proposal delivery and immediate cloud vault provisioning.
                </p>
                <div className="space-y-2.5">
                  <a
                    href="https://wa.me/971547338583"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-all border border-white/20"
                  >
                    <span>WhatsApp VIP Desk</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-all border border-white/20"
                  >
                    <Calculator className="w-3.5 h-3.5 text-[#C6F850]" />
                    <span>Simulate Corporate Tax</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="bg-white py-16 border-t border-[#E2E8F0]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-mono font-bold text-[#36A783] uppercase tracking-wider block mb-1">
                    RECOMMENDED READING
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">
                    Related Regulatory Briefs
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="text-xs font-mono font-bold text-[#216D56] hover:text-[#36A783] flex items-center gap-1 transition-colors"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <article
                    key={rel.slug}
                    className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#CBD5E1]/80 shadow-xs hover:shadow-md hover:border-[#36A783]/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3.5 bg-[#E2E8F0]">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="text-[11px] font-mono text-[#36A783] font-bold mb-1.5">
                        {rel.category}
                      </div>
                      <h4 className="font-serif font-bold text-sm text-[#071426] group-hover:text-[#216D56] transition-colors leading-snug line-clamp-2 mb-2">
                        <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                      </h4>
                    </div>
                    <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B] font-mono">
                      <span>{rel.readTime}</span>
                      <Link
                        href={`/blog/${rel.slug}`}
                        className="text-[#216D56] font-bold hover:text-[#36A783] flex items-center gap-1"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
