<script lang="ts">
  import { weatherData } from "$lib/weather.svelte";

  const data = weatherData.data!;

  const dailies: {
    time: string;
    weatherCode: number;
  }[] = [];

  const howMany = 5;
  for (let i = 0; i < howMany; i++) {
    dailies.push({
      time: data.daily.time[i],
      weatherCode: data.daily.weather_code[i],
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
