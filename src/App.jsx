import React, { useState } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Events } from "./components/Events";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { InstagramPreview } from "./components/InstagramPreview";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
  const { isDark, toggleTheme } = useDarkMode();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      {/* Navigation bar */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Page Sections */}
      <main className="flex-grow">
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <About />
        <Services />
        <Events onOpenBooking={() => setIsBookingOpen(true)} />
        <Gallery />
        <Testimonials />
        <InstagramPreview />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Overlays */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
