import * as React from 'react';
import { Box, BoxProps } from '../../Core';
import { Text } from '../../Text';

export default {
  title: 'patterns/channels',
};

const ChannelTitle: React.FC<{ sub?: string }> = ({ sub, children }) => (
  <Text sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
    {children}
    <Text as="span" sx={{ fontSize: 'small', fontWeight: 'normal', ml: '2px' }}>
      {sub}
    </Text>
  </Text>
);

interface ChannelBoxProps extends BoxProps {
  supTitle: string;
  subTitle: string;
  title: React.ReactNode;
}
const ChannelBox: React.FC<ChannelBoxProps> = ({
  supTitle,
  subTitle,
  title,
  children,
  ...restProps
}) => (
  <Box {...restProps}>
    <Text
      variant="cardInsetHeading"
      sx={{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 'normal',
        mb: 1,
      }}
    >
      {supTitle}
    </Text>
    <Box
      mb={{
        mb: 1,
      }}
    >
      {title}
    </Box>
    <Text
      sx={{
        color: 'grey',
        fontSize: 'normal',
        mb: 1,
      }}
    >
      {subTitle}
    </Text>
    {children}
  </Box>
);

export { ChannelBox, ChannelTitle };
