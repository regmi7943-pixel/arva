"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="w-full py-32 px-6 lg:px-12 bg-[#1C1C1A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 items-center md:items-start justify-between">
        
        {/* Left Text */}
        <div className="w-full md:w-5/12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit text-white mb-6 leading-tight">
              Simple pricing.<br />
              <span className="italic text-[#C4704A]">Infinite scale.</span>
            </h2>
            <p className="text-[#A3A3A3] font-inter text-lg mb-10 max-w-sm">
              Reserve your plan now. Launch pricing locked in at signup.
            </p>
          </motion.div>
        </div>

        {/* Right Cards */}
        <div className="w-full md:w-7/12 flex flex-col sm:flex-row gap-6">
          {/* Free Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex-1 bg-[#131312] border border-white/5 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-outfit text-white mb-2">Individual</h3>
            <p className="text-[#A3A3A3] font-inter text-sm mb-8">Perfect for single lot farmers.</p>
            <div className="mb-8">
              <span className="text-5xl font-outfit text-white">रू0</span>
              <span className="text-[#A3A3A3] font-inter"> / forever</span>
            </div>
            
            <ul className="space-y-4 mb-8 font-inter text-sm text-[#c3c8bc]">
              <li className="flex gap-3 items-center"><span className="text-[#6B8F5E]">✓</span> 1 Farm mapped</li>
              <li className="flex gap-3 items-center"><span className="text-[#6B8F5E]">✓</span> Basic Crop Diagnostics</li>
              <li className="flex gap-3 items-center"><span className="text-[#6B8F5E]">✓</span> 7-day weather forecast</li>
              <li className="flex gap-3 items-center opacity-50"><span className="text-[#43483f]">—</span> Priority Support</li>
            </ul>

            <Link href="#waitlist">
              <button className="w-full bg-[#1C1C1A] border border-white/10 text-white py-3 rounded-full text-sm font-inter hover:bg-white/5 transition-colors">
                Reserve Free Spot
              </button>
            </Link>
          </motion.div>

          {/* Premium Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex-1 bg-[#232321] border border-[#6B8F5E]/40 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 z-10 px-3 py-1 bg-[#6B8F5E]/20 border border-[#6B8F5E]/40 rounded-full text-[10px] font-bold text-[#aad19b] uppercase tracking-widest">
              For Groups
            </div>
            <div className="absolute top-0 right-0 w-full h-[150px] bg-gradient-to-b from-[#6B8F5E]/10 to-transparent pointer-events-none"></div>
            
            <h3 className="text-2xl font-outfit text-[#aad19b] mb-2">Cooperative</h3>
            <p className="text-[#e5e2de] font-inter text-sm mb-8">For multi-farm management.</p>
            <div className="mb-8 relative z-10">
              <span className="text-5xl font-outfit text-white">रू799</span>
              <span className="text-[#A3A3A3] font-inter"> / month</span>
            </div>
            
            <ul className="space-y-4 mb-8 font-inter text-sm text-[#e5e2de] relative z-10">
              <li className="flex gap-3 items-center"><span className="text-[#6B8F5E]">✓</span> Unlimited Farms mapped</li>
              <li className="flex gap-3 items-center"><span className="text-[#6B8F5E]">✓</span> Advanced AI Diagnostics</li>
              <li className="flex gap-3 items-center"><span className="text-[#6B8F5E]">✓</span> Hyper-local micro-climates</li>
              <li className="flex gap-3 items-center"><span className="text-[#6B8F5E]">✓</span> 24/7 Priority Support</li>
            </ul>
            
            <Link href="#waitlist">
              <button className="w-full bg-[#6B8F5E] text-[#11300a] py-3 rounded-full text-sm font-bold font-inter hover:bg-[#8AAF7C] transition-colors relative z-10">
                Reserve Cooperative Access
              </button>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
