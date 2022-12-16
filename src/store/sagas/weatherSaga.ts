/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { call, takeLatest, select, put, all, delay } from 'redux-saga/effects';
import { GET_CURRENT_WEATHER, setCurrentWeather, setDailyWeather, setHourlyWeather } from '../actions/weatherActions';
import { RootState } from '../reducers/rootReducer';

interface ICurWeather {
  icon: string;
  temperature: string | number;
  summary: string;
}

function fetchCurWeather(placeId: string) {
  return axios
    .get(
      `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=current&language=en&units=auto&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
    )
    .then(({ data }) => data.current)
    .then(({ icon_num, temperature, summary }) => ({ icon: icon_num, temperature, summary }));
}

function fetchDailyWeather(placeId: string): Promise<any> {
  return axios
    .get(
      `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=daily&language=en&units=auto&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
    )
    .then(({ data }) => data.daily.data.splice(1)); // Отрезаем первый день, т.к. он показан в "TODAY"
}

function fetchHourlyWeather(latitude: number | string, longitude: number | string) {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=d47aaf5a7ca8357e87b2d06f96316705`,
    )
    .then(({ data }) => data.list)
    .then((data) => data.splice(1, 6));
}

function* weatherWorker() {
  const { placeId, latitude, longitude } = yield select((store: RootState) => store.location);
  const curWeather: ICurWeather = yield call(fetchCurWeather, placeId);
  yield put(setCurrentWeather(curWeather));

  // @ts-ignore
  const dailyWeather: any = yield call(fetchDailyWeather, placeId);
  yield put(setDailyWeather(dailyWeather));

  // @ts-ignore
  const hourlyWeather: any = yield call(fetchHourlyWeather, latitude, longitude);
  yield put(setHourlyWeather(hourlyWeather));
}

function* weatherWatcher() {
  yield takeLatest(GET_CURRENT_WEATHER, weatherWorker);
}

export default weatherWatcher;
