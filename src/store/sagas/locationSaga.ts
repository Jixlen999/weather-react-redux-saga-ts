import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_CURRENT_LOCATION, GET_LOCATION_SUCCESS, setPlaceId } from '../actions/locationActions';

interface ILocation {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

async function fetchLocation() {
  const location: ILocation = await axios
    .get('https://ipgeolocation.abstractapi.com/v1/?api_key=1af23530f57744fd82b5ee50622b261e')
    .then(({ data }) => data)
    .then(({ city, country, latitude, longitude }) => ({ city, country, latitude, longitude }));
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

function* locationWorker() {
  const location: ILocation = yield call(fetchLocation);
  const placeId: string = yield call(fetchPlaceID, location.city);

  yield put({
    type: GET_LOCATION_SUCCESS,
    location,
  });
  yield put(setPlaceId(placeId));
}

function* locationWatcher() {
  yield takeLatest(GET_CURRENT_LOCATION, locationWorker);
}

export default locationWatcher;
