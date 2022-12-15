import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '@store/reducers/rootReducer';
import { Wrapper, WeatherNow, FutureWeather, Day, Temp, Icon, TempWrapper, Switchers } from './styled';
import DailyWeather from '../DailyWeather';
import ForecastServiceSwitcher from '../ForecastServiceSwitcher';

interface IWeather {
  temp: number;
  icon: string;
}

function Forecast() {
  const { city, placeId } = useSelector((state: RootState) => state.location);
  const [curWeather, setCurWeather] = useState<IWeather>();

  useEffect(() => {
    (async () => {
      if (city) {
        await axios
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
  }, [city, placeId]);

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
      <Switchers>
        <ForecastServiceSwitcher />
      </Switchers>
    </Wrapper>
  );
}

export default Forecast;
