import { SET_CURRENT_WEATHER, SET_DAILY_WEATHER, SET_HOURLY_WEATHER } from '../actions/weatherActions';

interface ICurrentWeather {
  icon: string | null;
  temperature: string | null;
  summary: string;
}

interface IState {
  currentWeather: ICurrentWeather;
  dailyWeather?: any;
  hourlyWeather?: any;
}

const initialState: IState = {
  currentWeather: {
    icon: null,
    temperature: null,
    summary: '',
  },
  dailyWeather: null,
  hourlyWeather: null,
};

interface IAction {
  type: string;
  currentWeather?: ICurrentWeather;
  dailyWeather?: any;
  hourlyWeather?: any;
}

const weatherReducer = (state: IState = initialState, action: IAction): IState => {
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
