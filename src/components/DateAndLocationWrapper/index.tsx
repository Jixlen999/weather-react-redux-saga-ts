import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/reducers/rootReducer';
import { DateAndCityLayout, Location } from './styled';
import CurrentDate from '../CurrentDate';

function DateAndLocationWrapper() {
  const city = useSelector((store: RootState) => store.location.location);

  return (
    <DateAndCityLayout>
      <CurrentDate />
      <Location>
        <h3>{city}</h3>
      </Location>
    </DateAndCityLayout>
  );
}

export default DateAndLocationWrapper;
