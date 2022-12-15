import { SET_EVENTS, CLEAR_EVENTS } from '../actions/eventsActions';

interface IState {
  events: any[];
}

const InitialState: IState = {
  events: [],
};

interface IAction {
  type: string;
  events: any[];
}

const eventsReducer = (state: IState = InitialState, action: IAction) => {
  switch (action.type) {
    case SET_EVENTS:
      return { ...state, events: [...state.events, action.events] };
    case CLEAR_EVENTS:
      return { ...state, events: [] };
    default:
      return state;
  }
};

export default eventsReducer;
