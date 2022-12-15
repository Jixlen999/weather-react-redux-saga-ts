import { GET_LOCATION_SUCCESS, SET_PLACE_ID } from '../actions/locationActions';

const initialState = {
  location: '',
  placeId: '',
};
interface IAction {
  type: string;
  location: string;
  placeId: '';
}

const locationReducer = (state: typeof initialState = initialState, action: IAction) => {
  switch (action.type) {
    case GET_LOCATION_SUCCESS:
      return { ...state, location: action.location };
    case SET_PLACE_ID:
      return { ...state, placeId: action.placeId };
    default:
      return state;
  }
};

export default locationReducer;
