<script lang="ts">
  import type { WeatherResponse } from "$lib/types/weather.types";

  import {
    getCurrentHourApparentTemperature,
    getCurrentHourRelativeHumidity,
    getCurrentHourWindDirection,
    getCurrentHourWindSpeed,
    getDailyUVIndexMax,
  } from "$lib/weather.utils";
  import { Card } from "@julianelda/domos";
  import { ArrowUp } from "@lucide/svelte";

  interface DetailedWeatherProps {
    weatherData: WeatherResponse;
  }
  const { weatherData }: DetailedWeatherProps = $props();

  const apparentTemperature = $derived(
    getCurrentHourApparentTemperature(weatherData),
  );
  const humidity = $derived(getCurrentHourRelativeHumidity(weatherData));
  const uv = $derived(getDailyUVIndexMax(weatherData));
  const windSpeed = $derived(getCurrentHourWindSpeed(weatherData));
  const windDirection = $derived(getCurrentHourWindDirection(weatherData));
</script>

<div class="grid grid-cols-2 gap-2">
  <Card>
    <div class="flex flex-row items-center justify-between p-1">
      <div class="text-lg">Feels like</div>
      <div class="font-semibold">
        {apparentTemperature}
      </div>
    </div>
  </Card>
  <Card>
    <div class="flex flex-row items-center justify-between p-1">
      <div class="text-lg">Relative humidity</div>
      <div class="font-semibold">
        {humidity}
      </div>
    </div>
  </Card>
  <Card>
    <div class="flex flex-row items-center justify-between p-1">
      <div class="text-lg">UV</div>
      <div class="font-semibold">
        {uv}
      </div>
    </div>
  </Card>
  <Card>
    <div class="flex flex-row items-center justify-between p-1">
      <div class="text-lg">Wind</div>
      <div class="flex flex-row font-semibold">
        <ArrowUp
          strokeWidth={1}
          style="transform: rotate({windDirection}deg)" />
        {windSpeed}
      </div>
    </div>
  </Card>
</div>
