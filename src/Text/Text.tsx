import * as React from 'react';
import styled from '@emotion/styled';
import { Box, BoxProps } from '../Core';

interface Props extends React.HTMLProps<HTMLParagraphElement> {
  variant?: string;
}
const Text = styled(Box)<Props & BoxProps>();
Text.defaultProps = {
  variant: 'normal',
  tx: 'texts',
};

export { Text };
