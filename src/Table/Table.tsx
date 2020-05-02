import * as React from 'react';
import styled from '@emotion/styled';
import { Box, BoxProps } from '../Core';

interface Props
  extends Omit<BoxProps, 'height' | 'width' | 'size'>,
    Omit<React.HTMLProps<HTMLTableElement>, 'as'> {}
const Table = styled<'table'>(Box as any)<Props>();
Table.defaultProps = {
  as: 'table',
  tx: 'table',
  variant: 'normal',
  __css: {
    borderCollapse: 'collapse',
    width: '100%',
    th: {
      textAlign: 'left',
      fontSize: '0.7rem',
      pb: 3,
      px: 2,
    },
    'tbody tr:nth-child(odd)': {
      bg: 'table.bgOdd',
    },
    'tbody td': {
      px: 2,
      py: 1,
      color: 'text',
    },
  },
};

export { Table };
