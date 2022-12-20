import React from 'react';

import { IWeatherItemProps } from '@src/types';

import { Icon, Item, Temperature, WeekDayOrTime } from './styled';

function WeatherItem({ temperature, time, iconSrc }: IWeatherItemProps) {
  return (
    <Item>
      <WeekDayOrTime>{time}</WeekDayOrTime>
      <Icon src={iconSrc} alt="weather icon" />
      <Temperature>{Math.round(Number(temperature))}°</Temperature>
    </Item>
  );
}

export default WeatherItem;
