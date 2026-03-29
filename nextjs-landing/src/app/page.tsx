import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Background mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-[2] pt-[60px]">
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
