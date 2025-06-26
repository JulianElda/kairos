import type { WeatherResponse } from "./types/weather.types";

export const initialWeatherData: WeatherResponse = {
  current: {
    interval: 0,
    temperature_2m: 0,
    time: "",
    weather_code: 0,
  },
  current_units: {
    interval: "minutes",
    temperature_2m: "°C",
    time: "iso8601",
    weather_code: "wmo",
  },
  daily: {
    sunrise: [],
    sunset: [],
    temperature_2m_max: [],
    temperature_2m_min: [],
    time: [],
    weather_code: [],
  },
  daily_units: {
    sunrise: "iso8601",
    sunset: "iso8601",
    temperature_2m_max: "°C",
    temperature_2m_min: "°C",
    time: "iso8601",
    weather_code: "wmo",
  },
  elevation: 0,
  generationtime_ms: 0,
  hourly: {
    temperature_2m: [],
    time: [],
    weather_code: [],
  },
  hourly_units: {
    temperature_2m: "°C",
    time: "iso8601",
    weather_code: "wmo",
  },
  latitude: 0,
  longitude: 0,
  timezone: "",
  timezone_abbreviation: "",
  utc_offset_seconds: 0,
};

export const store = $state<{
  isLoading: boolean;
  location: string;
  weatherData: WeatherResponse;
}>({
  isLoading: false,
  location: "",
  weatherData: initialWeatherData,
});
