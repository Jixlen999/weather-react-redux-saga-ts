import { ICurrentWeather, IDailyWeather, IHourlyWeather } from '@src/types';

export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_DAILY_WEATHER = 'SET_DAILY_WEATHER';
export const SET_HOURLY_WEATHER = 'SET_HOURLY_WEATHER';

export const getCurrentWeather = () => ({
  type: GET_CURRENT_WEATHER,
});
export const setCurrentWeather = (payload: ICurrentWeather[]) => ({
  type: SET_CURRENT_WEATHER,
  payload,
});
export const setDailyWeather = (payload: IDailyWeather[]) => ({
  type: SET_DAILY_WEATHER,
  payload,
});
export const setHourlyWeather = (payload: IHourlyWeather[]) => ({
  type: SET_HOURLY_WEATHER,
  payload,
});
