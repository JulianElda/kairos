import type { WeatherResponse } from "./weather.types";

export const initialWeatherData: WeatherResponse = {
  latitude: 0,
  longitude: 0,
  generationtime_ms: 0,
  utc_offset_seconds: 0,
  timezone: "",
  timezone_abbreviation: "",
  elevation: 0,
  current_units: {
    time: "iso8601",
    interval: "minutes",
    temperature_2m: "°C",
    weather_code: "wmo",
  },
  current: {
    time: "",
    interval: 0,
    temperature_2m: 0,
    weather_code: 0,
  },
  hourly_units: {
    time: "iso8601",
    temperature_2m: "°C",
    weather_code: "wmo",
  },
  hourly: {
    time: [],
    temperature_2m: [],
    weather_code: [],
  },
  daily_units: {
    time: "iso8601",
    sunrise: "iso8601",
    sunset: "iso8601",
    weather_code: "wmo",
    temperature_2m_max: "°C",
    temperature_2m_min: "°C",
  },
  daily: {
    time: [],
    sunrise: [],
    sunset: [],
    weather_code: [],
    temperature_2m_max: [],
    temperature_2m_min: [],
  },
};

export const weatherData = $state<{
  data: WeatherResponse;
  location: string;
  isLoading: boolean;
}>({
  data: initialWeatherData,
  location: "",
  isLoading: false,
});
