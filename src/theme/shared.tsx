export default {
  space: [0, 6, 12, 18, 24, 30, 36, 42, 48, 52, 60],
  letterSpacings: ['normal', '0.03125rem', '0.0625rem', '0.09375rem'],
  fontFamily: {
    'sans-serif':
      'Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  fontWeights: {
    regular: '400',
    bold: '700',
  },
  breakpoints: ['601px', '1024px', '1440px'],
  fontSizes: {
    large: '1.25rem',
    normal: '1rem',
    small: '0.8rem',
  },
  shadows: {
    boxShadow: [
      '0 0.0625rem 0.125rem rgba(12, 13, 13, 0.15)',
      '0 0.125rem 0.25rem rgba(12, 13, 13, 0.15)',
      '0 0.1875rem 0.375rem rgba(12, 13, 13, 0.15)',
      '0 0.375rem 0.75rem rgba(12, 13, 13, 0.15)',
      '0 0.75rem 1.5rem rgba(12, 13, 13, 0.15)',
    ],
    innerShadow: [
      'inset 0 0.0625rem 0.125rem rgba(56, 61, 61, 0.1)',
      'inset 0 0 0.375rem rgba(12, 13, 13, 0.18)',
    ],
    borderShadow: ['0 0 0 0.0625rem rgba(12, 13, 13, 0.15)'],
  },
  radii: {
    'radius-1': '0.1875rem',
    'radius-2': '0.375rem',
    circle: '50%',
  },
  transition: {
    fast: '100ms',
    base: '200ms',
    slow: '300ms',
  },
};
