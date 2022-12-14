import { SET_EVENTS } from '../actions/calendarActions';

interface IniState {
  events: string;
}

const initialState: IniState = {
  events: '',
};
interface IAction {
  type: string;
  event: any;
}

const calendarReducer = (state: IniState = initialState, action: IAction) => {
  switch (action.type) {
    case SET_EVENTS:
      return { ...state, events: action.event };
    default:
      return state;
  }
};

export default calendarReducer;
