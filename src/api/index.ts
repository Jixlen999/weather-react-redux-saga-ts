import axios from 'axios';

import paths from '@constants/apiPaths';
import apiKeys from '@constants/apiKeys';
import { ICities, IDailyWeather, IDayItem, IHourlyWeather, IHoursItem } from '@src/types';

const { ipgeolocation, openweathermap, meteosource } = paths;
const { openweathermapKey, meteosourceKey, ipgeolocationKey } = apiKeys;

// For location saga
export const fetchLocationByIP = async () => {
  const location = await axios.get(`${ipgeolocation}${ipgeolocationKey}`).then(({ data }) => {
    const { city, country, latitude, longitude } = data;
    return { city, country, latitude, longitude };
  });
  return location;
};
export const fetchLocationByName = async (cityName: string) => {
  const location = await axios
    .get(`${openweathermap}geo/1.0/direct?q=${cityName}&limit=5&appid=${openweathermapKey}`)
    .then(({ data }) => {
      const { name, country, lat, lon } = data[0];
      return { city: name, country, latitude: lat, longitude: lon };
    })
    .catch(() => null);
  return location;
};

// Fetching placeId for meteosource.com
export const fetchPlaceID = async (curLocation: string): Promise<string> => {
  const placeId = await axios
    .get(`${meteosource}api/v1/free/find_places_prefix?text=${curLocation}&language=en&key=${meteosourceKey}`)
    .then(({ data }) => data[0].place_id);
  return placeId;
};

// For weather saga
export const fetchCurWeather = async (placeId: string) => {
  const currentWeather = await axios
    .get(
      `${meteosource}api/v1/free/point?place_id=${placeId}&sections=current&language=en&units=auto&key=${meteosourceKey}`,
    )
    .then(({ data }) => {
      const { icon_num, temperature, summary } = data.current;
      return { icon: icon_num, temperature, summary };
    });
  return currentWeather;
};

export const fetchDailyWeather = async (placeId: string): Promise<IDailyWeather> => {
  const dailyWeather = await axios
    .get(
      `${meteosource}api/v1/free/point?place_id=${placeId}&sections=daily&language=en&units=auto&key=${meteosourceKey}`,
    )
    .then(({ data }) => data.daily.data.splice(1)) // Отрезаем первый день, т.к. он показан в "TODAY"
    .then((days) =>
      days.map((dayItem: IDayItem) => {
        const {
          day,
          all_day: { icon, temperature },
        } = dayItem;
        return { day, icon, temperature };
      }),
    );
  return dailyWeather;
};

export const fetchHourlyWeather = async (
  latitude: number | string,
  longitude: number | string,
): Promise<IHourlyWeather[]> => {
  const hourlyWeather = await axios
    .get(`${openweathermap}data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${openweathermapKey}`)
    .then(({ data }) => data.list)
    .then((list) => list.splice(1, 6))
    .then((hours) =>
      hours.map((hoursItem: IHoursItem) => {
        const {
          dt_txt,
          main: { temp },
          weather: {
            0: { icon },
          },
        } = hoursItem;
        return { date: dt_txt, temp, icon };
      }),
    );
  return hourlyWeather;
};

// For LocationInput

export const fetchCities = (inputValue: string, setSearch: (arg: ICities[]) => void) => {
  axios.get(`${openweathermap}geo/1.0/direct?q=${inputValue}&limit=5&appid=${openweathermapKey}`).then(({ data }) => {
    const citiesArray = data.map(({ name, lat, lon, country }: ICities) => ({
      name,
      latitude: lat,
      longitude: lon,
      country,
    }));
    setSearch(citiesArray);
  });
};
