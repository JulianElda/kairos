import type { PageServerLoad } from "./$types";
import { dev } from "$app/environment";
import { CITY, LONGITUDE, LATITUDE } from "$env/static/private";
import type { WeatherResponse } from "$lib/weather.types";

export const load: PageServerLoad = async ({ fetch, request }) => {
  const headers = request.headers;

  const city = dev ? CITY : headers.get("X-Vercel-IP-City")!;
  const latitude: string = dev
    ? LATITUDE
    : headers.get("X-Vercel-IP-Latitude")!;
  const longitude: string = dev
    ? LONGITUDE
    : headers.get("X-Vercel-IP-Longitude")!;

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
