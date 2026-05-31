import HourlyWeather from "$lib/components/weather/hourly/hourly-weather.svelte";
import { mockWeatherData } from "$lib/mocks";
import { expect, test } from "vitest";
import { render } from "vitest-browser-svelte";

test("show display time and temperature", async () => {
  const { getByTestId } = render(HourlyWeather, {
    props: {
      currentWeather: mockWeatherData.current,
      dailyWeather: mockWeatherData.daily,
      hourlyUnits: mockWeatherData.hourly_units,
      hourlyWeather: mockWeatherData.hourly,
    },
  });
  await expect
    .element(getByTestId("hourly-displaytime-0"))
    .toHaveTextContent("15:00");
  await expect
    .element(getByTestId("hourly-displaytime-1"))
    .toHaveTextContent("16:00");
  await expect
    .element(getByTestId("hourly-displaytime-2"))
    .toHaveTextContent("17:00");
  await expect
    .element(getByTestId("hourly-displaytime-3"))
    .toHaveTextContent("18:00");
  await expect
    .element(getByTestId("hourly-displaytime-4"))
    .toHaveTextContent("19:00");
  await expect
    .element(getByTestId("hourly-temperature-0"))
    .toHaveTextContent("20°C");
  await expect
    .element(getByTestId("hourly-temperature-1"))
    .toHaveTextContent("21°C");
  await expect
    .element(getByTestId("hourly-temperature-2"))
    .toHaveTextContent("21°C");
  await expect
    .element(getByTestId("hourly-temperature-3"))
    .toHaveTextContent("21°C");
  await expect
    .element(getByTestId("hourly-temperature-4"))
    .toHaveTextContent("20°C");
});
