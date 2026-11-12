import React from "react";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "FinancialService", "AccountingService"],
        "@id": "https://auditclue.com/#organization",
        name: "Auditclue Global Advisory Services LLC",
        alternateName: "Auditclue Advisory",
        legalName: "Auditclue Global Advisory Services LLC",
        url: "https://auditclue.com",
        logo: {
          "@type": "ImageObject",
          "@id": "https://auditclue.com/#logo",
          url: "https://auditclue.com/images/logo.png",
          caption: "Auditclue Global Advisory Services LLC",
        },
        image: "https://auditclue.com/images/hero-bg.webp",
        description:
          "UAE's 100% digital audit, tax and corporate advisory firm. Providing corporate tax (9%), statutory IFRS audit, VAT compliance (5%), business setup, and virtual CFO advisory across all Emirates.",
        telephone: "+971547338583",
        email: "info@auditclue.com",
        address: {
          "@type": "PostalAddress",
          // streetAddress: "Sheikh Zayed Road, Downtown Business District",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          addressCountry: "AE",
          // postalCode: "00000",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.2048,
          longitude: 55.2708,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$$",
        currenciesAccepted: "AED, USD, EUR, GBP",
        paymentAccepted: "Bank Transfer, Credit Card, Corporate Cheque",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Dubai" },
          { "@type": "AdministrativeArea", name: "Abu Dhabi" },
          { "@type": "AdministrativeArea", name: "Sharjah" },
          { "@type": "AdministrativeArea", name: "United Arab Emirates" },
          { "@type": "AdministrativeArea", name: "DMCC Free Zone" },
          { "@type": "AdministrativeArea", name: "DIFC" },
          { "@type": "AdministrativeArea", name: "ADGM" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "UAE Advisory, Audit & Tax Practices",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UAE Corporate Tax Services (9%)",
                description: "Corporate tax registration, impact assessment, small business relief, QFZP 0% qualification, and EmaraTax return filing.",
                url: "https://auditclue.com/services/corporate-tax",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Statutory Audit & Assurance",
                description: "IFRS financial statement audit, Free Zone trade license renewal audit, external audit readiness, and agreed-upon procedures.",
                url: "https://auditclue.com/services/audit-assurance",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UAE VAT Compliance & Filing (5%)",
                description: "VAT registration, voluntary disclosures (Form 211), customs Box 6/7 reconciliation, and FTA audit representation.",
                url: "https://auditclue.com/services/vat-services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Business Setup & Company Formation",
                description: "Mainland LLC formation, UAE Free Zone setup (DMCC, IFZA, DAFZA, JAFZA), and corporate banking support.",
                url: "https://auditclue.com/services/business-setup",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cloud Accounting & Bookkeeping",
                description: "Monthly bookkeeping on Zoho Books, Xero, QuickBooks, WPS payroll, and management accounts.",
                url: "https://auditclue.com/services/accounting-bookkeeping",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Virtual CFO & Financial Advisory",
                description: "Fractional CFO leadership, budgeting, cash flow optimization, and investor reporting.",
                url: "https://auditclue.com/services/cfo-advisory",
              },
            },
          ],
        },
        sameAs: [
          "https://www.linkedin.com/company/auditclue",
          "https://wa.me/971547338583",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://auditclue.com/#website",
        url: "https://auditclue.com",
        name: "Auditclue Advisory",
        description: "UAE's Fully Digital Audit, Tax & Corporate Advisory Firm",
        publisher: {
          "@id": "https://auditclue.com/#organization",
        },
        inLanguage: "en-AE",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    url,
    serviceType,
    provider: {
      "@type": "Organization",
      name: "Auditclue Global Advisory Services LLC",
      url: "https://auditclue.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  authorName: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image.startsWith("http") ? image : `https://auditclue.com${image}`,
    datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Auditclue Global Advisory Services LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://auditclue.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

