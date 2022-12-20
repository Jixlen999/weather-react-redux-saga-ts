import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import LocationInput from '@components/LocationInput';
import Main from '@components/Main';
import { weatherSummarySelector } from '@src/store/selectors';
import theme from '@src/theme';
import ErrorBoundary from '../ErrorBoundary';
import LoginWrapper from '../LoginWrapper';

import AppWrapper from './styled';

function App() {
  const weatherSummary = useSelector(weatherSummarySelector);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <AppWrapper weatherSummary={weatherSummary}>
          <LoginWrapper />
          <LocationInput />
          <Main />
        </AppWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
