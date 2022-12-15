/* eslint-disable @typescript-eslint/no-unused-vars */
import { all, call, fork, spawn, take } from 'redux-saga/effects';
import locationWatcher from './locationSaga';
import inputLocationWatcher from './inputLocationSaga';

export default function* rootSaga() {
  yield fork(locationWatcher);
  // yield call(weatherWatcher);
  // yield locationWatcher();
  // yield weatherWatcher();
  // yield all([inputLocationWatcher(), locationWatcher(), weatherWatcher()]);
}
