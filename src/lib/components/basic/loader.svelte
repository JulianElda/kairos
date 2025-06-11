<script lang="ts">
  import { weatherData } from "$lib/weather.svelte";
</script>

{#if weatherData.isLoading}
  <div class="absolute inset-0 size-full animate-pulse bg-slate-500/50"></div>
{/if}
