module.exports = {
  mode: 'jit',
  purge: [
    './resources/views/**/*.php',
  ],
  /**
   * Plugin/class prefix to avoid conflicts.
   */
  // prefix: '-',
  /**
   * WordPress wp-admin theme.
   */
  theme: {
    /**
     * Breakpoints
     * 
     * Derived from `@wordpress/viewport`.
     * 
     * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-viewport/
     */
    screens: {
      'xs': '480px',
      'sm': '600px',
      'md': '782px',
      'lg': '960px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    /**
     * Fonts
     * 
     * Derived from WordPress wp-admin font families, no serif font exists.
     */
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif'],
      'mono': ['monospace'],
    },
    fontSize: {
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '20': '20px',
      '23': '23px',
    },
    fontWeight: {
      'normal': 400,
      'medium': 500,
      'bold': 600,
    },
    /**
     * Colors
     * 
     * Derived from WordPress 5.7 simplified colors.
     * 
     * @link https://make.wordpress.org/core/2021/02/23/standardization-of-wp-admin-colors-in-wordpress-5-7/
     * @link https://codepen.io/ryelle/full/WNGVEjw
     */
    colors: {
      'primary': 'var(--wp-admin-theme-color-1)',
      'secondary': 'var(--wp-admin-theme-color-2)',
      'gray-0': '#f6f7f7',
      'gray-2': '#f0f0f1',
      'gray-5': '#dcdcde',
      // 'gray-10': '#c3c4c7',
      // 'gray-20': '#a7aaad',
      // 'gray-30': '#8c8f94',
      'gray-40': '#787c82',
      // 'gray-50': '#646970',
      // 'gray-60': '#50575e',
      // 'gray-70': '#3c434a',
      // 'gray-80': '#2c3338',
      'gray-90': '#1d2327',
      // 'gray-100': '#101517',
      'white': '#fff',
      'black': '#000',
      /*
      'blue-0': '#f0f6fc',
      'blue-5': '#c5d9ed',
      'blue-10': '#9ec2e6',
      'blue-20': '#72aee6',
      'blue-30': '#4f94d4',
      'blue-40': '#3582c4',
      'blue-50': '#2271b1',
      'blue-60': '#135e96',
      'blue-70': '#0a4b78',
      'blue-80': '#043959',
      'blue-90': '#01263a',
      'blue-100': '#00131c',
      'red-0': '#fcf0f1',
      'red-5': '#facfd2',
      'red-10': '#ffabaf',
      'red-20': '#ff8085',
      'red-30': '#f86368',
      'red-40': '#e65054',
      'red-50': '#d63638',
      'red-60': '#b32d2e',
      'red-70': '#8a2424',
      'red-80': '#691c1c',
      'red-90': '#451313',
      'red-100': '#240a0a',
      'yellow-0': '#fcf9e8',
      'yellow-5': '#f5e6ab',
      'yellow-10': '#f2d675',
      'yellow-20': '#f0c33c',
      'yellow-30': '#dba617',
      'yellow-40': '#bd8600',
      'yellow-50': '#996b00',
      'yellow-60': '#755100',
      'yellow-70': '#614200',
      'yellow-80': '#4a3200',
      'yellow-90': '#362400',
      'yellow-100': '#211600',
      'green-0': '#edfaef',
      'green-5': '#b8e6bf',
      'green-10': '#68de7c',
      'green-20': '#1ed14b',
      'green-30': '#00ba37',
      'green-40': '#00a32a',
      'green-50': '#008a20',
      'green-60': '#007017',
      'green-70': '#005c12',
      'green-80': '#00450c',
      'green-90': '#003008',
      'green-100': '#001c05',
      */
    },
    /**
     * Spacing
     */
    spacing: {
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '48': '48px',
      '60': '60px',
    },
    /**
     * Border
     */
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    borderRadius: {
      DEFAULT: '2px',
    }
  }
}
