export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const SET_INPUT_LOCATION = 'SET_INPUT_LOCATION';
export const SET_PLACE_ID = 'SET_PLACE_ID';
export const GET_PLACE_ID = 'GET_PLACE_ID';

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

export const setInputLocation = (location: string) => ({
  type: SET_INPUT_LOCATION,
  location,
});
