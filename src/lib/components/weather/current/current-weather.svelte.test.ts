import CurrentWeather from "$lib/components/weather/current/current-weather.svelte";
import { mockWeatherData } from "$lib/mocks";
import { render, screen } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";

describe("Current weather", () => {
  vi.mock("$lib/store.svelte", () => ({
    get store() {
      const mockState = $state({
        location: "München",
        weatherData: mockWeatherData,
      });
      return mockState;
    },
  }));

  test("show city name, temperature, description", () => {
    render(CurrentWeather);
    expect(screen.getByTestId("city-name")).toHaveTextContent("München");
    expect(screen.getByTestId("current-temperature")).toHaveTextContent("20°C");
    expect(screen.getByTestId("current-description")).toHaveTextContent(
      "Overcast"
    );
  });
});
