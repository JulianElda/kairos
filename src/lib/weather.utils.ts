import { SvelteDate } from "svelte/reactivity";

import type { WeatherResponse } from "./types/weather.types";

import { formatDailyDisplayDay, formatToHourISOString } from "./time.utils";
import { weatherDescriptions } from "./weather";

export function getCurrentHourApparentTemperature(
  weatherData: WeatherResponse,
) {
  const currentHourIndex = getHourStartIndex(weatherData);
  const value = weatherData.hourly.apparent_temperature[currentHourIndex];
  const units = weatherData.hourly_units.apparent_temperature;
  return `${value}${units}`;
}

export function getCurrentHourRelativeHumidity(weatherData: WeatherResponse) {
  const currentHourIndex = getHourStartIndex(weatherData);
  const value = weatherData.hourly.relative_humidity_2m[currentHourIndex];
  const units = weatherData.hourly_units.relative_humidity_2m;
  return `${value}${units}`;
}

export function getCurrentHourWindDirection(weatherData: WeatherResponse) {
  const currentHourIndex = getHourStartIndex(weatherData);
  return weatherData.hourly.wind_direction_10m[currentHourIndex];
}

export function getCurrentHourWindSpeed(weatherData: WeatherResponse) {
  const currentHourIndex = getHourStartIndex(weatherData);
  const value = weatherData.hourly.wind_speed_10m[currentHourIndex];
  const units = weatherData.hourly_units.wind_speed_10m;
  return `${value}${units}`;
}

export function getCurrentTemperature(weatherData: WeatherResponse) {
  const value = weatherData.current.temperature_2m;
  const units = weatherData.current_units.temperature_2m;
  return `${value}${units}`;
}

export function getCurrentWeatherDescription(weatherData: WeatherResponse) {
  return weatherDescriptions[weatherData.current.weather_code].description;
}

export function getDailyDayname(weatherData: WeatherResponse, index: number) {
  return formatDailyDisplayDay(weatherData.daily.time.slice(0, 5))[index];
}

export function getDailyMaxTemperature(
  weatherData: WeatherResponse,
  index: number,
) {
  const value = Math.floor(weatherData.daily.temperature_2m_max[index]);
  const units = weatherData.daily_units.temperature_2m_max;
  return `${value}${units}`;
}

export function getDailyMinTemperature(
  weatherData: WeatherResponse,
  index: number,
) {
  const value = Math.floor(weatherData.daily.temperature_2m_min[index]);
  const units = weatherData.daily_units.temperature_2m_min;
  return `${value}${units}`;
}

export function getDailyUVIndexMax(weatherData: WeatherResponse) {
  const value = weatherData.daily.uv_index_max[0];
  const units = weatherData.daily_units.uv_index_max;
  return `${value}${units}`;
}

export function getDailyWeatherCode(
  weatherData: WeatherResponse,
  index: number,
) {
  return weatherData.daily.weather_code[index];
}

export function getHourlyDisplayTime(
  weatherData: WeatherResponse,
  index: number,
) {
  return new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
  }).format(new Date(weatherData.hourly.time[index]));
}

export function getHourlyTemperature(
  weatherData: WeatherResponse,
  index: number,
) {
  const value = weatherData.hourly.temperature_2m[index];
  const units = weatherData.hourly_units.temperature_2m;
  return `${value}${units}`;
}

export function getHourlyWeatherCode(
  weatherData: WeatherResponse,
  index: number,
) {
  return weatherData.hourly.weather_code[index];
}

export function getHourStartIndex(weatherData: WeatherResponse) {
  const currentTime = new SvelteDate(weatherData.current.time);
  currentTime.setMinutes(0);

  const roundedDownHours = formatToHourISOString(currentTime);

  return weatherData.hourly.time.indexOf(roundedDownHours);
}
