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
        hover: '0 16px 32px -4px rgba(11, 31, 58, 0.12), 0 8px 16px -4px rgba(11, 31, 58, 0.06)',
        elevated: '0 24px 48px -12px rgba(11, 31, 58, 0.18), 0 12px 24px -6px rgba(11, 31, 58, 0.08)',
        'card-elevated': '0 20px 40px -12px rgba(11, 31, 58, 0.12), 0 1px 3px rgba(11, 31, 58, 0.05)',
        darkCard: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
        sticky: '0 -4px 20px rgba(11, 31, 58, 0.12)',
        dock: '0 12px 36px -4px rgba(11, 31, 58, 0.28), 0 4px 12px -2px rgba(11, 31, 58, 0.12)',
        iceGlow: '0 0 25px rgba(2, 132, 199, 0.35)',
        iceGlowLg: '0 0 50px rgba(56, 189, 248, 0.25)',
        'glow-ice': '0 0 30px -5px rgba(2, 132, 199, 0.3)',
        'glow-cyan': '0 0 40px -10px rgba(56, 189, 248, 0.45)',
        'glow-dark': '0 20px 40px -15px rgba(7, 21, 39, 0.7)',
        glass: '0 8px 32px 0 rgba(11, 31, 58, 0.08)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(0.4deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(7px) rotate(-0.4deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-6px) translateX(4px)' },
        },
        auroraSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.96)' },
        },
        glareSweep: {
          '0%, 100%': { opacity: '0', transform: 'translateX(-100%) rotate(25deg)' },
          '15%': { opacity: '0.6', transform: 'translateX(200%) rotate(25deg)' },
          '16%, 99%': { opacity: '0', transform: 'translateX(200%) rotate(25deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        radarPulse: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '70%': { transform: 'scale(2.2)', opacity: '0' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        spinSlow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        floatDelayed: 'floatDelayed 5s ease-in-out 2.5s infinite',
        'float-1': 'float1 6s ease-in-out infinite',
        'float-2': 'float2 7s ease-in-out 1.2s infinite',
        'float-3': 'float3 8s ease-in-out 2.4s infinite',
        aurora: 'auroraSlow 14s ease-in-out infinite',
        glare: 'glareSweep 8s ease-in-out infinite',
        marquee: 'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeReverse 35s linear infinite',
        'marquee-fast': 'marquee 22s linear infinite',
        'marquee-fast-reverse': 'marqueeReverse 22s linear infinite',
        radar: 'radarPulse 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        spinSlow: 'spinSlow 20s linear infinite',
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
