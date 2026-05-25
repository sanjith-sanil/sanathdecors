import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "../config/siteData";

export function Hero({ onOpenBooking }) {
  const [current, setCurrent] = useState(0);
  const slides = siteData.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.7, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center select-none"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
      </AnimatePresence>

      {/* Dark Vignette and Gold Shimmer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-transparent to-charcoal-950/20" />

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center z-10">
        
        {/* Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-black/40 backdrop-blur-md text-gold-400 text-xs sm:text-sm uppercase tracking-widest font-semibold mb-6"
        >
          <Sparkles size={14} className="animate-spin-slow text-gold-400" />
          Bespoke Luxury Events
        </motion.div>

        {/* Dynamic Slide Titles */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              <span className="text-white">Designs by </span>
              <span className="text-gold-400 drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)] block sm:inline">
                {siteData.companyName}
              </span>
            </h1>
            
            <h2 className="text-lg sm:text-2xl font-light text-cream-100/90 font-sans tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
              {slides[current].title} — {slides[current].subtitle}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none"
        >
          <a
            href="#gallery"
            onClick={(e) => scrollToSection(e, "gallery")}
            className="w-full sm:w-auto btn-gold text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
          >
            <ImageIcon size={16} />
            View Gallery
          </a>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto btn-outline-gold hover:bg-gold-500 hover:text-charcoal-950 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Manual Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full border border-white/20 hover:border-gold-500 bg-black/30 hover:bg-gold-500/20 text-white hover:text-gold-400 transition-all z-20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full border border-white/20 hover:border-gold-500 bg-black/30 hover:bg-gold-500/20 text-white hover:text-gold-400 transition-all z-20 group"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === idx
                ? "w-8 bg-gold-400"
                : "w-2.5 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
