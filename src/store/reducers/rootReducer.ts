import { combineReducers } from 'redux';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  location: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
