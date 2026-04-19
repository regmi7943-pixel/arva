"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-[#1C1C1A]/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
          <div className="relative w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image src="/logo.png" alt="Arva Logo" fill className="object-contain" />
          </div>
          <span className="font-outfit font-medium text-lg tracking-wide text-white">Arva</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm font-inter text-[#A3A3A3] hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/story" className="text-sm font-inter text-[#A3A3A3] hover:text-white transition-colors">
            Our Story
          </Link>
          <Link href="#waitlist">
            <button className="text-sm font-medium px-5 py-2.5 rounded-full bg-[#6B8F5E] text-white hover:bg-[#5a7a4f] transition-all">
              Join Waitlist
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#1C1C1A] border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
              <Link 
                href="/features" 
                className="text-3xl font-cormorant italic text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/story" 
                className="text-3xl font-cormorant italic text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link 
                href="#waitlist"
                className="inline-flex"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className="w-full text-center text-lg font-medium px-8 py-4 rounded-xl bg-[#6B8F5E] text-white">
                  Join Waitlist
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
