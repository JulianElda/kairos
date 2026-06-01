<script lang="ts">
  import type { WeatherResponse } from "$lib/types/weather.types";

  import { getLocationName, getWeatherData } from "$lib/apis";
  import { onMount } from "svelte";

  import Footer from "./basic/footer.svelte";
  import Loader from "./basic/loader.svelte";
  import CurrentWeather from "./weather/current/current-weather.svelte";
  import DailyWeather from "./weather/daily/daily-weather.svelte";
  import DetailedWeather from "./weather/detailed/detailed-weather.svelte";
  import HourlyWeather from "./weather/hourly/hourly-weather.svelte";

  interface MainProps {
    data: WeatherResponse;
    location: string;
  }

  let { data, location }: MainProps = $props();
  let isLoading = $state(false);

  onMount(async () => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position: GeolocationPosition) => {
        isLoading = true;

        const weatherPromise = getWeatherData(
          `${position.coords.latitude}`,
          `${position.coords.longitude}`,
        ).then((geoLocatedWeatherData) => {
          data = geoLocatedWeatherData;
          isLoading = false;
        });
        const locationPromise = getLocationName(
          `${position.coords.latitude}`,
          `${position.coords.longitude}`,
        ).then((geoLocatedLocation) => {
          location = geoLocatedLocation.name;
        });

        await Promise.all([weatherPromise, locationPromise]);
      },
    );
  });
</script>

<div class="flex flex-col gap-5">
  {#if isLoading}
    <Loader />
  {/if}
  <CurrentWeather
    {location}
    weatherData={data} />
  <DetailedWeather weatherData={data} />
  <HourlyWeather weatherData={data} />
  <DailyWeather weatherData={data} />
</div>

<Footer />
