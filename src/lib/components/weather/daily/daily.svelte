<script lang="ts">
  import WeatherIcon from "$lib/components/basic/weather-icon.svelte";
  import { store } from "$lib/store.svelte";
  import { formatDailyDisplayDay } from "$lib/utilities";

  type DailyProps = {
    index: number;
  };

  const { index }: DailyProps = $props();

  const formattedDay = $derived(
    formatDailyDisplayDay(store.weatherData.daily.time.slice(0, 5))[index]
  );
  const weatherCode = $derived(store.weatherData.daily.weather_code[index]);
  const min = $derived(
    Math.floor(store.weatherData.daily.temperature_2m_min[index])
  );
  const max = $derived(
    Math.floor(store.weatherData.daily.temperature_2m_max[index])
  );
</script>

<div class="flex h-12 flex-row items-center gap-4">
  <div
    class="flex-1 text-lg"
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
    {min}{store.weatherData.daily_units.temperature_2m_min}
  </div>
  <div
    class="w-16 text-end text-lg"
    data-testid={"daily-max-" + index}>
    {max}{store.weatherData.daily_units.temperature_2m_max}
  </div>
</div>
