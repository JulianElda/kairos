<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import CurrentWeather from "$lib/components/CurrentWeather.svelte";
  import DailyWeather from "$lib/components/DailyWeather.svelte";
  import HourlyWeather from "$lib/components/HourlyWeather.svelte";
  import Footer from "$lib/components/Footer.svelte";
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
