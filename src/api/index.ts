import axios from 'axios';

import { ILocation } from '@src/types';

// For location saga
export async function fetchLocationByIP() {
  const location: ILocation = await axios
    .get('https://ipgeolocation.abstractapi.com/v1/?api_key=1af23530f57744fd82b5ee50622b261e')
    .then(({ data }) => data)
    .then(({ city, country, latitude, longitude }) => ({ city, country, latitude, longitude }));
  return location;
}
export async function fetchLocationByName(cityName: string) {
  const location: ILocation = await axios
    .get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=d47aaf5a7ca8357e87b2d06f96316705`)
    .then(({ data }) => data[0])
    .then(({ name, country, lat, lon }) => ({ city: name, country, latitude: lat, longitude: lon }));
  return location;
}

// Fetching placeId for meteosource.com
export async function fetchPlaceID(curLocation: string): Promise<string> {
  const placeId: string = await axios
    .get(
      `https://www.meteosource.com/api/v1/free/find_places_prefix?text=${curLocation}&language=en&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
    )
    .then(({ data }) => data[0].place_id);
  return placeId;
}

// For weather saga
export function fetchCurWeather(placeId: string) {
  return axios
    .get(
      `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=current&language=en&units=auto&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
    )
    .then(({ data }) => data.current)
    .then(({ icon_num, temperature, summary }) => ({ icon: icon_num, temperature, summary }));
}

export function fetchDailyWeather(placeId: string): Promise<any> {
  return axios
    .get(
      `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=daily&language=en&units=auto&key=y1n9nte06no9kr9lmnf4838aebtt2yu0hkwkisja`,
    )
    .then(({ data }) => data.daily.data.splice(1)); // Отрезаем первый день, т.к. он показан в "TODAY"
}

export function fetchHourlyWeather(latitude: number | string, longitude: number | string) {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=d47aaf5a7ca8357e87b2d06f96316705`,
    )
    .then(({ data }) => data.list)
    .then((data) => data.splice(1, 6));
}
