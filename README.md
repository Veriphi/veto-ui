# Veto UI

Home of the future component library for Veriphi

## Installing

```
yarn @veriphi/veto-ui emotion-theming @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

Once the dependencies have been installed, you'll need to hook in the theme provider to the root of your application and add the GlobalStyles component

```jsx
import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { lightTheme, GlobalStyles } from '@veriphi/veto-ui';

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    {/* The rest of your app */}
  </ThemeProvider>
);
```

## Adding the required font

Veto-ui relies on having Source Sans Pro installed.

Simply add the following to the `<head>` of your application.

```
<link
  href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600,700&display=swap"
  rel="stylesheet"
/>
```

## TODO

- [] Dark Mode
- [] Modal
- [] Tooltip
- [] Select component with custom dropdown
- [] Sliding Menu

## Contributing

### Development

Storybook is used for development purposes.

Simply run the following:

```
yarn storybook
```
