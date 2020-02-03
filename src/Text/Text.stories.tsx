import * as React from 'react';
import { Text } from '.';

export default {
  title: 'Text',
};

export const text = () => (
  <div>
    <h2>Text Element</h2>
    <Text>Regular old Text</Text>
    <h2>Heading 1 Element</h2>
    <Text variant="heading1">Explorer</Text>
    <h2>Heading 2 Element</h2>
    <Text variant="heading2">IMPORTANT</Text>
    <h2>Heading 3 Element</h2>
    <Text variant="heading3">Heading 3</Text>
  </div>
);
