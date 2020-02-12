import * as React from 'react';
import styled from '@emotion/styled';
import { Box, BoxProps } from '../Core';

interface Props
  extends Omit<BoxProps, 'height' | 'width' | 'size'>,
    Omit<React.HTMLProps<HTMLTableElement>, 'as'> {}
const Table = styled<'table'>(Box as any)<Props>();
Table.defaultProps = {
  as: 'table',
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
      background: '#F8F6FA',
    },
    'tbody td': {
      px: 2,
      py: 1,
      fontSize: 'small',
    },
  },
};

export { Table };
