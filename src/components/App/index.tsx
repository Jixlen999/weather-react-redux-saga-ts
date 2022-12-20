import React from 'react';
import { useSelector } from 'react-redux';

import LocationInput from '@components/LocationInput';
import Main from '@components/Main';
import { weatherSummarySelector } from '@src/store/selectors';
import LoginWrapper from '../LoginWrapper';

import AppWrapper from './styled';

function App() {
  const weatherSummary = useSelector(weatherSummarySelector);

  return (
    <AppWrapper weatherSummary={weatherSummary}>
      <LoginWrapper />
      <LocationInput />
      <Main />
    </AppWrapper>
  );
}

export default App;
