import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BentoGrid from "@/components/sections/BentoGrid";
import ProcessScroll from "@/components/sections/ProcessScroll";
import TestimonialsMarquee from "@/components/sections/TestimonialsMarquee";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import AppDownload from "@/components/sections/AppDownload";
import HeroProduct from "@/components/sections/HeroProduct";
import HeroScene from "@/components/HeroScene";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1C1C1A] selection:bg-[#6B8F5E]/30 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center overflow-hidden pb-20">
        {/* Background 3D Canvas */}
        <div className="absolute inset-0 z-0 opacity-40">
          <HeroScene />
        </div>
        
        {/* Tonal Overlay for Text Readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1C1C1A]/20 via-transparent to-[#1C1C1A]"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 lg:pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Content */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                <span className="w-2 h-2 rounded-full bg-[#6B8F5E] animate-pulse"></span>
                <span className="text-xs font-inter tracking-wider text-[#A3A3A3] uppercase">Arva is coming soon</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-light tracking-tight text-white max-w-xl mb-6 leading-[1.1]">
                Precision farming,<br />
                <span className="text-[#C4704A] italic">unbound</span> by intuition.
              </h1>

              <p className="text-lg md:text-xl font-inter text-[#A3A3A3] font-light max-w-md mb-8 leading-relaxed">
                The intelligent agritech companion for Nepal. We transform localized data into actionable insight—from geospatial soil analysis to predictive crop health.
              </p>

              <div className="flex flex-row items-center gap-3 sm:gap-6">
                <Link 
                  href="#waitlist"
                  className="px-8 py-4 rounded-xl bg-[#6B8F5E] text-white font-medium hover:bg-[#5a7a4f] transition-all flex items-center gap-2 group"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/features"
                  className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
                >
                  Explore Features
                </Link>
              </div>

              {/* Social Proof Badges */}
              <div className="mt-16 pt-12 border-t border-white/5 w-full">
                <div className="flex flex-wrap items-center gap-8 opacity-60">
                  <div className="flex flex-col">
                    <span className="text-2xl font-outfit text-white font-light tracking-tight">200+</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#A3A3A3] font-inter">Waitlist Joiners</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-outfit text-white font-light tracking-tight">99%</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#A3A3A3] font-inter">Model Accuracy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Product Visual */}
            <div className="hidden lg:block relative">
               <HeroProduct />
            </div>

          </div>
        </div>
      </section>

      {/* 2. BENTO BOX FEATURES */}
      <BentoGrid />

      {/* 3. STICKY SCROLL PROCESS */}
      <ProcessScroll />

      {/* 4. TESTIMONIALS MARQUEE */}
      <TestimonialsMarquee />

      {/* 5. PRICING SECTION */}
      <PricingSection />

      {/* 6. FAQ SECTION */}
      <FAQSection />

      {/* 7. APP DOWNLOAD SECTION */}
      <AppDownload />

    </main>
  );
}
