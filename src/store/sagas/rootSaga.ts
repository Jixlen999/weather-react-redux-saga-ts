import { fork } from 'redux-saga/effects';
import locationSaga from './locationSaga';
import inputLocationSaga from './inputLocationSaga';
import calendarSaga from './calendarSaga';

export default function* rootSaga() {
  yield fork(locationSaga);
  yield fork(inputLocationSaga);
  yield fork(calendarSaga);
}
