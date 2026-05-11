"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AppDownload() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      // Reset after a few seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };
  return (
    <section id="waitlist" className="w-full py-32 px-6 lg:px-12 bg-[#1C1C1A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#2A2A27] to-[#131312] rounded-[3rem] overflow-hidden relative border border-white/5">
          
          {/* Decorative ambient glows */}
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[80%] bg-[#6B8F5E] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] bg-[#C4704A] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 p-12 md:p-20 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-[#6B8F5E] text-sm uppercase tracking-widest font-inter mb-6">Coming Soon</h2>
                <h3 className="text-4xl md:text-6xl font-outfit text-white mb-8 leading-tight">
                  Be first in <br />
                  <span className="italic text-[#C4704A]">the field.</span>
                </h3>
                <p className="text-[#A3A3A3] font-inter text-lg mb-10 max-w-md">
                  Avani launches in Monsoon 2026. <br className="hidden md:block" />
                  Join 200+ farmers already on the waitlist.
                </p>

                <form onSubmit={handleJoinWaitlist} className="max-w-md mb-8">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com" 
                      className="flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white font-inter focus:outline-none focus:border-[#6B8F5E]/50 transition-colors disabled:opacity-50"
                      disabled={status !== "idle"}
                    />
                    <button 
                      type="submit"
                      disabled={status !== "idle"}
                      className="bg-[#6B8F5E] text-white px-8 py-4 rounded-xl font-outfit font-bold hover:bg-[#5a7a4f] transition-colors whitespace-nowrap disabled:opacity-70 flex items-center justify-center min-w-[160px]"
                    >
                      {status === "idle" && "Join Waitlist →"}
                      {status === "loading" && <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>}
                      {status === "success" && "Added! ✓"}
                    </button>
                  </div>
                </form>

                <div className="flex flex-wrap gap-x-8 gap-y-3 font-inter text-[xs] md:text-sm text-[#A3A3A3]">
                   <span className="flex items-center gap-2"><span className="text-[#6B8F5E]">✓</span> No spam</span>
                   <span className="flex items-center gap-2"><span className="text-[#6B8F5E]">✓</span> Launch notification only</span>
                   <span className="flex items-center gap-2"><span className="text-[#6B8F5E]">✓</span> Free forever</span>
                </div>
              </motion.div>
            </div>

            {/* Right Mockup */}
            <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]">
               <motion.div 
                 initial={{ opacity: 0, x: 100, rotate: 5 }}
                 whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2, ease: "easeOut" }}
                 className="absolute inset-x-0 bottom-[-10%] lg:bottom-[-20%] flex justify-center lg:justify-end lg:pr-20"
               >
                  <div className="relative w-[300px] h-[600px] md:w-[400px] md:h-[800px]">
                    <Image 
                      src="/app-mockup.png" 
                      alt="Avani Mobile App Mockup" 
                      fill 
                      className="object-contain"
                    />
                  </div>
               </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
