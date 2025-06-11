<script lang="ts">
  import Hourly from "$lib/components/weather/hourly/hourly.svelte";
  import { formatToHourISOString } from "$lib/utils";
  import { weatherData } from "$lib/weather.svelte";

  const howMany = 5;

  const timeStart = $derived.by<number>(() => {
    const currentTime = new Date(weatherData.data.current.time);
    currentTime.setMinutes(0);

    const roundedDownHours = formatToHourISOString(currentTime);

    return weatherData.data.hourly.time.indexOf(roundedDownHours);
  });
</script>

<div class="flex space-x-2 sm:space-x-4">
  {#each Array.from({ length: howMany }, (_, i) => i + timeStart) as timeIndex, index}
    <Hourly
      {timeIndex}
      {index} />
  {/each}
</div>
