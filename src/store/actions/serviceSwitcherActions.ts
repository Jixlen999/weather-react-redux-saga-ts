export const SET_SERVICE = 'SET_SERVICE';

type Service = 'daily' | 'hourly';

export const setService = (service: Service) => ({
  type: SET_SERVICE,
  service,
});
