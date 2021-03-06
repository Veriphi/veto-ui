# Veto UI

[![Netlify Status](https://api.netlify.com/api/v1/badges/9da2f961-5f35-49fb-b801-e32ef8654b08/deploy-status)](https://app.netlify.com/sites/veto-ui-storybook/deploys)

Veto's React component library.

Built with emotion and styled-system.

### Playground

Fork this CodeSandbox and start playing around with components:

[![Edit Veto-UI Sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/awesome-brahmagupta-rjmz1)

## Installing

Please follow each steps carefully, or else some components might look completely off!

### Hooking the theme provider and theme values

```
yarn add @veriphi/veto-ui emotion-theming @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core
```

Once the dependencies have been installed, you'll need to hook in the theme provider to the root of your application and add the GlobalStyles component

```jsx
import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { getTheme, GlobalStyles } from '@veriphi/veto-ui';

const App = () => {
  // We can setTheme name from light -> dark to swap modes
  const [themeName, setThemeName] = React.useState('light');
  const theme = getTheme(themeName);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* The rest of your app */}
    </ThemeProvider>
  );
};
```

### Adding the required font

Veto-ui relies on having Source Sans Pro installed.

Simply add the following to the `<head>` of your application.

```
<link
  href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600,700&display=swap"
  rel="stylesheet"
/>
```

### Adding SSR support

Although the library uses emotion (which provides a way for configless SSR), the icon svg library requires you to
add a css file at the root of your application.

If using `Next.js`, you will need to add the following in the `pages/_app.(js|tsx)` file:

```js
import React from 'react';
import App, { Container } from 'next/app';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
```

For further information, please consult the [font-awesome github project](https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks)

## TODO

- [x] Dark Mode
- [x] Modal
- [x] Tooltip
- [ ] Select component with custom dropdown
- [x] Sliding Menu
- [ ] Docs docs docs

## Contributing

### Development

Storybook is used for development purposes.

Simply run the following:

```
yarn storybook
```
