import * as React from 'react';
import { Box } from '../Core';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'primary' | 'secondary' | 'danger' | 'white' | 'dark';
}
const Button: React.FC<Props> = ({
  variant = 'outline',
  children,
  ...restProps
}) => (
  <Box
    as="button"
    __css={{
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
      variant: `buttons.${variant}`,
    }}
    {...restProps}
  >
    {children}
  </Box>
);

export { Button };
