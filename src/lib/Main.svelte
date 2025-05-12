<script lang="ts">
  import Card from "$lib/Card.svelte";
  import CurrentWeather from "$lib/CurrentWeather.svelte";
  import DailyWeather from "$lib/DailyWeather.svelte";
  import HourlyWeather from "$lib/HourlyWeather.svelte";
</script>

<Card>
  <CurrentWeather />
  <HourlyWeather />
  <DailyWeather />
</Card>
