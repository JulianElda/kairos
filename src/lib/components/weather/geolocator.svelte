<script lang="ts">
  import { getLocationName, getWeatherData } from "$lib/apis";
  import { store } from "$lib/store.svelte";
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
