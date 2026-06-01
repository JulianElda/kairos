<script lang="ts">
  import type {
    WeatherCurrent,
    WeatherDaily,
    WeatherDailyUnits,
    WeatherHourly,
    WeatherHourlyUnits,
  } from "$lib/types/weather.types";

  import { formatToHourISOString } from "$lib/time.utils";
  import { Card } from "@julianelda/domos";
  import { ArrowUp } from "@lucide/svelte";
  import { SvelteDate } from "svelte/reactivity";

  interface DetailedWeatherProps {
    currentWeather: WeatherCurrent;
    dailyUnits: WeatherDailyUnits;
    dailyWeather: WeatherDaily;
    hourlyUnits: WeatherHourlyUnits;
    hourlyWeather: WeatherHourly;
  }
  const {
    currentWeather,
    dailyUnits,
    dailyWeather,
    hourlyUnits,
    hourlyWeather,
  }: DetailedWeatherProps = $props();

  const timeStart = $derived.by<number>(() => {
    const currentTime = new SvelteDate(currentWeather.time);
    currentTime.setMinutes(0);

    const roundedDownHours = formatToHourISOString(currentTime);

    return hourlyWeather.time.indexOf(roundedDownHours);
  });

  const apparentTemperature = $derived.by(
    () =>
      `${hourlyWeather.apparent_temperature[timeStart]}${hourlyUnits.apparent_temperature}`,
  );

  const humidity = $derived.by(
    () =>
      `${hourlyWeather.relative_humidity_2m[timeStart]}${hourlyUnits.relative_humidity_2m}`,
  );

  const uv = $derived.by(
    () =>
      `${Math.round(dailyWeather.uv_index_max[0])}${dailyUnits.uv_index_max}`,
  );

  const windSpeed = $derived.by(
    () =>
      `${hourlyWeather.wind_speed_10m[timeStart]}${hourlyUnits.wind_speed_10m}`,
  );

  const windDirection = $derived(hourlyWeather.wind_direction_10m[timeStart]);
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
