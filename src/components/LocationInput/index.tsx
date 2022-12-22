import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import debounce from 'lodash.debounce';

import apiKeys from '@src/constants/apiKeys';
import paths from '@src/constants/apiPaths';
import { getCurrentLocation, getPlaceId, getInputLocation } from '@store/actions/locationActions';
import { RootState } from '@store/reducers/rootReducer';
import SearchElement from '../SearchElement';

import { Input, Btn, Wrapper, SearchWrapper } from './styled';

function LocationInput() {
  const dispatch = useDispatch();
  const { openweathermap } = paths;
  const { openweathermapKey } = apiKeys;
  const { city, country } = useSelector((state: RootState) => state.location);
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

  const fetchCities = (inputValue: any) => {
    axios.get(`${openweathermap}geo/1.0/direct?q=${inputValue}&limit=5&appid=${openweathermapKey}`).then(({ data }) => {
      const citiesArray = data.map(({ name, lat, lon, country }: any) => ({
        name,
        latitude: lat,
        longitude: lon,
        country,
      }));
      setSearch(citiesArray);
    });
  };
  const debouncedFetch = useCallback(debounce(fetchCities, 300), []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurCity(e.target.value);
    debouncedFetch(e.target.value);
  };

  const clickHandler = () => {
    dispatch(getInputLocation(curCity));
    setSearch([]);
  };

  const enterHandler = (e: { keyCode: number }) => {
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
      <div>
        <Input
          placeholder="Enter the city"
          value={curCity}
          onChange={changeHandler}
          onKeyDown={enterHandler}
          onBlur={blurHandler}
          data-cy="cityInput"
        />
        {search.length > 0 && (
          <SearchWrapper>
            {search.map((el) => (
              <SearchElement key={el.latitude + el.longitude} element={el} setCurCity={setCurCity} />
            ))}
          </SearchWrapper>
        )}
      </div>

      <Btn type="submit" onClick={clickHandler} data-cy="cityInput">
        Enter
      </Btn>
    </Wrapper>
  );
}

export default LocationInput;
