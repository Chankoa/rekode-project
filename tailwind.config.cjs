/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'
  ],
  theme: {
    extend: {
      fontSize: {
        xl: ['var(--text-xl)', { lineHeight: '1.12', letterSpacing: '-0.03em' }],
        '2xl': ['var(--text-2xl)', { lineHeight: '1.08', letterSpacing: '-0.035em' }],
        '3xl': ['var(--text-3xl)', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        '4xl': ['var(--text-4xl)', { lineHeight: '0.98', letterSpacing: '-0.045em' }],
        '5xl': ['var(--text-5xl)', { lineHeight: '0.94', letterSpacing: '-0.05em' }]
      },
      colors: {
        accent: '#ff4d00',
        bg: '#fdfcf7',
        text: '#1a1a1a'
      },
      borderRadius: {
        md: '0.75rem'
      }
    }
  },
  plugins: []
};
