"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image src="/logo.png" alt="Arva Logo" fill className="object-contain" />
          </div>
          <span className="font-display font-medium text-lg tracking-wide text-text">Arva</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/assistant" className="text-sm text-text-muted hover:text-text transition-colors">
            AI Assistant
          </Link>
          <Link href="/mapping" className="text-sm text-text-muted hover:text-text transition-colors">
            Land Mapping
          </Link>
          <Link href="/reviews" className="text-sm text-text-muted hover:text-text transition-colors">
            Reviews
          </Link>
        </nav>

        <div className="flex items-center">
          <Link href="#waitlist">
            <button className="text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-background hover:bg-primary/90 transition-colors">
              Join Waitlist
            </button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
