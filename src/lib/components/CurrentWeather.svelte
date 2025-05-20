<script lang="ts">
  import { weatherDescriptions } from "$lib/weather";
  import type { WeatherResponse } from "$lib/weather.types";
  import WeatherIcon from "./WeatherIcon.svelte";

  type CurrentWeatherProps = {
    data: WeatherResponse;
    location: string;
  };

  const { data, location }: CurrentWeatherProps = $props();

  const weatherDescription = weatherDescriptions[data.current.weather_code];
</script>

<div class="flex flex-col gap-8 px-12 md:flex-row">
  <div>
    <div>
      <h1 class="text-3xl font-bold">{location}</h1>
    </div>
    <div class=" text-5xl font-bold">
      {data.current.temperature_2m}{data.current_units.temperature_2m}
    </div>
  </div>

  <div>
    <div class="flex flex-col items-center justify-center">
      <div
        class="-m-2 size-24 max-h-24 w-full max-w-24 text-slate-800 dark:text-slate-100">
        <WeatherIcon
          code={data.current.weather_code}
          time={data.current.time}
          daily={data.daily} />
      </div>

      <div class="text-center">
        {weatherDescription.description}
      </div>
    </div>
  </div>
</div>
