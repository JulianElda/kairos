<script lang="ts">
  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { formatDailyDisplayDay } from "$lib/utils";
  import { weatherData } from "$lib/weather.svelte";

  type DailyProps = {
    index: number;
  };

  const { index }: DailyProps = $props();

  const formattedDay = $derived(
    formatDailyDisplayDay(weatherData.data.daily.time.slice(0, 5))[index]
  );
  const weatherCode = $derived(weatherData.data.daily.weather_code[index]);
  const min = $derived(
    Math.floor(weatherData.data.daily.temperature_2m_min[index])
  );
  const max = $derived(
    Math.floor(weatherData.data.daily.temperature_2m_max[index])
  );
</script>

<div class="flex h-12 flex-row items-center gap-4">
  <div
    class="flex-1 text-lg"
    data-testid={"daily-day-" + index}>
    {formattedDay}
  </div>
  <div class="-my-2 size-12">
    <WeatherIcon
      code={weatherCode}
      isDayIcon={true} />
  </div>
  <div
    class="w-20 text-end text-lg md:w-32"
    data-testid={"daily-min-" + index}>
    {min}{weatherData.data.daily_units.temperature_2m_min}
  </div>
  <div
    class="w-20 text-end text-lg md:w-32"
    data-testid={"daily-max-" + index}>
    {max}{weatherData.data.daily_units.temperature_2m_max}
  </div>
</div>
