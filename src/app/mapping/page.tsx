"use client";

import { motion } from "framer-motion";
import { Navigation, Layers, Compass, BarChart3 } from "lucide-react";

export default function MappingPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 md:px-12 pt-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-medium text-primary tracking-wide uppercase">Precision Metrics</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">Land Mapping</h1>
          <p className="text-text-muted text-lg">Define your borders. Calculate precise area in local metrics (Ropani, Bigha). Monitor topography effortlessly.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 bg-surface border border-white/5 rounded-3xl overflow-hidden h-[500px] lg:h-[650px] relative shadow-2xl flex items-center justify-center group"
          >
            {/* Simulated Satellite Map Background using CSS gradients & noise */}
            <div className="absolute inset-0 bg-[#2b3527] opacity-80">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1C1C1A]/60 to-[#1C1C1A]"></div>
            </div>
            
            {/* Drawn Polygon Mockup */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon 
                points="30,20 70,30 80,70 40,80 20,50" 
                fill="rgba(107, 143, 94, 0.2)" 
                stroke="#6B8F5E" 
                strokeWidth="0.5" 
                strokeDasharray="1,1"
                className="transition-all duration-1000 ease-in-out group-hover:fill-[rgba(107,143,94,0.3)]"
              />
              {/* Map Nodes */}
              <circle cx="30" cy="20" r="0.8" fill="#F5F5F0" />
              <circle cx="70" cy="30" r="0.8" fill="#F5F5F0" />
              <circle cx="80" cy="70" r="0.8" fill="#F5F5F0" />
              <circle cx="40" cy="80" r="0.8" fill="#F5F5F0" />
              <circle cx="20" cy="50" r="0.8" fill="#F5F5F0" />
            </svg>

            {/* Floating Tool Bar */}
            <div className="absolute bottom-8 right-8 flex flex-col gap-2">
              <button className="w-12 h-12 bg-background/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-text hover:text-primary transition-colors shadow-lg">
                <Navigation className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-background/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-text hover:text-primary transition-colors shadow-lg">
                <Layers className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 mt-2">
                <Compass className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Stats Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* Info Card 1 */}
            <div className="bg-surface border border-white/5 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <BarChart3 className="w-24 h-24" />
              </div>
              <h3 className="text-sm font-medium text-text-muted mb-8 uppercase tracking-widest">Active Plot</h3>
              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-xs text-text-muted mb-1">Total Area (Bigha)</p>
                  <p className="font-display text-4xl text-text">2.4<span className="text-xl text-text-muted ml-1">Bigha</span></p>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">Total Area (Ropani)</p>
                  <p className="font-display text-4xl text-text">31.7<span className="text-xl text-text-muted ml-1">Ropani</span></p>
                </div>
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="bg-background border border-white/5 rounded-3xl p-8 shadow-xl flex-1">
              <h3 className="text-sm font-medium text-text-muted mb-6 uppercase tracking-widest">Plot Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-text-muted">Current Crop</span>
                  <span className="text-white font-medium">Wheat (Winter)</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-text-muted">Soil Type</span>
                  <span className="text-white font-medium">Loamy</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-text-muted">Moisture</span>
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-medium">42%</span>
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-4 mt-8 bg-surface border border-white/10 rounded-2xl text-sm font-medium hover:bg-white/5 transition-colors">
                Generate Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
