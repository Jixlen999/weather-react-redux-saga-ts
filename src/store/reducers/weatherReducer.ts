import { IWeatherState, ICurrentWeatherAction, IDailyWeatherAction, IHourlyWeatherAction } from '@src/types';
import { SET_CURRENT_WEATHER, SET_DAILY_WEATHER, SET_HOURLY_WEATHER } from '@store/actions/weatherActions';

const initialState: IWeatherState = {
  currentWeather: {
    icon: null,
    temperature: null,
    summary: '',
  },
  dailyWeather: [],
  hourlyWeather: [],
};

const weatherReducer = (
  state: IWeatherState = initialState,
  { type, payload }: ICurrentWeatherAction | IDailyWeatherAction | IHourlyWeatherAction,
): IWeatherState => {
  switch (type) {
    case SET_CURRENT_WEATHER: {
      return { ...state, currentWeather: payload };
    }
    case SET_DAILY_WEATHER: {
      return { ...state, dailyWeather: payload };
    }
    case SET_HOURLY_WEATHER: {
      return { ...state, hourlyWeather: payload };
    }
    default:
      return state;
  }
};

export default weatherReducer;
