/** @jsx jsx */
import { jsx } from '@emotion/core';
import css from '@styled-system/css';

interface Props extends React.HTMLProps<HTMLInputElement> {
  variant?: 'normal' | 'valid' | 'warning' | 'error';
}
const Input: React.FC<Props> = ({
  type = 'text',
  variant = 'normal',
  ...restProps
}) => (
  <input
    type={type}
    css={css({
      p: 2,
      bg: 'bg.0',
      fontSize: 'normal',
      fontFamily: 'sans-serif',
      borderRadius: 'radius-1',
      appearance: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      variant: `inputs.${variant}`,
      '&::placeholder': {
        fontSize: 'small',
      },
    })}
    {...restProps}
  />
);

export { Input };
