import styled from '@emotion/styled';
import { Box, BoxProps } from '../Core';

interface Props extends BoxProps {
  variant?: 'normal' | 'valid' | 'warning' | 'error';
}
const Textarea = styled<'textarea'>(Box as any)<Props>();
Textarea.defaultProps = {
  as: 'textarea',
  tx: 'inputs',
  variant: 'normal',
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
};

export { Textarea };
