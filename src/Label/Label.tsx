import * as React from 'react';
import { Box } from '../Core';

interface Props extends React.HTMLProps<HTMLLabelElement> {}
const Label: React.FC<Props> = ({ children, ...restProps }) => (
  <Box
    // @ts-ignore
    as="label"
    __css={{
      color: 'secondary',
      fontSize: 'small',
      fontWeight: '600',
      textTransform: 'uppercase',
    }}
    {...restProps}
  >
    {children}
  </Box>
);

export { Label };
