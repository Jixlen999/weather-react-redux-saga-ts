import { put, takeEvery } from 'redux-saga/effects';
import { GET_LOCATION_SUCCESS, SET_INPUT_LOCATION } from '../actions/locationActions';

function* inputLocationWorker(action: any) {
  console.log('here');

  const { location } = action;
  console.log(location);
  yield put({
    type: GET_LOCATION_SUCCESS,
    location,
  });
}

function* inputLocationWatcher() {
  yield takeEvery(SET_INPUT_LOCATION, inputLocationWorker);
}

export default inputLocationWatcher;
