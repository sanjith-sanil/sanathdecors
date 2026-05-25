import React from "react";
import { Sparkles, Target, Compass, Award, ShieldCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "../config/siteData";

export function About() {
  const { title, subtitle, story, mission, vision, stats } = siteData.about;

  const features = [
    {
      icon: Award,
      title: "Bespoke Artistry",
      desc: "Every design is customized to represent your personality and preferences, avoiding standard setups."
    },
    {
      icon: ShieldCheck,
      title: "Impeccable Quality",
      desc: "We use high-grade fabrics, fresh imported flowers, and stable structural setups built by professionals."
    },
    {
      icon: Heart,
      title: "Stress-Free Booking",
      desc: "From initial concept sketches to late-night dismantle, our team coordinates the entire process."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-cream-100 dark:bg-charcoal-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-gold-600 dark:text-gold-400 mb-2"
          >
            {subtitle}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 dark:text-cream-100"
          >
            {title}
          </motion.h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
        </div>

        {/* Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Images Grid */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-8 overflow-hidden rounded-2xl shadow-xl aspect-[4/5] border border-gold-200/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                  alt="Wedding decor detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
              <div className="col-span-4 flex flex-col gap-4 justify-end">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="overflow-hidden rounded-2xl shadow-xl aspect-square border border-gold-200/20"
                >
                  <img
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=300&q=80"
                    alt="Birthday party detail"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="overflow-hidden rounded-2xl shadow-xl aspect-square border border-gold-200/20"
                >
                  <img
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=300&q=80"
                    alt="Lighting setup detail"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Shimmer element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl z-[-1]" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-600/15 rounded-full blur-2xl z-[-1]" />
          </div>

          {/* Right Side: Details & Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl text-charcoal-900 dark:text-cream-100 font-semibold mb-6">
                Creating luxury designs that capture your unique vision.
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300 leading-relaxed mb-8 text-base">
                {story}
              </p>
            </motion.div>

            {/* Mission & Vision Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="p-5 rounded-xl border border-gold-200/40 dark:border-gold-500/10 bg-white/40 dark:bg-charcoal-900/30 backdrop-blur-sm hover:border-gold-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400">
                    <Target size={18} />
                  </div>
                  <h4 className="font-serif font-semibold text-charcoal-900 dark:text-cream-100">Our Mission</h4>
                </div>
                <p className="text-sm text-charcoal-600 dark:text-cream-300 leading-relaxed">
                  {mission}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="p-5 rounded-xl border border-gold-200/40 dark:border-gold-500/10 bg-white/40 dark:bg-charcoal-900/30 backdrop-blur-sm hover:border-gold-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400">
                    <Compass size={18} />
                  </div>
                  <h4 className="font-serif font-semibold text-charcoal-900 dark:text-cream-100">Our Vision</h4>
                </div>
                <p className="text-sm text-charcoal-600 dark:text-cream-300 leading-relaxed">
                  {vision}
                </p>
              </motion.div>
            </div>

            {/* Core Values Bullets */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 mt-0.5">
                    <feature.icon size={16} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-charcoal-800 dark:text-cream-100 text-sm sm:text-base">
                      {feature.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-charcoal-600 dark:text-cream-400">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Counter Stats Section */}
        <div className="mt-20 border-t border-gold-200/25 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-600 dark:text-gold-400 mb-2 flex items-center justify-center">
                  <span>{stat.value}</span>
                  <span className="text-gold-500">{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm font-medium tracking-wide text-charcoal-500 dark:text-cream-300 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
