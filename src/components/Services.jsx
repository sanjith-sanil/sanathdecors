import React from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "../config/siteData";

export function Services() {
  const services = siteData.services;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-cream-100 dark:bg-charcoal-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h4 className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-gold-600 dark:text-gold-400 mb-2">
            What We Do
          </h4>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 dark:text-cream-100">
            Our Bespoke Services
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-cream-300 mt-4 max-w-xl mx-auto leading-relaxed">
            Delivering meticulous event designing and execution across multiple decorator styles.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((svc) => {
            // Dynamically resolve Lucide icons
            const IconComponent = Icons[svc.icon] || Icons.Sparkles;

            return (
              <motion.div
                key={svc.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="glass-panel p-6 rounded-2xl transition-all duration-300 flex flex-col items-start text-left relative group hover:border-gold-500/50 hover:shadow-2xl"
              >
                {/* Icon wrapper with gold circle border */}
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-5 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-all duration-300">
                  <IconComponent size={24} className="transition-transform group-hover:rotate-12" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-cream-100 mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {svc.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-charcoal-600 dark:text-cream-300 leading-relaxed">
                  {svc.description}
                </p>

                {/* Subtle bottom line transition */}
                <div className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-gold-600/0 via-gold-500/0 to-gold-700/0 group-hover:from-gold-600/40 group-hover:via-gold-500/80 group-hover:to-gold-700/40 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Small details / feature points banner */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
          <div className="p-4 border-r border-gold-200/20 last:border-0 dark:border-charcoal-800">
            <span className="font-serif font-semibold text-lg text-gold-600 dark:text-gold-400">1. Conceptual Design</span>
            <p className="text-xs text-charcoal-500 dark:text-cream-400 mt-1">Moodboards, spatial CAD layouts, and theme alignments.</p>
          </div>
          <div className="p-4 border-r border-gold-200/20 last:border-0 dark:border-charcoal-800">
            <span className="font-serif font-semibold text-lg text-gold-600 dark:text-gold-400">2. Floral Artistry</span>
            <p className="text-xs text-charcoal-500 dark:text-cream-400 mt-1">Imported fresh flowers, hand-tied arrangements, and foliage walls.</p>
          </div>
          <div className="p-4 last:border-0">
            <span className="font-serif font-semibold text-lg text-gold-600 dark:text-gold-400">3. On-Site Production</span>
            <p className="text-xs text-charcoal-500 dark:text-cream-400 mt-1">Complete setup, safety testing, structural build-up, and dismantle.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
