import * as React from 'react';
import { Box, Flex } from '../../Core';
import { Card } from '../../Card';
import { Button } from '../../Button';
import { ChannelBox, ChannelTitle } from './Channel';

export default {
  title: 'patterns/channels',
};

export const channelBox = () => (
  <Flex>
    <Box width={1 / 3} mr={4}>
      <Card
        variant="inset"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <ChannelBox
          supTitle="On Chain Balance"
          subTitle="~0.07$"
          title={<ChannelTitle sub="BTC">0.00000615</ChannelTitle>}
        >
          <Button variant="primary">Deposit</Button>
        </ChannelBox>

        <ChannelBox
          supTitle="In Channels"
          subTitle="~932.18$"
          title={<ChannelTitle sub="BTC">0.07592334</ChannelTitle>}
        />
      </Card>
    </Box>
    <Box width={2 / 3}>
      <Card
        variant="inset"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <ChannelBox
          supTitle="Max. outgoing payment"
          subTitle="~558.39$"
          title={<ChannelTitle sub="BTC">0.04592334</ChannelTitle>}
          mr={10}
        >
          <Button variant="primary">Send Payment</Button>
        </ChannelBox>

        <ChannelBox
          supTitle="Max. Incoming payment"
          subTitle="~1,867.66"
          title={<ChannelTitle sub="BTC">0.151355781</ChannelTitle>}
        >
          <Button variant="dark">Request payment</Button>
        </ChannelBox>

        <ChannelBox
          supTitle="Channels"
          subTitle="1 Online / 1 Offline"
          title={<ChannelTitle>2</ChannelTitle>}
        >
          <Button variant="outline">New channel</Button>
        </ChannelBox>
      </Card>
    </Box>
  </Flex>
);
