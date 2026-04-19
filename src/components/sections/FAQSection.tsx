"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need constant internet connectivity?",
    answer: "No. Arva operates primarily offline for field data collection. It syncs with the cloud only when you reach a connection, ensuring you can map fields and take photos in remote areas without issue."
  },
  {
    question: "How accurate is the geospatial mapping?",
    answer: "We use high-resolution satellite imagery combined with GPS data from your device. For general area calculation (Bigha/Ropani), it is highly accurate. For legal property boundaries, you should always consult a surveyor."
  },
  {
    question: "Can it recognize local Nepali plant diseases?",
    answer: "Absolutely. Our computer vision models were trained on hundreds of thousands of images, specifically fine-tuned for crops common in the Himalayan and Terai regions."
  },
  {
    question: "What languages does the AI Assistant support?",
    answer: "The assistant supports English currently, but we are in late-stage beta for continuous Nepali language support, including voice-to-text input."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-32 px-6 lg:px-12 bg-[#131312]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-xs font-inter tracking-wider text-[#A3A3A3] uppercase">Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-outfit text-white font-light leading-tight max-w-xl mb-6">
            Everything you need to know. <br />
            <span className="text-[#C4704A] italic">Nothing you don't.</span>
          </h2>
          <div className="w-full h-[1px] bg-white/10 opacity-50"></div>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className={`text-lg md:text-xl font-outfit font-light transition-colors duration-300 ${openIndex === index ? 'text-[#aad19b]' : 'text-white/90 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <span className={`text-2xl font-light transition-all duration-300 ${openIndex === index ? 'rotate-45 text-[#aad19b]' : 'text-[#A3A3A3]'}`}>
                  +
                </span>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-[#A3A3A3] font-inter text-sm md:text-base leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
