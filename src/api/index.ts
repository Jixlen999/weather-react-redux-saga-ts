import axios from 'axios';

import { ILocation } from '@src/types';

// For location saga
export async function fetchLocationByIP() {
  const location: ILocation = await axios
    .get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_IPGEOLOCATION_API_KEY}`)
    .then(({ data }) => data)
    .then(({ city, country, latitude, longitude }) => ({ city, country, latitude, longitude }));
  console.log(location);
  return location;
}
export async function fetchLocationByName(cityName: string) {
  const location: ILocation = await axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
    )
    .then(({ data }) => data[0])
    .then(({ name, country, lat, lon }) => ({ city: name, country, latitude: lat, longitude: lon }));
  return location;
}

// Fetching placeId for meteosource.com
export async function fetchPlaceID(curLocation: string): Promise<string> {
  const placeId: string = await axios
    .get(
      `https://www.meteosource.com/api/v1/free/find_places_prefix?text=${curLocation}&language=en&key=${process.env.REACT_APP_METEOSOURCE_API_KEY}`,
    )
    .then(({ data }) => data[0].place_id);
  return placeId;
}

// For weather saga
export function fetchCurWeather(placeId: string) {
  return axios
    .get(
      `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=current&language=en&units=auto&key=${process.env.REACT_APP_METEOSOURCE_API_KEY}`,
    )
    .then(({ data }) => data.current)
    .then(({ icon_num, temperature, summary }) => ({ icon: icon_num, temperature, summary }));
}

export function fetchDailyWeather(placeId: string): Promise<any> {
  return axios
    .get(
      `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=daily&language=en&units=auto&key=${process.env.REACT_APP_METEOSOURCE_API_KEY}`,
    )
    .then(({ data }) => data.daily.data.splice(1)); // Отрезаем первый день, т.к. он показан в "TODAY"
}

export function fetchHourlyWeather(latitude: number | string, longitude: number | string) {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
    )
    .then(({ data }) => data.list)
    .then((data) => data.splice(1, 6));
}
