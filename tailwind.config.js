/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0E7BE6',
          50: '#EAF3FE',
          100: '#D6E8FD',
          200: '#AFD1FB',
          300: '#7DB5F7',
          400: '#4796F0',
          500: '#0E7BE6',
          600: '#0A5DB0',
          700: '#084A8C',
          800: '#073D73',
          900: '#0A2F55',
        },
        accent: {
          DEFAULT: '#16B378',
          soft: '#E5F7EF',
        },
        gold: {
          DEFAULT: '#FF8A1F',
          soft: '#FFF1E2',
        },
        ink: {
          DEFAULT: '#1A2431',
          muted: '#5B6B7B',
          faint: '#8FA0B0',
        },
        line: '#E6ECF3',
        surface: '#F4F7FB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(16, 42, 77, 0.06)',
        card: '0 8px 30px rgba(16, 42, 77, 0.08)',
        lift: '0 18px 50px rgba(14, 123, 230, 0.18)',
        glow: '0 10px 40px rgba(14, 123, 230, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #0E7BE6 0%, #0A5DB0 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0A5DB0 0%, #0E7BE6 55%, #2E9BF5 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%)' },
          '60%, 100%': { transform: 'translateX(220%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        shine: 'shine 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
