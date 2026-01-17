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
        'f1-red': '#E10600',
        'f1-orange': '#FF1801',
        'f1-gold': '#FFD700',
        'f1-telemetry-green': '#00D2BE',
        'f1-telemetry-yellow': '#FFB800',
        'f1-telemetry-red': '#E10600',
        'track-gray': '#1F1F1F',
        'track-light': '#F4F4F4',
        'bg-dark': '#0A0A0A',
        'bg-light': '#FAFAFA',
      },
      fontFamily: {
        'racing': ['Orbitron', 'Rajdhani', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
