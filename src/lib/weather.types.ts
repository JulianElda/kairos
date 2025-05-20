export type WeatherCurrentUnits = {
  time: string;
  interval: string;
  temperature_2m: string;
  weather_code: string;
};

export type WeatherCurrent = {
  time: string;
  interval: number;
  temperature_2m: number;
  weather_code: number;
};

export type WeatherHourlyUnits = {
  time: string;
  temperature_2m: string;
  weather_code: string;
};

export type WeatherHourly = {
  time: string[];
  temperature_2m: number[];
  weather_code: number[];
};

export type WeatherDailyUnits = {
  time: string;
  sunrise: string;
  sunset: string;
  weather_code: string;
};

export type WeatherDaily = {
  time: string[];
  weather_code: number[];
  sunrise: string[];
  sunset: string[];
};

export type WeatherResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: WeatherCurrentUnits;
  current: WeatherCurrent;
  hourly_units: WeatherHourlyUnits;
  hourly: WeatherHourly;
  daily_units: WeatherDailyUnits;
  daily: WeatherDaily;
};
