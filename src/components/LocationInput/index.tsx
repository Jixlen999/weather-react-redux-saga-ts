/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import debounce from 'lodash.debounce';

import { getCurrentLocation, getPlaceId, getInputLocation } from '@store/actions/locationActions';
import { RootState } from '@store/reducers/rootReducer';

import { Input, Btn, Wrapper, SearchFields, SearchWrapper } from './styled';

function LocationInput() {
  const dispatch = useDispatch<(arg: any) => any>();
  const { city, country } = useSelector((state: RootState) => state.location);
  const [curCity, setCurCity] = useState<string>('');
  const [search, setSearch] = useState<any[]>([]);

  const fetchCities = (inputValue: any) => {
    axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=d47aaf5a7ca8357e87b2d06f96316705`,
      )
      .then(({ data }) => {
        const citiesArray = data.map(({ name, lat, lon, country }: any) => ({
          name,
          latitude: lat,
          longitude: lon,
          country,
        }));
        setSearch(citiesArray);
      });
  };
  const debouncedFetch = useCallback(debounce(fetchCities, 500), []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurCity(e.target.value);
    debouncedFetch(e.target.value);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(() => {
      dispatch(getCurrentLocation());
      dispatch(getPlaceId());
      setCurCity(city);
    });
  }, [city, country, dispatch]);

  const clickHandler = () => {
    dispatch(getInputLocation(curCity));
  };

  const enterHandler = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      clickHandler();
    }
  };

  return (
    <Wrapper>
      <div>
        <Input placeholder="Enter the city" value={curCity} onChange={changeHandler} onKeyDown={enterHandler} />
        {search.length > 0 && (
          <SearchWrapper>
            {search.map((el) => (
              <SearchFields>
                {el.name}, {el.country}
              </SearchFields>
            ))}
          </SearchWrapper>
        )}
      </div>

      <Btn type="submit" onClick={clickHandler}>
        Enter
      </Btn>
    </Wrapper>
  );
}

export default LocationInput;
