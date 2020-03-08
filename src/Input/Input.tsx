import * as React from 'react';
import { Box, Flex, BoxProps } from '../Core';
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
    width: '100%',
    lineHeight: 1,
    '&::placeholder': {
      fontSize: 'small',
    },
  },
  tx: 'inputs',
  variant: 'normal',
};

interface InputWithAddonProps extends Props, React.ComponentProps<'input'> {
  addon: React.ReactNode;
  addonProps?: BoxProps;
}
const InputWithAddon: React.FC<InputWithAddonProps> = ({
  addon,
  addonProps,
  variant = 'normal',
  ...restProps
}) => (
  <Flex alignItems="center">
    <Input
      variant={variant}
      sx={{
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
      }}
      {...restProps}
    />
    <Box
      tx="inputs"
      variant={variant}
      sx={{
        p: 2,
        bg: 'bg.0',
        color: 'grey',
        fontSize: 'small',
        lineHeight: 1.6,
        borderTopRightRadius: 'radius-1',
        borderBottomRightRadius: 'radius-1',
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
      {...addonProps}
    >
      {addon}
    </Box>
  </Flex>
);

export { Input, InputWithAddon };
