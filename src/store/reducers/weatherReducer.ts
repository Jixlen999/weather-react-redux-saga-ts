import { SET_CURRENT_WEATHER } from '../actions/weatherActions';

interface ICurrentWeather {
  icon: string | null;
  temperature: string | null;
  summary: string;
}

interface IState {
  currentWeather: ICurrentWeather;
}

const initialState: IState = {
  currentWeather: {
    icon: null,
    temperature: null,
    summary: '',
  },
};

interface IAction {
  type: string;
  currentWeather?: ICurrentWeather;
}

const weatherReducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case SET_CURRENT_WEATHER: {
      return { ...state, currentWeather: action.currentWeather! };
    }
    default:
      return state;
  }
};

export default weatherReducer;
