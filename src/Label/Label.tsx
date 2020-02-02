/** @jsx jsx */
import { jsx } from '@emotion/core';
import css from '@styled-system/css';

interface Props extends React.HTMLProps<HTMLLabelElement> {}
const Label: React.FC<Props> = ({ children, ...restProps }) => (
  <label
    css={css({
      color: 'secondary',
      fontSize: 'small',
      fontWeight: '600',
      textTransform: 'uppercase',
    })}
    {...restProps}
  >
    {children}
  </label>
);

export { Label };
