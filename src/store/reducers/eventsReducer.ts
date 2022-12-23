import { IEventsState } from '@src/types';
import { SET_EVENTS, CLEAR_EVENTS } from '../actions/eventsActions';

const InitialState: IEventsState = {
  events: [],
};

const eventsReducer = (state: IEventsState = InitialState, { type, payload }: any) => {
  switch (type) {
    case SET_EVENTS:
      return { ...state, events: [...state.events, payload] };
    case CLEAR_EVENTS:
      return { ...state, events: [] };
    default:
      return state;
  }
};

export default eventsReducer;
