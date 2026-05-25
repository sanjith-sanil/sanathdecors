import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, Mail, Phone, User, MessageSquare, Sparkles } from "lucide-react";

export function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding",
    eventDate: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const eventTypes = [
    "Wedding",
    "Birthday Party",
    "Engagement",
    "Baby Shower",
    "Corporate Event",
    "Festival Decoration",
    "College Event",
    "Outdoor Event",
    "Other Celebration",
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.eventDate) newErrors.eventDate = "Please choose a date";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "Wedding",
        eventDate: "",
        message: "",
      });
      
      // Close modal after success animation
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white dark:bg-charcoal-900 shadow-2xl border border-gold-200/50 dark:border-gold-500/20 z-10"
          >
            {/* Top gold line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-charcoal-400 hover:text-gold-500 rounded-full hover:bg-gold-50/50 dark:hover:bg-charcoal-800 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="p-6 md:p-8">
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal-950 dark:text-cream-100 font-semibold flex items-center gap-2">
                      <Sparkles className="text-gold-500" size={24} />
                      Book Your Event Decor
                    </h3>
                    <p className="text-charcoal-500 dark:text-cream-300 text-sm mt-1">
                      Fill out this quick form and our design consultants will contact you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-charcoal-400" size={18} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sanjith Kumar"
                          className={`w-full pl-10 pr-4 py-2 bg-charcoal-50 dark:bg-charcoal-950 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all ${
                            errors.name ? "border-red-500" : "border-gold-100 dark:border-charcoal-800"
                          } text-charcoal-800 dark:text-cream-50`}
                        />
                      </div>
                      {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 text-charcoal-400" size={18} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={`w-full pl-10 pr-4 py-2 bg-charcoal-50 dark:bg-charcoal-950 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all ${
                              errors.email ? "border-red-500" : "border-gold-100 dark:border-charcoal-800"
                            } text-charcoal-800 dark:text-cream-50`}
                          />
                        </div>
                        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 text-charcoal-400" size={18} />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. +1 555 123 4567"
                            className={`w-full pl-10 pr-4 py-2 bg-charcoal-50 dark:bg-charcoal-950 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all ${
                              errors.phone ? "border-red-500" : "border-gold-100 dark:border-charcoal-800"
                            } text-charcoal-800 dark:text-cream-50`}
                          />
                        </div>
                        {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Event Type and Event Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">
                          Event Type
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-charcoal-50 dark:bg-charcoal-950 border border-gold-100 dark:border-charcoal-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all text-charcoal-800 dark:text-cream-50"
                        >
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">
                          Event Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 text-charcoal-400" size={18} />
                          <input
                            type="date"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-2 bg-charcoal-50 dark:bg-charcoal-950 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all ${
                              errors.eventDate ? "border-red-500" : "border-gold-100 dark:border-charcoal-800"
                            } text-charcoal-800 dark:text-cream-50`}
                          />
                        </div>
                        {errors.eventDate && <span className="text-red-500 text-xs mt-1 block">{errors.eventDate}</span>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">
                        Bespoke Requirements / Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-charcoal-400" size={18} />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your theme, guest count, or color preferences..."
                          rows="3"
                          className="w-full pl-10 pr-4 py-2 bg-charcoal-50 dark:bg-charcoal-950 border border-gold-100 dark:border-charcoal-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all text-charcoal-800 dark:text-cream-50"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-charcoal-950 font-semibold py-3 rounded-lg shadow-lg hover:shadow-gold-500/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                          Processing Inquiry...
                        </>
                      ) : (
                        "Send Inquiry"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <CheckCircle2 size={64} className="text-green-500 mb-4 animate-bounce" />
                  <h3 className="font-serif text-2xl font-semibold text-charcoal-950 dark:text-cream-100">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-charcoal-500 dark:text-cream-300 mt-2 max-w-sm">
                    Thank you for choosing Sanath Decors. Our design consultants will get in touch with you shortly.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
