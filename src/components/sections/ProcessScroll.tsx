"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    numColor: "text-[#6B8F5E]",
    title: "Digitize Your Land",
    description:
      "Use our satellite integration to trace your boundaries. We automatically calculate precise area metrics in local units, laying the foundation for all future insights.",
  },
  {
    num: "02",
    numColor: "text-[#C4704A]",
    title: "Monitor Vital Signs",
    description:
      "Connect sensors or use local weather data to track micro-climate conditions. Predict frost, drought, or excessive rainfall days before they impact your yield.",
  },
  {
    num: "03",
    numColor: "text-white",
    title: "Actionable Intelligence",
    description:
      "Receive specific recommendations. Whether it's the exact day to apply nitrogen fertilizer or identifying an early stage fungal infection via photo.",
  },
];

function StepCard({
  step,
}: {
  step: (typeof steps)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div ref={ref} className="h-screen flex items-center justify-center snap-center">
      <motion.div
        style={{ opacity, y }}
        className="w-full"
      >
        <div
          className="bg-[#2A2A27] p-8 md:p-12 rounded-[2rem] min-h-[350px] flex flex-col justify-center"
          style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)" }}
        >
          <div className={`text-5xl font-outfit ${step.numColor} mb-6`}>
            {step.num}
          </div>
          <h4 className="text-3xl font-outfit text-white mb-4">
            {step.title}
          </h4>
          <p className="text-[#A3A3A3] font-inter text-lg">{step.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProcessScroll() {
  return (
    <section className="bg-[#1C1C1A] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row-reverse gap-12 relative">
          
          {/* Right Side: Sticky Text (Now on the right) */}
          <div className="md:w-1/2 md:sticky md:top-0 md:h-screen flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-[#A3A3A3] text-sm uppercase tracking-widest font-inter mb-4">
                The Methodology
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-outfit text-white leading-tight mb-6">
                Farming is unpredictable.
                <br />
                <span className="italic text-[#C4704A]">
                  Your data shouldn&apos;t be.
                </span>
              </h3>
              <p className="font-inter text-[#A3A3A3] text-lg max-w-lg leading-relaxed">
                We replace intuition with data. From initial field mapping to daily
                crop health monitoring, Arva provides a complete digital twin of
                your farm.
              </p>
            </motion.div>
          </div>

          {/* Left Side: Scrolling Cards (Now on the left) */}
          <div className="md:w-1/2">
            <div className="space-y-0">
              {steps.map((step, i) => (
                <StepCard key={i} step={step} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
