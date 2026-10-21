import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import WorkflowSection from "@/components/WorkflowSection";
import ClientPortalSection from "@/components/ClientPortalSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
      {/* Home Page Clean Minimalist Preloader */}
      <Preloader />

      {/* Navigation Header */}
      <Navbar />

      {/* Split Hero Section with Consultation Form */}
      <HeroSection />

      {/* Trust & Metric Highlights Bar */}
      <StatsBanner />

      {/* About Auditclue — Editorial Section */}
      <AboutSection />

      {/* Complete Interactive 11-Practice Services Directory (150+ Services) */}
      <ServicesSection />

      {/* Why Choose Auditclue — 8 Strategic Advantages */}
      <WhyChooseSection />

      {/* 6-Step Digital Operating Model Workflow */}
      <WorkflowSection />

      {/* Interactive AES-256 Cloud Client Portal & Console */}
      <ClientPortalSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Comprehensive Corporate Footer */}
      <Footer />
    </main>
  );
}
