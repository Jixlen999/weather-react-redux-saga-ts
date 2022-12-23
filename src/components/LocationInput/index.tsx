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

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurCity(e.target.value);
    debouncedFetch(e.target.value, setSearch);
  };

  const clickHandler = () => {
    dispatch(getInputLocation(curCity));
    setSearch([]);
  };

  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      clickHandler();
    }
  };

  const blurHandler = () => {
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
          onChange={changeHandler}
          onKeyDown={enterHandler}
          onBlur={blurHandler}
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

      <SubmitBtn type="submit" onClick={clickHandler} data-cy="cityInput">
        Enter
      </SubmitBtn>
    </Wrapper>
  );
}

export default LocationInput;
