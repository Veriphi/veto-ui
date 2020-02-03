import shared from './shared';

const colors = {
  primary: '#f5932f',
  secondary: '#2378e1',
  light: '#f3f1f5',
  greyLight: '#a4a1b1',
  grey: '#686575',
  greyDark: '#403d4d',
  dark: '#0e0b11',
  confirm: '#49ba69',
  cancel: '#ff2729',
  warning: '#ffc137',
  message: '#2378e1',
  veriphiPrimary: '#f5932f',
  veriphiSecondary: '#2b345d',
  bg: ['#fcfcfd', '#f4f5f5', '#ecedee'],
  text: '#111213',
  textGrey: '#111213',
  textFade: '#b3b7bc',
};
export default {
  ...shared,
  colors,
  buttons: {
    outline: {
      background: colors.bg[0],
      border: '1px solid',
      borderColor: '#2F292B',
    },
    primary: {
      color: 'white',
      background: colors.secondary,
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
    },
    secondary: {
      color: 'white',
      background: colors.greyLight,
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
    },
    danger: {
      color: 'white',
      background: colors.cancel,
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
    },
    white: {
      background: '#fcfcfd',
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
    },
    dark: {
      color: 'white',
      background: colors.greyDark,
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
    },
    veto: {
      color: 'white',
      background: colors.primary,
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
    },
  },
  inputs: {
    normal: {
      borderColor: '#E7E6E7',
    },
    valid: {
      borderColor: colors.confirm,
    },
    warning: {
      borderColor: colors.warning,
    },
    error: {
      borderColor: colors.cancel,
    },
  },
  cards: {
    normal: {
      background: colors.bg[0],
      boxShadow: '0 0.25em 0.375em rgba(0,0,0,0.2)',
    },
    primary: {
      color: 'white',
      background: colors.secondary,
      boxShadow: '0 0.25em 0.375em rgba(0,0,0,0.2)',
    },
    secondary: {
      color: 'white',
      background: colors.greyDark,
      boxShadow: '0 0.25em 0.375em rgba(0,0,0,0.2)',
    },
    inset: {
      background: colors.bg[1],
      boxShadow: 'none',
    },
  },
  texts: {
    heading1: {
      fontWeight: 'lighter',
      color: colors.greyLight,
      fontSize: '3.2rem',
    },
    heading2: {
      fontWeight: 400,
      color: colors.secondary,
      fontSize: '1.8rem',
    },
    heading3: {
      fontWeight: 600,
      color: colors.primary,
      fontSize: '1.4rem',
    },
  },
};
