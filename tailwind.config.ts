import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'rcc-blue': {
          light: '#E3F2FD',
          DEFAULT: '#0087D5',
          dark: '#005A91',
        },
        'rcc-navy': '#0A1128',
      },
      backgroundColor: {
        'rcc-bg': '#F8FAFC',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 135, 213, 0.1)',
        'glass-hover': '0 8px 32px 0 rgba(0, 135, 213, 0.2)',
      },
      backgroundImage: {
        'mesh': 'radial-gradient(at 0% 0%, hsla(203, 100%, 95%, 1) 0, transparent 50%), radial-gradient(at 100% 100%, hsla(203, 100%, 90%, 1) 0, transparent 50%)',
      },
    },
  },
  plugins: [],
};
export default config;
