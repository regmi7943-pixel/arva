"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Ram Shrestha",
      location: "Kathmandu Valley",
      text: "The mapping feature completely changed how I track yield across my different plots. It used to be guesswork, now it's precise data.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sita Gurung",
      location: "Pokhara",
      text: "I uploaded a picture of my dying tomatoes. Arva's assistant told me exactly what was wrong, saving my entire summer harvest. Unbelievable precision.",
      rating: 5,
    },
    {
      id: 3,
      name: "Hari Prasad",
      location: "Chitwan",
      text: "Finally, farm software that feels modern but is actually useful. The Bigha/Ropani conversions make it perfectly tailored for Nepal.",
      rating: 4,
    },
    {
      id: 4,
      name: "Anita Thapa",
      location: "Lumbini",
      text: "Simplifies my daily operations. I don't need a notebook anymore. It's clean, intuitive, and the crop diagnostics are stunningly accurate.",
      rating: 5,
    },
  ];

  return (
    <div className="relative min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 md:px-12 pt-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-6xl font-medium mb-6">Trusted by modern farmers.</h1>
          <p className="text-text-muted text-lg md:text-xl">Hear how Arva is bringing clarity and precision to agricultural operations across the country.</p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
              className="bg-surface border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-primary/30 transition-colors"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-primary/10 transition-colors duration-500" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-white/20'}`} />
                ))}
              </div>
              
              <p className="text-lg text-text leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center font-display font-medium text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-sm text-white">{review.name}</h4>
                  <p className="text-xs text-text-muted">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
