import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import Layout from './components/Layout';
import { QuestionsProvider } from './Context/QuestionsContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QuestionsProvider>
        <GlobalStyles />
        <Layout />
      </QuestionsProvider>
    </ThemeProvider>

  );
}

export default App;
