"use client";

import { motion } from "framer-motion";
import { Cloud, Droplets, Thermometer, Wind, AlertTriangle } from "lucide-react";

export default function WeatherWidget() {
  return (
    <div className="w-full bg-gradient-to-br from-[#1C1C1A] to-[#131312] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C4704A]/5 rounded-full blur-[80px] translate-y-24 -translate-x-12"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-12">
        {/* Left: Main Widget */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-2xl font-outfit text-white mb-1">Kathmandu Valley</h3>
              <p className="text-text-muted text-sm font-inter">Agricultural Forecast • Today</p>
            </div>
            <div className="text-right">
              <span className="text-4xl font-outfit text-white">24°<span className="text-lg opacity-40 ml-1">C</span></span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Droplets, label: "Moisture", value: "42%", color: "#6B8F5E" },
              { icon: Wind, label: "Wind", value: "8 km/h", color: "#aad19b" },
              { icon: Thermometer, label: "Soil Temp", value: "19°C", color: "#C4704A" },
              { icon: Cloud, label: "Rain Chance", value: "15%", color: "#F5F5F0" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center"
              >
                <stat.icon className="w-5 h-5 mx-auto mb-3" style={{ color: stat.color }} />
                <p className="text-[10px] uppercase tracking-widest text-[#A3A3A3] mb-1">{stat.label}</p>
                <p className="text-white font-medium">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Alert Slider Mockup */}
          <div className="bg-[#C4704A]/10 border border-[#C4704A]/20 rounded-2xl p-4 flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-[#C4704A]/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                <AlertTriangle className="w-5 h-5 text-[#C4704A]" />
             </div>
             <div>
                <p className="text-xs font-bold text-[#C4704A] uppercase tracking-tight">Frost Alert</p>
                <p className="text-[11px] text-[#e5e2de] opacity-80 mt-0.5">Sudden temperature drop expected in high ridges. Move nursery trays indoors.</p>
             </div>
          </div>
        </div>

        {/* Right: Weekly Forecast */}
        <div className="lg:w-1/3 bg-background/50 backdrop-blur-md rounded-3xl border border-white/5 p-6 flex flex-col justify-between">
           <h4 className="text-xs font-inter tracking-widest uppercase text-[#A3A3A3] mb-6">Upcoming Week</h4>
           <div className="space-y-6">
              {[
                { day: "Mon", icon: Cloud, high: 24, low: 18 },
                { day: "Tue", icon: Droplets, high: 22, low: 16 },
                { day: "Wed", icon: Cloud, high: 25, low: 19 },
                { day: "Thu", icon: Thermometer, high: 27, low: 20 },
              ].map((d, i) => (
                <div key={d.day} className="flex items-center justify-between">
                   <span className="text-sm font-medium text-white w-8">{d.day}</span>
                   <d.icon className="w-4 h-4 text-[#A3A3A3]" />
                   <div className="flex items-center gap-3 w-16 justify-end">
                      <span className="text-sm text-white">{d.high}°</span>
                      <span className="text-sm text-[#A3A3A3]">{d.low}°</span>
                   </div>
                </div>
              ))}
           </div>
           <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[10px] text-text-muted uppercase tracking-tighter">Powered by Arva Weather Engine</p>
           </div>
        </div>
      </div>
    </div>
  );
}
