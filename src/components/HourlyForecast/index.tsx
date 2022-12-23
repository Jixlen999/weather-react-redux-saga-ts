import React from 'react';
import { useSelector } from 'react-redux';

import paths from '@constants/apiPaths';
import formatTime from '@utils/formatTime';
import { weatherSelector } from '@store/selectors';
import WeatherItem from '@components/WeatherItem';
import { IHourlyWeather } from '@src/types';

function HourlyForecast() {
  const { hourlyWeather } = useSelector(weatherSelector);
  const { openweathermapIcons } = paths;

  return (
    <>
      {hourlyWeather &&
        hourlyWeather.map(({ date, temp, icon }: IHourlyWeather) => {
          const time = formatTime(date);

          return (
            <WeatherItem
              temperature={temp}
              iconSrc={icon && `${openweathermapIcons}${icon}@2x.png`}
              time={time}
              key={time}
            />
          );
        })}
    </>
  );
}

export default HourlyForecast;
