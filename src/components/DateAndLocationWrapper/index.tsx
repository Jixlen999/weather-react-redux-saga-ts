import React from 'react';
import { useSelector } from 'react-redux';

import { locationSelector } from '@src/store/selectors';
import CurrentDate from '../CurrentDate';

import { Country, DateAndCityLayout, Location, City } from './styled';

function DateAndLocationWrapper() {
  const { city, country } = useSelector(locationSelector);

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
