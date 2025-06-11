<script lang="ts">
  import { getOpenMeteoWeatherApiUrl } from "$lib/utils";
  import { weatherData } from "$lib/weather.svelte";
  import type { WeatherResponse } from "$lib/weather.types";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        weatherData.isLoading = true;
        fetch(
          getOpenMeteoWeatherApiUrl(
            `${position.coords.latitude}`,
            `${position.coords.longitude}`
          )
        )
          .then((res) => res.json())
          .then((data: WeatherResponse) => {
            weatherData.data = data;
          })
          .finally(() => {
            weatherData.isLoading = false;
          });
      },
      () => undefined
    );
  }
</script>
