import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "../config/siteData";

export function Gallery() {
  const [filter, setFilter] = useState("all");
  const [activeImage, setActiveImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const galleryItems = siteData.gallery;
  const categories = ["all", "weddings", "birthdays", "corporate", "festivals"];

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeImage) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage, imageIndex, filteredItems]);

  const handleOpenLightbox = (item, idx) => {
    setActiveImage(item);
    setImageIndex(idx);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setActiveImage(null);
    document.body.style.overflow = "auto";
  };

  const handlePrev = () => {
    const newIndex = imageIndex === 0 ? filteredItems.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
    setActiveImage(filteredItems[newIndex]);
  };

  const handleNext = () => {
    const newIndex = imageIndex === filteredItems.length - 1 ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
    setActiveImage(filteredItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white dark:bg-charcoal-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h4 className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-gold-600 dark:text-gold-400 mb-2">
            Visual Inspiration
          </h4>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 dark:text-cream-100">
            Our Photo Gallery
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-cream-300 mt-4 max-w-xl mx-auto leading-relaxed">
            Browse through some of our most spectacular luxury setups, balloon arches, and theme stages.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? "bg-gold-500 text-charcoal-950 shadow-md shadow-gold-500/10"
                  : "bg-charcoal-50 hover:bg-gold-50 dark:bg-charcoal-950 dark:hover:bg-charcoal-800 text-charcoal-700 dark:text-cream-200 border border-gold-200/20 dark:border-gold-500/10"
              }`}
            >
              {cat === "all" ? "All Designs" : cat}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="gallery-img-container relative group h-72 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gold-200/10 dark:border-gold-500/5 bg-charcoal-900"
                onClick={() => handleOpenLightbox(item, idx)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                  loading="lazy"
                />

                {/* Hover overlay detail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-5 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-1 flex items-center gap-1">
                    <Sparkles size={10} />
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-white/60 text-xs flex items-center gap-1 mt-1">
                    <Maximize2 size={12} />
                    <span>Click to enlarge</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Lightbox Modal */}
        <AnimatePresence>
          {activeImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 select-none">
              
              {/* Backdrop Click Close */}
              <div className="absolute inset-0" onClick={handleClose} />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 text-white/70 hover:text-white rounded-full bg-white/5 hover:bg-white/10 z-50 transition-colors"
                aria-label="Close preview"
              >
                <X size={24} />
              </button>

              {/* Image Container with Arrow Navigations */}
              <div className="relative w-full max-w-4xl max-h-[80vh] flex items-center justify-center z-10">
                
                {/* Arrow Left */}
                <button
                  onClick={handlePrev}
                  className="absolute left-[-20px] sm:left-[-60px] p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/85 hover:text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>

                {/* Main Lightbox Image */}
                <motion.div
                  key={activeImage.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl max-w-full max-h-[75vh]"
                >
                  <img
                    src={activeImage.image}
                    alt={activeImage.title}
                    className="object-contain max-w-full max-h-[75vh]"
                  />
                  
                  {/* Photo Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-1">
                      Category: {activeImage.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {activeImage.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Arrow Right */}
                <button
                  onClick={handleNext}
                  className="absolute right-[-20px] sm:right-[-60px] p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/85 hover:text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              {/* Bottom indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs">
                Image {imageIndex + 1} of {filteredItems.length}
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
