import { Service } from '@src/types';

export const SET_SERVICE = 'SET_SERVICE';

export const setService = (payload: Service) => ({
  type: SET_SERVICE,
  payload,
});
