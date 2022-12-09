import { GET_LOCATION_SUCCESS } from '../actions/locationActions';

const initialState = {
  location: '',
};
interface IAction {
  type: string;
  location: string;
}

const locationReducer = (state: typeof initialState = initialState, action: IAction) => {
  switch (action.type) {
    case GET_LOCATION_SUCCESS:
      return { ...state, location: action.location };
    default:
      return state;
  }
};

export default locationReducer;
