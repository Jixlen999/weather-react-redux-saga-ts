import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import locationReducer from './locationReducer';
import serviceSwitcherReducer from './serviceSwitcherReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  events: eventsReducer,
  service: serviceSwitcherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
