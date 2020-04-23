import shared from './shared';

export default {
  ...shared,
  colors: {
    primary: '#2F77DC', // safe to rename
    secondary: '#2378e1', // safe to rename
    light: '#f3f1f5', // safe to rename
    greyLight: '#a4a1b1', // safe to rename
    grey: '#A4A1B1', // safe to rename
    greyDark: '#403d4d', // safe to rename
    confirm: '#49ba69', // safe to rename
    cancel: '#ff2729', // DANGEROUS
    warning: '#ffc137', // safe to rename
    message: '#2378e1', // safe to rename
    text: '#111213', // DANGEROUS
    textGrey: '#6E757C', // DANGEROUS
    textFade: '#b3b7bc', // DANGEROUS

    // New theme stuff
    white: '#FFF',
    black: '#000',
    background: {
      0: '#fcfcfd',
      1: '#f4f5f5',
      2: '#ecedee',
    },
    mainNav: {
      background: '#fcfcfd',
      navigationElementSelected: '#f4f5f5',
    },
    cards: {
      normalBg: '#fcfcfd',
      primaryBg: '#2F77DC',
      insetBg: '#f4f5f5',
    },
    input: {
      bg: '#fcfcfd',
      borderColor: '#E7E6E7',
    },
    select: {
      bg: '#FDFBFF',
      borderColor: '#E7E6E7',
    },
    table: {
      bgOdd: '#F8F6FA',
    },
    modes: {
      dark: {
        bg: ['#0A0A0B', '#0E0F10', '#131416'],
        text: '#FAFAFA',
        textGrey: '#6E757C',
        textFade: '#3E4246',
        input: {
          bg: '#0A0A0B',
          borderColor: 'grey',
        },
        background: {
          0: '#0A0A0B',
          1: '#0E0F10',
          2: '#131416',
        },
        mainNav: {
          background: '#0A0A0B',
          navigationElementSelected: '#0E0F10',
        },
        select: {
          bg: '#0E0F10',
          borderColor: 'grey',
        },
        cards: {
          normalBg: '#0E0F10',
          insetBg: '#131416',
        },
        table: {
          bgOdd: '#131416',
        },
      },
    },
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
      borderColor: 'input.borderColor',
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
      bg: 'cards.normalBg',
      boxShadow: '0 0.25em 0.375em rgba(0,0,0,0.2)',
    },
    primary: {
      color: 'white',
      bg: 'cards.primaryBg',
      boxShadow: '0 0.25em 0.375em rgba(0,0,0,0.2)',
    },
    inset: {
      bg: 'cards.insetBg',
      boxShadow: 'none',
    },
  },
  tooltips: {
    normal: {
      background: 'greyDark',
      color: '#fff',
      '.veto-tooltip-arrow::after, .veto-tooltip-arrow::before': {
        background: 'greyDark',
      },
    },
  },
  texts: {
    heading1: {
      fontWeight: 'lighter',
      color: 'greyLight',
      fontSize: '3.2rem',
    },
    heading2: {
      fontWeight: 400,
      color: 'primary',
      fontSize: '1.8rem',
    },
    heading3: {
      fontWeight: 600,
      color: '#f5932f',
      fontSize: '1.4rem',
    },
    cardHeading: {
      fontWeight: 800,
      color: 'textGrey',
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
      color: 'textGrey',
      textTransform: 'uppercase',
      fontSize: '1rem',
    },
    grey: {
      color: 'textGrey',
    },
    fade: {
      color: 'textFade',
    },
  },
};
