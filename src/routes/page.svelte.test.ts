import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Page from "./+page.svelte";
import { mockWeatherData } from "$lib/mocks";

describe("/+page.svelte", () => {
  test("show city name, temperature, description", () => {
    render(Page, {
      props: {
        data: {
          weatherData: mockWeatherData,
          city: "München",
        },
        form: {},
      },
    });

    expect(screen.getByTestId("city-name")).toHaveTextContent("München");
    expect(screen.getByTestId("current-temperature")).toHaveTextContent("20°C");
    expect(screen.getByTestId("current-description")).toHaveTextContent(
      "Overcast"
    );
  });
});
