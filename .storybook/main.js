const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-docs',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            reportFiles: ['stories/**/*.{ts|tsx}'],
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            propFilter: (prop, component) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules');
              }

              return true;
            },
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.alias = Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, '..'),
    });
    return config;
  },
};
