/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLocation, getPlaceId, getInputLocation } from '@store/actions/locationActions';
import { RootState } from '@store/reducers/rootReducer';

import { Input, Btn, Wrapper } from './styled';

function LocationInput() {
  const dispatch = useDispatch<(arg: any) => any>();
  const { city, country } = useSelector((state: RootState) => state.location);
  const [curCity, setCurCity] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurCity(e.target.value);
  };

  useEffect(() => {
    dispatch(getCurrentLocation());
    dispatch(getPlaceId());
    setCurCity(city);
  }, [city, country, dispatch]);

  const clickHandler = () => {
    dispatch(getInputLocation(curCity));
  };

  return (
    <Wrapper>
      <Input placeholder="Enter the city" value={curCity} onChange={changeHandler} />
      <Btn type="submit" onClick={clickHandler}>
        Enter
      </Btn>
    </Wrapper>
  );
}

export default LocationInput;
