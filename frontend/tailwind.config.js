/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'],
        spacemono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        background: '#000000',
        text: '#ffffff',
        cta: '#1DFFAB',
      },
    },
  },
  plugins: [],
}
