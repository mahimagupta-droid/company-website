// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {

      colors: {
        brand: {
          DEFAULT: '#E8621C',   // bg-brand, text-brand, border-brand
          light:   '#FF7B35',   // hover: bg-brand-light
          dark:    '#B34A10',   // active: bg-brand-dark
          dim:     'rgba(232,98,28,0.12)',
          border:  'rgba(232,98,28,0.25)',
        },
        bg: {
          base:    '#0D0D0D',   // bg-bg-base
          raised:  '#141414',   // bg-bg-raised
          card:    '#1A1A1A',   // bg-bg-card
          subtle:  '#222222',   // bg-bg-subtle
          hover:   '#2C2C2C',   // hover:bg-bg-hover
        },
        content: {
          primary:   '#F5F5F5',  // text-content-primary
          secondary: '#A8A8A8',  // text-content-secondary
          muted:     '#5A5A5A',  // text-content-muted
          onbrand:   '#FFFFFF',   // text-content-onbrand
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          hover:   'rgba(255,255,255,0.14)',
          strong:  'rgba(255,255,255,0.20)',
        },
      },

      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['Space Mono', 'monospace'],
      },

      borderRadius: {
        sm:   '4px',
        md:   '8px',
        lg:   '12px',
        xl:   '16px',
        full: '9999px',
      },

      backgroundColor: ({ theme }) => ({
        ...theme('colors'),
        DEFAULT: '#0D0D0D',
      }),

    },
  },
  plugins: [],
};