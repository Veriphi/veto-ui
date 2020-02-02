import * as React from 'react';
import { Button } from '.';
import { Box } from '../Core';

export default {
  title: 'Button',
};

export const button = () => (
  <Box>
    <h2>Outline Button (default)</h2>
    <Button>Export CSV</Button>
    <h2>Primary Button</h2>
    <Button variant="primary">Send payment</Button>
    <h2>Secondary Button</h2>
    <Button variant="secondary">Request Payment</Button>
    <h2>Danger Button</h2>
    <Button variant="danger">Close Channel</Button>
    <h2>White Button</h2>
    <Button variant="white">Request Payment</Button>
    <h2>Dark Button</h2>
    <Button variant="dark">Request Payment</Button>
  </Box>
);
