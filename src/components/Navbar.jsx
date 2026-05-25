import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "../config/siteData";

export function Navbar({ onOpenBooking, isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section on scroll
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "home";
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section is roughly at the top of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "glass-navbar py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8 rounded-full border border-gold-500 flex items-center justify-center overflow-hidden">
              <span className="font-serif font-bold text-gold-600 dark:text-gold-400 group-hover:scale-110 transition-transform">S</span>
              <div className="absolute inset-0 bg-gold-500/10 scale-0 group-hover:scale-100 rounded-full transition-transform" />
            </div>
            <span className="font-serif text-xl font-bold tracking-wide text-charcoal-900 dark:text-cream-50 group-hover:text-gold-500 transition-colors">
              {siteData.companyName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold-500 hover-underline-gold pb-1 ${
                    isActive
                      ? "text-gold-600 dark:text-gold-400 after:w-full"
                      : "text-charcoal-700 dark:text-cream-200"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Area (Theme, CTA, Mobile menu button) */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full border border-gold-200/50 dark:border-gold-500/20 text-charcoal-700 dark:text-cream-200 hover:bg-gold-500/10 hover:text-gold-500 dark:hover:bg-gold-500/10 transition-all"
              aria-label="Toggle Theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </button>

            {/* Book Now CTA */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center gap-2 btn-gold text-xs uppercase tracking-wider font-semibold py-2.5 px-5"
            >
              <Calendar size={14} />
              Book Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal-700 dark:text-cream-200 hover:text-gold-500 transition-colors"
              aria-label="Open navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-navbar w-full overflow-hidden border-t border-gold-200/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block py-2.5 px-4 rounded-lg font-medium text-base transition-colors ${
                      isActive
                        ? "bg-gold-500/15 text-gold-600 dark:text-gold-400 font-semibold"
                        : "text-charcoal-700 dark:text-cream-200 hover:bg-gold-500/5 hover:text-gold-500"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-gold-200/10 px-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full btn-gold py-3 flex items-center justify-center gap-2 text-sm"
                >
                  <Calendar size={16} />
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
