<script lang="ts">
  import Hourly from "$lib/components/weather/hourly/hourly.svelte";
  import { formatToHourISOString } from "$lib/utils";
  import { store } from "$lib/store.svelte";

  const howMany = 5;

  const timeStart = $derived.by<number>(() => {
    const currentTime = new Date(store.weatherData.current.time);
    currentTime.setMinutes(0);

    const roundedDownHours = formatToHourISOString(currentTime);

    return store.weatherData.hourly.time.indexOf(roundedDownHours);
  });
</script>

<div class="flex justify-center gap-4">
  {#each Array.from({ length: howMany }, (_, i) => i + timeStart) as timeIndex, index}
    <Hourly
      {timeIndex}
      {index} />
  {/each}
</div>
