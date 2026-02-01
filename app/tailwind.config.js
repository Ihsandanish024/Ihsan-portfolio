/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        bg: '#0F172A',
    section: '#111827',
    card: '#1E293B',

    primary: '#3B82F6',
    primaryHover: '#2563EB',

    accent: '#22C55E',
    accentHover: '#16A34A',

    danger: '#EF4444',
    dangerHover: '#DC2626',
      }
    },
  },
  plugins: [],
}
