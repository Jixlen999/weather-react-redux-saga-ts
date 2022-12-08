import { fork } from 'redux-saga/effects';
import locationSaga from './locationSaga';

export default function* rootSaga() {
  yield fork(locationSaga);
  // yield fork(saga2)
  // yield fork(saga3)
}
