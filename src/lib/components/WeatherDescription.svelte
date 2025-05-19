<script lang="ts">
  import { weatherDescriptions } from "$lib/weather";
  import DayClearIcon from "$lib/icons/0-day.svelte";

  type WeatherDescriptionProps = {
    code: number;
  };
  const { code }: WeatherDescriptionProps = $props();

  const weatherDescription = weatherDescriptions[code];
</script>

<div class="size-16 fill-red-500 stroke-transparent">
  <DayClearIcon />
</div>
<div>
  {weatherDescription.description}
</div>
