import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "../config/siteData";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonials = siteData.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-cream-100 dark:bg-charcoal-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-gold-600 dark:text-gold-400 mb-2">
            Testimonials
          </h4>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 dark:text-cream-100">
            What Our Clients Say
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
        </div>

        {/* Carousel Outer Wrapper */}
        <div className="relative glass-panel rounded-3xl p-8 md:p-12 shadow-xl border border-gold-200/40 dark:border-gold-500/10">
          
          {/* Quote Icon */}
          <div className="absolute top-6 right-8 text-gold-500/10 dark:text-gold-400/10 pointer-events-none">
            <Quote size={80} className="fill-current" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-gold-500">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="font-serif text-lg md:text-xl text-charcoal-800 dark:text-cream-100 italic leading-relaxed mb-8 max-w-2xl">
                "{testimonials[current].quote}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center gap-4 text-left">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold-500/50 shadow-md select-none"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-serif font-bold text-charcoal-900 dark:text-cream-50 text-base">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-xs uppercase tracking-wider text-gold-600 dark:text-gold-400 font-semibold mt-0.5">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-[20%] sm:-translate-x-1/2 z-10">
            <button
              onClick={handlePrev}
              className="p-2 md:p-3 rounded-full bg-white dark:bg-charcoal-800 border border-gold-200/50 dark:border-gold-500/15 text-charcoal-700 dark:text-cream-250 shadow-md hover:bg-gold-500 hover:text-charcoal-950 hover:border-gold-500 dark:hover:bg-gold-500 dark:hover:text-charcoal-950 dark:hover:border-gold-500 transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-[20%] sm:translate-x-1/2 z-10">
            <button
              onClick={handleNext}
              className="p-2 md:p-3 rounded-full bg-white dark:bg-charcoal-800 border border-gold-200/50 dark:border-gold-500/15 text-charcoal-700 dark:text-cream-250 shadow-md hover:bg-gold-500 hover:text-charcoal-950 hover:border-gold-500 dark:hover:bg-gold-500 dark:hover:text-charcoal-950 dark:hover:border-gold-500 transition-all"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

        {/* Bullet indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx ? "w-6 bg-gold-500" : "w-2 bg-gold-500/30 hover:bg-gold-500/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
