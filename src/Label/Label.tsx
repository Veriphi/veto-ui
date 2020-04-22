import { Box, BoxProps } from '../Core';
import styled from '@emotion/styled';

interface Props extends BoxProps {}
const Label = styled<'label'>(Box as any)<Props>();
Label.defaultProps = {
  __css: {
    color: 'primary',
    fontSize: 'small',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
};

export { Label };
