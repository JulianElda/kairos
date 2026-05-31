<script lang="ts">
  import Main from "$lib/components/main.svelte";

  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
</script>

<svelte:head>
  <title>
    {data.city} - {Math.floor(data.weatherData.current.temperature_2m)}{data
      .weatherData.current_units.temperature_2m}
  </title>
  <meta
    name="description"
    content="kairos is a server-side rendered SvelteKit weather app by Julius Polar, using Vercel Geolocation and Open-Meteo to deliver real-time weather and city data" />
</svelte:head>

{#if data.city}
  <div
    class="mx-auto flex min-h-full w-full max-w-sm flex-col md:max-w-md md:pb-16">
    <Main
      data={data.weatherData}
      location={data.city} />
  </div>
{/if}
