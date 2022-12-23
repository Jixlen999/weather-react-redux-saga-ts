export const SET_EVENTS = 'SET_EVENTS';
export const CLEAR_EVENTS = 'CLEAR_EVENTS';

export const storeEvents = (payload: any[]) => ({
  type: SET_EVENTS,
  payload,
});
export const clearEvents = () => ({
  type: CLEAR_EVENTS,
});
