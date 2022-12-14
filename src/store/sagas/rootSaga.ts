import { all } from 'redux-saga/effects';
import locationWatcher from './locationSaga';
import inputLocationWatcher from './inputLocationSaga';

export default function* rootSaga() {
  yield all([inputLocationWatcher(), locationWatcher()]);
}
