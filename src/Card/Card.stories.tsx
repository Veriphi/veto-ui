import * as React from 'react';
import { Card } from '.';
import { Box } from '../Core';

export default {
  title: 'Card',
};

export const card = () => (
  <Box>
    <h2>Normal Card (default)</h2>
    <Card>This is a card</Card>
    <h2>Primary Card</h2>
    <Card variant="primary">This is a card</Card>
    <h2>Secondary Card</h2>
    <Card variant="secondary">This is a card</Card>
  </Box>
);
