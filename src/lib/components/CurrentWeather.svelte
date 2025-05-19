<script lang="ts">
  import type { WeatherData } from "$lib/weather.types";
  import WeatherDescription from "./WeatherDescription.svelte";

  type CurrentWeatherProps = {
    data: WeatherData;
    location: string;
  };

  const { data, location }: CurrentWeatherProps = $props();

  const currentTime = new Date(data.current.time);
</script>

<h2>{location}</h2>

<WeatherDescription code={data.current.weather_code} />

<div>
  {currentTime.toLocaleDateString("en-GB")}
  {currentTime.toLocaleTimeString("en-GB")}
</div>

<div>
  {data.current.temperature_2m}
  {data.current_units.temperature_2m}
</div>
