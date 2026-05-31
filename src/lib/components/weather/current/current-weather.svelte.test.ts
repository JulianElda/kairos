import CurrentWeather from "$lib/components/weather/current/current-weather.svelte";
import { mockWeatherData } from "$lib/mocks";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-svelte";

vi.mock("$lib/store.svelte", () => ({
  get store() {
    const mockState = $state({
      location: "München",
      weatherData: mockWeatherData,
    });
    return mockState;
  },
}));

test("show city name, temperature, description", async () => {
  const { getByTestId } = await render(CurrentWeather);

  await expect.element(getByTestId("city-name")).toHaveTextContent("München");
  await expect
    .element(getByTestId("current-temperature"))
    .toHaveTextContent("20°C");
  await expect
    .element(getByTestId("current-description"))
    .toHaveTextContent("Overcast");
});
