<script lang="ts">
  import type { WeatherResponse } from "$lib/types/weather.types";

  import { Card } from "@julianelda/domos";

  import Daily from "./daily.svelte";

  interface DailyProps {
    weatherData: WeatherResponse;
  }

  const { weatherData }: DailyProps = $props();
</script>

<Card>
  <div class="flex flex-col gap-2 px-2">
    {#each Array.from({ length: 5 }, (_, i) => i) as index (index)}
      <Daily
        {index}
        {weatherData} />
    {/each}
  </div>
</Card>
