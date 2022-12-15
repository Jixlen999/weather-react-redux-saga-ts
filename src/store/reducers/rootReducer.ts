import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import locationReducer from './locationReducer';
import serviceSwitcherReducer from './serviceSwitcherReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  events: eventsReducer,
  service: serviceSwitcherReducer,
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
