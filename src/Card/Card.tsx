/** @jsx jsx */
import { jsx } from '@emotion/core';
import css from '@styled-system/css';
import { CardVariants } from '../theme';

const Card: React.FC<
  React.HTMLProps<HTMLDivElement> | { variant?: CardVariants }
> = ({ children, ...restProps }) => (
  <div
    css={css({
      px: 8,
      py: 6,
      borderRadius: 'radius-2',
      // @TODO: move this to the shared theme
      boxShadow:
        '0 0 0 1px rgba(0, 0, 0, 0.06), 0 6px 12px 0 rgba(0, 0, 0, 0.03), 0 4px 8px 0 rgba(0, 0, 0, 0.08)',
      variant: 'cards.muted',
    })}
    {...restProps}
  >
    {children}
  </div>
);

export { Card };
