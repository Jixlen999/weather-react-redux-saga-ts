import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLocation } from '../../store/actions/locationActions';
import { RootState } from '../../store/reducers/rootReducer';
// interface ILocation {
//   location: string;
// }

function LocationInput() {
  const dispatch = useDispatch<(arg: any) => any>();
  const curLocation = useSelector((state: RootState) => state.location.location);
  const [location, setLocation] = useState<string>();

  useEffect(() => {
    dispatch(getCurrentLocation());
    setLocation(curLocation);
  }, [curLocation, dispatch]);
  return <input placeholder="Enter the city" value={String(location)} />;
}

export default LocationInput;
