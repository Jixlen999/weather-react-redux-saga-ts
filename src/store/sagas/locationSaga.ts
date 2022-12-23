import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchLocationByIP, fetchLocationByName, fetchPlaceID } from '@src/api';
import { ILocation } from '@src/types';
import { GET_CURRENT_LOCATION, setPlaceId, GET_INPUT_LOCATION, getLocationSuccess } from '../actions/locationActions';

function* locationWorkerById() {
  const location: ILocation = yield call(fetchLocationByIP);

  const placeId: string = yield call(fetchPlaceID, location.city);

  yield put(getLocationSuccess(location));
  yield put(setPlaceId(placeId));
}

function* locationWorkerByName({ payload }: { payload: string }) {
  const location: ILocation = yield call(fetchLocationByName, payload);

  if (location) {
    const placeId: string = yield call(fetchPlaceID, location.city);
    yield put(setPlaceId(placeId));
    yield put(getLocationSuccess(location));
  }
}

export function* ipLocationWatcher() {
  yield takeEvery(GET_CURRENT_LOCATION, locationWorkerById);
}

export function* inputLocationWatcher() {
  yield takeEvery<any>(GET_INPUT_LOCATION, locationWorkerByName);
}
