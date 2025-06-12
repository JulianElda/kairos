<script lang="ts">
  import { store } from "$lib/store.svelte";
  import { getLocationName, getWeatherData } from "$lib/apis";
  import { onMount } from "svelte";

  onMount(async () => {
    if (!navigator.geolocation) {
      return;
    }
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
  });
</script>
