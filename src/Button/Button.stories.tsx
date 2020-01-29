import * as React from 'react';
import { Button } from '.';

export default {
  title: 'Welcome',
};

export const toStorybook = () => <Button />;

toStorybook.story = {
  name: 'to Storybook',
};
