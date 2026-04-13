import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#f5efe3',
          dark: '#0f1720',
        },
        ink: {
          DEFAULT: '#162033',
          muted: '#4f5e75',
          dark: '#e5ecf6',
          'dark-muted': '#93a4bc',
        },
        accent: {
          DEFAULT: '#c25b2a',
          soft: '#f2c98b',
          dark: '#f29b4b',
        },
        success: {
          DEFAULT: '#1f8f55',
          soft: '#dff4e7',
          dark: '#50d08b',
        },
        border: {
          DEFAULT: '#d7c8b1',
          dark: '#223041',
        },
        panel: {
          DEFAULT: '#fffaf0',
          dark: '#15202d',
        },
      },
      boxShadow: {
        panel: '0 18px 40px -28px rgba(22, 32, 51, 0.4)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [typography],
}

export default config
