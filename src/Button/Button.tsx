/** @jsx jsx */
import { jsx } from '@emotion/core';
import css from '@styled-system/css';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'primary' | 'secondary' | 'danger' | 'white' | 'dark';
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
      fontFamily: 'sans-serif',
      fontSize: 'small',
      px: 2,
      py: 2,
      letterSpacing: '0.5px',
      minWidth: '168px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      variant: `buttons.${variant}`,
    })}
    {...restProps}
  >
    {children}
  </button>
);

export { Button };
