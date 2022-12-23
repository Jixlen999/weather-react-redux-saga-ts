import axios from 'axios';

import paths from '@src/constants/apiPaths';
import apiKeys from '@src/constants/apiKeys';

const { ipgeolocation, openweathermap, meteosource } = paths;
const { openweathermapKey, meteosourceKey, ipgeolocationKey } = apiKeys;

// For location saga
export async function fetchLocationByIP() {
  const location = await axios
    .get(`${ipgeolocation}${ipgeolocationKey}`)
    .then(({ data }) => data)
    .then(({ city, country, latitude, longitude }) => ({ city, country, latitude, longitude }));
  return location;
}
export async function fetchLocationByName(cityName: string) {
  const location = await axios
    .get(`${openweathermap}geo/1.0/direct?q=${cityName}&limit=5&appid=${openweathermapKey}`)
    .then(({ data }) => data[0])
    .then(({ name, country, lat, lon }) => ({ city: name, country, latitude: lat, longitude: lon }))
    .catch(() => null);
  return location;
}

// Fetching placeId for meteosource.com
export async function fetchPlaceID(curLocation: string): Promise<string> {
  const placeId: string = await axios
    .get(`${meteosource}api/v1/free/find_places_prefix?text=${curLocation}&language=en&key=${meteosourceKey}`)
    .then(({ data }) => data[0].place_id);
  return placeId;
}

// For weather saga
export function fetchCurWeather(placeId: string) {
  const curWeather = axios
    .get(
      `${meteosource}api/v1/free/point?place_id=${placeId}&sections=current&language=en&units=auto&key=${meteosourceKey}`,
    )
    .then(({ data }) => data.current)
    .then(({ icon_num, temperature, summary }) => ({ icon: icon_num, temperature, summary }));
  return curWeather;
}

export function fetchDailyWeather(placeId: string): Promise<any> {
  const dailyWeather = axios
    .get(
      `${meteosource}api/v1/free/point?place_id=${placeId}&sections=daily&language=en&units=auto&key=${meteosourceKey}`,
    )
    .then(({ data }) => data.daily.data.splice(1)); // Отрезаем первый день, т.к. он показан в "TODAY"
  return dailyWeather;
}

export function fetchHourlyWeather(latitude: number | string, longitude: number | string) {
  const hourlyWeather = axios
    .get(`${openweathermap}data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${openweathermapKey}`)
    .then(({ data }) => data.list)
    .then((data) => data.splice(1, 6));
  return hourlyWeather;
}

// For LocationInput
export function fetchCities(inputValue: any, setSearch: (arg: any) => void) {
  axios.get(`${openweathermap}geo/1.0/direct?q=${inputValue}&limit=5&appid=${openweathermapKey}`).then(({ data }) => {
    const citiesArray = data.map(({ name, lat, lon, country }: any) => ({
      name,
      latitude: lat,
      longitude: lon,
      country,
    }));
    setSearch(citiesArray);
  });
}
