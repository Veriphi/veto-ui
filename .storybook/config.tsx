import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { lightTheme, darkTheme, Box } from '../src';

const ThemeSwitcher: React.FC = ({ children }) => {
  const [state, setState] = React.useState(
    localStorage.getItem('theme') || 'light'
  );
  return (
    <ThemeProvider theme={state === 'light' ? lightTheme : darkTheme}>
      <Box mb={2}>
        <select
          value={state}
          onChange={e => {
            setState(e.target.value);
            window.localStorage.setItem('theme', e.target.value);
          }}
        >
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
        </select>
      </Box>
      {children}
    </ThemeProvider>
  );
};

const ThemeSwitcherDecorator = storyFn => (
  <ThemeSwitcher>{storyFn()}</ThemeSwitcher>
);

addDecorator(ThemeSwitcherDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|ts)x?$/), module);
