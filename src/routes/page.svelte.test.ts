import { mockWeatherData } from "$lib/types/weather.mocks";
import { expect, test } from "vitest";
import { render } from "vitest-browser-svelte";

import Page from "./+page.svelte";

test("show city name, temperature, description", async () => {
  const { getByTestId } = render(Page, {
    props: {
      data: {
        city: "München",
        weatherData: mockWeatherData,
      },
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
