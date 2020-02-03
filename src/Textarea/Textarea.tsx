import * as React from 'react';
import { Box } from '../Core';

interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  variant?: 'normal' | 'valid' | 'warning' | 'error';
}
const Textarea: React.FC<Props> = ({
  variant = 'normal',
  children,
  ...restProps
}) => (
  <Box
    as="textarea"
    __css={{
      p: 2,
      bg: 'bg.0',
      fontSize: 'normal',
      fontFamily: 'sans-serif',
      borderRadius: 'radius-1',
      appearance: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      variant: `inputs.${variant}`,
      '&::placeholder': {
        fontSize: 'small',
      },
    }}
    {...restProps}
  >
    {children}
  </Box>
);

export { Textarea };
