<script lang="ts">
  import type {
    WeatherDaily,
    WeatherDailyUnits,
  } from "$lib/types/weather.types";

  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { formatDailyDisplayDay } from "$lib/time.utils";

  interface DailyProps {
    dailyUnits: WeatherDailyUnits;
    dailyWeather: WeatherDaily;
    index: number;
  }

  const { dailyUnits, dailyWeather, index }: DailyProps = $props();

  const formattedDay = $derived(
    formatDailyDisplayDay(dailyWeather.time.slice(0, 5))[index],
  );
  const weatherCode = $derived(dailyWeather.weather_code[index]);
  const min = $derived(Math.floor(dailyWeather.temperature_2m_min[index]));
  const max = $derived(Math.floor(dailyWeather.temperature_2m_max[index]));
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
    {min}{dailyUnits.temperature_2m_min}
  </div>
  <div
    class="w-16 text-end text-lg font-semibold"
    data-testid={"daily-max-" + index}>
    {max}{dailyUnits.temperature_2m_max}
  </div>
</div>
