import { ILocation } from '@src/types';

export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const SET_PLACE_ID = 'SET_PLACE_ID';
export const GET_PLACE_ID = 'GET_PLACE_ID';
export const GET_INPUT_LOCATION = 'GET_INPUT_LOCATION';

export const setPlaceId = (placeId: string) => ({
  type: SET_PLACE_ID,
  placeId,
});

export const getPlaceId = () => ({
  type: GET_PLACE_ID,
});

export const getCurrentLocation = () => ({
  type: GET_CURRENT_LOCATION,
});

export const getInputLocation = (cityName: string) => ({
  type: GET_INPUT_LOCATION,
  cityName,
});

export const getLocationSuccess = (location: ILocation) => ({
  type: GET_LOCATION_SUCCESS,
  location,
});
