import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import { fetchCities } from '@src/api';
import { getCurrentLocation, getPlaceId, getInputLocation } from '@store/actions/locationActions';
import { locationSelector } from '@store/selectors';
import isNotPersisted from '@utils/checkPersist';
import SearchElement from '@components/SearchElement';

import { Input, SubmitBtn, Wrapper, SearchWrapper, SearchVariants } from './styled';

function LocationInput() {
  const dispatch = useDispatch();
  const { city, country } = useSelector(locationSelector);
  const [currentCity, setCurrentCity] = useState('');
  const [search, setSearch] = useState<any[]>([]);

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
    debouncedFetch(value, setSearch);
  };

  const handleClick = () => {
    dispatch(getInputLocation(currentCity));
    setSearch([]);
  };

  const handleEnter = ({ keyCode }: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyCode === 13) {
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
          value={currentCity}
          onChange={handleChange}
          onKeyDown={handleEnter}
          onBlur={handleBlur}
          data-cy="cityInput"
        />
        {search.length > 0 && (
          <SearchVariants>
            {search.map((el, id) => (
              <SearchElement key={el.latitude + id} element={el} setCurrentCity={setCurrentCity} />
            ))}
          </SearchVariants>
        )}
      </SearchWrapper>

      <SubmitBtn type="submit" onClick={handleClick} data-cy="searchBtn">
        Enter
      </SubmitBtn>
    </Wrapper>
  );
}

export default LocationInput;
