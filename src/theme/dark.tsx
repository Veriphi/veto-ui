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
  bg: ['#0A0A0B', '#0E0F10', '#131416'],
  text: '#FAFAFA',
  textGrey: '#6E757C',
  textFade: '#3E4246',
};

export default {
  ...shared,
  colors,
  buttons: {
    outline: {
      background: '#fcfcfd',
      border: '1px solid',
      borderColor: '#AFADBA',
      color: '#A3A1B0',
    },
    primary: {
      color: 'white',
      background: colors.primary,
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
      background: colors.textGrey,
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
  cards: {
    normal: {
      background: colors.bg[1],
      boxShadow: '0 0.25em 0.375em rgba(0,0,0,0.2)',
    },
    primary: {
      color: 'white',
      background: '#2378e1',
      boxShadow: '0 0.25em 0.375em rgba(0,0,0,0.2)',
    },
    inset: {
      background: '#131416',
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
  inputs: {
    normal: {
      color: colors.text,
      bg: colors.bg[2],
      borderColor: colors.textFade,
    },
    valid: {
      color: colors.text,
      bg: colors.bg[2],
      borderColor: '#49ba69',
    },
    warning: {
      color: colors.text,
      bg: colors.bg[2],
      borderColor: '#ffc137',
    },
    error: {
      color: colors.text,
      bg: colors.bg[2],
      borderColor: '#ff2729',
    },
  },
  select: {
    normal: {
      color: 'text',
      bg: 'bg.2',
      borderColor: 'textFade',
    },
  },
  table: {
    normal: {
      'tbody tr:nth-child(odd)': {
        bg: 'bg.2',
      },
    },
  },
};
