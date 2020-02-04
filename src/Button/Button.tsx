import styled from '@emotion/styled';
import { Box, BoxProps } from '../Core';

interface Props extends BoxProps {
  variant?: 'outline' | 'primary' | 'secondary' | 'danger' | 'white' | 'dark';
}
const Button = styled<'button'>(Box as any)<Props>();
Button.defaultProps = {
  as: 'button',
  tx: 'buttons',
  variant: 'outline',
  __css: theme => ({
    WebkitAppearance: 'none',
    borderRadius: 'radius-1',
    fontFamily: 'sans-serif',
    fontSize: 'small',
    px: 2,
    py: 2,
    letterSpacing: '0.5px',
    minWidth: '168px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    transition: `all ${theme.transition.base} ease-in-out`,
  }),
};

export { Button };
