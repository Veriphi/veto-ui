import * as React from 'react';
import { Input, InputWithAddon } from '.';

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

export const inputWithAddon = () => (
  <div>
    <h2>Input Element</h2>
    <InputWithAddon
      placeholder="This is a good old textfield"
      addonRight="sats"
    />
    <h2>Input Element - Valid</h2>
    <InputWithAddon
      variant="valid"
      placeholder="This is a good old textfield"
      addonRight="sats"
    />
    <h2>Input Element - Warning</h2>
    <InputWithAddon
      variant="warning"
      placeholder="This is a good old textfield"
      addonRight="sats"
    />
    <h2>Input Element - Error</h2>
    <InputWithAddon
      variant="error"
      placeholder="This is a good old textfield"
      addonRight="sats"
    />
    <h2>Input Element (left side addon)</h2>
    <InputWithAddon
      placeholder="This is a good old textfield"
      addonLeft="sats"
    />
    <h2>Input Element (left side addon) - Valid</h2>
    <InputWithAddon
      variant="valid"
      placeholder="This is a good old textfield"
      addonLeft="sats"
    />
    <h2>Input Element (left side addon) - Warning</h2>
    <InputWithAddon
      variant="warning"
      placeholder="This is a good old textfield"
      addonLeft="sats"
    />
    <h2>Input Element (left side addon) - Error</h2>
    <InputWithAddon
      variant="error"
      placeholder="This is a good old textfield"
      addonLeft="sats"
    />
  </div>
);
