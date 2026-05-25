/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF4',
          100: '#FAF4DE',
          200: '#F2E5B3',
          300: '#E6CF82',
          400: '#DAB852',
          500: '#D4AF37', // Brand Luxury Gold
          600: '#B89326',
          700: '#94721C',
          800: '#705417',
          900: '#523C13',
          950: '#33240A',
        },
        cream: {
          50: '#FDFDFB',
          100: '#FCFBF7', // Brand Luxury Cream
          200: '#F7F4EA',
          300: '#EFEADB',
          400: '#DFD5BE',
          500: '#C9B896',
          600: '#AA9571',
          700: '#8F7855',
          800: '#756041',
          900: '#5C4A33',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#CFCFCF',
          300: '#A9A9A9',
          400: '#7D7D7D',
          500: '#5B5B5B',
          600: '#464646',
          700: '#333333',
          800: '#1A1A1A', // Brand Deep Charcoal
          900: '#0F0F0F',
          950: '#0A0A0A', // Brand Obsidian Black
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
