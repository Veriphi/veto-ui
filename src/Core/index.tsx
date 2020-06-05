import * as React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import css, { get, SystemStyleObject, CSSObject } from '@styled-system/css';
import { modalStyles } from '../Modal/modal.styles';
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
import lodashMerge from 'lodash.merge';
import lodashGet from 'lodash.get';
import baseTheme from '../theme/base';

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
  /**
   * Change the underlying element. For example, if you pass in `a`, Box will be rendered as an anchor tag.
   */
  as?: React.ElementType;
  color?: string;
  /**
   * CSS style object that is automatically hooked to the theme
   */
  sx?: SystemStyleObject;
  /**
   * Theme key. Used in conjunction with variant to pull values from a particular key
   */
  tx?: string;
  /**
   * Which subkey to pull from the theme key defined in the variant.
   */
  variant?: string | string[];
  /**
   * Private property to set the base css definition
   * Under regular circumstances, you should never use this.
   * When extending the `box` component, this may be useful to set base styles.
   */
  __css?: SystemStyleObject;
}
type CssFunctionType = { css?: CSSObject; theme?: any };

const Box = styled('div', {
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
  const modalCss = modalStyles(theme);

  return (
    <Global
      styles={{
        '*, *:before, *:after': {
          boxSizing: 'border-box',
        },
        body: {
          fontFamily: theme.fontFamily['sans-serif'],
          fontSize: '16px',
          color: theme.colors.text,
          backgroundColor: theme.colors.background[0],
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        ...modalCss,
      }}
    />
  );
};

type Modes = 'light' | 'dark';
const getTheme = (mode: Modes = 'light') => {
  const mergedTheme = lodashMerge({}, baseTheme, {
    colors: lodashGet(baseTheme.colors.modes, mode, baseTheme.colors),
  });
  return mergedTheme;
};

export { Box, Flex, Grid, GlobalStyles, getTheme };
