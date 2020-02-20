import * as React from 'react';
import styled from '@emotion/styled';
import { Box } from '../Core';
import { usePopper, useHover } from '../hooks';

const TooltipArrow = styled('span')`
  width: 10px;
  height: 10px;
  position: absolute;
  &::after,
  &::before {
    content: ' ';
    position: absolute;
    pointer-events: none;
    width: 10px;
    height: 10px;
    position: absolute;
    transform: rotate(45deg);
  }
`;

interface Props {
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}
const Tooltip: React.FC<Props> = ({
  children,
  content,
  placement = 'right',
}) => {
  const target = React.createRef<HTMLDivElement>();
  const container = React.createRef<HTMLDivElement>();
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  usePopper(target, container, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
    strategy: 'absolute',
  });

  return (
    <React.Fragment>
      <Box
        ref={ref => {
          // @ts-ignore
          target.current = ref;
          hoverRef(ref);
        }}
        sx={{ display: 'inline-block', cursor: 'pointer' }}
      >
        {children}
      </Box>
      <Box
        ref={container}
        tx="tooltips"
        variant="normal"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: '5px 10px',
          borderRadius: 'radius-1',
          pointerEvents: 'none',
          zIndex: 4,
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transition: 'opacity ease-in-out 100ms, visibility ease-in-out 200ms',
          "&[data-popper-placement^='right'] > [data-popper-arrow]": {
            left: '-4px',
          },
          "&[data-popper-placement^='left'] > [data-popper-arrow]": {
            right: '-4px',
          },
          "&[data-popper-placement^='bottom'] > [data-popper-arrow]": {
            top: '-4px',
          },
          "&[data-popper-placement^='top'] > [data-popper-arrow]": {
            bottom: '-4px',
          },
        }}
      >
        <TooltipArrow data-popper-arrow className="veto-tooltip-arrow" />
        {content}
      </Box>
    </React.Fragment>
  );
};

export { Tooltip };
