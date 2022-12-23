export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_DAILY_WEATHER = 'SET_DAILY_WEATHER';
export const SET_HOURLY_WEATHER = 'SET_HOURLY_WEATHER';

export const getCurrentWeather = () => ({
  type: GET_CURRENT_WEATHER,
});
export const setCurrentWeather = (payload: any) => ({
  type: SET_CURRENT_WEATHER,
  payload,
});
export const setDailyWeather = (payload: any) => ({
  type: SET_DAILY_WEATHER,
  payload,
});
export const setHourlyWeather = (payload: any) => ({
  type: SET_HOURLY_WEATHER,
  payload,
});
