import React from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "../config/siteData";

// Inline Instagram SVG component
function InstagramIcon({ size = 24, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function InstagramPreview() {
  const feed = siteData.instagramFeed;
  const handle = "@sanathdeco";
  const url = siteData.contact.socials.find(s => s.name === "Instagram")?.url || "#";

  return (
    <section className="py-16 bg-cream-50 dark:bg-charcoal-900 border-t border-b border-gold-200/10 dark:border-gold-500/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title / Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal-900 dark:text-cream-100 flex items-center justify-center sm:justify-start gap-2">
              <InstagramIcon className="text-gold-500" size={24} />
              Follow Our Journey
            </h3>
            <p className="text-sm text-gold-600 dark:text-gold-400 font-semibold tracking-wide mt-1">
              {handle}
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-xs uppercase tracking-wider font-semibold py-2.5 px-6 inline-flex items-center gap-2"
          >
            <InstagramIcon size={14} />
            Follow on Instagram
          </a>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {feed.map((post) => (
            <motion.a
              key={post.id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-xl overflow-hidden group shadow-md border border-gold-200/10 dark:border-gold-500/5 bg-charcoal-900"
            >
              {/* Photo */}
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-10 flex items-center justify-center">
                <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
                  <Heart size={16} className="fill-red-500 text-red-500" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
