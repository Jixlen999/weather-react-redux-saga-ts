/* eslint-disable no-unreachable-loop */
import React from 'react';
import { useSelector } from 'react-redux';

import LocationInput from '@components/LocationInput';
import Main from '@components/Main';
import { RootState } from '@src/store/reducers/rootReducer';
import LoginWrapper from '../LoginWrapper';

import AppWrapper from './styled';

function App() {
  const weatherSummary = useSelector((store: RootState) => store.weather.currentWeather.summary);

  return (
    <AppWrapper weatherSummary={weatherSummary}>
      <LoginWrapper />
      <LocationInput />
      <Main />
    </AppWrapper>
  );
}

export default App;
