import { describe, expect, test, vi } from "vitest";
import { screen, render } from "@testing-library/svelte";
import { mockWeatherData } from "$lib/mocks";
import HourlyWeather from "./hourly-weather.svelte";

describe("Hourly weather", () => {
  vi.mock("$lib/weather.svelte", () => ({
    get weatherData() {
      const mockState = $state({
        data: mockWeatherData,
        location: "München",
      });
      return mockState;
    },
  }));

  test("show display time and temperature", () => {
    render(HourlyWeather);
    expect(screen.getByTestId("hourly-displaytime-0")).toHaveTextContent(
      "15:00"
    );
    expect(screen.getByTestId("hourly-displaytime-1")).toHaveTextContent(
      "16:00"
    );
    expect(screen.getByTestId("hourly-displaytime-2")).toHaveTextContent(
      "17:00"
    );
    expect(screen.getByTestId("hourly-displaytime-3")).toHaveTextContent(
      "18:00"
    );
    expect(screen.getByTestId("hourly-displaytime-4")).toHaveTextContent(
      "19:00"
    );
    expect(screen.getByTestId("hourly-temperature-0")).toHaveTextContent(
      "20°C"
    );
    expect(screen.getByTestId("hourly-temperature-1")).toHaveTextContent(
      "21°C"
    );
    expect(screen.getByTestId("hourly-temperature-2")).toHaveTextContent(
      "21°C"
    );
    expect(screen.getByTestId("hourly-temperature-3")).toHaveTextContent(
      "21°C"
    );
    expect(screen.getByTestId("hourly-temperature-4")).toHaveTextContent(
      "20°C"
    );
  });
});
