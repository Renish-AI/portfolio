import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import ServiceList from "@/components/ServiceList";
import ExperienceList from "@/components/ExperienceList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F9F9F9] text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Global Fixed Navbar */}
      <Navbar />

      {/* 1. Hero Section with Spotlight Cursor Reveal */}
      <Hero />

      {/* 2. Selected Work Section */}
      <WorkGrid />

      {/* 3. Service Section */}
      <ServiceList />

      {/* 4. Experience Section */}
      <ExperienceList />

      {/* 5. Contact / CTA Footer with Atmospheric Cloud Curtain */}
      <Footer />
    </main>
  );
}
