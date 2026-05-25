import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "../config/siteData";

export function Events({ onOpenBooking }) {
  const events = siteData.events;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="events" className="py-20 lg:py-28 bg-white dark:bg-charcoal-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h4 className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-gold-600 dark:text-gold-400 mb-2">
            Our Portfolio
          </h4>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 dark:text-cream-100">
            Events We Undertake
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-cream-300 mt-4 max-w-xl mx-auto leading-relaxed">
            From intimate gatherings to massive luxury galas, we bring bespoke creative styling to every occasion.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {events.map((evt) => (
            <motion.div
              key={evt.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg border border-gold-200/25 dark:border-gold-500/10 bg-charcoal-950 flex flex-col justify-end"
            >
              {/* Image with hover zoom */}
              <div className="absolute inset-0 z-0">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out select-none"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent group-hover:via-charcoal-950/60 transition-all duration-300" />
              </div>

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full bg-gold-500 text-charcoal-950 shadow-md">
                  {evt.tag}
                </span>
              </div>

              {/* Content Card */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-400 transition-colors mb-2">
                  {evt.title}
                </h3>
                
                {/* Description - height expands on hover */}
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                  <p className="text-xs text-cream-100/90 leading-relaxed mb-4">
                    {evt.description}
                  </p>
                  
                  <button
                    onClick={onOpenBooking}
                    className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-gold-400 hover:text-white transition-colors"
                  >
                    Inquire Now
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* Glass reflection effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 z-20 translate-x-[-100%] group-hover:translate-x-[100%] duration-1000 ease-in-out" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA section at bottom */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 bg-cream-50 dark:bg-charcoal-950 px-8 py-6 rounded-2xl border border-gold-200/50 dark:border-gold-500/10 shadow-md max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-3 text-gold-600 dark:text-gold-400">
              <Sparkles size={24} className="flex-shrink-0" />
              <p className="font-serif font-medium text-charcoal-800 dark:text-cream-100 text-sm sm:text-base text-left">
                Have a unique celebration layout in mind? Let's curate a customized theme for you.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="btn-gold whitespace-nowrap text-xs uppercase tracking-wider font-semibold py-2 px-5"
            >
              Consult a Designer
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
