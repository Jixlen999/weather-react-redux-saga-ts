import React from 'react';
import { useSelector } from 'react-redux';

import { weatherSummarySelector } from '@src/store/selectors';
import Forecast from '../Forecast';
import Events from '../Events';
import DateAndLocationWrapper from '../DateAndLocationWrapper';

import Wrapper from './styled';

function Main() {
  const weatherSummary = useSelector(weatherSummarySelector);

  return (
    <Wrapper weatherSummary={weatherSummary}>
      <DateAndLocationWrapper />
      <Events />
      <Forecast />
    </Wrapper>
  );
}

export default Main;
