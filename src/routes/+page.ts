import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  return await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=48.1374&longitude=11.5755&daily=weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code&timezone=auto"
  ).then((res) => res.json());
};
