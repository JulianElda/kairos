import type { WeatherResponse } from "./weather.types";

import testWeatherData from "./weather.mocks.json";

export const mockWeatherData = testWeatherData satisfies WeatherResponse;
