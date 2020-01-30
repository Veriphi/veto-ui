import * as React from 'react';
import { Card } from './Card';
import { Box } from '../Core';

export default {
  title: 'Card',
};

export const card = () => (
  <Box>
    <h2>Normal Card</h2>
    <Card>This is a card</Card>
    <h2>Muted Card</h2>
    <Card variant="muted">This is a card</Card>
    <h2>Colorful Card</h2>
    <Card variant="colorful">This is a card</Card>
  </Box>
);
