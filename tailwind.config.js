/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // dourado metálico
          light: '#FFEA00',   // amarelo vibrante
          dark: '#B8860B',    // dourado escuro
        },
        secondary: {
          DEFAULT: '#000000', // preto
          light: '#1A1A1A',   // cinza carvão
          dark: '#0A0A0A',    // preto profundo
        },
        neutral: {
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#1e1e1e', // fundo escuro metalizado
          900: '#0a0a0a', // preto absoluto para alta sofisticação
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}