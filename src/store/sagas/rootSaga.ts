import { fork } from 'redux-saga/effects';
import locationWatcher, { inputLocationWatcher } from './locationSaga';
import weatherWatcher from './weatherSaga';

export default function* rootSaga() {
  yield fork(locationWatcher);
  yield fork(weatherWatcher);
  yield fork(inputLocationWatcher);
}
