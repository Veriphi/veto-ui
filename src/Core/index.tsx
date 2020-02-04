import * as React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import css, { get, SystemStyleObject, CSSObject } from '@styled-system/css';
// @ts-ignore
import shouldForwardProp from '@styled-system/should-forward-prop';

import {
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  grid,
  GridProps,
  compose,
} from 'styled-system';

type SxProps = { theme?: any; sx?: SystemStyleObject };
const sx = (props: SxProps) => css(props.sx)(props.theme);
type BaseProps = { theme?: any; __css?: SystemStyleObject };
const base = (props: BaseProps) => css(props.__css)(props.theme);
type VariantProps = { theme?: any; variant?: string | string[]; tx?: string };
const variant = ({ theme, variant, tx = 'variants' }: VariantProps) => {
  return css(get(theme, tx + '.' + variant, get(theme, variant || '')))(theme);
};

export interface BoxProps
  extends SpaceProps,
    FlexboxProps,
    LayoutProps,
    Omit<ColorProps, 'color'> {
  as?: React.ElementType;
  color?: string;
  sx?: SystemStyleObject;
  tx?: string;
  variant?: string | string[];
  __css?: SystemStyleObject;
}
type CssFunctionType = { css?: CSSObject; theme?: any };

const Box = styled<'div'>('div', {
  shouldForwardProp,
})<BoxProps>(
  base,
  variant,
  sx,
  (props: CssFunctionType) => props.css,
  // Seriously prettier?
  /* prettier-ignore */
  compose(space, layout, color, flexbox)
  /* prettier-ignore */
);

const Flex = styled(Box)<BoxProps>({
  display: 'flex',
});

const Grid = styled(Box)<BoxProps & GridProps>(grid, {
  display: 'grid',
});

const GlobalStyles = () => {
  const theme: any = useTheme();

  return (
    <Global
      styles={{
        body: {
          fontFamily: theme.fontFamily['sans-serif'],
          fontSize: '16px',
          backgroundColor: theme.colors.bg[0],
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      }}
    />
  );
};

export { Box, Flex, Grid, GlobalStyles };
