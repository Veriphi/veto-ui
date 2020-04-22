import shared from './shared';

const colors = {
  primary: '#2F77DC',
  secondary: '#2378e1',
  light: '#f3f1f5',
  greyLight: '#a4a1b1',
  grey: '#A4A1B1',
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
  textGrey: '#6E757C',
  textFade: '#b3b7bc',
};
export default {
  ...shared,
  colors: {
    ...colors,
  },
  buttons: {
    outline: {
      background: '#fcfcfd',
      border: '1px solid',
      borderColor: '#AFADBA',
      color: '#A3A1B0',
    },
    primary: {
      color: 'white',
      background: '#2378e1',
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
      transition: `all ${shared.transition.base} ease-in-out`,
      '&:hover': {
        background: '#4681D9',
        boxShadow: shared.shadows.boxShadow.buttonHover,
      },
    },
    secondary: {
      color: 'white',
      background: '#a4a1b1',
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
      '&:hover': {
        boxShadow: shared.shadows.boxShadow.buttonHover,
      },
    },
    danger: {
      color: 'white',
      background: '#ff2729',
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
      '&:hover': {
        boxShadow: shared.shadows.boxShadow.buttonHover,
      },
    },
    white: {
      background: 'rgb(252, 252, 253)',
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
      '&:hover': {
        background: 'rgb(252, 252, 253, 0.8)',
      },
    },
    dark: {
      color: 'white',
      background: '#403d4d',
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
      '&:hover': {
        boxShadow: shared.shadows.boxShadow.buttonHover,
        background: '#4D4B59',
      },
    },
    veto: {
      color: 'white',
      background: '#f5932f',
      boxShadow: shared.shadows.boxShadow.button,
      border: 'none',
    },
  },
  inputs: {
    normal: {
      borderColor: '#E7E6E7',
    },
    valid: {
      borderColor: '#49ba69',
    },
    warning: {
      borderColor: '#ffc137',
    },
    error: {
      borderColor: '#ff2729',
    },
  },
  cards: {
    normal: {
      background: 'bg.0',
      boxShadow: '0 0.25em 0.375em rgba(0,0,0,0.2)',
    },
    primary: {
      color: 'white',
      background: '#2378e1',
      boxShadow: '0 0.25em 0.375em rgba(0,0,0,0.2)',
    },
    inset: {
      background: '#F8F6FA',
      boxShadow: 'none',
    },
  },
  tooltips: {
    normal: {
      background: colors.greyDark,
      color: '#fff',
      '.veto-tooltip-arrow::after, .veto-tooltip-arrow::before': {
        background: colors.greyDark,
      },
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
      color: 'primary',
      fontSize: '1.8rem',
    },
    heading3: {
      fontWeight: 600,
      color: 'veriphiPrimary',
      fontSize: '1.4rem',
    },
    cardHeading: {
      fontWeight: 800,
      color: colors.textGrey,
      textTransform: 'uppercase',
      fontSize: '1rem',
    },
    cardPrimaryHeading: {
      fontWeight: 800,
      color: '#0D0B11',
      fontSize: '1rem',
    },
    cardInsetHeading: {
      fontWeight: 800,
      color: colors.textGrey,
      textTransform: 'uppercase',
      fontSize: '1rem',
    },
    grey: {
      color: colors.textGrey,
    },
    fade: {
      color: colors.textFade,
    },
  },
  mainnav: {
    normal: {},
  },
};
