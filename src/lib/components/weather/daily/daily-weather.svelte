<script lang="ts">
  import type {
    WeatherDaily,
    WeatherDailyUnits,
  } from "$lib/types/weather.types";

  import { Card } from "@julianelda/domos";

  import Daily from "./daily.svelte";

  interface DailyProps {
    dailyUnits: WeatherDailyUnits;
    dailyWeather: WeatherDaily;
  }

  const { dailyUnits, dailyWeather }: DailyProps = $props();
</script>

<Card>
  <div class="flex flex-col gap-2 px-2">
    {#each Array.from({ length: 5 }, (_, i) => i) as index (index)}
      <Daily
        {index}
        {dailyUnits}
        {dailyWeather} />
    {/each}
  </div>
</Card>
