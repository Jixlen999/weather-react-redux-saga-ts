/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RootState } from '@src/store/reducers/rootReducer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, Item, Icon, WeekDayOrTime, Temperature } from './styled';

function ForecastService() {
  const { placeId, latitude, longitude } = useSelector((state: RootState) => state.location);
  const service = useSelector((state: RootState) => state.service.service);

  const [dailyWeather, setDailyWeather] = useState<any[]>([]);
  const [hourlyWeather, setHourlyWeather] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      axios
        .get(
          `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=daily&language=en&units=auto&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
        )
        .then(({ data }) => setDailyWeather(data.daily.data.splice(1))); // Отрезаем текущий день, т.к. он показан в "TODAY"
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=d47aaf5a7ca8357e87b2d06f96316705`,
        )
        .then(({ data }) => data.list)
        .then((data) => setHourlyWeather(data.splice(1, 6)));
    })();
  }, [latitude, longitude, placeId, service]);

  const formatTime = (unformattedTime: string) => {
    const time = new Date(unformattedTime);
    return [time.getHours(), time.getMinutes()].map((hrOrMin) => (hrOrMin < 10 ? `0${hrOrMin}` : hrOrMin)).join(':');
  };

  return (
    <Wrapper>
      {service === 'daily' &&
        dailyWeather.map(({ day, all_day }) => {
          const { temperature, icon } = all_day;
          const weekDay = new Date(day).toString().slice(0, 3); // Отрезаем первые 3 символа, т.к. они представляют день недели
          return (
            <Item key={day}>
              <WeekDayOrTime>{weekDay}</WeekDayOrTime>
              <Icon src={`https://www.meteosource.com/static/img/ico/weather/${icon}.svg`} alt="weather icon" />
              <Temperature>{temperature}°</Temperature>
            </Item>
          );
        })}
      {service === 'hourly' &&
        hourlyWeather.map(({ dt_txt, main, weather }) => {
          const { temp } = main;
          const { icon } = weather[0];
          const time = formatTime(dt_txt);

          return (
            <Item>
              <WeekDayOrTime>{time}</WeekDayOrTime>
              <Icon src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
              <Temperature>{temp.toFixed(1)}°</Temperature>
            </Item>
          );
        })}
    </Wrapper>
  );
}

export default ForecastService;
