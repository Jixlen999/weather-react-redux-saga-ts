import React from 'react';
import { useSelector } from 'react-redux';

import formatTime from '@src/utils/formatTime';
import { weatherSelector } from '@src/store/selectors';
import WeatherItem from '../WeatherItem';

function HourlyForecast() {
  const { hourlyWeather } = useSelector(weatherSelector);
  return (
    <>
      {hourlyWeather &&
        hourlyWeather.map(({ dt_txt, main, weather }: any) => {
          const { temp } = main;
          const { icon } = weather[0];
          const time = formatTime(dt_txt);

          return (
            <WeatherItem
              temperature={temp}
              iconSrc={icon && `http://openweathermap.org/img/wn/${icon}@2x.png`}
              time={time}
              key={time}
            />
          );
        })}
    </>
  );
}

export default HourlyForecast;
