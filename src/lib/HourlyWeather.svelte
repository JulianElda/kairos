<script lang="ts">
  import { weatherData } from "./weather.svelte";

  const howMany = 5;
  const timeIndex = weatherData.hourly.time.indexOf(weatherData.current.time);

  const hourlies: {
    time: string;
    temperature: number;
    weatherCode: number;
  }[] = [];

  for (let i = timeIndex; i < timeIndex + howMany; i++) {
    hourlies.push({
      time: weatherData.hourly.time[i],
      temperature: weatherData.hourly.temperature_2m[i],
      weatherCode: weatherData.hourly.weather_code[i],
    });
  }

  console.log(hourlies);
</script>

{#each hourlies as hourly}
  <div>
    <strong>
      {hourly.time}
      {hourly.temperature}{weatherData.hourly_units.temperature_2m}
      {hourly.weatherCode}
    </strong>
  </div>
{/each}
