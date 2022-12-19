/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import debounce from 'lodash.debounce';

import { getCurrentLocation, getPlaceId, getInputLocation } from '@store/actions/locationActions';
import { RootState } from '@store/reducers/rootReducer';

import { Input, Btn, Wrapper } from './styled';

function LocationInput() {
  const dispatch = useDispatch<(arg: any) => any>();
  const { city, country } = useSelector((state: RootState) => state.location);
  const [curCity, setCurCity] = useState<string>('');

  const fetchCities = () =>
    axios
      .get(`https://api.openweathermap.org/geo/1.0/direct?q=${curCity}&limit=5&appid=d47aaf5a7ca8357e87b2d06f96316705`)
      .then(({ data }) => data);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurCity(e.target.value);

    debounce(fetchCities, 300);
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
      <Input placeholder="Enter the city" value={curCity} onChange={changeHandler} onKeyDown={enterHandler} />
      <Btn type="submit" onClick={clickHandler}>
        Enter
      </Btn>
    </Wrapper>
  );
}

export default LocationInput;
