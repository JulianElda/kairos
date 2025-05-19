import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, request }) => {
  const headers = request.headers;
  const city = headers.get("x-vercel-ip-city") || "Munich";

  const citySearch = await fetch(`
    https://geocoding-api.open-meteo.com/v1/search?count=1&language=en&format=json&name=${encodeURIComponent(city)}
  `).then((res) => res.json());

  if (citySearch.results) {
    const result = citySearch.results[0];

    console.log(citySearch.results[0]);

    return await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${result.latitude}&longitude=${result.longitude}&daily=weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code&timezone=auto`
    ).then((res) => res.json());
  } else {
    return await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=48.13743&longitude=11.57549&daily=weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code&timezone=auto`
    ).then((res) => res.json());
  }
};
