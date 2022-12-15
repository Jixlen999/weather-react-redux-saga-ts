export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const GET_DAILY_WEATHER = 'GET_DAILY_WEATHER';
export const GET_HOURLY_WEATHER = 'GET_DAILY_WEATHER';

export const getCurrentWeather = () => ({
  type: GET_CURRENT_WEATHER,
});
export const setCurrentWeather = (currentWeather: any) => ({
  type: SET_CURRENT_WEATHER,
  currentWeather,
});
export const getDailyWeather = () => ({});
export const getHourlyWeather = () => ({});
