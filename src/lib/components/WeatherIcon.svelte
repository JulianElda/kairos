<script lang="ts">
  import { weatherDescriptions } from "$lib/weather";

  type WeatherDescriptionProps = {
    code: number;
  };
  const { code }: WeatherDescriptionProps = $props();
</script>

{#if weatherDescriptions[code].icon}
  {@const Component = weatherDescriptions[code].icon}
  <Component />
{/if}
