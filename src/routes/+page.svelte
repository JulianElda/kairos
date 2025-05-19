<script lang="ts">
  import Main from "$lib/components/Main.svelte";
  import type { WeatherData } from "$lib/weather.types";
  import type { PageProps } from "./$types";

  //const { data: weatherData }: PageProps = $props();
  //const data = weatherData as WeatherData;
  const { data }: PageProps = $props();
</script>

<div class="mx-auto flex min-h-full w-full max-w-xl flex-col space-y-1 sm:pt-4">
  <p>{data}</p>
</div>
