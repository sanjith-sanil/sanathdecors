// Centralized site configuration and content for Sanath Decors

export const siteData = {
  companyName: "Sanath Decors",
  tagline: "Crafting Luxurious Spaces for Your Unforgettable Moments",
  shortDesc: "Premium event decoration and design services tailored for weddings, corporate galas, engagements, luxury birthdays, and bespoke celebrations.",
  
  about: {
    title: "Artistry in Every Detail",
    subtitle: "About Sanath Decors",
    story: "For over a decade, Sanath Decors has been the premier choice for luxury event production and styling. We turn ordinary venues into extraordinary visual narratives. Based on creativity, meticulous attention to detail, and a passion for elegance, our designs evoke emotions and leave an enduring mark on you and your guests.",
    mission: "To seamlessly orchestrate and design unforgettable experiences with unparalleled aesthetics, personalized details, and professional execution.",
    vision: "To set global benchmarks in luxury event design, inspiring celebrations with cutting-edge concepts and timeless refinement.",
    stats: [
      { id: "years", value: 12, suffix: "+", label: "Years of Excellence" },
      { id: "events", value: 1500, suffix: "+", label: "Events Styled" },
      { id: "themes", value: 80, suffix: "+", label: "Bespoke Themes" },
      { id: "clients", value: 99, suffix: "%", label: "Client Satisfaction" }
    ]
  },

  contact: {
    phone: "+1 (555) 726-2843",
    email: "design@sanathdeco.com",
    address: "742 Luxe Boulevard, Suite 100, Beverly Hills, CA 90210",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.2605910375685!2d-118.40578652431627!3d34.07567547314781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d60d36cb%3A0xd6ef2b19280d0d57!2sRodeo%20Dr%2C%20Beverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    whatsappNumber: "15557262843", // WhatsApp API format (no symbols)
    whatsappMessage: "Hello Sanath Decors, I would like to inquire about booking your decoration services for an upcoming event.",
    socials: [
      { name: "Instagram", url: "https://instagram.com/sanathdeco", icon: "Instagram" },
      { name: "Facebook", url: "https://facebook.com/sanathdeco", icon: "Facebook" },
      { name: "Pinterest", url: "https://pinterest.com/sanathdeco", icon: "Pinterest" },
      { name: "Twitter", url: "https://twitter.com/sanathdeco", icon: "Twitter" }
    ]
  },

  heroSlides: [
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80",
      title: "Luxury Wedding Backdrops",
      subtitle: "Experience the romance of floral installations and glowing crystal stages."
    },
    {
      image: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=1920&q=80",
      title: "Exquisite Reception Tables",
      subtitle: "Bespoke centerpieces, custom tableware, and theatrical mood lighting."
    },
    {
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1920&q=80",
      title: "Enchanted Outdoor Ceremomes",
      subtitle: "Say your vows beneath hand-crafted arches framed by nature's beauty."
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80",
      title: "Prestige Corporate Galas",
      subtitle: "Immersive branding decor and sophisticated modern stage designs."
    }
  ],

  events: [
    {
      id: "weddings",
      title: "Wedding Decorations",
      description: "Grand mandaps, royal stages, cascading blooms, and fairytale aisles crafted for your special day.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      tag: "Wedding"
    },
    {
      id: "birthdays",
      title: "Birthday Parties",
      description: "From luxury kids themes to elegant adult milestone parties, we design sets that spark absolute joy.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      tag: "Birthday"
    },
    {
      id: "engagements",
      title: "Engagements",
      description: "Elegantly styled intimate backdrops, floral photo booths, and ring exchange platforms.",
      image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80",
      tag: "Engagement"
    },
    {
      id: "baby-showers",
      title: "Baby Showers",
      description: "Whimsical pastel settings, dreamy cloud installations, and beautiful seating arrangements.",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
      tag: "Shower"
    },
    {
      id: "corporate",
      title: "Corporate Events",
      description: "Executive lounge styling, stage podium backdrops, and awards ceremony brand-consistent layouts.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      tag: "Corporate"
    },
    {
      id: "festivals",
      title: "Festival Decorations",
      description: "Traditional floral installations, hanging marigolds, festive lanterns, and grand venue transformations.",
      image: "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?auto=format&fit=crop&w=800&q=80",
      tag: "Festival"
    },
    {
      id: "college",
      title: "College Events",
      description: "High-energy festival stages, colorful backdrops, photo walls, and dynamic concert lighting structures.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      tag: "College"
    },
    {
      id: "outdoor",
      title: "Outdoor Events",
      description: "Fairy-light canopies, rustic picnic styles, and waterproof marquee layouts under the stars.",
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80",
      tag: "Outdoor"
    }
  ],

  services: [
    {
      id: "floral",
      title: "Floral Decoration",
      description: "Custom arrangements with fresh orchids, roses, hydrangeas, and trailing foliage styled into arches and table settings.",
      icon: "Flower"
    },
    {
      id: "stage",
      title: "Stage Decoration",
      description: "Magnificent visual centerpieces utilizing premium drapery, custom geometry, LED backlighting, and structural panels.",
      icon: "Sparkles"
    },
    {
      id: "balloon",
      title: "Balloon Decoration",
      description: "Modern organic balloon arches, luxury balloon garlands, custom color palettes, and helium styling options.",
      icon: "CircleDot"
    },
    {
      id: "lighting",
      title: "Lighting Setup",
      description: "Intelligent ambient lighting, Edison bulb drops, crystal chandeliers, fairy-light tunnels, and spot uplighting.",
      icon: "Lightbulb"
    },
    {
      id: "theme",
      title: "Theme Decoration",
      description: "From Vintage Boho to Royal Palace or Ultra-Modern Retro, we construct immersive setups tailored to specific themes.",
      icon: "Palette"
    },
    {
      id: "mandap",
      title: "Mandap Decoration",
      description: "Traditional and contemporary wedding structures styled with sacred geometries, marigold strings, and brass accents.",
      icon: "HeartHandshake"
    },
    {
      id: "entrance",
      title: "Entrance Decoration",
      description: "Create an unforgettable first impression with red carpets, candle walkways, floral arches, and welcoming sign boards.",
      icon: "DoorOpen"
    }
  ],

  gallery: [
    {
      id: 1,
      category: "weddings",
      title: "Royal Crimson Mandap",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      category: "weddings",
      title: "Ethereal Crystal Dinner",
      image: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      category: "birthdays",
      title: "Pastel Balloon Canopy",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      category: "birthdays",
      title: "Luxury Gold Glow",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      category: "corporate",
      title: "Executive Keynote Setups",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      category: "weddings",
      title: "Garden Archway Vows",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      category: "festivals",
      title: "Marquee Tent Fairy Forest",
      image: "https://images.unsplash.com/photo-1505232458627-5ec9c8db6d69?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      category: "festivals",
      title: "Traditional Lights Canopy",
      image: "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      category: "corporate",
      title: "Bespoke Corporate Panels",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      category: "weddings",
      title: "Warm Chandelier Lounge",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      category: "birthdays",
      title: "Intimate High-Tea Setup",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      category: "corporate",
      title: "Bistro Al Fresco Dinner",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Victoria & David",
      role: "Wedding Clients",
      quote: "Sanath Deco made our wedding look like an absolute dream. The mandap was breathtaking, and the table decorations were so classy. Our guests haven't stopped talking about it!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      name: "Marcus Aurelius",
      role: "Corporate Coordinator",
      quote: "Very professional team. They executed our annual gala styling flawlessly, strictly matching our company brand colors and bringing a modern architectural feel to the stage.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      name: "Samantha Lopez",
      role: "Milestone Birthday Client",
      quote: "The balloon structures they created for my mother's 60th birthday were incredibly artistic. Not just balloons, but actual sculptural art with beautiful pastel color combinations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 4,
      name: "Daniel Craig",
      role: "Engagement Ceremony",
      quote: "Excellent communication, flexible to requests, and they delivered exactly what was promised. The floral photo booth was a major hit at the engagement dinner.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ],

  instagramFeed: [
    { id: 1, image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=80", likes: "1.2k" },
    { id: 2, image: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=500&q=80", likes: "840" },
    { id: 3, image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=500&q=80", likes: "2.1k" },
    { id: 4, image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=500&q=80", likes: "956" },
    { id: 5, image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80", likes: "1.5k" },
    { id: 6, image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=500&q=80", likes: "1.1k" }
  ]
};
