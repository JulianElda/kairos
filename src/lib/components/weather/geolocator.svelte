<script lang="ts">
  import { getOpenMeteoWeatherApiUrl } from "$lib/utils";
  import { store } from "$lib/store.svelte";
  import type { WeatherResponse } from "$lib/weather.types";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        store.isLoading = true;
        fetch(
          getOpenMeteoWeatherApiUrl(
            `${position.coords.latitude}`,
            `${position.coords.longitude}`
          )
        )
          .then((res) => res.json())
          .then((data: WeatherResponse) => {
            store.weatherData = data;
          })
          .finally(() => {
            store.isLoading = false;
          });
      },
      () => undefined
    );
  }
</script>
