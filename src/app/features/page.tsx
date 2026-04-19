"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  Image as ImageIcon, 
  Mic, 
  Send, 
  Navigation, 
  Layers, 
  Compass, 
  BarChart3,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import CropCalendar from "@/components/features/CropCalendar";
import WeatherWidget from "@/components/features/WeatherWidget";

export default function FeaturesPage() {
  const [mapRotation, setMapRotation] = useState(0);
  const [isCentering, setIsCentering] = useState(false);
  const [activePlot, setActivePlot] = useState(0);

  const plots = [
    "30,20 70,30 80,70 40,80 20,50",
    "20,30 60,20 85,40 75,85 30,75",
    "40,10 80,25 70,75 25,65 15,35"
  ];

  const plotDetails = [
    { area: "3.8", perimeter: "142m" },
    { area: "5.2", perimeter: "198m" },
    { area: "2.9", perimeter: "115m" }
  ];

  const handleCenter = () => {
    setIsCentering(true);
    setTimeout(() => setIsCentering(false), 1000);
  };

  const handleRotate = () => {
    setMapRotation(prev => prev + 45);
    setActivePlot(prev => (prev + 1) % plots.length);
  };

  return (
    <main className="min-h-screen bg-[#1C1C1A] text-white selection:bg-[#6B8F5E]/30 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#6B8F5E] rounded-full blur-[160px] opacity-10"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl"
        >
          <span className="text-xs font-inter tracking-[0.3em] text-[#6B8F5E] uppercase mb-8 block font-medium">Platform Capabilities</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-light tracking-tight mb-8 leading-[1]">
            Everything Arva <br />
            <span className="text-[#C4704A] italic font-normal">can do.</span>
          </h1>
          <p className="text-lg md:text-xl font-inter text-[#A3A3A3] font-light max-w-2xl mx-auto leading-relaxed">
            From a single leaf photo to your entire harvest forecast — this is what Arva can do.
          </p>
          
          <div className="mt-12 flex justify-center">
             <div className="h-12 w-[1px] bg-gradient-to-b from-white/20 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. AI ASSISTANT SECTION */}
      <section className="py-32 px-6 lg:px-12 bg-[#131312]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-outfit font-light mb-6 text-white leading-tight">
                Your on-demand <br />
                <span className="text-[#6B8F5E] italic">agronomy expert.</span>
              </h2>
              <p className="text-lg font-inter text-[#A3A3A3] font-light mb-8 max-w-lg leading-relaxed">
                Connect with an AI trained on local soil types, typical Nepalese crop cycles, and localized disease trends. Available 24/7 in your pocket.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Visual Disease Identification",
                  "Soil Nutrient Recommendations",
                  "Market Yield Predictions",
                  "Multilingual Support (Nepali/English)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#e5e2de]">
                    <span className="w-5 h-5 rounded-full bg-[#6B8F5E]/20 flex items-center justify-center text-[#aad19b] text-[10px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Chat Mockup repurposed from old assistant page */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#1C1C1A] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col h-[550px] shadow-2xl relative"
            >
              <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6 relative z-10">
                <div className="self-end max-w-[80%] flex items-end gap-3">
                  <div className="bg-white/10 text-white rounded-2xl rounded-tr-sm px-5 py-4 text-xs leading-relaxed backdrop-blur-md">
                    Is it okay to plant maize after harvesting potatoes this late?
                  </div>
                </div>
                
                <div className="self-start max-w-[85%] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6B8F5E]/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <MessageSquare className="w-4 h-4 text-[#aad19b]" />
                  </div>
                  <div className="bg-background border border-white/5 rounded-2xl rounded-tl-sm px-6 py-5 text-xs leading-relaxed text-[#A3A3A3]">
                    <p className="mb-3 text-white">Based on current soil moisture in your plot and the 14-day rainfall trend, <strong className="font-medium">yes</strong>.</p>
                    <p>However, we recommend waitning 3 more days for optimal nitrogen stabilization. I've updated your crop calendar accordingly.</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-background border-t border-white/5">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-2 py-2">
                  <div className="flex-1 px-4 text-xs text-[#A3A3A3]">Consulting Arva V1.0...</div>
                  <button className="w-8 h-8 rounded-full bg-[#6B8F5E] text-background flex items-center justify-center">
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LAND MAPPING SECTION */}
      <section className="py-32 px-6 lg:px-12 bg-[#1C1C1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
               <h2 className="text-4xl md:text-5xl font-outfit font-light mb-6 text-white leading-tight">
                 Geospatial <br />
                 <span className="text-[#C4704A] italic font-normal">precision.</span>
               </h2>
                <p className="text-lg font-inter text-[#A3A3A3] font-light mb-12 leading-relaxed">
                  Map your plots with sub-meter precision. Automatically convert between Ropani, Bigha, and modern area metrics.
                </p>
               
               <div className="space-y-8">
                  <div className="border-l-2 border-[#C4704A]/30 pl-6">
                     <h4 className="text-white font-outfit text-lg mb-2">Topo-Analysis</h4>
                     <p className="text-sm text-[#A3A3A3] font-inter">Understand height variations and water drainage patterns automatically.</p>
                  </div>
                  <div className="border-l-2 border-[#6B8F5E]/30 pl-6">
                     <h4 className="text-white font-outfit text-lg mb-2">Smart Boundary</h4>
                     <p className="text-sm text-[#A3A3A3] font-inter">GPS-locked boundaries prevent land overlap disputes between cooperative members.</p>
                  </div>
               </div>
            </div>

            {/* Map Mockup from mapping page */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 bg-[#232321] border border-white/5 rounded-3xl overflow-hidden h-96 lg:h-[600px] relative shadow-2xl flex items-center justify-center group"
            >
              {/* Satellite-style Background Grid */}
              <motion.div 
                animate={{ rotate: mapRotation }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="absolute inset-0 z-0"
              >
                <div className="absolute inset-0 bg-[#2b3527] opacity-60">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1C1C1A]/60 to-[#1C1C1A]"></div>
                </div>
                {/* Thin Grid Lines */}
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.svg 
                  key={activePlot}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="absolute inset-0 w-full h-full z-10 p-20" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                >
                  <polygon 
                    points={plots[activePlot]} 
                    fill="rgba(107, 143, 94, 0.2)" 
                    stroke="#6B8F5E" 
                    strokeWidth="0.5" 
                    strokeDasharray="1,1"
                    className="transition-all duration-1000 ease-in-out group-hover:fill-[rgba(107,143,94,0.3)]"
                  />
                </motion.svg>
              </AnimatePresence>

              {/* Data Badge Output */}
              <motion.div 
                key={`badge-${activePlot}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="absolute top-8 left-8 z-20 bg-background/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl"
              >
                 <div className="flex flex-col gap-3">
                    <div>
                       <p className="text-[10px] uppercase tracking-widest text-[#6B8F5E] mb-1 font-bold">Total Area</p>
                       <p className="text-xl font-outfit text-white">{plotDetails[activePlot].area} <span className="text-xs text-[#A3A3A3] font-inter">Ropani</span></p>
                    </div>
                    <div className="h-[1px] w-full bg-white/5"></div>
                    <div>
                       <p className="text-[10px] uppercase tracking-widest text-[#A3A3A3] mb-1 font-medium">Perimeter</p>
                       <p className="text-sm font-outfit text-white">{plotDetails[activePlot].perimeter}</p>
                    </div>
                 </div>
              </motion.div>

              {/* Centering Ripple Effect */}
              {isCentering && (
                <motion.div 
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 4, opacity: 0 }}
                  className="absolute inset-0 z-15 flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-[#6B8F5E]/50"></div>
                </motion.div>
              )}

              <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-2 scale-75 md:scale-100">
                <button 
                  onClick={handleCenter}
                  className={`w-12 h-12 ${isCentering ? 'bg-[#6B8F5E] text-white' : 'bg-background/80 text-white'} backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center transition-colors shadow-lg active:scale-95`}
                >
                  <Navigation className={`w-5 h-5 ${isCentering ? 'animate-pulse' : ''}`} />
                </button>
                <button 
                  onClick={handleRotate}
                  className="w-12 h-12 bg-[#6B8F5E] text-white rounded-full flex items-center justify-center mt-2 group-hover:scale-110 transition-transform shadow-lg active:scale-95 active:rotate-45"
                >
                  <Compass className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CROP CALENDAR SECTION */}
      <section className="py-32 px-6 lg:px-12 bg-[#131312]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-light mb-4">Crop Calendar</h2>
            <p className="text-[#A3A3A3] font-inter font-light max-w-xl mx-auto">Automated planting → harvesting timelines based on soil and weather data.</p>
          </div>
          <CropCalendar />
        </div>
      </section>

      {/* 5. WEATHER INTELLIGENCE SECTION */}
      <section className="py-32 px-6 lg:px-12 bg-[#1C1C1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
            <div className="lg:col-span-1">
               <h2 className="text-3xl md:text-5xl font-outfit font-light mb-6 text-white leading-tight">
                 Weather <br />
                 <span className="text-[#aad19b] italic">Intelligence.</span>
               </h2>
               <p className="text-text-muted font-inter font-light mb-8">
                 It's more than a forecast. It's an early-warning system for your harvest.
               </p>
               <div className="flex flex-col gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                     <p className="text-[10px] uppercase text-[#6B8F5E] mb-1 font-bold">Micro-Climate</p>
                     <p className="text-xs text-white">Hyper-local tracking calibrated to your specific terrain.</p>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-3">
               <WeatherWidget />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-40 px-6 bg-[#131312]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#2A2A27] to-[#1C1C1A] border border-white/5 rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#6B8F5E]/10 to-transparent"></div>
             
             <h2 className="text-4xl md:text-6xl font-outfit font-light mb-8 text-white">Join the waitlist.</h2>
             <p className="text-lg md:text-xl font-inter text-[#A3A3A3] font-light max-w-xl mx-auto mb-12">
               Be part of the technological Renaissance in Nepalese agriculture. Launching Monsoon 2026.
             </p>
             
             <Link 
              href="/#waitlist"
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-[#6B8F5E] text-white font-medium text-lg hover:bg-[#5a7a4f] transition-all group"
            >
              Get Priority Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
