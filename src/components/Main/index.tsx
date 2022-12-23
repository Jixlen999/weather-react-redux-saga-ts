import React from 'react';
import { useSelector } from 'react-redux';

import { weatherSummarySelector } from '@store/selectors';
import Forecast from '@components/Forecast';
import Events from '@components/Events';
import DateAndLocationWrapper from '@components/DateAndLocationWrapper';

import Wrapper from './styled';

const Main = () => {
  const weatherSummary = useSelector(weatherSummarySelector);

  return (
    <Wrapper weatherSummary={weatherSummary}>
      <DateAndLocationWrapper />
      <Events />
      <Forecast />
    </Wrapper>
  );
};

export default Main;
