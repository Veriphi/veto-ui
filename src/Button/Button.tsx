/** @jsx jsx */
import { jsx } from '@emotion/core';
import css from '@styled-system/css';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'primary';
}
const Button: React.FC<Props> = ({
  variant = 'outline',
  children,
  ...restProps
}) => (
  <button
    css={css({
      WebkitAppearance: 'none',
      borderRadius: 'radius-1',
      p: 1,
      cursor: 'pointer',
      variant: `buttons.${variant}`,
    })}
    {...restProps}
  >
    {children}
  </button>
);

export { Button };
