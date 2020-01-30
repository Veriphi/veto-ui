/** @jsx jsx */
import { jsx } from '@emotion/core';
import css from '@styled-system/css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'muted' | 'colorful' | 'normal';
}
const Card: React.FC<Props> = ({
  children,
  variant = 'normal',
  ...restProps
}) => (
  <div
    css={css({
      px: 8,
      py: 6,
      borderRadius: 'radius-2',
      variant: `cards.${variant}`,
    })}
    {...restProps}
  >
    {children}
  </div>
);

export { Card };
