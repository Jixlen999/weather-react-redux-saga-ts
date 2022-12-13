export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const SET_INPUT_LOCATION = 'SET_INPUT_LOCATION';

export const getCurrentLocation = () => ({
  type: GET_CURRENT_LOCATION,
});

export const setInputLocation = (location: string) => ({
  type: SET_INPUT_LOCATION,
  location,
});
