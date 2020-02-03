import * as React from 'react';
import { Box } from '../Core';

// @TODO: Alert should be able to support icons
interface Props {}
const Alert: React.FC<Props> = ({ children }) => (
  <Box
    sx={{
      background: '#FCECF0',
      color: '#FB2933',
      p: 2,
      border: '1px solid',
      borderColor: 'cancel',
      borderRadius: 'radius-2',
    }}
  >
    {children}
  </Box>
);

export { Alert };
