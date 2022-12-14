import { call, put, takeEvery } from 'redux-saga/effects';
import ApiCalendar from 'react-google-calendar-api';
import config from '@src/constants/googleConfig';
import { setEvents, SIGN_IN } from '../actions/calendarActions';

const apiCalendar = new ApiCalendar(config);

function delay() {
  let timer = 0;
  apiCalendar.onLoad(() => {
    const int = setInterval(() => {
      if (gapi.client.getToken() === null) {
        timer++;

        if (timer > 300) {
          clearInterval(int);
        }
      } else {
        clearInterval(int);
      }
    }, 1000);
  });
}

function* signinWorker() {
  yield call(apiCalendar.handleAuthClick);
  yield call(delay);
  const events = apiCalendar.listUpcomingEvents(10).then(({ result }: any) => result);
  yield put(setEvents(events));
}

function* signinWatcher() {
  yield takeEvery(SIGN_IN, signinWorker);
}

export default signinWatcher;
