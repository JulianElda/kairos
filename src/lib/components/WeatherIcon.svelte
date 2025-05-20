<script lang="ts">
  import { isDayTime } from "$lib/utils";
  import { weatherDescriptions } from "$lib/weather";
  import type { WeatherDaily } from "$lib/weather.types";

  type WeatherDescriptionProps = {
    code: number;
    time: string;
    daily: WeatherDaily;
  };
  const { code, time, daily }: WeatherDescriptionProps = $props();
  const isDayIcon = isDayTime(time, daily);
</script>

{#if weatherDescriptions[code].icon}
  {@const Component = isDayIcon
    ? weatherDescriptions[code].icon
    : weatherDescriptions[code].iconNight}
  <Component />
{/if}
