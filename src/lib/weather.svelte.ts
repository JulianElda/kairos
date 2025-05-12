import { mockWeatherResponse } from "./mocks";

export const weatherData = $state({ data: { ...mockWeatherResponse } });
