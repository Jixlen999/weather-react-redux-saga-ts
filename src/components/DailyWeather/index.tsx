import { RootState } from '@src/store/reducers/rootReducer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, Item, Icon, WeekDay, Temperature } from './styled';

function DailyWeather() {
  const { placeId } = useSelector((state: RootState) => state.location);
  const [weather, setWeather] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      axios
        .get(
          `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=daily&language=en&units=auto&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
        )
        .then(({ data }) => setWeather(data.daily.data.splice(1))); // Отрезаем текущий день, т.к. он показан в "TODAY"
    })();
  }, [placeId]);
  console.log(weather);

  return (
    <Wrapper>
      {weather.map(({ day, all_day }) => {
        const { temperature, icon } = all_day;
        const weekDay = new Date(day).toString().slice(0, 3); // Отрезаем первые 3 символа, т.к. они представляют день недели
        return (
          <Item key={day}>
            <WeekDay>{weekDay}</WeekDay>
            <Icon src={`https://www.meteosource.com/static/img/ico/weather/${icon}.svg`} alt="weather icon" />
            <Temperature>{temperature}°</Temperature>
          </Item>
        );
      })}
    </Wrapper>
  );
}

export default DailyWeather;
