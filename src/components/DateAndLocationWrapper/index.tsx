import React from 'react';
import { useSelector } from 'react-redux';

import { locationSelector } from '@store/selectors';
import CurrentDate from '@components/CurrentDate';

import { Country, DateAndCityLayout, Location, City } from './styled';

const DateAndLocationWrapper = () => {
  const { city, country } = useSelector(locationSelector);

  return (
    <DateAndCityLayout>
      <CurrentDate />
      <Location>
        <City data-cy="currentCity">{city}</City>
        <Country>{country}</Country>
      </Location>
    </DateAndCityLayout>
  );
};

export default DateAndLocationWrapper;
