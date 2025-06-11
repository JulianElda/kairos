<script lang="ts">
  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { isDayTime } from "$lib/utils";
  import { weatherDescriptions } from "$lib/weather";
  import { weatherData } from "$lib/weather.svelte";
</script>

<div class="flex justify-center gap-8">
  <div class="flex flex-col items-end justify-center space-y-2">
    <h1
      class="text-end text-3xl font-bold"
      data-testid="city-name">
      {weatherData.location}
    </h1>
    <div
      class="text-5xl font-bold"
      data-testid="current-temperature">
      {Math.floor(weatherData.data.current.temperature_2m)}{weatherData.data
        .current_units.temperature_2m}
    </div>
  </div>

  <div class="flex flex-col items-center justify-end space-y-2">
    <div class="flex size-20 text-gray-700 sm:size-24 dark:text-gray-200">
      <WeatherIcon
        code={weatherData.data.current.weather_code}
        isDayIcon={isDayTime(
          weatherData.data.current.time,
          weatherData.data.daily
        )} />
    </div>

    <div
      class="text-center"
      data-testid="current-description">
      {weatherDescriptions[weatherData.data.current.weather_code].description}
    </div>
  </div>
</div>
