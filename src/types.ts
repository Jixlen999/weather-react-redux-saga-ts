import { ReactNode } from 'react';

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
export interface ILocationAction {
  type: string;
  location?: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  placeId?: '';
}

export interface IServiceState {
  service: Service;
}

export interface IServiceAction {
  type: string;
  service: string;
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
export interface IWeatherAction {
  type: string;
  currentWeather?: ICurrentWeather;
  dailyWeather?: any;
  hourlyWeather?: any;
}

export interface ILocation {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

// Others
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
