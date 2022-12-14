import { RootState } from '@store/reducers/rootReducer';

export const weatherSummarySelector = (store: RootState) => store.weather.currentWeather.summary;
export const locationSelector = (store: RootState) => store.location;
export const eventsSelector = (store: RootState) => store.events.events;
export const currentWeatherSelector = (state: RootState) => state.weather.currentWeather;
export const weatherSelector = (state: RootState) => state.weather;
export const serviceSelector = (state: RootState) => state.service.service;
export const locationAndCurWeather = (store: RootState) => ({
  location: store.location,
  curWeather: store.weather.currentWeather,
});
