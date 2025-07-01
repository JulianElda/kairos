<script lang="ts">
  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { store } from "$lib/store.svelte";
  import { isDayTime } from "$lib/utilities";

  interface HourlyProps {
    index: number;
    timeIndex: number;
  }

  const { index, timeIndex }: HourlyProps = $props();

  const displayTime = $derived(
    new Intl.DateTimeFormat("en", {
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
    }).format(new Date(store.weatherData.hourly.time[timeIndex]))
  );

  const temperature = $derived(
    Math.floor(store.weatherData.hourly.temperature_2m[timeIndex])
  );
  const weatherCode = $derived(
    store.weatherData.hourly.weather_code[timeIndex]
  );
  const isDayIcon = $derived(
    isDayTime(store.weatherData.hourly.time[timeIndex], store.weatherData.daily)
  );
  const units = $derived(store.weatherData.hourly_units.temperature_2m);
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
