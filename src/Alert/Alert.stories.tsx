import * as React from 'react';
import { Alert } from '.';
import { Box } from '../Core';

export default {
  title: 'Alert',
};

export const alert = () => (
  <div>
    <h2>Alert</h2>
    <Box width="416px">
      <Alert>
        <strong>
          If you lose your seed you'll have no way to recover your wallet.
        </strong>
        <br />
        To make sure that you have properly saved your seed, please retype words
        6, 2 & 15...
      </Alert>
    </Box>
  </div>
);
