import { keyframes, CSSObject } from '@emotion/core';

const showKeyframe = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const hideKeyframe = keyframes`
 from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const asideShowKeyframe = keyframes`
 from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const asideHideKeyframe = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
`;

const modalStyles = (theme: any): CSSObject => ({
  '.VetoModal': {
    boxShadow: theme.cards?.normal?.boxShadow,
    background: theme.cards?.normal?.background,
    width: 'fit-content',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
      outline: 'none',
    },
  },
  '.ReactModal__Content--after-open': {
    animation: `${showKeyframe} 200ms cubic-bezier(0, 0, 0.2, 1) forwards`,
  },
  '.ReactModal__Content--before-close': {
    animation: `${hideKeyframe} 200ms cubic-bezier(0, 0, 0.2, 1) forwards`,
  },
  '.VetoModalPortalAside .ReactModal__Overlay': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  '.VetoModalPortalAside .ReactModal__Content--after-open': {
    animation: `${asideShowKeyframe} 200ms cubic-bezier(0, 0, 0.2, 1) forwards`,
  },
  '.VetoModalPortalAside .ReactModal__Content--before-close': {
    animation: `${asideHideKeyframe} 200ms cubic-bezier(0, 0, 0.2, 1) forwards`,
  },
  '.VetoModalAside': {
    minHeight: '100%',
    maxWidth: '40%',
    boxShadow: '-1px 0px 10px 6px rgba(0, 0, 0, 0.05)',
    '&:focus': {
      outline: 'none',
    },
  },
});

export { modalStyles };
