"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StoryPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <main className="min-h-screen bg-[#1C1C1A] text-[#F5F5F0] overflow-hidden selection:bg-[#C4704A]/30">
      
      {/* SECTION 1: OPENING STATEMENT */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <motion.div {...fadeIn}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#A3A3A3] mb-12 block font-inter">Our Story</span>
          <h1 className="text-5xl md:text-8xl font-cormorant font-light leading-[1.1] max-w-5xl">
            We didn't build Arva <br />
            in a classroom. <br />
            <span className="text-[#C4704A] italic">We built it in a field.</span>
          </h1>
        </motion.div>
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C4704A]/5 rounded-full blur-[150px] -z-10"></div>
      </section>

      {/* SECTION 2: THE PROBLEM (PERSONAL STATS) */}
      <section className="py-40 px-6 lg:px-24 bg-[#131312]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-24">
            <motion.div {...fadeIn} className="flex items-start gap-8">
              <span className="text-7xl md:text-9xl font-cormorant text-[#6B8F5E] leading-none">66%</span>
              <p className="text-lg md:text-xl font-inter font-light text-[#A3A3A3] pt-4 max-w-[240px]">
                of Nepal's population depends on agriculture for their livelihood.
              </p>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="flex items-start gap-8">
              <span className="text-7xl md:text-9xl font-cormorant text-[#C4704A] leading-none">रू0</span>
              <p className="text-lg md:text-xl font-inter font-light text-[#A3A3A3] pt-4 max-w-[240px]">
                spent on technology to help them optimize their harvest.
              </p>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.4 }} className="flex items-start gap-8">
              <span className="text-7xl md:text-9xl font-cormorant text-[#F5F5F0] leading-none">1 in 3</span>
              <p className="text-lg md:text-xl font-inter font-light text-[#A3A3A3] pt-4 max-w-[240px]">
                farmers loses crops to diseases they can't identify in time.
              </p>
            </motion.div>
          </div>
          <div className="hidden lg:block">
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
               className="aspect-square relative flex items-center justify-center p-12"
            >
              {/* Outer Technical Ring */}
              <div className="absolute inset-0 border border-white/5 rounded-full"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-dashed border-white/5 rounded-full"
              ></motion.div>

              {/* Topographic Lines (Simulated with CSS/SVG) */}
              <div className="absolute inset-12 opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                  <path d="M10,50 Q25,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M15,45 Q30,15 55,45 T85,45" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  <path d="M5,60 Q20,30 45,60 T95,60" fill="none" stroke="currentColor" strokeWidth="0.4" />
                </svg>
              </div>

              {/* Scanning Ray */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-[#6B8F5E]/10 to-transparent w-1/2 h-[2px] top-1/2 origin-right"
              ></motion.div>

              {/* Quote Glass Card */}
              <div className="relative z-10 text-center space-y-4">
                <p className="text-2xl font-cormorant italic text-[#A3A3A3] px-12 leading-relaxed">
                  "Technology's most important job is reaching the people who need it most."
                </p>
                <div className="flex justify-center gap-12 text-[10px] font-inter tracking-widest uppercase text-[#6B8F5E]/60">
                  <span>GIS.MAPPING.V1</span>
                  <span>SCANNING_NEPAL</span>
                </div>
              </div>

              {/* Floating Data Nodes */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 1.5
                  }}
                  className="absolute w-1 h-1 bg-[#C4704A] rounded-full"
                  style={{ 
                    top: `${30 + i * 20}%`, 
                    left: `${20 + i * 40}%` 
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MOMENT IT STARTED (CHITWAN) */}
      <section className="py-60 px-6 bg-[#1C1C1A]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#6B8F5E] font-bold">[ CHITWAN, NEPAL — 2024 ]</span>
          </motion.div>
          
          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
            <p className="text-2xl md:text-4xl font-cormorant font-light italic leading-relaxed text-[#D1D1CB]">
              "We were talking to farmers in Chitwan during our field research. A farmer showed us his tomato plants — half the crop was dying from early blight. He'd walked 3 hours to the nearest agronomist. Who wasn't there."
            </p>
            <div className="h-16"></div>
            <p className="text-2xl md:text-4xl font-cormorant font-light italic leading-relaxed text-[#D1D1CB]">
              "We had the answer on our phones in 30 seconds. He didn't have that access. <span className="text-[#C4704A] not-italic font-normal">That was the moment Arva became necessary.</span>"
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: THE RESEARCH (3-COLUMN CARDS) */}
      <section className="py-40 px-6 lg:px-24 bg-[#131312]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-cormorant font-light">Evidence-based building.</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { num: "3", title: "Districts visited", items: ["Chitwan", "Mustang", "Kavre"] },
              { num: "47", title: "Farmers interviewed", items: ["Face-to-face", "Practical sessions", "Direct feedback"] },
              { num: "12", title: "Crops studied", items: ["Rice / Maize", "Tomato Blight", "Dataset built"] }
            ].map((stat, i) => (
              <motion.div 
                key={stat.title}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.2 }}
                className="bg-[#1C1C1A] p-12 md:p-16 flex flex-col items-center text-center"
              >
                <span className="text-7xl font-cormorant text-[#6B8F5E] mb-6">{stat.num}</span>
                <h4 className="text-xl font-outfit text-white mb-8">{stat.title}</h4>
                <div className="space-y-2">
                  {stat.items.map(item => (
                    <p key={item} className="text-sm font-inter text-[#A3A3A3] uppercase tracking-widest">{item}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: THE BUILDER */}
      <section className="py-60 px-6 bg-[#1C1C1A]">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div {...fadeIn}>
            <span className="text-xs tracking-[0.4em] uppercase text-[#A3A3A3] mb-12 block">[ THE BUILDER ]</span>
            
            <div className="w-48 h-48 rounded-full border border-white/10 mb-12 flex items-center justify-center p-4">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#6B8F5E]/20 to-[#C4704A]/20 flex items-center justify-center text-4xl font-cormorant text-white/40">
                KR
              </div>
            </div>
            
            <h3 className="text-4xl font-cormorant font-light mb-2">Kiran Regmi</h3>
            <p className="text-[#A3A3A3] font-inter uppercase tracking-widest text-xs mb-16">Final Year, Computer Science • Boston International College</p>
            
            <p className="text-3xl md:text-5xl font-cormorant italic leading-tight text-[#F5F5F0] max-w-4xl">
              "I built Arva because I believe <br />
              technology's <span className="text-[#6B8F5E] not-italic font-normal">most important job</span> is <br />
              reaching the people who need it most."
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: THE VISION (CLOSING STATEMENT) */}
      <section className="py-60 px-6 bg-[#131312] text-center relative overflow-hidden">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-cormorant font-light leading-tight mb-24">
            Arva isn't an app. <br />
            It's what happens when a farmer in Mustang <br />
            gets the same intelligence as a farm in California.
          </h2>
          
          <div className="space-y-8">
            <p className="text-sm tracking-[0.4em] uppercase text-[#C4704A] font-bold">Launching Monsoon 2026</p>
            <Link 
              href="/#waitlist"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#6B8F5E] text-white font-medium text-lg hover:bg-[#5e7d52] transition-all group"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
        
        {/* Subtle decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </section>

    </main>
  );
}
