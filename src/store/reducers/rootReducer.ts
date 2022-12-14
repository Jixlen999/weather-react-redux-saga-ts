import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  events: eventsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
