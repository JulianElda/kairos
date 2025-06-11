import type { NominatimResponse } from "./nominatim.types";
import {
  getNonimatimReverseGeocodingUrl,
  getOpenMeteoWeatherApiUrl,
} from "./utils";
import type { WeatherResponse } from "./weather.types";

export type GeocodingCityResponse = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  admin3_id: number;
  admin4_id: number;
  timezone: string;
  population: number;
  postcodes: string[];
  country_id: number;
  country: string;
  admin1: string;
  admin2: string;
  admin3: string;
  admin4: string;
};

export async function searchCityByName(
  cityName: string
): Promise<GeocodingCityResponse[]> {
  return await fetch(
    `https://geocoding-api.open-meteo.com/v1/search` +
      `?name=${cityName}` +
      `&count=1` +
      `&language=en` +
      `&format=json`
  )
    .then((res) => res.json())
    .then((res) => res.results as GeocodingCityResponse[]);
}

export async function getWeatherData(
  latitude: string,
  longitude: string
): Promise<WeatherResponse> {
  return await fetch(getOpenMeteoWeatherApiUrl(latitude, longitude)).then(
    (res) => res.json()
  );
}

export async function getLocationName(
  latitude: string,
  longitude: string
): Promise<NominatimResponse> {
  return await fetch(getNonimatimReverseGeocodingUrl(latitude, longitude)).then(
    (res) => res.json()
  );
}
