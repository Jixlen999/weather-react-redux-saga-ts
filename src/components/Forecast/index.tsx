/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '@store/reducers/rootReducer';
import { Wrapper, WeatherNow, FutureWeather, Day, Temp, Icon, TempWrapper } from './styled';
import DailyWeather from '../DailyWeather';

interface IWeather {
  temp: number;
  icon: string;
}

function Forecast() {
  const curLocation = useSelector((state: RootState) => state.location.location);
  const [curWeather, setCurWeather] = useState<IWeather>();

  useEffect(() => {
    (async function () {
      if (curLocation) {
        const placeId = await axios
          .get(
            `https://www.meteosource.com/api/v1/free/find_places_prefix?text=${curLocation}&language=en&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
          )
          .then(({ data }) => data[0].place_id);
        const weather = await axios
          .get(
            `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=current&language=en&units=auto&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
          )
          .then(({ data }) => data.current)
          .then((current) => {
            const { icon_num, temperature } = current;
            setCurWeather({
              temp: temperature,
              icon: `https://www.meteosource.com/static/img/ico/weather/${icon_num}.svg`,
            });
          });
      }
    })();
  }, [curLocation]);

  return (
    <Wrapper>
      <WeatherNow>
        <Icon src={curWeather?.icon} alt="weather icon" />
        <TempWrapper>
          <Day>Today</Day>
          <Temp>{curWeather?.temp}°</Temp>
        </TempWrapper>
      </WeatherNow>
      <FutureWeather>
        <DailyWeather />
      </FutureWeather>
    </Wrapper>
  );
}

export default Forecast;
