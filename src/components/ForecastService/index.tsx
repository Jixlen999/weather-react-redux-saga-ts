import React from 'react';
import { useSelector } from 'react-redux';

import { serviceSelector } from '@src/store/selectors';
import HourlyForecast from '../HourlyForecast';
import DailyForecast from '../DailyForecast';

import Wrapper from './styled';

function ForecastService() {
  const service = useSelector(serviceSelector);

  if (service === 'hourly') {
    return (
      <Wrapper>
        <HourlyForecast />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <DailyForecast />
    </Wrapper>
  );
}

export default ForecastService;
