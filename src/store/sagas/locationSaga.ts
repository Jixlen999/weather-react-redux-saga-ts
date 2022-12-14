import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_CURRENT_LOCATION, GET_LOCATION_SUCCESS } from '../actions/locationActions';

async function fetchLocation(): Promise<string> {
  const { data } = await axios.get(
    'https://ipgeolocation.abstractapi.com/v1/?api_key=1af23530f57744fd82b5ee50622b261e',
  );
  return data.city;
}

function* locationWorker() {
  const location: ReturnType<typeof fetchLocation> = yield call(fetchLocation);
  yield put({
    type: GET_LOCATION_SUCCESS,
    location,
  });
}

function* locationWatcher() {
  yield takeLatest(GET_CURRENT_LOCATION, locationWorker);
}

export default locationWatcher;
