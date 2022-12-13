// import { signIn } from './../actions/calendarActions';
import { takeEvery, put, call } from 'redux-saga/effects';
import ApiCalendar from 'react-google-calendar-api';
import config from '@src/constants/googleConfig';
import { setEvents, SIGN_IN } from '../actions/calendarActions';

const apiCalendar = new ApiCalendar(config);

function signin() {
  console.log('timer');
  apiCalendar.handleAuthClick();
  let timer = 0;
  apiCalendar.onLoad(() => {
    const int = setInterval(() => {
      if (gapi.client.getToken() === null) {
        timer++;

        if (timer > 300) {
          clearInterval(int);
        }
      } else {
        apiCalendar.listUpcomingEvents(10).then(({ result }: any) => {
          result.items.forEach((event: any) => {
            put(setEvents(event));
          });
        });
        clearInterval(int);
      }
    }, 1000);
  });
}

function* signinWorker() {
  yield call(signin);
}

function* signinWatcher() {
  yield takeEvery(SIGN_IN, signinWorker);
}

export default signinWatcher;
