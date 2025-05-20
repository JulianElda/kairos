<script lang="ts">
  import Main from "$lib/components/Main.svelte";
  import type { WeatherResponse } from "$lib/weather.types";
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
  const weatherData = data.weatherData as WeatherResponse;
</script>

<div class="mx-auto flex min-h-full w-full max-w-xl flex-col space-y-1 sm:pt-4">
  {#if data.city}
    <Main
      data={weatherData}
      location={data.city} />
  {/if}
</div>
