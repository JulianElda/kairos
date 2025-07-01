<script lang="ts">
  import Hourly from "$lib/components/weather/hourly/hourly.svelte";
  import { store } from "$lib/store.svelte";
  import { formatToHourISOString } from "$lib/utilities";

  const howMany = 5;

  const timeStart = $derived.by<number>(() => {
    const currentTime = new Date(store.weatherData.current.time);
    currentTime.setMinutes(0);

    const roundedDownHours = formatToHourISOString(currentTime);

    return store.weatherData.hourly.time.indexOf(roundedDownHours);
  });
</script>

<div class="flex justify-center gap-2">
  {#each Array.from({ length: howMany }, (_, i) => i + timeStart) as timeIndex, index (timeIndex)}
    <Hourly
      {timeIndex}
      {index} />
  {/each}
</div>
