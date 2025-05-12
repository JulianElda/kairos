<script lang="ts">
  import Card from "$lib/Card.svelte";
  import CurrentWeather from "$lib/CurrentWeather.svelte";
  import DailyWeather from "$lib/DailyWeather.svelte";
  import HourlyWeather from "$lib/HourlyWeather.svelte";
  import type { WeatherData } from "./weather.types";

  type MainProps = {
    data: WeatherData;
  };

  const { data }: MainProps = $props();
</script>

<Card>
  <CurrentWeather {data} />
  <HourlyWeather {data} />
  <DailyWeather {data} />
</Card>
