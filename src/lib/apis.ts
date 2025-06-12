import type { NominatimResponse } from "./types/nominatim.types";
import type { WeatherResponse } from "./types/weather.types";
import {
  getNonimatimReverseGeocodingUrl,
  getOpenMeteoWeatherApiUrl,
} from "./utils";

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
