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
            dark: '#071527',    // Ultra-deep contrast navy
            light: '#163056',
            surface: '#0F2748',
          },
          blue: {
            DEFAULT: '#1E5388', // Technical cool blue
            hover: '#16426F',
            light: '#EBF3FB',
            vibrant: '#2563EB',
          },
          ice: {
            DEFAULT: '#0284C7', // Vivid ice/sky accent
            hover: '#0369A1',
            light: '#F0F9FF',
            glow: '#38BDF8',
          },
          surface: {
            DEFAULT: '#F8FAFC', // Very light cool neutral
            alt: '#F1F5F9',
            card: '#FFFFFF',
            dark: '#0B1F3A',
          },
          text: {
            DEFAULT: '#0F172A', // Dark charcoal/slate
            muted: '#475569',
            subtle: '#64748B',
            onDark: '#F8FAFC',
            onDarkMuted: '#94A3B8',
          },
          border: {
            DEFAULT: '#E2E8F0',
            subtle: '#F1F5F9',
            dark: '#1E3A5F',
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
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Manrope',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 1px 3px 0 rgba(11, 31, 58, 0.05), 0 1px 2px -1px rgba(11, 31, 58, 0.05)',
        card: '0 4px 6px -1px rgba(11, 31, 58, 0.07), 0 2px 4px -2px rgba(11, 31, 58, 0.05)',
        hover: '0 12px 24px -4px rgba(11, 31, 58, 0.12), 0 6px 12px -4px rgba(11, 31, 58, 0.06)',
        darkCard: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
        sticky: '0 -4px 16px rgba(11, 31, 58, 0.08)',
        iceGlow: '0 0 25px rgba(2, 132, 199, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        floatDelayed: 'float 5s ease-in-out 2.5s infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
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
