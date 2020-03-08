import * as React from 'react';
import { SystemStyleObject } from '@styled-system/css';
import styled from '@emotion/styled';
import { Box, Flex, BoxProps } from '../Core';

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
  addonSx?: SystemStyleObject;
}
const InputWithAddon: React.FC<InputWithAddonProps> = ({
  addon,
  addonSx,
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
        ...addonSx,
      }}
    >
      {addon}
    </Box>
  </Flex>
);

export { Input, InputWithAddon };
