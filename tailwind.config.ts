/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from 'tailwindcss'

const DefaultColors = require('tailwindcss/colors')

delete DefaultColors.lightBlue
delete DefaultColors.warmGray
delete DefaultColors.trueGray
delete DefaultColors.coolGray
delete DefaultColors.blueGray

const JJUColors = {
  blue: '#0078AD',
  gold: '#CAAE65',
  black: '#231816',
  silver: '#CACFD3',
  coolGray: '#AAABA5',
  orange: '#D1906A',
  yellow: '#F6D200',
  violet: '#8F7EAB',
  green: '#83B093',
  steps: {
    from: '#014B8C',
    to: '#02ABEE'
  }
}

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
        head: '#353945',
        jju: JJUColors
      }
    }
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ]
}

export default config
