<script lang="ts">
  import { weatherDescriptions } from "$lib/weather";

  interface WeatherDescriptionProps {
    code: number;
    isDayIcon: boolean;
  }
  const { code, isDayIcon }: WeatherDescriptionProps = $props();
</script>

{#if weatherDescriptions[code].icon}
  {@const Component = isDayIcon
    ? weatherDescriptions[code].icon
    : weatherDescriptions[code].iconNight}
  <Component />
{/if}
