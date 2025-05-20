<script lang="ts">
  import { weatherDescriptions } from "$lib/weather";
  import DayClearIcon from "$lib/icons/0-day.svelte";

  type WeatherDescriptionProps = {
    code: number;
  };
  const { code }: WeatherDescriptionProps = $props();
</script>

<div class="size-24 stroke-transparent text-slate-800 dark:text-slate-100">
  <DayClearIcon />
</div>
