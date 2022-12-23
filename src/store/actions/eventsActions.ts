import { IEvent } from '@src/types';

export const SET_EVENTS = 'SET_EVENTS';
export const CLEAR_EVENTS = 'CLEAR_EVENTS';

export const storeEvents = (payload: IEvent) => ({
  type: SET_EVENTS,
  payload,
});
export const clearEvents = () => ({
  type: CLEAR_EVENTS,
});
