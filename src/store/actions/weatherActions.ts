export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_DAILY_WEATHER = 'SET_DAILY_WEATHER';
export const SET_HOURLY_WEATHER = 'SET_HOURLY_WEATHER';

export const getCurrentWeather = () => ({
  type: GET_CURRENT_WEATHER,
});
export const setCurrentWeather = (currentWeather: any) => ({
  type: SET_CURRENT_WEATHER,
  currentWeather,
});
export const setDailyWeather = (dailyWeather: any) => ({
  type: SET_DAILY_WEATHER,
  dailyWeather,
});
export const setHourlyWeather = (hourlyWeather: any) => ({
  type: SET_HOURLY_WEATHER,
  hourlyWeather,
});
