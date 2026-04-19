"use client";

import { motion } from "framer-motion";
import { MessageSquare, Image as ImageIcon, Mic, Send } from "lucide-react";

export default function AssistantPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 md:px-12 pt-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">Crop Assistant</h1>
            <p className="text-text-muted text-lg">Your on-demand agricultural expert, powered by advanced AI context.</p>
          </motion.div>

          {/* Chat Interface Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-surface border border-white/5 rounded-3xl overflow-hidden flex flex-col h-[600px] shadow-2xl relative"
          >
            {/* Ambient glow behind chat */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6 relative z-10">
              {/* User Message */}
              <div className="self-end max-w-[80%] flex items-end gap-3">
                <div className="bg-white/10 text-white rounded-2xl rounded-tr-sm px-5 py-4 text-sm leading-relaxed backdrop-blur-md">
                  I noticed some yellowing on the lower leaves of my tomato plants. What could it be?
                </div>
              </div>
              
              {/* AI Response */}
              <div className="self-start max-w-[85%] flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-background border border-white/5 rounded-2xl rounded-tl-sm px-6 py-5 text-sm leading-relaxed text-text-muted">
                  <p className="mb-3 text-text">Based on the symptoms you've described for your region and the current early summer season, this sounds like an early sign of <strong className="text-white font-medium">Nitrogen deficiency</strong> or potentially early <strong className="text-white font-medium">blight</strong>.</p>
                  <p>To be absolutely sure, it would be helpful if you could upload a clear photo of the affected leaves using the camera icon below.</p>
                </div>
              </div>
            </div>
            
            {/* Input Area */}
            <div className="p-4 bg-background border-t border-white/5 relative z-10">
              <div className="flex items-center gap-3 bg-surface border border-white/10 rounded-full px-2 py-2">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-white hover:bg-white/5 transition-colors">
                  <ImageIcon className="w-5 h-5" />
                </button>
                <input 
                  type="text" 
                  placeholder="Ask about your crops..." 
                  className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-text-muted/60"
                />
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-white hover:bg-white/5 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center hover:bg-primary/90 transition-colors ml-1">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
