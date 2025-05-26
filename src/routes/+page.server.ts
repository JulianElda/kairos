import type { PageServerLoad } from "./$types";
import type { WeatherResponse } from "$lib/weather.types";

export const load: PageServerLoad = async ({ fetch, request }) => {
  const city = request.headers.get("X-Vercel-IP-City") ?? "Munich";
  const latitude = request.headers.get("X-Vercel-IP-latitude") ?? "48.13743";
  const longitude = request.headers.get("X-Vercel-IP-Longitude") ?? "11.57549";

  const weatherData: WeatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${latitude}&longitude=${longitude}` +
      `&daily=sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min` +
      `&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code` +
      `&timezone=auto`
  ).then((res) => res.json());

  return {
    city: decodeURI(city),
    weatherData: weatherData,
  };
};
