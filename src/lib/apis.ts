import type { NominatimResponse } from "./types/nominatim.types";
import type { WeatherResponse } from "./types/weather.types";

export async function getLocationName(
  latitude: string,
  longitude: string,
): Promise<NominatimResponse> {
  const apiUrl = "https://nominatim.openstreetmap.org/reverse";
  const apiParams = {
    format: "json",
    lat: latitude,
    lon: longitude,
    zoom: "12",
  };

  return await fetch(
    `${apiUrl}?${new URLSearchParams(apiParams).toString()}`,
  ).then((result) => result.json());
}

export async function getWeatherData(
  latitude: string,
  longitude: string,
): Promise<WeatherResponse> {
  const apiUrl = "https://api.open-meteo.com/v1/forecast";
  const apiParams = {
    current: "temperature_2m,weather_code",
    daily:
      "sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min,uv_index_max",
    forecast_days: "5",
    hourly:
      "temperature_2m,weather_code,uv_index,apparent_temperature,relative_humidity_2m,wind_direction_10m,wind_speed_10m",
    latitude,
    longitude,
    timezone: "auto",
  };

  return await fetch(
    `${apiUrl}?${new URLSearchParams(apiParams).toString()}`,
  ).then((result) => result.json());
}
