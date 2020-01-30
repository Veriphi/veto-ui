import shared from './shared';

const colors = {
  primary: '#3A79DA',
  secondary: '#403d4d',
  tertiary: '#a4a1b1',
  white: '#fdfbff',
  mainBg: '#fdfbff',
  secondaryBg: '#f8f6fa',
  danger: '#EB4037',
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
      border: '1px solid',
      borderColor: '#C0BEC3',
    },
    primary: {
      color: colors.white,
      background: colors.primary,
      border: 'none',
    },
    secondary: {
      color: colors.white,
      background: colors.secondary,
      border: 'none',
    },
    danger: {
      color: colors.white,
      background: colors.danger,
      border: 'none',
    },
  },
  cards: {
    normal: {
      background: colors.white,
      boxShadow:
        '0 0 0 1px rgba(0, 0, 0, 0.06), 0 6px 12px 0 rgba(0, 0, 0, 0.03), 0 4px 8px 0 rgba(0, 0, 0, 0.08)',
    },
    primary: {
      color: colors.white,
      background: colors.primary,
      boxShadow:
        '0 0 0 1px rgba(0, 0, 0, 0.06), 0 3px 6px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    },
    secondary: {
      color: colors.white,
      background: colors.secondary,
      boxShadow:
        '0 0 0 1px rgba(0, 0, 0, 0.06), 0 3px 6px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    },
  },
};
