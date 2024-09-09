/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from 'tailwindcss'

const DefaultColors = require('tailwindcss/colors')

delete DefaultColors.lightBlue
delete DefaultColors.warmGray
delete DefaultColors.trueGray
delete DefaultColors.coolGray
delete DefaultColors.blueGray

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        ...DefaultColors,
        head: '#353945'
      }
    }
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ]
}

export default config
