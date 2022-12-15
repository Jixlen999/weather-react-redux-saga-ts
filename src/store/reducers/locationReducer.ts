import { GET_LOCATION_SUCCESS, SET_PLACE_ID } from '../actions/locationActions';

const initialState = {
  city: '',
  country: '',
  placeId: '',
  latitude: null,
  longitude: null,
};
interface IAction {
  type: string;
  location?: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  placeId?: '';
}

const locationReducer = (state: typeof initialState = initialState, action: IAction) => {
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
