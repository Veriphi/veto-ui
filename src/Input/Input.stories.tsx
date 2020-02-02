import * as React from 'react';
import { Input } from '.';

export default {
  title: 'Input',
};

export const input = () => (
  <div>
    <h2>Input Element</h2>
    <Input placeholder="This is a good old textfield" />
    <h2>Input Element - Valid</h2>
    <Input variant="valid" placeholder="This is a good old textfield" />
    <h2>Input Element - Warning</h2>
    <Input variant="warning" placeholder="This is a good old textfield" />
    <h2>Input Element - Error</h2>
    <Input variant="error" placeholder="This is a good old textfield" />
  </div>
);
