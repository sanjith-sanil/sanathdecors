import React, { useState, useEffect } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { siteData } from "../config/siteData";

// Inline Instagram SVG
function InstagramIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Inline Facebook SVG
function FacebookIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// Inline Twitter SVG
function TwitterIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

// Inline Pinterest SVG
function PinterestIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    </svg>
  );
}

export function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e, id) => {
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

  // Social Icon map helper
  const renderSocialIcon = (name) => {
    switch (name) {
      case "Instagram":
        return <InstagramIcon size={18} />;
      case "Facebook":
        return <FacebookIcon size={18} />;
      case "Twitter":
        return <TwitterIcon size={18} />;
      case "Pinterest":
        return <PinterestIcon size={18} />;
      default:
        return <Sparkles size={18} />;
    }
  };

  return (
    <footer className="relative bg-charcoal-900 text-cream-100/90 pt-16 pb-8 transition-colors duration-300 border-t border-gold-200/10 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-charcoal-800">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full border border-gold-500 flex items-center justify-center">
                <span className="font-serif font-bold text-gold-400 text-sm">S</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-wide text-white">
                {siteData.companyName}
              </span>
            </a>
            <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed max-w-sm">
              Designing exclusive spaces, flower assemblies, and backdrop lighting coordinates. We turn celebrations into extraordinary, high-end visual stories.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {siteData.contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-charcoal-700 flex items-center justify-center text-cream-300 hover:text-charcoal-950 hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                  aria-label={`Follow Sanath Deco on ${social.name}`}
                >
                  {renderSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-white font-semibold text-base">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, "home")} className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  Home Banner
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "about")} className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "services")} className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#events" onClick={(e) => handleLinkClick(e, "events")} className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  Events Portfolio
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, "gallery")} className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  Gallery & Lightbox
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-white font-semibold text-base">Contact Details</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <span className="text-gold-400 font-semibold">Address:</span>
                <span className="text-cream-300/80 leading-relaxed">{siteData.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold-400 font-semibold">Phone:</span>
                <a href={`tel:${siteData.contact.phone}`} className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold-400 font-semibold">Email:</span>
                <a href={`mailto:${siteData.contact.email}`} className="text-cream-300/80 hover:text-gold-400 transition-colors break-all">
                  {siteData.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/60 text-center">
          <p>© {new Date().getFullYear()} {siteData.companyName}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-10 h-10 bg-gold-500 hover:bg-gold-600 text-charcoal-950 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 hover:-translate-y-1 z-35"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
