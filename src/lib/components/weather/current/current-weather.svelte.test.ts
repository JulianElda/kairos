import { describe, expect, test, vi } from "vitest";
import { screen, render } from "@testing-library/svelte";
import { mockWeatherData } from "$lib/mocks";
import CurrentWeather from "./current-weather.svelte";

describe("Current weather", () => {
  vi.mock("$lib/weather.svelte", () => ({
    get weatherData() {
      const mockState = $state({
        data: mockWeatherData,
        location: "München",
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
