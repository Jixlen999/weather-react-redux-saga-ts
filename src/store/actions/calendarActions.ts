export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_EVENTS = 'SET_EVENTS';

export const signIn = () => ({
  type: SIGN_IN,
});

export const setEvents = (event: any) => ({
  type: SET_EVENTS,
  event,
});
