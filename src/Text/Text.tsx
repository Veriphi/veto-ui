import * as React from 'react';
import { Box } from '../Core';

interface Props extends React.HTMLProps<HTMLParagraphElement> {
  variant?: string;
}
const Text: React.FC<Props> = ({
  variant = 'normal',
  children,
  ...restProps
}) => (
  // @ts-ignore
  <Box
    __css={{
      variant: `texts.${variant}`,
    }}
    {...restProps}
  >
    {children}
  </Box>
);

export { Text };
