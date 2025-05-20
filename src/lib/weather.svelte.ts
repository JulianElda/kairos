import type { WeatherResponse } from "./weather.types";

export const weatherData = $state<{
  data: WeatherResponse | null;
  location: string;
}>({
  data: null,
  location: "",
});
