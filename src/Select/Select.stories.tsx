import * as React from 'react';
import { Select } from '.';

export default {
  title: 'Select',
};

export const select = () => (
  <div>
    <h2>Select Element</h2>
    <Select>
      <option>Lion</option>
      <option>Tiger</option>
      <option>Bear</option>
    </Select>
  </div>
);
