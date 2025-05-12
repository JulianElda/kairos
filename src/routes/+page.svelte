<script lang="ts">
  import Main from "$lib/Main.svelte";
  import { weatherData } from "$lib/weather.svelte";

  const weatherDataRequest = fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=48.1374&longitude=11.5755&daily=weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code&timezone=auto"
  )
    .then((res) => res.json())
    .then((data) => {
      weatherData.data = data;
    });
</script>

<div class="mx-auto flex min-h-full w-full max-w-xl flex-col space-y-1 sm:pt-4">
  {#await weatherDataRequest}
    <Main />
  {:then data}
    <Main />
  {/await}
</div>
