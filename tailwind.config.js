module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    fontFamily: {
      'sans': ['Public Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'monospace': 'IBM Plex Mono, ui-mono, monospace'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
}
