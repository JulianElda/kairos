<script lang="ts">
  import type {
    WeatherCurrent,
    WeatherDaily,
    WeatherHourly,
    WeatherHourlyUnits,
  } from "$lib/types/weather.types";

  import Hourly from "$lib/components/weather/hourly/hourly.svelte";
  import { formatToHourISOString } from "$lib/time.utils";
  import { Card } from "@julianelda/domos";
  import { SvelteDate } from "svelte/reactivity";

  const howMany = 5;

  interface HourlyWeatherProps {
    currentWeather: WeatherCurrent;
    dailyWeather: WeatherDaily;
    hourlyUnits: WeatherHourlyUnits;
    hourlyWeather: WeatherHourly;
  }

  const {
    currentWeather,
    dailyWeather,
    hourlyUnits,
    hourlyWeather,
  }: HourlyWeatherProps = $props();

  const timeStart = $derived.by<number>(() => {
    const currentTime = new SvelteDate(currentWeather.time);
    currentTime.setMinutes(0);

    const roundedDownHours = formatToHourISOString(currentTime);

    return hourlyWeather.time.indexOf(roundedDownHours);
  });
</script>

<Card>
  <div class="flex justify-center gap-2">
    {#each Array.from({ length: howMany }, (_, i) => i + timeStart) as timeIndex, index (timeIndex)}
      <Hourly
        {dailyWeather}
        {hourlyWeather}
        {hourlyUnits}
        {timeIndex}
        {index} />
    {/each}
  </div>
</Card>
