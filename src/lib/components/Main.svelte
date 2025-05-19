<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import CurrentWeather from "$lib/components/CurrentWeather.svelte";
  import DailyWeather from "$lib/components/DailyWeather.svelte";
  import HourlyWeather from "$lib/components/HourlyWeather.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import type { WeatherData } from "$lib/weather.types";

  type MainProps = {
    data: WeatherData;
    location: string;
  };

  const { data, location }: MainProps = $props();
</script>

<Card>
  <CurrentWeather
    {data}
    {location} />
  <HourlyWeather {data} />
  <DailyWeather {data} />
</Card>
