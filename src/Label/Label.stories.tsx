import * as React from 'react';
import { Label } from '.';
import { Box, Flex } from '../Core';
import { Input } from '../Input';

export default {
  title: 'Label',
};

export const label = () => (
  <div>
    <h2>Label component</h2>
    <Label>Label</Label>
    <h2>Manually assembling a form field</h2>
    <Flex flexDirection="column">
      <Box mb={1} ml={2}>
        <Label>Label</Label>
      </Box>
      <div>
        <Input placeholder="Channel label..." />
      </div>
    </Flex>
  </div>
);
