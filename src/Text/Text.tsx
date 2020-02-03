/** @jsx jsx */
import { jsx } from '@emotion/core';
import css from '@styled-system/css';

interface Props extends React.HTMLProps<HTMLDivElement> {
  variant?: string;
}
const Text: React.FC<Props> = ({
  variant = 'normal',
  children,
  ...restProps
}) => (
  <div
    css={css({
      variant: `texts.${variant}`,
    })}
    {...restProps}
  >
    {children}
  </div>
);

export { Text };
