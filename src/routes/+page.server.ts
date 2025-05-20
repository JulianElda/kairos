import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, request }) => {
  const headers = request.headers;
  const city = headers.get("X-Vercel-IP-City") || "Munich";

  const citySearch = await fetch(`
    https://geocoding-api.open-meteo.com/v1/search?count=1&language=en&format=json&name=${city}
  `).then((res) => res.json());

  if (citySearch.results) {
    const result = citySearch.results[0];

    const weatherData = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${result.latitude}&longitude=${result.longitude}&daily=sunset,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code&timezone=auto`
    ).then((res) => res.json());

    return {
      city: decodeURI(city),
      weatherData: weatherData,
    };
  }
};
