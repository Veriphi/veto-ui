import shared from './shared';

const colors = {
  primary: '#2378e1',
  secondary: '#403d4d',
  tertiary: '#a4a1b1',
  white: '#fdfbff',
  mainBg: '#fdfbff',
  secondaryBg: '#f8f6fa',
  danger: '#ff2729',
  dangerBg: '#fdecf0',
  vetoOrange: '#f5932f',
  textHeading: '#0e0b11',
  black: '#0e0b11',
  textBody: '#a4a1b1',
  success: '#49b169',
  warning: '#ffc137',
};
export default {
  ...shared,
  colors,
  buttons: {
    outline: {
      background: colors.white,
    },
    primary: {
      background: colors.primary,
      border: 'none',
    },
  },
  cards: {
    normal: {
      background: colors.white,
      boxShadow:
        '0 0 0 1px rgba(0, 0, 0, 0.06), 0 6px 12px 0 rgba(0, 0, 0, 0.03), 0 4px 8px 0 rgba(0, 0, 0, 0.08)',
    },
    muted: {
      background: colors.secondaryBg,
      boxShadow:
        '0 0 0 1px rgba(0, 0, 0, 0.06), 0 3px 6px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    },
    colorful: {
      color: colors.white,
      background: colors.primary,
      boxShadow:
        '0 0 0 1px rgba(0, 0, 0, 0.06), 0 3px 6px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    },
  },
};
