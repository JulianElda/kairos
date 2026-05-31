<script lang="ts">
  import type { WeatherResponse } from "$lib/types/weather.types";

  import { getLocationName, getWeatherData } from "$lib/apis";
  import Footer from "$lib/components/basic/footer.svelte";
  import Loader from "$lib/components/basic/loader.svelte";
  import CurrentWeather from "$lib/components/weather/current/current-weather.svelte";
  import DailyWeather from "$lib/components/weather/daily/daily-weather.svelte";
  import HourlyWeather from "$lib/components/weather/hourly/hourly-weather.svelte";
  import { Card } from "@julianelda/domos";
  import { onMount } from "svelte";

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
        const [geoLocatedWeatherData, geoLocatedLocation] = await Promise.all([
          getWeatherData(
            `${position.coords.latitude}`,
            `${position.coords.longitude}`,
          ),
          getLocationName(
            `${position.coords.latitude}`,
            `${position.coords.longitude}`,
          ),
        ]);

        data = geoLocatedWeatherData;
        location = geoLocatedLocation.name;
        isLoading = false;
      },
    );
  });
</script>

<Card>
  <div class="flex flex-col gap-10">
    {#if isLoading}
      <Loader />
    {/if}
    <CurrentWeather
      currentWeather={data.current}
      currentUnits={data.current_units}
      dailyWeather={data.daily}
      {location} />
    <HourlyWeather
      dailyWeather={data.daily}
      currentWeather={data.current}
      hourlyUnits={data.hourly_units}
      hourlyWeather={data.hourly} />
    <DailyWeather
      dailyUnits={data.daily_units}
      dailyWeather={data.daily} />
  </div>
</Card>

<Footer />
