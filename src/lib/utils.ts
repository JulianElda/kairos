import type { WeatherDaily } from "./weather.types";

export function formatToHourISOString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:00`;
}

export function isDayTime(currentTime: string, daily: WeatherDaily): boolean {
  // 2025-05-20T13:30 -> 2025-05-20
  const currentDay = currentTime.slice(0, 10);

  const timeIndex = daily.time.indexOf(currentDay);

  const currentDate = new Date(currentTime);
  const sunrise = new Date(daily.sunrise[timeIndex]);
  const sunset = new Date(daily.sunset[timeIndex]);

  return (
    currentDate.getTime() > sunrise.getTime() &&
    currentDate.getTime() < sunset.getTime()
  );
}

export function formatDailyDisplayDay(days: string[]): string[] {
  return [
    "Today",
    "Tomorrow",
    new Intl.DateTimeFormat("en", { weekday: "long" }).format(
      new Date(days[2])
    ),
    new Intl.DateTimeFormat("en", { weekday: "long" }).format(
      new Date(days[3])
    ),
    new Intl.DateTimeFormat("en", { weekday: "long" }).format(
      new Date(days[4])
    ),
  ];
}

export function getOpenMeteoWeatherApiUrl(
  latitude: string,
  longitude: string
): string {
  return (
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}&longitude=${longitude}` +
    `&daily=sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min` +
    `&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code` +
    `&timezone=auto`
  );
}

export function getNonimatimReverseGeocodingUrl(
  latitude: string,
  longitude: string
) {
  return (
    `https://nominatim.openstreetmap.org/reverse?format=json&zoom=12` +
    `&lat=${latitude}&lon=${longitude}`
  );
}
