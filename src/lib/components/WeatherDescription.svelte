<script lang="ts">
  import { weatherDescriptions } from "$lib/weather";

  type WeatherDescriptionProps = {
    code: number;
  };
  const { code } = $props();

  const weatherDescription = weatherDescriptions[code];
</script>

<div class="size-16">
  <img
    src={`/images/${weatherDescription.icon}.svg`}
    alt={weatherDescription.description} />
</div>
<div>
  {weatherDescription.description}
</div>
