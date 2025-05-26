<script lang="ts">
  import WeatherIcon from "$lib/components/basic/WeatherIcon.svelte";
  import { isDayTime } from "$lib/utils";
  import { weatherDescriptions } from "$lib/weather";
  import { weatherData } from "$lib/weather.svelte";

  const data = weatherData.data!;
  const location = weatherData.location!;

  const weatherDescription = weatherDescriptions[data.current.weather_code];
</script>

<div class="flex justify-center gap-8">
  <div class="flex flex-col items-end justify-center space-y-2">
    <h1 class="text-end text-3xl font-bold">{location}</h1>
    <div class="text-5xl font-bold">
      {Math.floor(data.current.temperature_2m)}{data.current_units
        .temperature_2m}
    </div>
  </div>

  <div class="flex flex-col items-center justify-end space-y-2">
    <div class="flex size-20 text-gray-700 sm:size-24 dark:text-gray-200">
      <WeatherIcon
        code={data.current.weather_code}
        isDayIcon={isDayTime(data.current.time, data.daily)} />
    </div>

    <div class="text-center">
      {weatherDescription.description}
    </div>
  </div>
</div>
