import * as React from 'react';
import { Box } from '../Core';
import { Text } from '../Text';
import { Card } from '../Card';
import { Button } from '../Button';

export default {
  title: 'channels',
};

const ChannelTitle: React.FC<{ sub?: string }> = ({ sub, children }) => (
  <Text sx={{ fontSize: '1.55rem', fontWeight: 'bold' }}>
    {children}
    <Text as="span" sx={{ fontSize: 'small', fontWeight: 'normal', ml: '2px' }}>
      {sub}
    </Text>
  </Text>
);

interface ChannelBoxProps {
  supTitle: string;
  subTitle: string;
  title: React.ReactNode;
}
const ChannelBox: React.FC<ChannelBoxProps> = ({
  supTitle,
  subTitle,
  title,
  children,
}) => (
  <Box>
    <Text
      variant="cardInsetHeading"
      sx={{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 'small',
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
        color: 'textFade',
        fontSize: 'small',
        mb: 1,
      }}
    >
      {subTitle}
    </Text>
    {children}
  </Box>
);
export const channelBox = () => (
  <Card variant="inset" sx={{ width: 'fit-content', display: 'flex' }}>
    <ChannelBox
      supTitle="On Chain Balance"
      subTitle="~0.07$"
      title={<ChannelTitle sub="BTC">0.00000615</ChannelTitle>}
    >
      <Button variant="primary">Deposit</Button>
    </ChannelBox>
  </Card>
);
