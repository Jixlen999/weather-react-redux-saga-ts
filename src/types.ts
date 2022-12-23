import { ReactNode } from 'react';
import { GET_LOCATION_SUCCESS, SET_PLACE_ID } from '@store/actions/locationActions';

export type Service = 'daily' | 'hourly';

export interface IEventsState {
  events: IEvent[];
}
export interface IEvent {
  summary: string;
  dateTime: string;
}

export interface IEventAction {
  type: string;
  payload?: IEvent;
}

export interface IEventItemProps {
  event: IEvent;
}

export interface ILocationState {
  city: string;
  country: string;
  placeId?: string;
  latitude: number | null;
  longitude: number | null;
}

export interface ILocation {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface ILocationAction {
  type: typeof GET_LOCATION_SUCCESS;
  payload: ILocation;
}
export interface IPlaceIdAction {
  type: typeof SET_PLACE_ID;
  payload: string;
}

export interface IResultItem {
  summary: string;
  start: { dateTime: string };
}

export interface IResult {
  result: { items: IResultItem[] };
}

export interface IServiceState {
  service: Service;
}

export interface IServiceAction {
  type: string;
  payload: string;
}

export interface ICurrentWeather {
  icon: string | null;
  temperature: string | number | null;
  summary: string;
}
export interface IWeatherState {
  currentWeather: ICurrentWeather;
  dailyWeather?: any;
  hourlyWeather?: any;
}

export interface ICurrentWeatherAction {
  type: 'SET_CURRENT_WEATHER';
  payload: {
    icon: null;
    temperature: null;
    summary: '';
  };
}

export interface IDailyWeather {
  day: string;
  icon: string;
  temperature: number | string;
}

export interface IHourlyWeather {
  date: string;
  temp: number;
  icon: string;
}

export interface IDayItem {
  day: string;
  all_day: { icon: string; temperature: number | string };
}

export interface ICities {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

export interface IDailyWeatherAction {
  type: 'SET_DAILY_WEATHER';
  payload: IDailyWeather[];
}

export interface IHourlyWeatherAction {
  type: 'SET_HOURLY_WEATHER';
  payload: any[];
}

export interface IWeatherItemProps {
  temperature: string | number;
  time: string;
  iconSrc: string;
}

export interface IErrorBoundaryProps {
  children: ReactNode;
}
export interface IErrorBoundaryState {
  hasError: boolean;
}
export interface ILoginWrapper {
  active: boolean;
}
export interface IBtn {
  active: boolean;
}
export interface IMainWrapper {
  weatherSummary: string;
}

export interface IHoursItem {
  dt_txt: string;
  main: { temp: number };
  weather: { 0: { icon: string } };
}
