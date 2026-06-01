<script lang="ts">
  import type { WeatherResponse } from "$lib/types/weather.types";

  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import {
    getDailyDayname,
    getDailyMaxTemperature,
    getDailyMinTemperature,
    getDailyWeatherCode,
  } from "$lib/weather.utils";

  interface DailyProps {
    index: number;
    weatherData: WeatherResponse;
  }

  const { index, weatherData }: DailyProps = $props();

  const formattedDay = $derived(getDailyDayname(weatherData, index));
  const weatherCode = $derived(getDailyWeatherCode(weatherData, index));
  const min = $derived(getDailyMinTemperature(weatherData, index));
  const max = $derived(getDailyMaxTemperature(weatherData, index));
</script>

<div class="flex h-12 flex-row items-center gap-4">
  <div
    class="flex-1 text-lg font-semibold"
    data-testid={"daily-day-" + index}>
    {formattedDay}
  </div>
  <div class="size-12">
    <WeatherIcon
      code={weatherCode}
      isDayIcon={true} />
  </div>
  <div
    class="w-16 text-end text-lg"
    data-testid={"daily-min-" + index}>
    {min}
  </div>
  <div
    class="w-16 text-end text-lg font-semibold"
    data-testid={"daily-max-" + index}>
    {max}
  </div>
</div>
