import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'euclid-circular-a': ['Euclid Circular A']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        xl: '0'
      }
    },
    fontSize: {
      10: '0.625rem',
      11: '0.6875rem',
      12: '0.75rem',
      13: '0.8125rem',
      14: '0.875rem',
      15: '0.9375rem',
      16: '1rem',
      17: '1.0625rem',
      18: '1.125rem',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      26: '1.625rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      44: '2.75rem',
      48: '3rem',
      52: '3.25rem',
      56: '3.5rem'
    },
    lineHeight: {
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      44: '2.75rem',
      48: '3rem',
      52: '3.25rem',
      56: '3.5rem',
      60: '3.75rem',
      64: '4rem',
      '100p': '100%',
      '120p': '120%',
      '125p': '125%',
      '150p': '150%'
    },
    spacing: {
      0: '0rem',
      4: '0.25rem',
      6: '0.375rem',
      8: '0.5rem',
      10: '0.625rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      44: '2.75rem',
      48: '3rem'
    },
    opacity: {
      s: '0',
      m: '0.3',
      l: '0.5',
      xl: '0.7'
    },
    borderWidth: {
      DEFAULT: '1px',
      'weight-none': '0px',
      'weight-s': '0.5px',
      'weight-m': '1px',
      'weight-l': '1.5px'
    },
    borderRadius: {
      DEFAULT: '0.25rem',
      'radius-none': '0rem',
      'radius-s ': '0.25rem',
      'radius-m': '0.5rem',
      'radius-l': '0.75rem',
      'radius-xl': '1rem',
      'radius-xxl': '1.5rem'
    },
    boxShadow: {
      none: 'none',
      'down-xs': '0 2px 2px 0',
      'down-s': '0 2px 4px 0',
      'down-m': '0 4px 8px 0',
      'down-l': '0 4px 16px 0 , 0 8px 16px 0',
      'up-s': '0 -2px 4px 0',
      'up-m': '0 -4px 8px 0',
      'up-l': '0 -4px 16px 0 , 0 -8px 16px 0',
      'inner-bottom': 'inset 0 -1px 0 0',
      'inner-right': 'inset -1px 0 0 0',
      'inner-top': 'inset 0 1px 0 0',
      'inner-left': 'inset 1px 0 0 0',
      'inner-bottom-bottom+left': 'inset 1px -1px 0 0',
      'inner-bottom-bottom+right': 'inset -1px -1px 0 0'
    },
    colors: {
      grey: {
        50: 'rgb(253, 253, 253)', //#fdfdfd
        100: 'rgb(248, 248, 248)', //#f8f8f8
        200: 'rgb(244, 244, 244)', //#f4f4f4
        300: 'rgb(240, 240, 240)', //#f0f0f0
        400: 'rgb(237, 237, 237)', //#ededed
        500: 'rgb(232, 232, 232)', //#e8e8e8
        600: 'rgb(211, 211, 211)', //#d3d3d3
        700: 'rgb(165, 165, 165)', //#a5a5a5
        800: 'rgb(128, 128, 128)', //#808080
        900: 'rgb(97, 97, 97)' //#616161
      },
      dark: {
        50: 'rgb(235, 235, 235)',
        100: 'rgb(193, 193, 193)', //#c1c1c1
        200: 'rgb(163, 163, 163)', //#a3a3a3
        300: 'rgb(120, 120, 120)', //#787878
        400: 'rgb(94, 94, 94)', //#5e5e5e
        500: 'rgb(54, 54, 54)', //#363636
        600: 'rgb(49, 49, 49)', //#313131
        700: 'rgb(38, 38, 38)', //#262626
        800: 'rgb(30, 30, 30)', //#1e1e1e
        900: 'rgb(23, 23, 23)' //#171717
      },
      red: {
        50: 'rgb(255, 239, 243)', //#ffeff3
        100: 'rgb(255, 206, 218)', //#ffceda
        200: 'rgb(255, 183, 201)', //#ffb7c9
        300: 'rgb(254, 150, 176)', //#fe96b0
        400: 'rgb(254, 129, 161)', //#fe81a1
        500: 'rgb(254, 98, 137)', //#fe6289
        600: 'rgb(231, 89, 125)', //#e7597d
        700: 'rgb(180, 70, 97)', //#b44661
        800: 'rgb(140, 54, 75)', //#8c364b
        900: 'rgb(107, 41, 58)' //#6b293a
      },
      secondary_red: {
        50: 'rgb(253, 235, 235)', //#fdebeb
        100: 'rgb(248, 192, 192)', //#f8c0c0
        200: 'rgb(245, 161, 161)', //#f5a1a1
        300: 'rgb(240, 118, 118)', //#f07676
        400: 'rgb(237, 92, 92)', //#ed5c5c
        500: 'rgb(233, 51, 51)', //#e93333
        600: 'rgb(212, 46, 46)', //#d42e2e
        700: 'rgb(165, 36, 36)', //#a52424
        800: 'rgb(128, 28, 28)', //#801c1c
        900: 'rgb(98, 21, 21)' //#621515
      },
      primary_orange: {
        50: 'rgb(255, 247, 232)', //#fff7e8
        100: 'rgb(255, 229, 183)', //#ffe5b7
        200: 'rgb(255, 217, 149)', //#ffd995
        300: 'rgb(255, 199, 100)', //#ffc764
        400: 'rgb(255, 189, 70)', //#ffbd46
        500: 'rgb(255, 172, 24)', //#ffac18
        600: 'rgb(232, 157, 22)', //#e89d16
        700: 'rgb(181, 122, 17)', //#b57a11
        800: 'rgb(140, 95, 13)', //#8c5f0d
        900: 'rgb(107, 72, 10)' //#6b480a
      },
      blue_light: {
        50: 'rgb(230, 242, 255)', //#e6f2ff
        100: 'rgb(176, 214, 255)', //#b0d6ff
        200: 'rgb(138, 194, 255)', //#8ac2ff
        300: 'rgb(84, 167, 255)', //#54a7ff
        400: 'rgb(51, 149, 255)', //#3395ff
        500: 'rgb(0, 123, 255)', //#007bff
        600: 'rgb(0, 112, 232)', //#0070e8
        700: 'rgb(0, 87, 181)', //#0057b5
        800: 'rgb(0, 68, 140)', //#00448c
        900: 'rgb(0, 52, 107)' //#00346b
      },
      blue_dark: {
        50: 'rgb(230, 237, 244)', //#e6edf4
        100: 'rgb(176, 198, 222)', //#b0c6de
        200: 'rgb(138, 170, 206)', //#8aaace
        300: 'rgb(84, 132, 183)', //#5484b7
        400: 'rgb(51, 108, 169)', //#336ca9
        500: 'rgb(0, 71, 148)', //#004794
        600: 'rgb(0, 65, 135)', //#004187
        700: 'rgb(0, 50, 105)', //#003269
        800: 'rgb(0, 39, 81)', //#002751
        900: 'rgb(0, 30, 62)' //#001e3e
      },
      orange: {
        50: 'rgb(254, 240, 231)', //#fef0e7
        100: 'rgb(253, 209, 182)', //#fdd1b6
        200: 'rgb(252, 187, 146)', //#fcbb92
        300: 'rgb(250, 157, 96)', //#fa9d60
        400: 'rgb(249, 137, 65)', //#f98941
        500: 'rgb(248, 108, 18)', //#f86c12
        600: 'rgb(226, 98, 16)', //#e26210
        700: 'rgb(176, 77, 13)', //#b04d0d
        800: 'rgb(136, 59, 10)', //#883b0a
        900: 'rgb(104, 45, 8)' //#682d08
      }
    },
    screens: {
      desktop: { max: '1366px' },
      tablet: { max: '1024px' },
      mobile: { max: '640px' }
    },
    extend: {}
  },
  plugins: []
};
export default config;
