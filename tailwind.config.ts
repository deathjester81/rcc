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
          DEFAULT: '#90CAF9',
          dark: '#1976D2',
        },
      },
      backgroundColor: {
        'rcc-bg': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
