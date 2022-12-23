import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { weatherSummarySelector } from '@store/selectors';
import theme from '@src/theme';
import LocationInput from '@components/LocationInput';
import Main from '@components/Main';
import ErrorBoundary from '@components/ErrorBoundary';
import LoginWrapper from '@components/LoginWrapper';

import AppWrapper from './styled';

const App = () => {
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
};

export default App;
