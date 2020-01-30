import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { lightTheme } from '../src';

const ThemeSwitcher: React.FC = ({ children }) => {
  const [state, setState] = React.useState(
    localStorage.getItem('theme') || 'flame'
  );
  return (
    <React.Fragment>
      <div>
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
      </div>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </React.Fragment>
  );
};

const ThemeSwitcherDecorator = storyFn => (
  <ThemeSwitcher>{storyFn()}</ThemeSwitcher>
);

addDecorator(ThemeSwitcherDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|ts)x?$/), module);
