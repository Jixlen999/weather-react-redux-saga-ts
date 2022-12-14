import { all } from 'redux-saga/effects';
import locationWatcher from './locationSaga';
import inputLocationWatcher from './inputLocationSaga';
import signinWatcher from './calendarSaga';

export default function* rootSaga() {
  yield all([signinWatcher(), inputLocationWatcher(), locationWatcher()]);
}
