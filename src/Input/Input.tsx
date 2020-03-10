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

const commonAddonStyles = {
  p: 2,
  bg: 'bg.0',
  color: 'grey',
  fontSize: 'small',
  lineHeight: 1.6,
  borderWidth: '1px',
  borderStyle: 'solid',
};
interface InputWithAddonProps extends Props, React.ComponentProps<'input'> {
  addonRight?: React.ReactNode;
  addonLeft?: React.ReactNode;
  addonSxRight?: SystemStyleObject;
  addonSxLeft?: SystemStyleObject;
}
const InputWithAddon: React.FC<InputWithAddonProps> = ({
  addonSxRight,
  addonSxLeft,
  addonRight,
  addonLeft,
  variant = 'normal',
  ...restProps
}) => {
  return (
    <Flex alignItems="center">
      {addonLeft && (
        <Box
          tx="inputs"
          variant={variant}
          sx={{
            borderTopLeftRadius: 'radius-1',
            borderBottomLeftRadius: 'radius-1',
            ...commonAddonStyles,
            ...addonSxLeft,
          }}
        >
          {addonLeft}
        </Box>
      )}
      <Input
        variant={variant}
        sx={{
          ...(addonRight && {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 0,
          }),
          ...(addonLeft && {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderLeft: 0,
          }),
        }}
        {...restProps}
      />
      {addonRight && (
        <Box
          tx="inputs"
          variant={variant}
          sx={{
            borderTopRightRadius: 'radius-1',
            borderBottomRightRadius: 'radius-1',
            ...commonAddonStyles,
            ...addonSxRight,
          }}
        >
          {addonRight}
        </Box>
      )}
    </Flex>
  );
};

export { Input, InputWithAddon };
