import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "../config/siteData";

export function Contact() {
  const { phone, email, address, mapsEmbedUrl, whatsappNumber, whatsappMessage } = siteData.contact;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-charcoal-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h4 className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-gold-600 dark:text-gold-400 mb-2">
            Get In Touch
          </h4>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 dark:text-cream-100">
            Contact Sanath Decors
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-cream-300 mt-4 max-w-xl mx-auto leading-relaxed">
            Let's discuss how we can elevate your upcoming luxury celebration. Reach out to schedule a consultation.
          </p>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Info Cards & Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6 mb-8">
              
              {/* Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-100/50 dark:bg-charcoal-950/40 border border-gold-200/10 dark:border-gold-500/5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal-500 dark:text-cream-400 mb-1">Call Us</h4>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="font-serif text-lg font-bold text-charcoal-900 dark:text-cream-50 hover:text-gold-500 transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-100/50 dark:bg-charcoal-950/40 border border-gold-200/10 dark:border-gold-500/5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal-500 dark:text-cream-400 mb-1">Email Us</h4>
                  <a href={`mailto:${email}`} className="font-serif text-lg font-bold text-charcoal-900 dark:text-cream-50 hover:text-gold-500 transition-colors break-all">
                    {email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-100/50 dark:bg-charcoal-950/40 border border-gold-200/10 dark:border-gold-500/5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal-500 dark:text-cream-400 mb-1">Visit Office</h4>
                  <p className="font-serif text-sm font-semibold text-charcoal-800 dark:text-cream-100 leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

            </div>

            {/* Google Maps Embed Container */}
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md border border-gold-200/30 dark:border-gold-500/10 relative">
              <iframe
                title="Office Location Map"
                src={mapsEmbedUrl}
                className="absolute inset-0 w-full h-full border-0 grayscale dark:invert-[0.9] dark:hue-rotate-185"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden border border-gold-200/50 dark:border-gold-500/10 shadow-xl">
              
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-semibold text-charcoal-900 dark:text-cream-100">Send us a Message</h3>
                <p className="text-xs sm:text-sm text-charcoal-500 dark:text-cream-300 mt-1">
                  Have quick questions? Let us know, or use the direct WhatsApp link.
                </p>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sanjith Kumar"
                      className={`w-full px-4 py-2.5 bg-charcoal-50 dark:bg-charcoal-950 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all ${
                        errors.name ? "border-red-500" : "border-gold-100 dark:border-charcoal-850"
                      } text-charcoal-800 dark:text-cream-50 text-sm`}
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +1 555 123 4567"
                        className={`w-full px-4 py-2.5 bg-charcoal-50 dark:bg-charcoal-950 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all ${
                          errors.phone ? "border-red-500" : "border-gold-100 dark:border-charcoal-850"
                        } text-charcoal-800 dark:text-cream-50 text-sm`}
                      />
                      {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-2.5 bg-charcoal-50 dark:bg-charcoal-950 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all ${
                          errors.email ? "border-red-500" : "border-gold-100 dark:border-charcoal-850"
                        } text-charcoal-800 dark:text-cream-50 text-sm`}
                      />
                      {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share details of your decoration requirements..."
                      rows="4"
                      className={`w-full px-4 py-2.5 bg-charcoal-50 dark:bg-charcoal-950 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all ${
                        errors.message ? "border-red-500" : "border-gold-100 dark:border-charcoal-850"
                      } text-charcoal-800 dark:text-cream-50 text-sm`}
                    />
                    {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>}
                  </div>

                  {/* Buttons (Submit / WhatsApp) */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-charcoal-950 font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-gold-500/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="flex-1 border border-emerald-500 hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all text-sm"
                    >
                      <MessageSquare size={16} />
                      Chat on WhatsApp
                    </button>
                  </div>

                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle size={56} className="text-emerald-500 mb-4 animate-bounce" />
                  <h4 className="font-serif text-2xl font-bold text-charcoal-900 dark:text-cream-100">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-charcoal-500 dark:text-cream-450 mt-2 max-w-sm">
                    Thank you. Your message has been sent successfully. One of our design coordinators will follow up with you shortly.
                  </p>
                </motion.div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
