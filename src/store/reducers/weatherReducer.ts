import { IWeatherAction, IWeatherState } from '@src/types';
import { SET_CURRENT_WEATHER, SET_DAILY_WEATHER, SET_HOURLY_WEATHER } from '../actions/weatherActions';

const initialState: IWeatherState = {
  currentWeather: {
    icon: null,
    temperature: null,
    summary: '',
  },
  dailyWeather: null,
  hourlyWeather: null,
};

const weatherReducer = (state: IWeatherState = initialState, action: IWeatherAction): IWeatherState => {
  switch (action.type) {
    case SET_CURRENT_WEATHER: {
      return { ...state, currentWeather: action.currentWeather! };
    }
    case SET_DAILY_WEATHER: {
      return { ...state, dailyWeather: action.dailyWeather! };
    }
    case SET_HOURLY_WEATHER: {
      return { ...state, hourlyWeather: action.hourlyWeather! };
    }
    default:
      return state;
  }
};

export default weatherReducer;
