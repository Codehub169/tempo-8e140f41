/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0a0a0a',
        'surface': '#141414',
        'border': '#262626',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a3a3a3',
        'accent': '#00aaff', // From sample HTML, preferred over plan's #0078D4 for visual consistency
        'accent-glow': 'rgba(0, 170, 255, 0.3)',
        'green': '#00ff9d',
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
