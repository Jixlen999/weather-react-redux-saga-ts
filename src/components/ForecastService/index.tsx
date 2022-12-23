import React from 'react';
import { useSelector } from 'react-redux';

import { serviceSelector } from '@store/selectors';
import HourlyForecast from '@components/HourlyForecast';
import DailyForecast from '@components/DailyForecast';

import Wrapper from './styled';

const ForecastService = () => {
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
};

export default ForecastService;
