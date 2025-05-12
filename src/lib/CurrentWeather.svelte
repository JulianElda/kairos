<script lang="ts">
  import { weatherData } from "$lib/weather.svelte";

  const currentTime = new Date(weatherData.current.time);
</script>

<h2>TODO: Location</h2>

<div>
  {currentTime.toLocaleDateString("en-GB")}
  {currentTime.toLocaleTimeString("en-GB")}
</div>

<div>
  {weatherData.current.temperature_2m}
  {weatherData.current_units.temperature_2m}
</div>
