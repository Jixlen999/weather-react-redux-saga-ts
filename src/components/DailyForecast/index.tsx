/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';

import paths from '@constants/apiPaths';
import { weatherSelector } from '@src/store/selectors';
import WeatherItem from '../WeatherItem';

function DailyForecast() {
  const { dailyWeather } = useSelector(weatherSelector);
  const { meteosource } = paths;

  return (
    <>
      {dailyWeather &&
        dailyWeather.map(({ day, all_day }: any) => {
          const { temperature, icon } = all_day;
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
