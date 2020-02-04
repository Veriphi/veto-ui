import { Box, BoxProps } from '../Core';
import styled from '@emotion/styled';

interface Props extends Omit<BoxProps, 'width' | 'height' | 'size'> {
  variant?: 'normal' | 'valid' | 'warning' | 'error';
}

const Input = styled<'input'>(Box as any)<Props>();
Input.defaultProps = {
  as: 'input',
  type: 'text',
  __css: {
    p: 2,
    bg: 'bg.0',
    fontSize: 'normal',
    fontFamily: 'sans-serif',
    borderRadius: 'radius-1',
    appearance: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    '&::placeholder': {
      fontSize: 'small',
    },
  },
  tx: 'inputs',
  variant: 'normal',
};

export { Input };
