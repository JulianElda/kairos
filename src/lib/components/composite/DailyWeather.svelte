<script lang="ts">
  import WeatherIcon from "$lib/components/basic/WeatherIcon.svelte";
  import { weatherData } from "$lib/weather.svelte";

  const data = weatherData.data!;

  const dailies: {
    time: string;
    weatherCode: number;
    max: string;
    min: string;
  }[] = [];

  const howMany = 5;
  for (let i = 0; i < howMany; i++) {
    dailies.push({
      time: data.daily.time[i],
      weatherCode: data.daily.weather_code[i],
      max: `${data.daily.temperature_2m_max[i]}${data.daily_units.temperature_2m_max}`,
      min: `${data.daily.temperature_2m_min[i]}${data.daily_units.temperature_2m_min}`,
    });
  }
</script>

<div class="flex flex-col">
  {#each dailies as daily}
    <div class="flex h-12 flex-row items-center gap-4">
      <div>
        <strong>{daily.time}</strong>
      </div>
      <div class="-my-2 size-12">
        <WeatherIcon
          code={daily.weatherCode}
          isDayIcon={true} />
      </div>
      <div>
        {daily.min}
      </div>
      <div>
        {daily.max}
      </div>
    </div>
  {/each}
</div>
