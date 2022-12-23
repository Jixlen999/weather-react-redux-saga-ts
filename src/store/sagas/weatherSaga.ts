import { call, select, put, takeEvery } from 'redux-saga/effects';

import { fetchCurWeather, fetchDailyWeather, fetchHourlyWeather } from '@src/api';
import { ICurrentWeather } from '@src/types';
import {
  GET_CURRENT_WEATHER,
  setCurrentWeather,
  setDailyWeather,
  setHourlyWeather,
} from '@store/actions/weatherActions';
import { locationSelector } from '@store/selectors';

function* weatherWorker() {
  const { placeId, latitude, longitude } = yield select(locationSelector);
  const curWeather: ICurrentWeather = yield call(fetchCurWeather, placeId);
  yield put(setCurrentWeather(curWeather));

  const dailyWeather: any[] = yield call(fetchDailyWeather, placeId);
  yield put(setDailyWeather(dailyWeather));

  const hourlyWeather: any[] = yield call(fetchHourlyWeather, latitude, longitude);
  yield put(setHourlyWeather(hourlyWeather));
}

function* weatherWatcher() {
  yield takeEvery(GET_CURRENT_WEATHER, weatherWorker);
}

export default weatherWatcher;
