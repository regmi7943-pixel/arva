"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Arva helped me save 30% on nitrogen fertilizer this season. The geospatial mapping is incredibly precise for Bigha measurement.",
    author: "Ramesh P.",
    location: "Chitwan, Nepal",
    image: "/farmers/farmer-1.png",
  },
  {
    quote: "The micro-climate weather updates are a lifesaver. Traditional forecasts missed the valley frost, but Arva didn't.",
    author: "Nima S.",
    location: "Mustang, Nepal",
    image: "/farmers/farmer-2.png",
  },
  {
    quote: "I took a photo of my tomato leaves, and it instantly identified early blight. We contained it before it spread.",
    author: "Sunita G.",
    location: "Kavre, Nepal",
    image: "/farmers/farmer-3.png",
  },
  {
    quote: "Finally, an app built with our local context. The UX is so clean and doesn't overwhelm me with unnecessary data.",
    author: "Bikash T.",
    location: "Jhapa, Nepal",
    image: "/farmers/farmer-4.png",
  },
];

interface ElementState {
  x: number;
  y: number;
  scale?: number; // only used for images
}

const defaultPositions: Record<string, ElementState> = {
  "img-0": { x: 0, y: 0, scale: 1 },
  "card-0": { x: 160, y: 40 },
  "img-1": { x: 420, y: 0, scale: 1 },
  "card-1": { x: 520, y: 40 },
  "img-2": { x: 0, y: 460, scale: 1 },
  "card-2": { x: 160, y: 500 },
  "img-3": { x: 420, y: 460, scale: 1 },
  "card-3": { x: 520, y: 500 },
};

const STORAGE_KEY = "arva-testimonial-positions";

function loadPositions(): Record<string, ElementState> {
  if (typeof window === "undefined") return defaultPositions;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return defaultPositions;
}

function savePositions(positions: Record<string, ElementState>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {}
}

