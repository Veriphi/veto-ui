import { Box, BoxProps } from '../Core';
import styled from '@emotion/styled';

// @TODO: Alert should be able to support icons
interface Props extends BoxProps {}
const Alert = styled(Box)<Props>();
Alert.defaultProps = {
  __css: {
    background: '#FCECF0',
    color: '#FB2933',
    p: 2,
    border: '1px solid',
    borderColor: 'cancel',
    borderRadius: 'radius-2',
  },
};

export { Alert };
