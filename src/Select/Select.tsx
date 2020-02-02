/** @jsx jsx */
import { jsx } from '@emotion/core';
import css from '@styled-system/css';

const Select: React.FC<React.HTMLProps<HTMLSelectElement>> = ({
  children,
  ...restProps
}) => (
  <select
    css={css(theme => ({
      appearance: 'none',
      width: '100%',
      px: 2,
      py: 2,
      fontSize: 'normal',
      fontFamily: 'sans-serif',
      backgroundColor: '#FDFBFF',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='10' height='10' fill='%23494c4c'%3E%3Cg id='chevron-up-down'%3E%3Cpath id='base-1' d='M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundPosition: `right ${theme?.space[3]}px center, center`,
      borderColor: 'lightGray',
    }))}
    {...restProps}
  >
    {children}
  </select>
);

export { Select };
