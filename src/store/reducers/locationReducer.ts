import { GET_LOCATION_SUCCESS, SET_PLACE_ID } from '../actions/locationActions';

const initialState = {
  city: '',
  country: '',
  placeId: '',
};
interface IAction {
  type: string;
  location?: {
    city: string;
    country: string;
  };
  placeId?: '';
}

const locationReducer = (state: typeof initialState = initialState, action: IAction) => {
  switch (action.type) {
    case GET_LOCATION_SUCCESS:
      return { ...state, city: action.location!.city, country: action.location!.country };
    case SET_PLACE_ID:
      return { ...state, placeId: action.placeId };
    default:
      return state;
  }
};

export default locationReducer;
