import * as React from 'react';
import styled from '@emotion/styled';
import { Box, BoxProps } from '../Core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props extends BoxProps {
  variant?: 'outline' | 'primary' | 'secondary' | 'danger' | 'white' | 'dark';
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
const BaseButton = styled<'button'>(Box as any)<Props>();
BaseButton.defaultProps = {
  as: 'button',
  tx: 'buttons',
  variant: 'outline',
  __css: theme => ({
    WebkitAppearance: 'none',
    borderRadius: 'radius-1',
    fontFamily: 'sans-serif',
    fontSize: 'small',
    px: 2,
    py: 1,
    letterSpacing: '0.5px',
    minWidth: '168px',
    minHeight: '48px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    transition: `all ${theme.transition.base} ease-in-out`,
    svg: {
      transition: `all ${theme.transition.base} ease-in-out`,
      transform: 'translate(8px)',
    },
    '&:hover svg': {
      transform: 'translate(10px)',
    },
  }),
};

const Button = React.forwardRef<
  HTMLButtonElement,
  Props & React.HTMLAttributes<HTMLButtonElement>
>(({ variant, icon, children, ...restProps }, ref) => (
  <BaseButton type="button" ref={ref} variant={variant} {...restProps}>
    {children}
    {icon && <FontAwesomeIcon icon={icon as any} size="sm" />}
  </BaseButton>
));

export { Button };
