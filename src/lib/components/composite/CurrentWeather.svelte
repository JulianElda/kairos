<script lang="ts">
  import { isDayTime } from "$lib/utils";
  import { weatherDescriptions } from "$lib/weather";
  import { weatherData } from "$lib/weather.svelte";
  import WeatherIcon from "../basic/WeatherIcon.svelte";

  const data = weatherData.data!;
  const location = weatherData.location!;

  const weatherDescription = weatherDescriptions[data.current.weather_code];
</script>

<div class="flex justify-center gap-8">
  <div class="flex flex-col justify-end space-y-2">
    <div>
      <h1 class="text-3xl font-bold">{location}</h1>
    </div>
    <div class=" text-5xl font-bold">
      {Math.floor(data.current.temperature_2m)}{data.current_units
        .temperature_2m}
    </div>
  </div>

  <div class="flex flex-col items-center justify-end space-y-2">
    <div class="-my-4 flex size-24 text-gray-700 dark:text-gray-200">
      <WeatherIcon
        code={data.current.weather_code}
        isDayIcon={isDayTime(data.current.time, data.daily)} />
    </div>

    <div class="text-center">
      {weatherDescription.description}
    </div>
  </div>
</div>
