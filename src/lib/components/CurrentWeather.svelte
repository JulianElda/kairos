<script lang="ts">
  import { weatherDescriptions } from "$lib/weather";
  import type { WeatherData } from "$lib/weather.types";
  import WeatherIcon from "./WeatherIcon.svelte";

  type CurrentWeatherProps = {
    data: WeatherData;
    location: string;
  };

  const { data, location }: CurrentWeatherProps = $props();

  const weatherDescription = weatherDescriptions[data.current.weather_code];
</script>

<h1 class="text-3xl font-bold">{location}</h1>

<div class="flex justify-between gap-12">
  <WeatherIcon code={data.current.weather_code} />

  <div class="flex flex-col items-center justify-center">
    <div class="text-5xl font-bold">
      {data.current.temperature_2m}{data.current_units.temperature_2m}
    </div>
    <div class="text-center">
      {weatherDescription.description}
    </div>
  </div>
</div>
