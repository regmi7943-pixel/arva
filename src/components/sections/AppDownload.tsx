"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

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
    <section id="download" className="w-full py-32 px-6 lg:px-12 bg-[#1C1C1A] overflow-hidden">
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
                <h2 className="text-[#6B8F5E] text-sm uppercase tracking-widest font-inter mb-6">Get Started</h2>
                <h3 className="text-4xl md:text-5xl font-outfit text-white mb-8 leading-tight">
                  Join the future of <br />
                  <span className="italic text-[#C4704A]">farming.</span>
                </h3>
                <p className="text-[#A3A3A3] font-inter text-base mb-10 max-w-md">
                  Avani is officially launched for Android, with our iOS companion coming soon. Sign up for updates or download the latest Android build below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl">
                  {/* Card 1: Android Download */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
                    <div>
                      <h4 className="text-white font-outfit font-medium text-lg mb-2">Android App</h4>
                      <p className="text-[#A3A3A3] text-xs font-inter mb-6">
                        Download the latest stable APK directly to your phone for testing.
                      </p>
                    </div>
                    <div>
                      <a 
                        href="/avani.apk"
                        download="avani.apk"
                        className="inline-flex items-center justify-center bg-[#6B8F5E] text-white px-5 py-3 rounded-xl font-outfit text-sm font-bold hover:bg-[#5a7a4f] transition-all gap-2 group w-full text-center"
                      >
                        Download APK
                        <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                      </a>
                      <p className="text-[#737373] font-inter text-[10px] mt-2 text-center">
                        Compatible with Android 8.0+
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Waitlist Form */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
                    <div>
                      <h4 className="text-white font-outfit font-medium text-lg mb-2">iOS Waitlist</h4>
                      <p className="text-[#A3A3A3] text-xs font-inter mb-4">
                        Get notified when the iPhone companion version launches.
                      </p>
                    </div>
                    <form onSubmit={handleJoinWaitlist} className="w-full">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com" 
                        className="w-full bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-white font-inter text-xs mb-3 focus:outline-none focus:border-[#6B8F5E]/50 transition-colors disabled:opacity-50"
                        required
                        disabled={status !== "idle"}
                      />
                      <button 
                        type="submit"
                        disabled={status !== "idle"}
                        className="w-full bg-white/10 border border-white/10 text-white px-5 py-3 rounded-xl font-outfit text-sm font-bold hover:bg-white/20 transition-all flex items-center justify-center min-h-[44px]"
                      >
                        {status === "idle" && "Join Waitlist"}
                        {status === "loading" && <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>}
                        {status === "success" && "Added! ✓"}
                      </button>
                    </form>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-3 font-inter text-[xs] md:text-sm text-[#A3A3A3]">
                   <span className="flex items-center gap-2"><span className="text-[#6B8F5E]">✓</span> Direct APK download</span>
                   <span className="flex items-center gap-2"><span className="text-[#6B8F5E]">✓</span> Full offline dashboard mapping</span>
                   <span className="flex items-center gap-2"><span className="text-[#6B8F5E]">✓</span> Complete GEE satellite metrics</span>
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
