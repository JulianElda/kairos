type WeatherDescription = {
  code: number;
  description: string;
  icon?: string;
};

export const weatherDescriptions: Record<number, WeatherDescription> = {
  0: { code: 0, description: "Clear sky", icon: "clear-day" },
  1: { code: 1, description: "Mainly clear", icon: "clear-day" },
  2: { code: 2, description: "Partly cloudy", icon: "partly-cloudy-day" },
  3: { code: 3, description: "Overcast" },
  45: { code: 45, description: "Fog" },
  48: { code: 48, description: "Depositing rime fog" },
  51: { code: 51, description: "Light drizzle" },
  53: { code: 53, description: "Moderate drizzle" },
  55: { code: 55, description: "Dense drizzle" },
  56: { code: 56, description: "Light freezing drizzle" },
  57: { code: 57, description: "Dense freezing drizzle" },
  61: { code: 61, description: "Slight rain" },
  63: { code: 63, description: "Moderate rain" },
  65: { code: 65, description: "Heavy rain" },
  66: { code: 66, description: "Light freezing rain" },
  67: { code: 67, description: "Heavy freezing rain" },
  71: { code: 71, description: "Slight snow fall" },
  73: { code: 73, description: "Moderate snow fall" },
  75: { code: 75, description: "Heavy snow fall" },
  77: { code: 77, description: "Snow grains" },
  80: { code: 80, description: "Slight rain showers" },
  81: { code: 81, description: "Moderate rain showers" },
  82: { code: 82, description: "Violent rain showers" },
  85: { code: 85, description: "Slight snow showers" },
  86: { code: 86, description: "Heavy snow showers" },
  95: { code: 95, description: "Thunderstorm: Slight or moderate" },
  96: { code: 96, description: "Thunderstorm with slight hail" },
  99: { code: 99, description: "Thunderstorm with heavy hail" },
};
