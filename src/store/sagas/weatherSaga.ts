import axios from 'axios';
import { call, takeLatest, select, put } from 'redux-saga/effects';
import { GET_CURRENT_WEATHER, setCurrentWeather } from '../actions/weatherActions';
import { RootState } from '../reducers/rootReducer';

interface ICurWeather {
  icon: string;
  temperature: string | number;
  summary: string;
}

async function fetchCurWeather(placeId: string): Promise<ICurWeather | null> {
  const curWeather: ICurWeather = await axios
    .get(
      `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=current&language=en&units=auto&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
    )
    .then(({ data }) => data.current)
    .then(({ icon_num, temperature, summary }) => ({ icon: icon_num, temperature, summary }));
  return curWeather;
}

function* weatherWorker() {
  const placeId: string = yield select((store: RootState) => store.location.placeId!);
  const curWeather: ICurWeather = yield call(fetchCurWeather, placeId);
  yield put(setCurrentWeather(curWeather));
}

function* weatherWatcher() {
  yield takeLatest(GET_CURRENT_WEATHER, weatherWorker);
}

export default weatherWatcher;
