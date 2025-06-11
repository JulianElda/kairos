<script lang="ts">
  import Main from "$lib/components/main.svelte";
  import type { WeatherResponse } from "$lib/weather.types";
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
  const weatherData = data.weatherData as WeatherResponse;
</script>

<svelte:head>
  <title>
    {data.city} - {Math.floor(weatherData.current.temperature_2m)}{weatherData
      .current_units.temperature_2m}
  </title>
  <meta
    name="description"
    content="kairos is a server-side rendered SvelteKit weather app by John Doe, using Vercel Geolocation and Open-Meteo to deliver real-time weather and city data" />
</svelte:head>

<div class="mx-auto flex min-h-full w-full max-w-lg flex-col space-y-1 text-sm">
  {#if data.city}
    <Main
      data={weatherData}
      location={data.city} />
  {/if}
</div>
