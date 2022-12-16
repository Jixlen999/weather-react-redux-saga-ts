import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@src/store/reducers/rootReducer';
import DateAndEvents from '../DateAndEvents';
import Forecast from '../Forecast';

import Wrapper from './styled';

function Main() {
  const weatherSummary = useSelector((store: RootState) => store.weather.currentWeather.summary);

  return (
    <Wrapper weatherSummary={weatherSummary}>
      <DateAndEvents />
      <Forecast />
    </Wrapper>
  );
}

export default Main;
