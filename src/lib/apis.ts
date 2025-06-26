import type { NominatimResponse } from "./types/nominatim.types";
import type { WeatherResponse } from "./types/weather.types";

import {
  getNonimatimReverseGeocodingUrl,
  getOpenMeteoWeatherApiUrl,
} from "./utilities";

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
  longitude: string
): Promise<NominatimResponse> {
  return await fetch(getNonimatimReverseGeocodingUrl(latitude, longitude)).then(
    (result) => result.json()
  );
}

export async function getWeatherData(
  latitude: string,
  longitude: string
): Promise<WeatherResponse> {
  return await fetch(getOpenMeteoWeatherApiUrl(latitude, longitude)).then(
    (result) => result.json()
  );
}
