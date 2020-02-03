import * as React from 'react';
import { Box } from '../Core';

interface Props extends React.HTMLProps<HTMLInputElement> {
  variant?: 'normal' | 'valid' | 'warning' | 'error';
}
const Input: React.FC<Props> = ({
  type = 'text',
  variant = 'normal',
  ...restProps
}) => (
  <Box
    // @ts-ignore
    as="input"
    type={type}
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
  />
);

export { Input };
