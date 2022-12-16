/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_CURRENT_LOCATION, GET_LOCATION_SUCCESS, setPlaceId, GET_INPUT_LOCATION } from '../actions/locationActions';

interface ILocation {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

async function fetchLocationByIP() {
  const location: ILocation = await axios
    .get('https://ipgeolocation.abstractapi.com/v1/?api_key=1af23530f57744fd82b5ee50622b261e')
    .then(({ data }) => data)
    .then(({ city, country, latitude, longitude }) => ({ city, country, latitude, longitude }));
  return location;
}
async function fetchLocationByName(cityName: string) {
  console.log('im here');
  const location: ILocation = await axios
    .get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=d47aaf5a7ca8357e87b2d06f96316705`)
    .then(({ data }) => data[0])
    .then(({ name, country, lat, lon }) => ({ city: name, country, latitude: lat, longitude: lon }));
  return location;
}

// Fetching placeId for meteosource.com
async function fetchPlaceID(curLocation: string): Promise<string> {
  const placeId: string = await axios
    .get(
      `https://www.meteosource.com/api/v1/free/find_places_prefix?text=${curLocation}&language=en&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
    )
    .then(({ data }) => data[0].place_id);
  return placeId;
}

function* locationWorkerById() {
  const location: ILocation = yield call(fetchLocationByIP);

  const placeId: string = yield call(fetchPlaceID, location.city);

  yield put({
    type: GET_LOCATION_SUCCESS,
    location,
  });
  yield put(setPlaceId(placeId));
}

function* locationWorkerByName({ cityName }: { cityName: string }) {
  const location: ILocation = yield call(fetchLocationByName, cityName);
  const placeId: string = yield call(fetchPlaceID, location.city);

  yield put({
    type: GET_LOCATION_SUCCESS,
    location,
  });
  yield put(setPlaceId(placeId));
}

// function* locationWorker({ cityName }: { cityName?: string }) {
//   let location: ILocation;
//   if (cityName) {
//     location = yield call(fetchLocationByName, cityName);
//     console.log(location);
//   } else {
//     location = yield call(fetchLocationByIP);
//     console.log(location);
//   }
//   console.log(location);
//   // @ts-ignore
//   const placeId: string = yield call(fetchPlaceID, location.city);

//   yield put({
//     type: GET_LOCATION_SUCCESS,
//     location,
//   });
//   yield put(setPlaceId(placeId));
// }
export function* inputLocationWatcher() {
  yield takeLatest<any>(GET_INPUT_LOCATION, locationWorkerByName);
}
function* locationWatcher() {
  yield takeLatest(GET_CURRENT_LOCATION, locationWorkerById);
}

export default locationWatcher;
