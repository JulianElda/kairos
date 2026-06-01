import type { WeatherResponse } from "$lib/types/weather.types";

import { getWeatherData } from "$lib/apis";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ request }) => {
  const city = request.headers.get("X-Vercel-IP-City") ?? "";
  const latitude = request.headers.get("X-Vercel-IP-Latitude") ?? "";
  const longitude = request.headers.get("X-Vercel-IP-Longitude") ?? "";

  const weatherData: WeatherResponse = await getWeatherData(
    latitude,
    longitude,
  );

  return {
    city: decodeURI(city),
    weatherData: weatherData,
  };
};
