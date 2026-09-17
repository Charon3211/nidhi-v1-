import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0d',
        panel: '#121216',
        line: '#26262d',
        cloud: '#f3f1eb',
        signal: '#c9f56a',
        muted: '#8f8d96',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(201, 245, 106, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
