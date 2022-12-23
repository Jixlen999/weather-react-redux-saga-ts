import { ILocation } from '@src/types';

export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const SET_PLACE_ID = 'SET_PLACE_ID';
export const GET_PLACE_ID = 'GET_PLACE_ID';
export const GET_INPUT_LOCATION = 'GET_INPUT_LOCATION';

export const setPlaceId = (payload: string) => ({
  type: SET_PLACE_ID,
  payload,
});

export const getPlaceId = () => ({
  type: GET_PLACE_ID,
});

export const getCurrentLocation = () => ({
  type: GET_CURRENT_LOCATION,
});

export const getInputLocation = (payload: string) => ({
  type: GET_INPUT_LOCATION,
  payload,
});

export const getLocationSuccess = (payload: ILocation) => ({
  type: GET_LOCATION_SUCCESS,
  payload,
});
