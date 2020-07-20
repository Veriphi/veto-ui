import * as React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider, useTheme } from 'emotion-theming';

import isChromatic from 'chromatic/isChromatic';
import { DocsContainer as StoryDocsContainer } from '@storybook/addon-docs/blocks';

import { Box, GlobalStyles, getTheme, Switch } from '../src';

export const ThemeSwitcher: React.FC<{ hideSwitcher?: boolean }> = ({
  children,
  hideSwitcher,
}) => {
  const [state, setState] = React.useState(
    localStorage.getItem('theme') || 'light'
  );

  const theme = getTheme(state as any);

  if (isChromatic() || hideSwitcher) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Box mb={2} className="theme-switcher">
        <label
          htmlFor="darkmode"
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <Switch
            id="darkmode"
            checked={state === 'dark'}
            sx={{ mr: 2 }}
            onChange={() => {
              setState((prevState) => {
                const nextState = prevState === 'dark' ? 'light' : 'dark';
                window.localStorage.setItem('theme', nextState);
                return nextState;
              });
            }}
          />
          Set dark mode
        </label>
      </Box>
      {children}
    </ThemeProvider>
  );
};

const MDXContainer: React.FC<{ context: any }> = ({ children, context }) => {
  const theme = useTheme() as any;

  return (
    <Box
      sx={{
        '.sbdocs': {
          color: theme?.colors.text,
          backgroundColor: theme?.colors.background[0],
        },
        '.sbdocs.sbdocs-preview ': {
          border: '1px solid',
          borderColor: theme?.colors.background[2],
        },
        '.sbdocs.sbdocs-wrapper': {
          color: theme?.colors.text,
          backgroundColor: theme?.colors.background[0],
        },
      }}
    >
      <StoryDocsContainer context={context}>{children}</StoryDocsContainer>
    </Box>
  );
};
interface DocsContainerProps {
  context: any;
}
export const DocsContainer: React.FC<DocsContainerProps> = ({
  children,
  context,
}) => {
  return (
    <ThemeSwitcher>
      <MDXContainer context={context}>{children}</MDXContainer>
    </ThemeSwitcher>
  );
};
const ThemeSwitcherDecorator = (storyFn) => (
  <ThemeSwitcher hideSwitcher>{storyFn()}</ThemeSwitcher>
);

addDecorator(ThemeSwitcherDecorator);
