<script lang="ts">
  import { store } from "$lib/store.svelte";
  import { getLocationName, getWeatherData } from "$lib/apis";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position: GeolocationPosition) => {
        store.isLoading = true;

        const weatherData = await getWeatherData(
          `${position.coords.latitude}`,
          `${position.coords.longitude}`
        );
        store.weatherData = weatherData;

        const location = await getLocationName(
          `${position.coords.latitude}`,
          `${position.coords.longitude}`
        );
        store.location = location.name;

        store.isLoading = false;
      },
      () => undefined
    );
  }
</script>
