<script lang="ts">
  import { weatherData } from "./weather.svelte";

  const dailies: {
    time: string;
    weatherCode: number;
  }[] = [];

  for (let i = 0; i < 5; i++) {
    dailies.push({
      time: weatherData.daily.time[i],
      weatherCode: weatherData.daily.weather_code[i],
    });
  }
</script>

<div>
  {#each dailies as daily}
    <div>
      <strong>{daily.time}</strong>
    </div>
    <div>
      {daily.weatherCode}
    </div>
  {/each}
</div>
