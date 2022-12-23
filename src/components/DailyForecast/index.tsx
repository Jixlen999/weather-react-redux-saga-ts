import React from 'react';
import { useSelector } from 'react-redux';

import { weatherSelector } from '@store/selectors';
import paths from '@constants/apiPaths';
import WeatherItem from '@components/WeatherItem';
import { IDailyWeather } from '@src/types';

function DailyForecast() {
  const { dailyWeather } = useSelector(weatherSelector);
  const { meteosource } = paths;

  return (
    <>
      {dailyWeather &&
        dailyWeather.map(({ day, temperature, icon }: IDailyWeather) => {
          const weekDay = new Date(day).toString().slice(0, 3); // Отрезаем первые 3 символа, т.к. они представляют день недели
          return (
            <WeatherItem
              temperature={temperature}
              iconSrc={icon && `${meteosource}static/img/ico/weather/${icon}.svg`}
              time={weekDay}
              key={day}
            />
          );
        })}
    </>
  );
}

export default DailyForecast;
