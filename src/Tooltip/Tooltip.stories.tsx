import * as React from 'react';
import { Box } from '../Core';
import { Tooltip } from '.';

export default {
  title: 'Tooltip',
};

export const tooltip = () => (
  <div>
    <h2>Tooltip Element</h2>
    <Tooltip content={<Box> This is some explanation box!</Box>}>
      Allo allo
    </Tooltip>
  </div>
);
