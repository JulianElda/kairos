<script lang="ts">
  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { isDayTime } from "$lib/utils";
  import { weatherData } from "$lib/weather.svelte";

  type HourlyProps = {
    index: number;
    timeIndex: number;
  };

  const { index, timeIndex }: HourlyProps = $props();

  const displayTime = $derived(
    new Intl.DateTimeFormat("en", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(weatherData.data.hourly.time[timeIndex]))
  );

  const temperature = $derived(
    Math.floor(weatherData.data.hourly.temperature_2m[timeIndex])
  );
  const weatherCode = $derived(weatherData.data.hourly.weather_code[timeIndex]);
  const isDayIcon = $derived(
    isDayTime(weatherData.data.hourly.time[timeIndex], weatherData.data.daily)
  );
  const units = $derived(weatherData.data.hourly_units.temperature_2m);
</script>

<div class="flex flex-1 flex-col items-center">
  <div
    class="text-center text-lg"
    data-testid={"hourly-displaytime-" + index}>
    {displayTime}
  </div>
  <div
    class="flex size-12 w-full justify-center text-gray-700 sm:size-16 dark:text-gray-200">
    <WeatherIcon
      code={weatherCode}
      {isDayIcon} />
  </div>
  <div
    class="text-center text-lg"
    data-testid={"hourly-temperature-" + index}>
    {temperature}{units}
  </div>
</div>
