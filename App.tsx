import React from 'react';
import {ThemeProvider} from 'styled-components';

import {AppRoutes} from './src/routes/app.routes';

import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}
