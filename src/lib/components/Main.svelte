<script lang="ts">
  import Card from "$lib/components/basic/Card.svelte";
  import CurrentWeather from "$lib/components/composite/CurrentWeather.svelte";
  import DailyWeather from "$lib/components/composite/DailyWeather.svelte";
  import HourlyWeather from "$lib/components/composite/HourlyWeather.svelte";
  import Footer from "$lib/components/basic/Footer.svelte";
  import { weatherData } from "$lib/weather.svelte";
  import type { WeatherResponse } from "$lib/weather.types";

  type MainProps = {
    data: WeatherResponse;
    location: string;
  };

  const { data, location }: MainProps = $props();
  weatherData.data = data;
  weatherData.location = location;
</script>

<Card>
  <CurrentWeather />
  <HourlyWeather />
  <DailyWeather />
</Card>

<Footer />
