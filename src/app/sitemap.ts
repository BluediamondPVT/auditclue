import { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/data/blogData";

const BASE_URL = "https://auditclue.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core Landing & Conversion Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/compliance-calendar`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/freezone-vs-mainland`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/process`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // 11 Core Service Practices
  const serviceSlugs = [
    { slug: "corporate-tax", priority: 0.95 },
    { slug: "audit-assurance", priority: 0.95 },
    { slug: "vat-services", priority: 0.9 },
    { slug: "accounting-bookkeeping", priority: 0.9 },
    { slug: "business-setup", priority: 0.9 },
    { slug: "cfo-advisory", priority: 0.85 },
    { slug: "transfer-pricing", priority: 0.85 },
    { slug: "corporate-finance", priority: 0.85 },
    { slug: "business-advisory", priority: 0.85 },
    { slug: "compliance-services", priority: 0.85 },
    { slug: "technology-digital", priority: 0.85 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: s.priority,
  }));

  // Dynamic Blog Articles
  const blogSlugs = getAllBlogSlugs();
  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
