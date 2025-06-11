<script lang="ts">
  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { isDayTime } from "$lib/utils";
  import { weatherDescriptions } from "$lib/weather";
  import { store } from "$lib/store.svelte";
</script>

<div class="flex justify-center gap-8">
  <div class="flex flex-col items-end justify-center space-y-2">
    <h1
      class="text-end text-3xl font-bold"
      data-testid="city-name">
      {store.location}
    </h1>
    <div
      class="text-5xl font-bold"
      data-testid="current-temperature">
      {Math.floor(store.weatherData.current.temperature_2m)}{store.weatherData
        .current_units.temperature_2m}
    </div>
  </div>

  <div class="flex flex-col items-center justify-end space-y-2">
    <div class="flex size-20 text-gray-700 sm:size-24 dark:text-gray-200">
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
