"use client";

import { motion } from "framer-motion";
import { Cloud, Thermometer, Wind, MousePointer2, Satellite, Plus } from "lucide-react";

// --- Visual Sub-components ---

const FeatureTag = ({ text, type = "sage" }: { text: string; type?: "sage" | "terracotta" }) => (
  <div className={`absolute top-6 left-6 z-20 px-3 py-1 rounded-full text-[10px] font-inter font-bold tracking-widest uppercase border ${
    type === "sage" ? "bg-[#6B8F5E]/10 border-[#6B8F5E]/20 text-[#8AAF7C]" : "bg-[#C4704A]/10 border-[#C4704A]/20 text-[#D18B6B]"
  }`}>
    {text}
  </div>
);

const LeafScanUI = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[340px] bg-[#1C1C1A] rounded-[40px] border-[6px] border-[#2A2A27] shadow-2xl overflow-hidden hidden sm:block">
    {/* Inner Screen */}
    <div className="relative w-full h-full bg-[#131312] p-4 flex flex-col">
      {/* Search Header */}
      <div className="w-full h-8 rounded-full bg-white/5 border border-white/10 mb-4 flex items-center px-3 gap-2">
        <div className="w-2 h-2 rounded-full bg-[#6B8F5E]" />
        <div className="w-20 h-1.5 rounded-full bg-white/10" />
      </div>
      
      {/* Mock Leaf Image Area */}
      <div className="relative flex-1 rounded-2xl bg-gradient-to-br from-[#2A2A27] to-[#1C1C1A] overflow-hidden flex items-center justify-center">
        <svg className="w-24 h-24 text-[#6B8F5E]/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.13,20C11.07,20 13.52,18.17 14.5,15.63C15.19,15.8 15.89,15.9 16.59,15.9C18.67,15.9 20.47,14.73 21.4,13C22,11.83 22,10.17 21.13,8.74C20.25,7.31 18.25,6.5 17,8Z" />
        </svg>
        
        {/* Scanning Line */}
        <motion.div 
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] bg-[#6B8F5E] shadow-[0_0_15px_#6B8F5E] z-10"
        />

        {/* Floating Detection Label */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute top-1/4 right-4 bg-[#8AAF7C] text-black text-[9px] px-2.5 py-1.5 rounded-lg font-bold shadow-lg flex items-center gap-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Early Blight Trace
        </motion.div>
      </div>

      {/* Action Button */}
      <div className="mt-4 w-full h-10 rounded-xl bg-[#6B8F5E] flex items-center justify-center text-white text-[10px] font-bold">
        Suggest Remedy
      </div>
    </div>
  </div>
);

const WeatherWidget = () => (
  <div className="mt-8 bg-black/20 rounded-2xl p-6 border border-white/10 flex flex-col gap-6">
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-4xl font-outfit text-white">22°<span className="text-xl text-[#A3A3A3]">c</span></span>
        <span className="text-[10px] text-[#A3A3A3] font-inter uppercase tracking-widest mt-1">Partly Cloudy</span>
      </div>
      <Cloud className="w-10 h-10 text-[#6B8F5E]" />
    </div>
    
    <div className="space-y-3">
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-[10px] font-inter uppercase text-[#A3A3A3]">
          <span>Rain Chance</span>
          <span className="text-white">15%</span>
        </div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "15%" }}
            className="h-full bg-[#6B8F5E] rounded-full"
          />
        </div>
      </div>
      
      <div className="flex gap-2 justify-between pt-2">
        {[21, 23, 22].map((temp, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-[9px] text-[#A3A3A3] font-inter">{["TUE", "WED", "THU"][i]}</span>
            <span className="text-xs font-outfit text-white">{temp}°</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SoilNPK = () => (
  <div className="flex flex-col gap-6 w-full">
    {/* Soil Visual Anchor (Top) */}
    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
      <div className="w-10 h-10 rounded-full border-2 border-[#D18B6B]/30 flex items-center justify-center text-[#D18B6B]">
        <span className="text-xs font-bold">pH</span>
      </div>
      <div>
        <p className="text-white text-lg font-outfit">6.8 <span className="text-[10px] text-[#A3A3A3] uppercase font-inter tracking-widest">Optimal</span></p>
        <p className="text-[9px] text-[#A3A3A3] font-inter uppercase tracking-widest">Moisture: 42%</p>
      </div>
    </div>

    {/* NPK Horizontal Bars */}
    <div className="space-y-4 pt-2">
      {[
        { label: "Nitrogen", val: 82, color: "#6B8F5E", symbol: "N" },
        { label: "Phosphorus", val: 64, color: "#D18B6B", symbol: "P" },
        { label: "Potassium", val: 91, color: "#8AAF7C", symbol: "K" },
      ].map((item, i) => (
        <div key={i} className="space-y-1.5">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-inter text-[#A3A3A3] font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-4 h-4 rounded-sm flex items-center justify-center bg-white/10 text-[8px]" style={{ color: item.color }}>{item.symbol}</span>
              {item.label}
            </span>
            <span className="text-xs font-outfit text-white">{item.val}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${item.val}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="h-full rounded-full"
              style={{ backgroundColor: item.color }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MiniMap = () => (
  <div className="absolute top-0 right-0 w-[60%] h-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
    <svg className="w-full h-full" viewBox="0 0 400 400">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      {/* Field Polygons */}
      <motion.path 
        d="M 100 100 L 250 120 L 280 250 L 120 280 Z" 
        fill="transparent" 
        stroke="#6B8F5E" 
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.path 
        d="M 260 130 L 350 150 L 330 220 L 290 240 Z" 
        fill="#6B8F5E" 
        fillOpacity="0.1" 
        stroke="#6B8F5E" 
        strokeWidth="1"
        strokeDasharray="4 2"
      />
      {/* Dot at field center */}
      <circle cx="180" cy="180" r="4" fill="#6B8F5E" />
    </svg>
  </div>
);

export default function BentoGrid() {
  return (
    <section className="w-full py-32 px-6 lg:px-12 bg-[#1C1C1A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-outfit font-light text-white tracking-tight mb-6">
            Everything your farm needs,<br />
            <span className="italic text-[#A8C5A0]">nothing it doesn't.</span>
          </h2>
          <p className="text-[#A3A3A3] text-lg max-w-xl font-inter font-light">
            A comprehensive suite of tools designed to remove the guesswork from agriculture, presented with extreme clarity.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[450px]">
          
          {/* Card 1: AI Crop (Row 1, Big Left) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#232321] rounded-3xl p-8 relative overflow-hidden group border border-white/10"
          >
            <FeatureTag text="AI Vision" type="terracotta" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6B8F5E]/5 blur-[80px]" />
            
            <div className="h-full flex flex-col sm:flex-row gap-8 items-center sm:items-stretch">
              <div className="flex-1 flex flex-col justify-end relative z-10">
                <h3 className="text-3xl md:text-4xl font-outfit text-white mb-3 tracking-tight">AI Crop Diagnostics</h3>
                <p className="text-[#A3A3A3] font-inter text-sm md:text-base leading-relaxed max-w-sm">
                  Upload photos of leaf or soil samples. Our localized vision models identify 100+ native diseases with 99% accuracy.
                </p>
              </div>
              <div className="flex-1 relative w-full h-[250px] sm:h-full">
                <LeafScanUI />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Micro-climate (Row 1, Small Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-[#232321] rounded-3xl p-8 relative overflow-hidden border border-white/10 flex flex-col justify-between"
          >
            <FeatureTag text="Live Weather" />
            <WeatherWidget />
            <div className="mt-4">
              <h3 className="text-2xl font-outfit text-white mb-2">Micro-climate</h3>
              <p className="text-[#A3A3A3] font-inter text-xs leading-relaxed">Hyper-local forecasting that understands valley dynamics and altitude variances.</p>
            </div>
          </motion.div>

          {/* Card 3: Soil Chemistry (Row 2, Small Left) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-[#232321] rounded-3xl p-8 relative overflow-hidden border border-white/10 flex flex-col"
          >
            <FeatureTag text="Soil Health" />
            <div className="pt-10 h-full flex flex-col justify-between">
              <SoilNPK />
              <div className="mt-6">
                <h3 className="text-2xl font-outfit text-white mb-2">Soil Nutrition</h3>
                <p className="text-[#A3A3A3] font-inter text-xs leading-relaxed">Real-time tracking of NPK levels and chemical pH profiles via satellite data.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Land Mapping (Row 2, Big Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#232321] rounded-3xl p-8 relative overflow-hidden group border border-white/10"
          >
            <FeatureTag text="Satellite Mapping" type="sage" />
            <MiniMap />
            
            <div className="h-full flex flex-col justify-end relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 w-full">
                <div className="max-w-xs">
                  <h3 className="text-3xl font-outfit text-white mb-3 underline decoration-[#6B8F5E]/30 decoration-2 underline-offset-8">Land Mapping</h3>
                  <p className="text-[#A3A3A3] font-inter text-sm leading-relaxed">
                    Map field boundaries with sub-meter precision. Calculate bigha/ropani area units for fertilizer procurement.
                  </p>
                </div>
                
                {/* Refined Data Display */}
                <div className="grid grid-cols-2 gap-8 bg-black/40 backdrop-blur-md px-8 py-6 rounded-[2rem] border border-white/10">
                   <div>
                     <p className="text-[#6B8F5E] text-[10px] font-bold tracking-widest uppercase mb-2">Total Area</p>
                     <p className="text-3xl font-outfit text-white tracking-tighter">4.2 <span className="text-xs text-[#A3A3A3] font-inter uppercase">Bigha</span></p>
                   </div>
                   <div>
                     <p className="text-[#8AAF7C] text-[10px] font-bold tracking-widest uppercase mb-2">Est. Intake</p>
                     <p className="text-3xl font-outfit text-white tracking-tighter">180<span className="text-xs text-[#A3A3A3] font-inter uppercase">Kg</span></p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
