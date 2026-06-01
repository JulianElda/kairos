<script lang="ts">
  import type { WeatherResponse } from "$lib/types/weather.types";

  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { isDayTime } from "$lib/time.utils";
  import {
    getCurrentTemperature,
    getCurrentWeatherDescription,
  } from "$lib/weather.utils";
  import { Card } from "@julianelda/domos";

  interface CurrentWeatherProps {
    location: string;
    weatherData: WeatherResponse;
  }

  const { location, weatherData }: CurrentWeatherProps = $props();
</script>

<svelte:head>
  <title>
    {location} - {getCurrentTemperature(weatherData)}
  </title>
</svelte:head>

<Card>
  <div
    class="flex justify-center gap-6"
    data-testid="current-weather">
    <div class="flex flex-col items-end justify-center gap-2">
      <h1
        class="text-end font-heading text-3xl font-bold"
        data-testid="city-name">
        {location}
      </h1>
      <div
        class="font-heading text-5xl font-bold"
        data-testid="current-temperature">
        {getCurrentTemperature(weatherData)}
      </div>
    </div>

    <div class="flex flex-col items-center justify-end gap-2">
      <div class="flex size-16">
        <WeatherIcon
          code={weatherData.current.weather_code}
          isDayIcon={isDayTime(weatherData)} />
      </div>
      <div
        class="text-center"
        data-testid="current-description">
        {getCurrentWeatherDescription(weatherData)}
      </div>
    </div>
  </div>
</Card>
