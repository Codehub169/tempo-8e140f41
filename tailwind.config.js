/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0F172A', // Slate 900
        'surface': '#1E293B', // Slate 800
        'border': '#334155', // Slate 700
        'text-primary': '#F1F5F9', // Slate 100
        'text-secondary': '#94A3B8', // Slate 400
        'accent': '#38BDF8', // Sky 400
        'accent-glow': 'rgba(56, 189, 248, 0.3)', // Sky 400 with opacity
        'green': '#22C55E', // Green 500
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'], // As per project plan
        mono: ['Fira Code', 'monospace'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          'xl': '1120px', // Matches --container-width from sample
        }
      },
      height: {
        'nav': '70px', // Matches --nav-height from sample
      }
    },
  },
  plugins: [],
}
