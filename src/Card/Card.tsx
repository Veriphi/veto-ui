import styled from '@emotion/styled';
import { Box, BoxProps } from '../Core';

interface Props extends BoxProps {
  variant?: 'primary' | 'normal' | 'inset';
}

const Card = styled(Box)<Props>();
Card.defaultProps = {
  __css: {
    px: 8,
    py: 6,
    borderRadius: 'radius-2',
  },
  variant: 'normal',
  tx: 'cards',
};

export { Card };
