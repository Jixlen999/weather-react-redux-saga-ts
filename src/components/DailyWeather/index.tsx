import { RootState } from '@src/store/reducers/rootReducer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from './styled';

function DailyWeather() {
  const curLocation = useSelector((state: RootState) => state.location.location);
  const [weather, setWeather] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const placeId = await axios
        .get(
          `https://www.meteosource.com/api/v1/free/find_places_prefix?text=${curLocation}&language=en&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
        )
        .then(({ data }) => data[0].place_id);
      axios
        .get(
          `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=daily&language=en&units=auto&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
        )
        .then(({ data }) => setWeather(data.daily.data.splice(1))); // Отрезаем текущий день, т.к. он показан в "TODAY"
    })();
  }, [curLocation]);
  return (
    <Wrapper>
      {weather.map(({ day, all_day }) => {
        const { temperature, icon } = all_day;
        const weekDay = new Date(day).toString().slice(0, 3); // Отрезаем первые 3 символа, т.к. они представляют день недели

        return (
          <div key={day}>
            <p>{weekDay}</p>
            <p>{temperature}</p>
            <p>{icon}</p>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default DailyWeather;
