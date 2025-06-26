import HourlyWeather from "$lib/components/weather/hourly/hourly-weather.svelte";
import { mockWeatherData } from "$lib/mocks";
import { render, screen } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";

describe("Hourly weather", () => {
  vi.mock("$lib/store.svelte", () => ({
    get store() {
      const mockState = $state({
        location: "München",
        weatherData: mockWeatherData,
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
