import * as React from 'react';
import { Card } from '.';
import { Box } from '../Core';
import { Text } from '../Text';

export default {
  title: 'Card',
};

export const card = () => (
  <Box>
    <h2>Normal Card (default)</h2>
    <Card>
      <Text variant="cardHeading">Card Heading</Text>
      This is a card
      <Text variant="grey">This is app-text-grey</Text>
      <Text variant="fade">This is app-text-fade</Text>
    </Card>

    <h2>Primary Card</h2>
    <Card variant="primary">This is a card</Card>

    <h2>Card with Inset Card</h2>
    <Card>
      <Text variant="cardInsetHeading">Card Heading</Text>
      <Card variant="inset">
        This is an inset card
        <Text variant="grey">This is app-text-grey</Text>
        <Text variant="fade">This is app-text-fade</Text>
      </Card>
    </Card>
  </Box>
);
