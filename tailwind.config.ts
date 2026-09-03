import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0e27',
        'dark-secondary': '#1a1f3a',
        'electric-blue': '#0080ff',
        'cyan': '#00d9ff',
        'violet': '#7c3aed',
        'accent': '#00d9ff',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 217, 255, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
