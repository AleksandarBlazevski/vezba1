/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366F1', // Indigo
          dark: '#818CF8',
        },
        secondary: {
          light: '#0F172A', // Slate
          dark: '#F8FAFC',
        },
        background: {
          light: '#ffffff',
          dark: '#0F172A',
        },
        accent: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
          pink: '#EC4899',
        }
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(to right bottom, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
