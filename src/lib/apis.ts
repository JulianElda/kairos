import type { NominatimResponse } from "./types/nominatim.types";
import type { WeatherResponse } from "./types/weather.types";

export interface GeocodingCityResponse {
  admin1: string;
  admin1_id: number;
  admin2: string;
  admin2_id: number;
  admin3: string;
  admin3_id: number;
  admin4: string;
  admin4_id: number;
  country: string;
  country_code: string;
  country_id: number;
  elevation: number;
  feature_code: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  postcodes: string[];
  timezone: string;
}

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
    daily: "sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min",
    hourly: "temperature_2m,weather_code",
    latitude,
    longitude,
    timezone: "auto",
  };

  return await fetch(
    `${apiUrl}?${new URLSearchParams(apiParams).toString()}`,
  ).then((result) => result.json());
}
