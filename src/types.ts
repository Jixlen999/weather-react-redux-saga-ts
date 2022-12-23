import { ReactNode } from 'react';
import { GET_LOCATION_SUCCESS, SET_PLACE_ID } from './store/actions/locationActions';

export type Service = 'daily' | 'hourly';

export interface IEventsState {
  events: any[];
}
export interface IEventsAction {
  type: string;
  events: any[];
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

export interface IDailyWeatherAction {
  type: 'SET_DAILY_WEATHER';
  payload: any[];
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
