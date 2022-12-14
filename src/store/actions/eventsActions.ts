export const SET_EVENTS = 'SET_EVENTS';
export const CLEAR_EVENTS = 'CLEAR_EVENTS';

export const storeEvents = (events: any[]) => ({
  type: SET_EVENTS,
  events,
});
export const clearEvents = () => ({
  type: CLEAR_EVENTS,
});
