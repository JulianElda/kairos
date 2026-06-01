import type { WeatherDaily, WeatherResponse } from "./types/weather.types";

export function formatDailyDisplayDay(days: string[]): string[] {
  return days.map((day: string) =>
    new Intl.DateTimeFormat("en", { weekday: "long" }).format(new Date(day)),
  );
}

export function formatToHourISOString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:00`;
}

export function isDayTime(
  weatherData: WeatherResponse,
  time: string = weatherData.current.time,
): boolean {
  const daily: WeatherDaily = weatherData.daily;

  // 2025-05-20T13:30 -> 2025-05-20
  const currentDay = time.slice(0, 10);

  const timeIndex = daily.time.indexOf(currentDay);

  const currentDate = new Date(time);
  const sunrise = new Date(daily.sunrise[timeIndex]);
  const sunset = new Date(daily.sunset[timeIndex]);

  return (
    currentDate.getTime() > sunrise.getTime() &&
    currentDate.getTime() < sunset.getTime()
  );
}
