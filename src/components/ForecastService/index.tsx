import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@src/store/reducers/rootReducer';
import formatTime from '@src/utils/formatTime';

import { Wrapper, Item, Icon, WeekDayOrTime, Temperature } from './styled';

function ForecastService() {
  const { dailyWeather, hourlyWeather } = useSelector((state: RootState) => state.weather);
  const service = useSelector((state: RootState) => state.service.service);

  if (service === 'hourly') {
    return (
      <Wrapper>
        {hourlyWeather &&
          hourlyWeather &&
          hourlyWeather.map(({ dt_txt, main, weather }: any) => {
            const { temp } = main;
            const { icon } = weather[0];
            const time = formatTime(dt_txt);

            return (
              <Item key={time}>
                <WeekDayOrTime>{time}</WeekDayOrTime>
                <Icon src={icon && `http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
                <Temperature>{temp.toFixed(1)}°</Temperature>
              </Item>
            );
          })}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {dailyWeather &&
        dailyWeather.map(({ day, all_day }: any) => {
          const { temperature, icon } = all_day;
          const weekDay = new Date(day).toString().slice(0, 3); // Отрезаем первые 3 символа, т.к. они представляют день недели
          return (
            <Item key={day}>
              <WeekDayOrTime>{weekDay}</WeekDayOrTime>
              <Icon src={icon && `https://www.meteosource.com/static/img/ico/weather/${icon}.svg`} alt="weather icon" />
              <Temperature>{temperature}°</Temperature>
            </Item>
          );
        })}
    </Wrapper>
  );
}

export default ForecastService;
