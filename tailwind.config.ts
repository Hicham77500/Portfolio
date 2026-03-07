import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: 'var(--color-bg-primary)',
          800: 'var(--color-bg-secondary)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          raised: 'var(--color-surface-raised)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          soft: 'var(--color-accent-soft)',
        },
        border: 'var(--color-border)',
        focus: 'var(--color-focus)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        inset: 'var(--shadow-inset)',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)',
      },
      transitionTimingFunction: {
        smooth: 'var(--motion-easing-standard)',
      },
      transitionDuration: {
        xs: 'var(--motion-duration-xs)',
        sm: 'var(--motion-duration-sm)',
        DEFAULT: 'var(--motion-duration-md)',
        lg: 'var(--motion-duration-lg)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
