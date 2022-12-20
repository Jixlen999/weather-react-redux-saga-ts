import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { currentWeatherSelector, locationSelector } from '@src/store/selectors';
import { getCurrentWeather } from '@src/store/actions/weatherActions';
import ForecastService from '../ForecastService';
import ForecastServiceSwitcher from '../ForecastServiceSwitcher';

import { Wrapper, WeatherNow, FutureWeatherWrapper, Day, Temp, Icon, TempWrapper, Switchers } from './styled';

function Forecast() {
  const dispatch = useDispatch();
  const { city } = useSelector(locationSelector);
  const { icon, temperature } = useSelector(currentWeatherSelector);

  useEffect(() => {
    (async () => {
      if (city) {
        dispatch(getCurrentWeather());
      }
    })();
  }, [city, dispatch]);

  return (
    <Wrapper>
      <WeatherNow>
        <Icon src={icon ? `https://www.meteosource.com/static/img/ico/weather/${icon}.svg` : ''} alt="weather icon" />
        <TempWrapper>
          <Day>Today</Day>
          <Temp>{Math.round(Number(temperature))}°</Temp>
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
