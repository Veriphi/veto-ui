import * as React from 'react';
import { Box } from '../Core';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'normal' | 'inset';
}
const Card: React.FC<Props> = ({
  children,
  variant = 'normal',
  ...restProps
}) => (
  <Box
    __css={{
      px: 8,
      py: 6,
      borderRadius: 'radius-2',
      variant: `cards.${variant}`,
    }}
    {...restProps}
  >
    {children}
  </Box>
);

export { Card };
