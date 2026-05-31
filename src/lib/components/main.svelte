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
    currentWeather={data.current}
    currentUnits={data.current_units}
    dailyWeather={data.daily}
    {location} />
  <DetailedWeather
    currentWeather={data.current}
    dailyUnits={data.daily_units}
    dailyWeather={data.daily}
    hourlyUnits={data.hourly_units}
    hourlyWeather={data.hourly} />
  <HourlyWeather
    currentWeather={data.current}
    dailyWeather={data.daily}
    hourlyUnits={data.hourly_units}
    hourlyWeather={data.hourly} />
  <DailyWeather
    dailyUnits={data.daily_units}
    dailyWeather={data.daily} />
</div>

<Footer />
