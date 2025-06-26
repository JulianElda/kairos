export interface WeatherCurrent {
  interval: number;
  temperature_2m: number;
  time: string;
  weather_code: number;
}

export interface WeatherCurrentUnits {
  interval: string;
  temperature_2m: string;
  time: string;
  weather_code: string;
}

export interface WeatherDaily {
  sunrise: string[];
  sunset: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  weather_code: number[];
}

export interface WeatherDailyUnits {
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  weather_code: string;
}

export interface WeatherHourly {
  temperature_2m: number[];
  time: string[];
  weather_code: number[];
}

export interface WeatherHourlyUnits {
  temperature_2m: string;
  time: string;
  weather_code: string;
}

export interface WeatherResponse {
  current: WeatherCurrent;
  current_units: WeatherCurrentUnits;
  daily: WeatherDaily;
  daily_units: WeatherDailyUnits;
  elevation: number;
  generationtime_ms: number;
  hourly: WeatherHourly;
  hourly_units: WeatherHourlyUnits;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}
