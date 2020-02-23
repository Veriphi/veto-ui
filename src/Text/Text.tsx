import * as React from 'react';
import styled from '@emotion/styled';
import { Box, BoxProps } from '../Core';

interface TextProps extends React.ComponentProps<'p'> {
  variant?: string;
}
const Text = styled(Box)<TextProps & BoxProps>();
Text.defaultProps = {
  variant: 'normal',
  tx: 'texts',
};

interface TextLinkProps extends React.ComponentProps<'a'> {
  variant?: string;
}
const TextLink = styled<'a'>(Box as any)<TextLinkProps & BoxProps>();
TextLink.defaultProps = {
  as: 'a',
  variant: 'normal',
  tx: 'texts',
};

export { Text, TextLink };
