import DailyWeather from "$lib/components/weather/daily/daily-weather.svelte";
import { mockWeatherData } from "$lib/mocks";
import { expect, test } from "vitest";
import { render } from "vitest-browser-svelte";

test("show day of the week, minimum and maximum temperature", async () => {
  const { getByTestId } = render(DailyWeather, {
    props: {
      dailyUnits: mockWeatherData.daily_units,
      dailyWeather: mockWeatherData.daily,
    },
  });
  await expect.element(getByTestId("daily-day-0")).toHaveTextContent("Tuesday");
  await expect
    .element(getByTestId("daily-day-1"))
    .toHaveTextContent("Wednesday");
  await expect
    .element(getByTestId("daily-day-2"))
    .toHaveTextContent("Thursday");
  await expect.element(getByTestId("daily-day-3")).toHaveTextContent("Friday");
  await expect
    .element(getByTestId("daily-day-4"))
    .toHaveTextContent("Saturday");

  await expect.element(getByTestId("daily-min-0")).toHaveTextContent("9°C");
  await expect.element(getByTestId("daily-min-1")).toHaveTextContent("12°C");
  await expect.element(getByTestId("daily-min-2")).toHaveTextContent("10°C");
  await expect.element(getByTestId("daily-min-3")).toHaveTextContent("6°C");
  await expect.element(getByTestId("daily-min-4")).toHaveTextContent("7°C");

  await expect.element(getByTestId("daily-max-0")).toHaveTextContent("21°C");
  await expect.element(getByTestId("daily-max-1")).toHaveTextContent("21°C");
  await expect.element(getByTestId("daily-max-2")).toHaveTextContent("13°C");
  await expect.element(getByTestId("daily-max-3")).toHaveTextContent("14°C");
  await expect.element(getByTestId("daily-max-4")).toHaveTextContent("17°C");
});
