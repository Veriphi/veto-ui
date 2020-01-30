import * as React from 'react';
import { Button } from '.';
import { Box } from '../Core';

export default {
  title: 'Button',
};

export const button = () => (
  <Box>
    <h2>Outline Button (default)</h2>
    <Button>Click me!</Button>
    <h2>Primary Button</h2>
    <Button variant="primary">Click me!</Button>
    <h2>Secondary Button</h2>
    <Button variant="secondary">Click me!</Button>
    <h2>Danger Button</h2>
    <Button variant="danger">Click me!</Button>
  </Box>
);
