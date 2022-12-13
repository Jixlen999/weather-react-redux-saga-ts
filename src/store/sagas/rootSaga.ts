import { fork } from 'redux-saga/effects';
import locationSaga from './locationSaga';
import inputLocationSaga from './inputLocationSaga';

export default function* rootSaga() {
  yield fork(locationSaga);
  yield fork(inputLocationSaga);
  // yield fork(saga3)
}
