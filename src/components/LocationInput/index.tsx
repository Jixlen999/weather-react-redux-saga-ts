/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLocation, setInputLocation } from '@store/actions/locationActions';
import { RootState } from '@store/reducers/rootReducer';
import { Input, Btn, Wrapper } from './styled';

function LocationInput() {
  const dispatch = useDispatch<(arg: any) => any>();
  const curLocation = useSelector((state: RootState) => state.location.location);
  const [location, setLocation] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    dispatch(getCurrentLocation());
    setLocation(curLocation);
  }, [curLocation, dispatch]);

  const clickHandler = () => {
    dispatch(setInputLocation(location));
    console.log(curLocation);
  };

  return (
    <Wrapper>
      <Input placeholder="Enter the city" value={location} onChange={changeHandler} />
      <Btn type="submit" onClick={clickHandler}>
        Enter
      </Btn>
    </Wrapper>
  );
}

export default LocationInput;
