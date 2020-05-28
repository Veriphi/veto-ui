import * as React from 'react';
import { Box, Grid, getTheme } from '../Core';
import ReactJson from 'react-json-view';

export default {
  title: 'theme',
};

export const colors = () => {
  const selectedTheme = localStorage.getItem('theme') || 'light';
  const theme = getTheme(selectedTheme as any);

  return (
    <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gridGap="30px">
      {Object.entries(theme.colors)
        .filter(([_, value]) => typeof value !== 'object')
        .map(([key, value]: [string, string]) => (
          <Box
            key={key}
            sx={{
              border: '1px solid #cacaca',
              borderRadius: 'radius-2',
            }}
            overflow="hidden"
          >
            <Box backgroundColor={value} height="48px" />
            <Box p={2}>
              {key} - {value}
            </Box>
          </Box>
        ))}
    </Grid>
  );
};

export const ThemeJSONViewer = () => {
  const lightTheme = getTheme('light');
  return <ReactJson collapsed={1} src={lightTheme} />;
};
