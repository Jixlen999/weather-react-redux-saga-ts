import { Service } from '@src/types';

export const SET_SERVICE = 'SET_SERVICE';

export const setService = (service: Service) => ({
  type: SET_SERVICE,
  service,
});
