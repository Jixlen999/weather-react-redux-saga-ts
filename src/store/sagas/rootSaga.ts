/* eslint-disable @typescript-eslint/no-unused-vars */
import { all, call, fork, spawn, take } from 'redux-saga/effects';
import locationWatcher from './locationSaga';
import inputLocationWatcher from './inputLocationSaga';
import weatherWatcher from './weatherSaga';

export default function* rootSaga() {
  yield fork(locationWatcher);
  yield fork(weatherWatcher);
  // yield all([inputLocationWatcher(), locationWatcher(), weatherWatcher()]);
}
