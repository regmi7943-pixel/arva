"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Stage = {
  name: string;
  duration: string;
  tasks: string[];
  color: string;
};

type CropInfo = {
  name: string;
  region: string;
  stages: Stage[];
};

const CROP_DATA: Record<string, CropInfo> = {
  Rice: {
    name: "Rice",
    region: "Terai / Plains",
    stages: [
      { name: "Preparation", duration: "Weeks 1-2", tasks: ["Soil Leveling", "Puddling", "Nursery Setup"], color: "#C4704A" },
      { name: "Sowing", duration: "Week 3", tasks: ["Transplanting", "Basal Manuring", "First Flooding"], color: "#6B8F5E" },
      { name: "Growth", duration: "Weeks 8-20", tasks: ["Top Dressing", "Weed Control", "Incentive Monitoring"], color: "#aad19b" },
      { name: "Harvest", duration: "Weeks 22-24", tasks: ["Drainage", "Predatory Watch", "Grain Drying"], color: "#F5F5F0" },
    ]
  },
  Maize: {
    name: "Maize",
    region: "Hills & Mountains",
    stages: [
      { name: "Preparation", duration: "Weeks 1-2", tasks: ["Composting", "Secondary Tilling", "Ridge Formation"], color: "#C4704A" },
      { name: "Sowing", duration: "Week 3", tasks: ["Dibbling", "Optimal Spacing", "Soil Mulching"], color: "#6B8F5E" },
      { name: "Growth", duration: "Weeks 4-12", tasks: ["Thinning", "Earthing Up", "Tassel Protection"], color: "#aad19b" },
      { name: "Harvest", duration: "Weeks 14-16", tasks: ["Cough Maturity", "Shelling", "Aflatoxin Check"], color: "#F5F5F0" },
    ]
  },
  Tomato: {
    name: "Tomato",
    region: "Lower Hills",
    stages: [
      { name: "Preparation", duration: "Weeks 1-2", tasks: ["Sterilization", "Raised Beds", "Trellis Setup"], color: "#C4704A" },
      { name: "Sowing", duration: "Week 2", tasks: ["Hardening", "Plastic Mulching", "Starter Dose"], color: "#6B8F5E" },
      { name: "Growth", duration: "Weeks 6-14", tasks: ["Pruning", "Staking", "Micronutrient Spray"], color: "#aad19b" },
      { name: "Harvest", duration: "Weeks 16-18", tasks: ["Color Grading", "Crate Packing", "Market Dispatch"], color: "#F5F5F0" },
    ]
  },
  Wheat: {
    name: "Wheat",
    region: "Central Plains",
    stages: [
      { name: "Preparation", duration: "Weeks 1-2", tasks: ["Pre-irrigation", "Seed Treatment", "Surface Leveling"], color: "#C4704A" },
      { name: "Sowing", duration: "Week 3", tasks: ["Drilling", "Crown Root Check", "Nitrogen Basal"], color: "#6B8F5E" },
      { name: "Growth", duration: "Weeks 6-16", tasks: ["Irrigation Split", "Rust Monitoring", "Tillering Check"], color: "#aad19b" },
      { name: "Harvest", duration: "Weeks 18-20", tasks: ["Moisture Test", "Combines Ready", "Straw Storage"], color: "#F5F5F0" },
    ]
  },
  Potato: {
    name: "Potato",
    region: "Northern Ridges",
    stages: [
      { name: "Preparation", duration: "Weeks 1-2", tasks: ["Tuber Sprouting", "Bed Furrowing", "Cold Storage Exit"], color: "#C4704A" },
      { name: "Sowing", duration: "Week 2", tasks: ["Tuber Planting", "Furrow Covering", "Deep Composting"], color: "#6B8F5E" },
      { name: "Growth", duration: "Weeks 8-16", tasks: ["Foliar Feed", "Blight Detection", "Tubular Growth"], color: "#aad19b" },
      { name: "Harvest", duration: "Weeks 18-20", tasks: ["Haulm Cutting", "Curing", "Grading"], color: "#F5F5F0" },
    ]
  }
};

export default function CropCalendar() {
  const [activeCrop, setActiveCrop] = useState<string>("Rice");
  const current = CROP_DATA[activeCrop];

  return (
    <div className="w-full bg-[#1C1C1A] border border-white/5 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative group">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-12 translate-x-12"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-outfit text-white mb-2">Crop Lifecycle Demo</h3>
            <p className="text-text-muted font-inter text-sm">Real-world data calibrated for Nepalese geography.</p>
          </div>

          {/* Crop Selector Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-black/40 rounded-2xl border border-white/5">
             {Object.keys(CROP_DATA).map(crop => (
               <button
                key={crop}
                onClick={() => setActiveCrop(crop)}
                className={`relative px-4 py-2 rounded-xl text-xs font-inter transition-all ${
                  activeCrop === crop ? "text-white" : "text-[#A3A3A3] hover:text-white"
                }`}
               >
                 {activeCrop === crop && (
                   <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                   />
                 )}
                 <span className="relative z-10">{crop}</span>
               </button>
             ))}
          </div>
        </div>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute top-[22px] left-0 w-full h-[1px] bg-white/10 hidden md:block"></div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCrop}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-12 relative"
            >
              <div className="absolute -top-16 right-0 md:right-4 flex items-center gap-2">
                 <span className="text-[10px] font-inter tracking-widest text-[#A3A3A3] uppercase">Region:</span>
                 <span className="text-[10px] font-bold text-[#aad19b] font-inter uppercase bg-[#6B8F5E]/10 px-2.5 py-1 rounded-md border border-[#6B8F5E]/20">
                    {current.region}
                 </span>
              </div>

              {current.stages.map((stage, i) => (
                <div key={stage.name} className="relative group/step">
                  {/* Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-12 h-12 rounded-full mb-6 border-4 border-[#1C1C1A] flex items-center justify-center relative z-10 transition-transform group-hover/step:scale-110"
                    style={{ backgroundColor: stage.color }}
                  >
                    <span className="text-[10px] font-bold text-[#1C1C1A] uppercase">{i + 1}</span>
                  </motion.div>

                  <h4 className="text-white font-outfit text-lg mb-1">{stage.name}</h4>
                  <p className="text-[#6B8F5E] font-inter text-xs tracking-widest uppercase mb-4">{stage.duration}</p>
                  
                  <ul className="space-y-3">
                    {stage.tasks.map((task, j) => (
                      <motion.li 
                        key={task} 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (i * 0.1) + (j * 0.05) }}
                        className="flex items-center gap-2 text-xs text-[#A3A3A3] font-inter"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        {task}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
