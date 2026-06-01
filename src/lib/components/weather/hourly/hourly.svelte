<script lang="ts">
  import type { WeatherResponse } from "$lib/types/weather.types";

  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { isDayTime } from "$lib/time.utils";
  import {
    getHourlyDisplayTime,
    getHourlyTemperature,
    getHourlyWeatherCode,
  } from "$lib/weather.utils";

  interface HourlyProps {
    index: number;
    timeIndex: number;
    weatherData: WeatherResponse;
  }
  const { index, timeIndex, weatherData }: HourlyProps = $props();

  const displayTime = $derived(getHourlyDisplayTime(weatherData, timeIndex));
  const temperature = $derived(getHourlyTemperature(weatherData, timeIndex));
  const weatherCode = $derived(getHourlyWeatherCode(weatherData, timeIndex));
  const isDayIcon = $derived(
    isDayTime(weatherData, weatherData.hourly.time[timeIndex]),
  );
</script>

<div class="flex flex-col items-center">
  <div
    class="text-center"
    data-testid={"hourly-displaytime-" + index}>
    {displayTime}
  </div>
  <div class="flex size-16 w-full justify-center">
    <WeatherIcon
      code={weatherCode}
      {isDayIcon} />
  </div>
  <div
    class="text-center"
    data-testid={"hourly-temperature-" + index}>
    {temperature}
  </div>
</div>
