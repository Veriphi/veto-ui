import styled from '@emotion/styled';

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
  system,
  border as styledSystemBorder,
  BorderProps as StyledSystemBorderProps,
} from 'styled-system';

export interface BorderProps extends StyledSystemBorderProps {
  borderTopLeftRadius?: string | number;
  borderTopRightRadius?: string | number;
  borderBottomLeftRadius?: string | number;
  borderBottomRightRadius?: string | number;
}

const borderRadii = system({
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
});

const border = compose(borderRadii, styledSystemBorder);

interface BoxProps
  extends SpaceProps,
    FlexboxProps,
    LayoutProps,
    BorderProps,
    Omit<ColorProps, 'color'> {
  color?: string;
}
const Box = styled('div')<BoxProps>(
  compose(space, layout, border, color, flexbox)
);

const Flex = styled(Box)<BoxProps>({
  display: 'flex',
});

const Grid = styled(Box)<BoxProps & GridProps>(grid, {
  display: 'grid',
});

export { Box, Flex, Grid };
