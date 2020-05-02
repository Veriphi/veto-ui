import * as React from 'react';
import { Box, Grid } from '../Core';
import { lightTheme } from '../theme';
import ReactJson from 'react-json-view';

export default {
  title: 'theme',
};

export const colors = () => (
  <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gridGap="30px">
    {Object.entries(lightTheme.colors).map(([key, value]) => (
      <Box
        sx={{
          border: '1px solid #cacaca',
          borderRadius: 'radius-2',
        }}
        overflow="hidden"
      >
        <Box key={key} backgroundColor={value} height="48px" />
        <Box key={key} p={2}>
          {key} - {value}
        </Box>
      </Box>
    ))}
  </Grid>
);

export const ThemeJSONViewer = () => (
  <ReactJson collapsed={1} src={lightTheme} />
);
