"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { Droplets, Scan, Satellite, TrendingUp } from "lucide-react";

interface Point { x: number; y: number }

interface Feature {
  id: number;
  title: string;
  stat: string;
  desc: string;
  icon: any;
}

const features: Feature[] = [
  { id: 1, title: "Soil Moisture", stat: "85% Optimal", desc: "Real-time root zone tracking via geospatial analysis.", icon: Droplets },
  { id: 2, title: "AI Crop Health", stat: "99.2% Acc.", desc: "Early disease detection powered by custom ML models.", icon: Scan },
  { id: 3, title: "Satellite Data", stat: "Live Sync", desc: "Multispectral biomass imaging updated daily.", icon: Satellite },
  { id: 4, title: "Yield Forecast", stat: "+2.4T/ha", desc: "Predictive harvest volume analysis and reporting.", icon: TrendingUp },
];

const STORAGE_KEY = "arva-hero-positions";

// Default coordinates mapped to the 900x600 SVG viewBox
const defaultState = {
  "product": {
    "scale": 1.15,
    "yOffset": -24
  },
  "lines": [
    { "start": { "x": 340, "y": 260 }, "elbowX": 180, "endY": 100 },
    { "start": { "x": 560, "y": 260 }, "elbowX": 720, "endY": 130 },
    { "start": { "x": 340, "y": 340 }, "elbowX": 160, "endY": 470 },
    { "start": { "x": 560, "y": 340 }, "elbowX": 740, "endY": 500 }
  ],
  "cards": [
    { "x": -111.72, "y": 167 },
    { "x": 605.47, "y": 109 },
    { "x": -100.78, "y": 394 },
    { "x": 614.84, "y": 357 }
  ]
};

export default function HeroProduct() {
  const [mounted, setMounted] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [state, setState] = useState(defaultState);
  
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        setState({ ...defaultState, ...parsed }); 
      } catch (e) {}
    }
  }, []);

  const save = (newState: typeof defaultState) => {
    setState(newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  };

  const handleReset = () => {
    save(defaultState);
  };

  // Draggable Handler for Cards & Points
  const startDrag = (e: React.MouseEvent, type: 'card' | 'point' | 'elbow', index: number, subType?: 'start') => {
    if (!editMode) return;
    e.preventDefault();
    e.stopPropagation();

    const svg = document.getElementById('hero-svg');
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    
    const onMouseMove = (moveEvent: MouseEvent) => {
      const x = ((moveEvent.clientX - rect.left) / rect.width) * 900;
      const y = ((moveEvent.clientY - rect.top) / rect.height) * 600;

      const newState = { ...state };
      if (type === 'card') {
        newState.cards[index] = { x, y };
      } else if (type === 'point' && subType === 'start') {
        newState.lines[index].start = { x, y };
      } else if (type === 'elbow') {
        newState.lines[index].elbowX = x;
      } else if (type === 'point' && !subType) {
        newState.lines[index].endY = y;
      }
      save(newState);
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // Scroll to Resize Product
  const handleProductWheel = (e: React.WheelEvent) => {
    if (!editMode) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    const newState = { ...state, product: { ...state.product, scale: Math.max(0.5, Math.min(3, state.product.scale + delta)) } };
    save(newState);
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full h-[600px] max-w-4xl mx-auto -mt-8 flex items-center justify-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="w-full h-full relative">
        
        {/* SVG Layer */}
        <svg id="hero-svg" viewBox="0 0 900 600" className={`absolute inset-0 w-full h-full z-10 hidden md:block ${editMode ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <defs>
            <marker id="arrow-hero" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto-start-reverse">
              <path d="M 0 0 L 8 3 L 0 6 z" fill="#6B8F5E" />
            </marker>
            
            {/* Dynamic Mask to hide lines behind the phone */}
            <mask id="phone-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <rect 
                x={450 - (120 * state.product.scale)} 
                y={300 - (250 * state.product.scale) + (state.product.yOffset || 0)} 
                width={240 * state.product.scale} 
                height={500 * state.product.scale} 
                fill="black" 
                rx={40 * state.product.scale}
              />
            </mask>
          </defs>
          
          <g mask="url(#phone-mask)">
            {state.lines.map((line, i) => (
              <g key={`line-group-${i}`}>
                <motion.path
                  d={`M ${line.start.x} ${line.start.y} H ${line.elbowX} V ${line.endY}`}
                  fill="transparent"
                  stroke="#6B8F5E"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  markerEnd="url(#arrow-hero)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6, strokeDashoffset: [0, -40] }}
                  transition={{ 
                    pathLength: { duration: 1, delay: 0.5 + i * 0.2 },
                    strokeDashoffset: { repeat: Infinity, duration: 2, ease: "linear" }
                  }}
                />
                {/* Edit Handles for Lines */}
                {editMode && (
                  <>
                    <circle cx={line.start.x} cy={line.start.y} r="6" fill="#C4704A" className="cursor-move" onMouseDown={(e) => startDrag(e, 'point', i, 'start')} />
                    <circle cx={line.elbowX} cy={(line.start.y + line.endY)/2} r="6" fill="#6B8F5E" className="cursor-ew-resize" onMouseDown={(e) => startDrag(e, 'elbow', i)} />
                    <circle cx={line.elbowX} cy={line.endY} r="6" fill="#aad19b" className="cursor-ns-resize" onMouseDown={(e) => startDrag(e, 'point', i)} />
                  </>
                )}
              </g>
            ))}
          </g>
        </svg>

        {/* Main Product Image */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div 
            className={`relative w-full max-w-md h-[110%] drop-shadow-2xl origin-center pointer-events-auto ${editMode ? 'cursor-ns-resize' : ''}`}
            style={{ transform: `scale(${state.product.scale}) translateY(${state.product.yOffset}px)` }}
            onWheel={handleProductWheel}
          >
            <Image
              src="/Gemini_Generated_Image_64ya6g64ya6g64ya-removebg-preview.png"
              alt="Arva Product"
              fill
              className="object-contain"
              priority
              draggable={false}
            />
          </div>
        </div>

        {/* Feature Cards */}
        {features.map((feature, i) => (
          <div 
            key={feature.id} 
            className="absolute z-30"
            style={{ left: `${(state.cards[i].x / 900) * 100}%`, top: `${(state.cards[i].y / 600) * 100}%` }}
          >
            <div 
              className={`relative ${editMode ? 'cursor-move' : ''}`}
              onMouseDown={(e) => startDrag(e, 'card', i)}
            >
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 1 + i * 0.15 }}>
                <div className="relative p-3 rounded-2xl bg-[#1C1C1A]/90 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-1 w-52 md:w-60">
                   {editMode && <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#6B8F5E] rounded-full animate-pulse shadow-lg shadow-green-500/50" />}
                  
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between mb-1 gap-2">
                      <span className="text-sm font-outfit text-white font-medium">{feature.title}</span>
                      <span className="text-[9px] font-inter text-[#6B8F5E] font-bold bg-[#6B8F5E]/10 px-1.5 py-0.5 rounded-full">{feature.stat}</span>
                    </div>
                    <span className="text-[10px] font-inter text-[#A3A3A3] leading-relaxed line-clamp-2">{feature.desc}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}

        <div className="absolute inset-0 bg-[#6B8F5E]/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      </motion.div>
    </div>
  );
}
