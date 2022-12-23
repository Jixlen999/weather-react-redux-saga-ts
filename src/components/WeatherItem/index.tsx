import React, { useMemo } from 'react';

import { IWeatherItemProps } from '@src/types';
import formatTemperature from '@utils/formatTemperature';

import { Icon, Item, Temperature, WeekDayOrTime } from './styled';

function WeatherItem({ temperature, time, iconSrc }: IWeatherItemProps) {
  const memoizedTemperature = useMemo(() => formatTemperature(temperature), [temperature]);
  return (
    <Item>
      <WeekDayOrTime data-cy="weekDayOrTime">{time}</WeekDayOrTime>
      <Icon src={iconSrc} alt="weather icon" />
      <Temperature>{memoizedTemperature}°</Temperature>
    </Item>
  );
}

export default WeatherItem;
