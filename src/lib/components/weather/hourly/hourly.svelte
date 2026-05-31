<script lang="ts">
  import type {
    WeatherDaily,
    WeatherHourly,
    WeatherHourlyUnits,
  } from "$lib/types/weather.types";

  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { isDayTime } from "$lib/time.utils";

  interface HourlyProps {
    dailyWeather: WeatherDaily;
    hourlyUnits: WeatherHourlyUnits;
    hourlyWeather: WeatherHourly;
    index: number;
    timeIndex: number;
  }

  const {
    dailyWeather,
    hourlyUnits,
    hourlyWeather,
    index,
    timeIndex,
  }: HourlyProps = $props();

  const displayTime = $derived(
    new Intl.DateTimeFormat("en", {
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
    }).format(new Date(hourlyWeather.time[timeIndex])),
  );

  const temperature = $derived(
    Math.floor(hourlyWeather.temperature_2m[timeIndex]),
  );
  const weatherCode = $derived(hourlyWeather.weather_code[timeIndex]);
  const isDayIcon = $derived(
    isDayTime(hourlyWeather.time[timeIndex], dailyWeather),
  );
  const units = $derived(hourlyUnits.temperature_2m);
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
    {temperature}{units}
  </div>
</div>
