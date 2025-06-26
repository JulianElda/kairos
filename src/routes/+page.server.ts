import type { WeatherResponse } from "$lib/types/weather.types";

import { getOpenMeteoWeatherApiUrl } from "$lib/utilities";

import type { PageServerLoad } from "./$types";

//const DEFAULT_LATITUDE = "48.13743"
//const DEFAULT_LONGITUDE = "11.57549"

const DEFAULT_CITY = "Munich";
const DEFAULT_LATITUDE = "52.52437";
const DEFAULT_LONGITUDE = "13.41053";

export const load: PageServerLoad = async ({ fetch, request }) => {
  const city = request.headers.get("X-Vercel-IP-City") ?? DEFAULT_CITY;
  const latitude =
    request.headers.get("X-Vercel-IP-latitude") ?? DEFAULT_LATITUDE;
  const longitude =
    request.headers.get("X-Vercel-IP-Longitude") ?? DEFAULT_LONGITUDE;

  const weatherData: WeatherResponse = await fetch(
    getOpenMeteoWeatherApiUrl(latitude, longitude)
  ).then((result) => result.json());

  return {
    city: decodeURI(city),
    weatherData: weatherData,
  };
};
