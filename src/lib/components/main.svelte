<script lang="ts">
  import Card from "$lib/components/basic/card.svelte";
  import Footer from "$lib/components/basic/footer.svelte";
  import Loader from "$lib/components/basic/loader.svelte";
  import CurrentWeather from "$lib/components/weather/current/current-weather.svelte";
  import DailyWeather from "$lib/components/weather/daily/daily-weather.svelte";
  import Geolocator from "$lib/components/weather/geolocator.svelte";
  import HourlyWeather from "$lib/components/weather/hourly/hourly-weather.svelte";
  import { store } from "$lib/store.svelte";
  import type { WeatherResponse } from "$lib/weather.types";

  type MainProps = {
    data: WeatherResponse;
    location: string;
  };

  const { data, location }: MainProps = $props();
  store.weatherData = data;
  store.location = location;
</script>

<Card>
  <Geolocator />
  <Loader />
  <CurrentWeather />
  <HourlyWeather />
  <DailyWeather />
</Card>

<Footer />
