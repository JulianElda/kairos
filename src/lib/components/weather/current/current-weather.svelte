<script lang="ts">
  import type {
    WeatherCurrent,
    WeatherCurrentUnits,
    WeatherDaily,
  } from "$lib/types/weather.types";

  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { isDayTime } from "$lib/time.utils";
  import { weatherDescriptions } from "$lib/weather";
  import { Card } from "@julianelda/domos";

  interface CurrentWeatherProps {
    currentUnits: WeatherCurrentUnits;
    currentWeather: WeatherCurrent;
    dailyWeather: WeatherDaily;
    location: string;
  }

  const {
    currentUnits,
    currentWeather,
    dailyWeather,
    location,
  }: CurrentWeatherProps = $props();
</script>

<svelte:head>
  <title>
    {location} - {Math.floor(
      currentWeather.temperature_2m,
    )}{currentUnits.temperature_2m}
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
        {Math.floor(currentWeather.temperature_2m)}{currentUnits.temperature_2m}
      </div>
    </div>

    <div class="flex flex-col items-center justify-end gap-2">
      <div class="flex size-16">
        <WeatherIcon
          code={currentWeather.weather_code}
          isDayIcon={isDayTime(currentWeather.time, dailyWeather)} />
      </div>
      <div
        class="text-center"
        data-testid="current-description">
        {weatherDescriptions[currentWeather.weather_code].description}
      </div>
    </div>
  </div>
</Card>
