<script lang="ts">
  import type { WeatherResponse } from "$lib/types/weather.types";

  import Hourly from "$lib/components/weather/hourly/hourly.svelte";
  import { getHourStartIndex } from "$lib/weather.utils";
  import { Card } from "@julianelda/domos";

  const howMany = 5;

  interface HourlyWeatherProps {
    weatherData: WeatherResponse;
  }

  const { weatherData }: HourlyWeatherProps = $props();

  const timeStart = $derived<number>(getHourStartIndex(weatherData));
</script>

<Card>
  <div class="flex justify-center gap-2">
    {#each Array.from({ length: howMany }, (_, i) => i + timeStart) as timeIndex, index (timeIndex)}
      <Hourly
        {index}
        {timeIndex}
        {weatherData} />
    {/each}
  </div>
</Card>
