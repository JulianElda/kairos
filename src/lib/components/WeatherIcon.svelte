<script lang="ts">
  import { weatherDescriptions } from "$lib/weather";
  import DayClearIcon from "$lib/icons/00-day.svelte";

  type WeatherDescriptionProps = {
    code: number;
  };
  const { code }: WeatherDescriptionProps = $props();
</script>

<div class="size-24 text-slate-800 dark:text-slate-100">
  <DayClearIcon />
</div>
