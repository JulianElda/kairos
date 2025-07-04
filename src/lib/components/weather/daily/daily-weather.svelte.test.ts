import DailyWeather from "$lib/components/weather/daily/daily-weather.svelte";
import { mockWeatherData } from "$lib/mocks";
import { render, screen } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";

describe("Daily weather", () => {
  vi.mock("$lib/store.svelte", () => ({
    get store() {
      const mockState = $state({
        location: "München",
        weatherData: mockWeatherData,
      });
      return mockState;
    },
  }));

  test("show day of the week, minimum and maximum temperature", () => {
    render(DailyWeather);
    expect(screen.getByTestId("daily-day-0")).toHaveTextContent("Tuesday");
    expect(screen.getByTestId("daily-day-1")).toHaveTextContent("Wednesday");
    expect(screen.getByTestId("daily-day-2")).toHaveTextContent("Thursday");
    expect(screen.getByTestId("daily-day-3")).toHaveTextContent("Friday");
    expect(screen.getByTestId("daily-day-4")).toHaveTextContent("Saturday");

    expect(screen.getByTestId("daily-min-0")).toHaveTextContent("9°C");
    expect(screen.getByTestId("daily-min-1")).toHaveTextContent("12°C");
    expect(screen.getByTestId("daily-min-2")).toHaveTextContent("10°C");
    expect(screen.getByTestId("daily-min-3")).toHaveTextContent("6°C");
    expect(screen.getByTestId("daily-min-4")).toHaveTextContent("7°C");

    expect(screen.getByTestId("daily-max-0")).toHaveTextContent("21°C");
    expect(screen.getByTestId("daily-max-1")).toHaveTextContent("21°C");
    expect(screen.getByTestId("daily-max-2")).toHaveTextContent("13°C");
    expect(screen.getByTestId("daily-max-3")).toHaveTextContent("14°C");
    expect(screen.getByTestId("daily-max-4")).toHaveTextContent("17°C");
  });
});
