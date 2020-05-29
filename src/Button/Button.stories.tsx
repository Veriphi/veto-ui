import * as React from 'react';
import { Button } from '.';
import { Box } from '../Core';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

export default {
  title: 'Button',
};

export const button = () => (
  <Box>
    <h2>Outline Button (default)</h2>
    <Button icon={faCheck}>Export CSV</Button>
    <h2>Primary Button</h2>
    <Button variant="primary" icon={faCheck}>
      Send payment
    </Button>
    <h2>Secondary Button</h2>
    <Button variant="secondary">Request Payment</Button>
    <h2>Danger Button</h2>
    <Button variant="danger">Close Channel</Button>
    <h2>White Button</h2>
    <Button variant="white">Request Payment</Button>
    <h2>Dark Button</h2>
    <Button variant="dark">Request Payment</Button>

    <h2>Disabled states</h2>

    <h2>Outline Button (default)</h2>
    <Button icon={faCheck} disabled>
      Export CSV
    </Button>
    <h2>Primary Button</h2>
    <Button variant="primary" icon={faCheck} disabled>
      Send payment
    </Button>
    <h2>Secondary Button</h2>
    <Button variant="secondary" disabled>
      Request Payment
    </Button>
    <h2>Danger Button</h2>
    <Button variant="danger" disabled>
      Close Channel
    </Button>
    <h2>White Button</h2>
    <Button variant="white" disabled>
      Request Payment
    </Button>
    <h2>Dark Button</h2>
    <Button variant="dark" disabled>
      Request Payment
    </Button>
  </Box>
);
