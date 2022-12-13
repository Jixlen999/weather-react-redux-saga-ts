import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  calendar: calendarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
