<script lang="ts">
  import type { WeatherData } from "./weather.types";

  type CurrentWeatherProps = {
    data: WeatherData;
  };

  const { data }: CurrentWeatherProps = $props();

  const currentTime = new Date(data.current.time);
</script>

<h2>TODO: Location</h2>

<div>
  {currentTime.toLocaleDateString("en-GB")}
  {currentTime.toLocaleTimeString("en-GB")}
</div>

<div>
  {data.current.temperature_2m}
  {data.current_units.temperature_2m}
</div>
