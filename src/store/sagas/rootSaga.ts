import { spawn } from 'redux-saga/effects';
import { inputLocationWatcher, ipLocationWatcher } from './locationSaga';
import weatherWatcher from './weatherSaga';

export default function* rootSaga() {
  yield spawn(inputLocationWatcher);
  yield spawn(ipLocationWatcher);
  yield spawn(weatherWatcher);
}
