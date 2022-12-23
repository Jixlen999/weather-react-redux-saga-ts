import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import paths from '@src/constants/apiPaths';
import { RootState } from '@src/store/reducers/rootReducer';
import { getCurrentWeather } from '@src/store/actions/weatherActions';
import ForecastService from '../ForecastService';
import ForecastServiceSwitcher from '../ForecastServiceSwitcher';

import { Wrapper, WeatherNow, FutureWeatherWrapper, Day, Temp, Icon, TempWrapper, Switchers } from './styled';

function Forecast() {
  const dispatch = useDispatch();
  const { meteosource } = paths;
  const { location, curWeather } = useSelector((store: RootState) => ({
    location: store.location,
    curWeather: store.weather.currentWeather,
  }));
  const { city } = location;
  const { icon, temperature } = curWeather;

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
