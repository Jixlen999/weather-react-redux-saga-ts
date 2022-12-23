import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import { fetchCities } from '@src/api';
import { ICities } from '@src/types';
import { getCurrentLocation, getPlaceId, getInputLocation } from '@store/actions/locationActions';
import { locationSelector } from '@store/selectors';
import isNotPersisted from '@utils/checkPersist';
import SearchElement from '@components/SearchElement';

import { Input, SubmitBtn, Wrapper, SearchWrapper, SearchVariants } from './styled';

const LocationInput = () => {
  const dispatch = useDispatch();
  const { city, country } = useSelector(locationSelector);
  const [currentCity, setCurrentCity] = useState('');
  const [searchList, setSearchList] = useState<ICities[]>([]);

  useEffect(() => {
    if (isNotPersisted()) {
      navigator.geolocation.getCurrentPosition(() => {
        dispatch(getCurrentLocation());
        dispatch(getPlaceId());
        setCurrentCity('');
      });
    }
  }, [city, country]);

  const debouncedFetch = useCallback(debounce(fetchCities, 300), []);

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCity(value);
    debouncedFetch(value, setSearchList);
  };

  const handleClick = () => {
    dispatch(getInputLocation(currentCity));
    setSearchList([]);
  };

  const handleEnter = ({ keyCode }: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyCode === 13) {
      handleClick();
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSearchList([]);
    }, 300);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <Input
          placeholder="Enter the city"
          value={currentCity}
          onChange={handleChange}
          onKeyDown={handleEnter}
          onBlur={handleBlur}
          data-cy="cityInput"
        />
        {searchList.length > 0 && (
          <SearchVariants>
            {searchList.map((searchItem, id) => (
              <SearchElement key={id} element={searchItem} setCurrentCity={setCurrentCity} />
            ))}
          </SearchVariants>
        )}
      </SearchWrapper>

      <SubmitBtn type="submit" onClick={handleClick} data-cy="searchBtn">
        Enter
      </SubmitBtn>
    </Wrapper>
  );
};

export default LocationInput;
