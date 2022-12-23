import React from 'react';
import { useSelector } from 'react-redux';

import paths from '@constants/apiPaths';
import formatTime from '@utils/formatTime';
import { weatherSelector } from '@store/selectors';
import WeatherItem from '@components/WeatherItem';

function HourlyForecast() {
  const { hourlyWeather } = useSelector(weatherSelector);
  const { openweathermapIcons } = paths;

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
