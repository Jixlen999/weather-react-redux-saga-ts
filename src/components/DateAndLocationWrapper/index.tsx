import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/reducers/rootReducer';
import CurrentDate from '../CurrentDate';

import { Country, DateAndCityLayout, Location, City } from './styled';

function DateAndLocationWrapper() {
  const { city, country } = useSelector((store: RootState) => store.location);

  return (
    <DateAndCityLayout>
      <CurrentDate />
      <Location>
        <City>{city}</City>
        <Country>{country}</Country>
      </Location>
    </DateAndCityLayout>
  );
}

export default DateAndLocationWrapper;
