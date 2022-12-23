import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import paths from '@constants/apiPaths';
import { locationAndCurWeather } from '@store/selectors';
import { getCurrentWeather } from '@store/actions/weatherActions';
import formatTemperature from '@utils/formatTemperature';
import ForecastService from '@components/ForecastService';
import ForecastServiceSwitcher from '@components/ForecastServiceSwitcher';

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
