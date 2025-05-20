<script lang="ts">
  import type { WeatherResponse } from "$lib/weather.types";
  type DailyWeatherProps = {
    data: WeatherResponse;
  };

  const { data }: DailyWeatherProps = $props();

  const dailies: {
    time: string;
    weatherCode: number;
  }[] = [];

  for (let i = 0; i < 5; i++) {
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
