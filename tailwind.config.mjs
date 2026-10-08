/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0B1F3A', // Deep professional navy
            dark: '#071527',
            light: '#163056',
          },
          blue: {
            DEFAULT: '#1E5388', // Technical cool blue
            hover: '#16426F',
            light: '#EBF3FB',
          },
          ice: {
            DEFAULT: '#0284C7', // Vivid ice/sky accent
            hover: '#0369A1',
            light: '#F0F9FF',
          },
          surface: {
            DEFAULT: '#F8FAFC', // Very light cool neutral
            alt: '#F1F5F9',
            card: '#FFFFFF',
          },
          text: {
            DEFAULT: '#0F172A', // Dark charcoal/slate
            muted: '#475569',
            subtle: '#64748B',
          },
          border: {
            DEFAULT: '#E2E8F0',
            subtle: '#F1F5F9',
          },
          whatsapp: {
            DEFAULT: '#25D366',
            hover: '#20BA5A',
            dark: '#128C7E',
          },
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
      },
      boxShadow: {
        soft: '0 1px 3px 0 rgba(11, 31, 58, 0.05), 0 1px 2px -1px rgba(11, 31, 58, 0.05)',
        card: '0 4px 6px -1px rgba(11, 31, 58, 0.07), 0 2px 4px -2px rgba(11, 31, 58, 0.05)',
        hover: '0 10px 15px -3px rgba(11, 31, 58, 0.1), 0 4px 6px -4px rgba(11, 31, 58, 0.08)',
        sticky: '0 -4px 12px rgba(11, 31, 58, 0.1)',
      },
      minHeight: {
        touch: '48px',
      },
      minWidth: {
        touch: '48px',
      },
    },
  },
  plugins: [],
};
