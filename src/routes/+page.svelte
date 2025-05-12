<script lang="ts">
  import Card from "$lib/Card.svelte";
  import CurrentWeather from "$lib/CurrentWeather.svelte";
  import DailyWeather from "$lib/DailyWeather.svelte";
  import HourlyWeather from "$lib/HourlyWeather.svelte";
</script>

<div class="mx-auto flex min-h-full w-full max-w-xl flex-col space-y-1 sm:pt-4">
  <h1 class="font-heading text-center text-3xl font-semibold">kairos</h1>
  <Card>
    <CurrentWeather />
    <HourlyWeather />
    <DailyWeather />
  </Card>
</div>
