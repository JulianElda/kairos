<script lang="ts">
  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { store } from "$lib/store.svelte";
  import { isDayTime } from "$lib/utilities";
  import { weatherDescriptions } from "$lib/weather";
</script>

<svelte:head>
  <title>
    {store.location} - {Math.floor(
      store.weatherData.current.temperature_2m
    )}{store.weatherData.current_units.temperature_2m}
  </title>
</svelte:head>

<div class="flex justify-center gap-6">
  <div class="flex flex-col items-end justify-center gap-2">
    <h1
      class="font-heading text-end text-3xl font-bold"
      data-testid="city-name">
      {store.location}
    </h1>
    <div
      class="font-heading text-5xl font-bold"
      data-testid="current-temperature">
      {Math.floor(store.weatherData.current.temperature_2m)}{store.weatherData
        .current_units.temperature_2m}
    </div>
  </div>

  <div class="flex flex-col items-center justify-end gap-2">
    <div class="flex size-16">
      <WeatherIcon
        code={store.weatherData.current.weather_code}
        isDayIcon={isDayTime(
          store.weatherData.current.time,
          store.weatherData.daily
        )} />
    </div>

    <div
      class="text-center"
      data-testid="current-description">
      {weatherDescriptions[store.weatherData.current.weather_code].description}
    </div>
  </div>
</div>
