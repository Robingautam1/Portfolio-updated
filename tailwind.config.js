/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        accent: 'var(--color-accent)',
        brand: 'var(--color-brand)',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
          edtech: 'var(--color-card-edtech)',
          fintech: 'var(--color-card-fintech)',
          growth: 'var(--color-card-growth)',
          analytics: 'var(--color-card-analytics)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        // ... keeping other shadcn tokens if needed, but overriding main ones
      },
      fontFamily: {
        sans: ['Geist Sans', 'sans-serif'],
        serif: ['Newsreader', 'serif'],
        mono: ['SF Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        marquee: 'marquee 30s linear infinite',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 1, 0.5, 1)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
