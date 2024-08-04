import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        lineClamp: {
            11: '11',
          },
        fontFamily: {
            arimo: ['var(--font-arimo)'],
        }
    },
    
    screens: {
        'mobile-s': '400px',
        'mobile-m': '501px',
        'tablet': '900px',
    },
  },
  plugins: [],
};
export default config;
