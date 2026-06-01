import CurrentWeather from "$lib/components/weather/current/current-weather.svelte";
import { mockWeatherData } from "$lib/types/weather.mocks";
import { expect, test } from "vitest";
import { render } from "vitest-browser-svelte";

test("show city name, temperature, description", async () => {
  const { getByTestId } = await render(CurrentWeather, {
    props: {
      currentUnits: mockWeatherData.current_units,
      currentWeather: mockWeatherData.current,
      dailyWeather: mockWeatherData.daily,
      location: "München",
    },
  });

  await expect.element(getByTestId("city-name")).toHaveTextContent("München");
  await expect
    .element(getByTestId("current-temperature"))
    .toHaveTextContent("20°C");
  await expect
    .element(getByTestId("current-description"))
    .toHaveTextContent("Overcast");
});
