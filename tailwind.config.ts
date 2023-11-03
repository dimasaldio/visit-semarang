const plugin:any = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.25)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }:any) => {
      const newUtilities:any = {}
      Object.keys(theme('textShadow')).forEach((key) => {
        newUtilities[`.text-shadow-${key}`] = {
          'text-shadow': theme(`textShadow.${key}`),
        }
      })
      addUtilities(newUtilities, ['hover'])
    }),
  ],
}
