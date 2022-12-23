import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import paths from '@src/constants/apiPaths';
import { locationAndCurWeather } from '@src/store/selectors';
import { getCurrentWeather } from '@src/store/actions/weatherActions';
import formatTemperature from '@src/utils/formatTemperature';
import ForecastService from '../ForecastService';
import ForecastServiceSwitcher from '../ForecastServiceSwitcher';

import { Wrapper, WeatherNow, FutureWeatherWrapper, Day, Temp, Icon, TempWrapper, Switchers } from './styled';

function Forecast() {
  const dispatch = useDispatch();
  const { meteosource } = paths;
  const { location, curWeather } = useSelector(locationAndCurWeather);
  const { city } = location;
  const { icon, temperature } = curWeather;

  const memoizedTemperature = useMemo(() => formatTemperature(temperature!), [temperature]);

  useEffect(() => {
    if (city) {
      dispatch(getCurrentWeather());
    }
  }, [city, dispatch]);

  return (
    <Wrapper>
      <WeatherNow>
        <Icon src={icon ? `${meteosource}static/img/ico/weather/${icon}.svg` : ''} alt="weather icon" />
        <TempWrapper>
          <Day>Today</Day>
          <Temp>{memoizedTemperature}°</Temp>
        </TempWrapper>
      </WeatherNow>
      <FutureWeatherWrapper>
        <ForecastService />
      </FutureWeatherWrapper>
      <Switchers>
        <ForecastServiceSwitcher />
      </Switchers>
    </Wrapper>
  );
}

export default Forecast;