function DraggableElement({
  id,
  positions,
  onDrag,
  onScale,
  editMode,
  isImage,
  children,
  className = "",
}: {
  id: string;
  positions: Record<string, ElementState>;
  onDrag: (id: string, x: number, y: number) => void;
  onScale?: (id: string, scale: number) => void;
  editMode: boolean;
  isImage?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const elRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startMouse = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });

  const pos = positions[id] || { x: 0, y: 0, scale: 1 };
  const scale = pos.scale ?? 1;

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!editMode) return;
      if ((e.target as HTMLElement).closest("button")) return;
      e.preventDefault();
      e.stopPropagation();
      dragging.current = true;
      startMouse.current = { x: e.clientX, y: e.clientY };
      startPos.current = { x: pos.x, y: pos.y };

      const handleMouseMove = (ev: MouseEvent) => {
        if (!dragging.current) return;
        const dx = ev.clientX - startMouse.current.x;
        const dy = ev.clientY - startMouse.current.y;
        onDrag(id, startPos.current.x + dx, startPos.current.y + dy);
      };

      const handleMouseUp = () => {
        dragging.current = false;
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    },
    [editMode, id, onDrag, pos.x, pos.y]
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!editMode || !isImage || !onScale) return;
      e.preventDefault();
      e.stopPropagation();
      const delta = e.deltaY > 0 ? -0.05 : 0.05;
      onScale(id, Math.max(0.3, Math.min(3, scale + delta)));
    },
    [editMode, isImage, onScale, id, scale]
  );

  const index = parseInt(id.split("-")[1]);
  const staggerDelay = isImage ? index * 0.3 : (index * 0.3) + 0.15;

  return (
    <motion.div
      ref={elRef}
      className={`absolute ${className} ${editMode ? "cursor-grab active:cursor-grabbing" : ""}`}
      style={{
        left: pos.x,
        top: pos.y,
        outline: editMode ? `2px dashed ${isImage ? "rgba(196, 112, 74, 0.6)" : "rgba(170, 209, 155, 0.6)"}` : "none",
        outlineOffset: 4,
        transformOrigin: "bottom center",
      }}
      initial={{ opacity: 0, y: 30, scale: isImage ? 0.9 * scale : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: isImage ? scale : 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: staggerDelay,
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
    >
      {children}

      {editMode && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap z-50">
          {isImage && onScale && (
            <button
              onClick={(e) => { e.stopPropagation(); onScale(id, Math.max(0.3, scale - 0.1)); }}
              className="w-5 h-5 rounded bg-[#2a2a28] text-white/70 text-xs flex items-center justify-center hover:bg-[#C4704A] transition-colors"
            >
              −
            </button>
          )}
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded"
            style={{
              color: isImage ? "#C4704A" : "#aad19b",
              background: "#1C1C1A",
            }}
          >
            {id} ({Math.round(pos.x)},{Math.round(pos.y)})
            {isImage && ` ×${scale.toFixed(2)}`}
          </span>
          {isImage && onScale && (
            <button
              onClick={(e) => { e.stopPropagation(); onScale(id, Math.min(3, scale + 0.1)); }}
              className="w-5 h-5 rounded bg-[#2a2a28] text-white/70 text-xs flex items-center justify-center hover:bg-[#C4704A] transition-colors"
            >
              +
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function TestimonialsStatic() {
  const [editMode, setEditMode] = useState(false);
  const [positions, setPositions] = useState(defaultPositions);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setPositions(loadPositions());
    setLoaded(true);
  }, []);

  const handleDrag = useCallback((id: string, x: number, y: number) => {
    setPositions((prev) => {
      const next = { ...prev, [id]: { ...prev[id], x, y } };
      savePositions(next);
      return next;
    });
  }, []);

  const handleScale = useCallback((id: string, scale: number) => {
    setPositions((prev) => {
      const next = { ...prev, [id]: { ...prev[id], scale } };
      savePositions(next);
      return next;
    });
  }, []);

  const handleReset = () => {
    setPositions(defaultPositions);
    savePositions(defaultPositions);
  };

  if (!loaded) return null;

  return (
    <section className="w-full py-20 md:py-28 bg-[#131312] relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-14 md:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5"
        >
          <span className="text-xs font-inter tracking-wider text-[#A3A3A3] uppercase">Voices of the Field</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-outfit text-white font-light leading-tight max-w-xl"
        >
          Trusted by <span className="text-[#C4704A] italic">hundreds</span> of farmers.
        </motion.h2>
      </div>

      {/* Canvas area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative" style={{ height: 900 }}>
        {editMode && (
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        )}

        {testimonials.map((t, i) => (
          <div key={i}>
            <DraggableElement
              id={`img-${i}`}
              positions={positions}
              onDrag={handleDrag}
              onScale={handleScale}
              editMode={editMode}
              isImage={true}
              className="z-0"
            >
              <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px]">
                <Image
                  src={t.image}
                  alt={t.author}
                  fill
                  className="object-contain object-bottom drop-shadow-xl pointer-events-none select-none"
                  draggable={false}
                />
              </div>
            </DraggableElement>

            <DraggableElement
              id={`card-${i}`}
              positions={positions}
              onDrag={handleDrag}
              editMode={editMode}
              isImage={false}
              className="z-10"
            >
              <div className="bg-[#1C1C1A] border border-white/[0.07] rounded-2xl p-5 shadow-2xl w-[300px] md:w-[340px]">
                <span className="block text-4xl leading-none text-[#C4704A]/30 font-outfit mb-1 select-none">"</span>
                <p className="text-[#e5e2de] font-inter text-sm leading-relaxed mb-5">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-[#6B8F5E]/20 flex items-center justify-center text-[#aad19b] font-outfit text-sm flex-shrink-0">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-outfit text-xs md:text-sm">{t.author}</h4>
                    <p className="text-[#A3A3A3] font-inter text-[10px] mt-0.5">{t.location}</p>
                  </div>
                </div>
              </div>
            </DraggableElement>
          </div>
        ))}
      </div>
    </section>
  );
}
