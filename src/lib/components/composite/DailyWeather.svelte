<script lang="ts">
  import WeatherIcon from "$lib/components/basic/WeatherIcon.svelte";
  import { formatDailyDisplayDay } from "$lib/utils";
  import { weatherData } from "$lib/weather.svelte";

  const data = weatherData.data!;

  const dailies: {
    time: string;
    formattedDay: string;
    weatherCode: number;
    max: string;
    min: string;
  }[] = [];

  const howMany = 5;

  const formattedDays = formatDailyDisplayDay(data.daily.time.slice(0, 5));

  for (let i = 0; i < howMany; i++) {
    dailies.push({
      time: data.daily.time[i],
      formattedDay: formattedDays[i],
      weatherCode: data.daily.weather_code[i],
      max: `${Math.floor(data.daily.temperature_2m_max[i])}${data.daily_units.temperature_2m_max}`,
      min: `${Math.floor(data.daily.temperature_2m_min[i])}${data.daily_units.temperature_2m_min}`,
    });
  }
</script>

<div class="flex flex-col space-y-4 px-2">
  {#each dailies as daily}
    <div class="flex h-12 flex-row items-center gap-4">
      <div class="flex-1 text-lg">
        {daily.formattedDay}
      </div>
      <div class="-my-2 size-12">
        <WeatherIcon
          code={daily.weatherCode}
          isDayIcon={true} />
      </div>
      <div class="w-20 text-end text-lg md:w-32">
        {daily.min}
      </div>
      <div class="w-20 text-end text-lg md:w-32">
        {daily.max}
      </div>
    </div>
  {/each}
</div>
