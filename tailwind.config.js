/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clinic-green': '#2D9C36',
        'clinic-green-dark': '#122F1B',
        'clinic-green-deep': '#091A0E',
        'clinic-green-hover': '#24862C',
        'clinic-green-light': '#3FC44A',
        'clinic-green-soft': '#EBF7EE',
        'clinic-green-surface': '#F4FAF5',
        'clinic-cream': '#FAF7F2',
        'clinic-cream-dark': '#F0EBE1',
        'clinic-gold': '#C5A880',
        'clinic-gold-light': '#DFCEB8',
        'clinic-slate': '#1E2B22',
        'clinic-muted': '#55695C',
      },
      fontFamily: {
        'serif-display': ['"Noto Serif Display"', 'Georgia', 'serif'],
        'sans-accent': ['Montserrat', 'sans-serif'],
        'body': ['Raleway', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(18, 47, 27, 0.06)',
        'elevated': '0 12px 35px -4px rgba(18, 47, 27, 0.08), 0 4px 12px -2px rgba(18, 47, 27, 0.04)',
        'luxury': '0 24px 60px -12px rgba(18, 47, 27, 0.12)',
        'inner-glow': 'inset 0 1px 2px rgba(255, 255, 255, 0.3)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
