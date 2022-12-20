import React from 'react';
import { useSelector } from 'react-redux';

import { weatherSelector } from '@src/store/selectors';
import WeatherItem from '../WeatherItem';

function DailyForecast() {
  const { dailyWeather } = useSelector(weatherSelector);

  return (
    <>
      {dailyWeather &&
        dailyWeather.map(({ day, all_day }: any) => {
          const { temperature, icon } = all_day;
          const weekDay = new Date(day).toString().slice(0, 3); // Отрезаем первые 3 символа, т.к. они представляют день недели
          return (
            <WeatherItem
              temperature={temperature}
              iconSrc={icon && `https://www.meteosource.com/static/img/ico/weather/${icon}.svg`}
              time={weekDay}
              key={day}
            />
          );
        })}
    </>
  );
}

export default DailyForecast;
