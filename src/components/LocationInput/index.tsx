import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import { fetchCities } from '@src/api';
import { getCurrentLocation, getPlaceId, getInputLocation } from '@store/actions/locationActions';
import { locationSelector } from '@src/store/selectors';
import SearchElement from '../SearchElement';

import { Input, SubmitBtn, Wrapper, SearchWrapper, SearchVariants } from './styled';

function LocationInput() {
  const dispatch = useDispatch();
  const { city, country } = useSelector(locationSelector);
  const [curCity, setCurCity] = useState<string>('');
  const [search, setSearch] = useState<any[]>([]);

  useEffect(() => {
    if (!localStorage.getItem('persist:weather')) {
      navigator.geolocation.getCurrentPosition(() => {
        dispatch(getCurrentLocation());
        dispatch(getPlaceId());
        setCurCity(city);
      });
    }
  }, [city, country, dispatch]);

  const debouncedFetch = useCallback(debounce(fetchCities, 300), []);

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setCurCity(value);
    debouncedFetch(value, setSearch);
  };

  const handleClick = () => {
    dispatch(getInputLocation(curCity));
    setSearch([]);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSearch([]);
    }, 300);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <Input
          placeholder="Enter the city"
          value={curCity}
          onChange={handleChange}
          onKeyDown={handleEnter}
          onBlur={handleBlur}
          data-cy="cityInput"
        />
        {search.length > 0 && (
          <SearchVariants>
            {search.map((el, id) => (
              <SearchElement key={el.latitude + id} element={el} setCurCity={setCurCity} />
            ))}
          </SearchVariants>
        )}
      </SearchWrapper>

      <SubmitBtn type="submit" onClick={handleClick} data-cy="cityInput">
        Enter
      </SubmitBtn>
    </Wrapper>
  );
}

export default LocationInput;
