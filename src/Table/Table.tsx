import * as React from 'react';
import { Box } from '../Core';

interface Props extends React.HTMLProps<HTMLTableElement> {}
const Table: React.FC<Props> = ({ children }) => (
  <Box
    as="table"
    __css={{
      borderCollapse: 'collapse',
      width: '100%',
      th: {
        textAlign: 'left',
        fontSize: '0.7rem',
        pb: 3,
        px: 2,
      },
      'tbody tr:nth-child(odd)': {
        background: '#F8F6FA',
      },
      'tbody td': {
        px: 2,
        py: 1,
        fontSize: 'small',
      },
    }}
  >
    {children}
  </Box>
);

export { Table };
