<script lang="ts">
  import { weatherData } from "./weather.svelte";

  const howMany = 5;
  const timeIndex = weatherData.data.hourly.time.indexOf(
    weatherData.data.current.time
  );

  const hourlies: {
    time: string;
    temperature: number;
    weatherCode: number;
  }[] = [];

  for (let i = timeIndex; i < timeIndex + howMany; i++) {
    hourlies.push({
      time: weatherData.data.hourly.time[i],
      temperature: weatherData.data.hourly.temperature_2m[i],
      weatherCode: weatherData.data.hourly.weather_code[i],
    });
  }
</script>

{#each hourlies as hourly}
  <div>
    <strong>
      {hourly.time}
      {hourly.temperature}{weatherData.data.hourly_units.temperature_2m}
      {hourly.weatherCode}
    </strong>
  </div>
{/each}
