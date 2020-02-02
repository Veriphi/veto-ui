/** @jsx jsx */
import { jsx } from '@emotion/core';
import css from '@styled-system/css';

// @TODO: Alert should be able to support icons
interface Props {}
const Alert: React.FC<Props> = ({ children }) => (
  <div
    css={css({
      background: '#FCECF0',
      color: '#FB2933',
      p: 2,
      border: '1px solid',
      borderColor: 'cancel',
      borderRadius: 'radius-2',
    })}
  >
    {children}
  </div>
);

export { Alert };
