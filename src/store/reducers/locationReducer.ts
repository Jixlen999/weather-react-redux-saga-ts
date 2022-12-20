import { ILocationAction, ILocationState } from '@src/types';
import { GET_LOCATION_SUCCESS, SET_PLACE_ID } from '../actions/locationActions';

const initialState: ILocationState = {
  city: 'London',
  country: 'United Kingdom',
  placeId: 'london',
  latitude: 51.50853,
  longitude: 0.12574,
};

const locationReducer = (state: ILocationState = initialState, action: ILocationAction) => {
  switch (action.type) {
    case GET_LOCATION_SUCCESS: {
      const { city, country, latitude, longitude } = action.location!;
      return { ...state, city, country, latitude, longitude };
    }
    case SET_PLACE_ID:
      return { ...state, placeId: action.placeId };
    default:
      return state;
  }
};

export default locationReducer;
