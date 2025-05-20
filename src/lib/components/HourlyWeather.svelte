<script lang="ts">
  import { formatToHourISOString } from "$lib/utils";
  import type { WeatherData } from "$lib/weather.types";
  import WeatherIcon from "./WeatherIcon.svelte";

  type HourlyWeatherProps = {
    data: WeatherData;
  };

  const { data }: HourlyWeatherProps = $props();

  const howMany = 5;
  const currentTime = new Date(data.current.time);
  currentTime.setMinutes(0);

  const roundedDownHours = formatToHourISOString(currentTime);

  const timeIndex = data.hourly.time.indexOf(roundedDownHours);
  const hourlies: {
    time: string;
    temperature: number;
    weatherCode: number;
  }[] = [];

  for (let i = timeIndex; i < timeIndex + howMany; i++) {
    hourlies.push({
      time: new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date(data.hourly.time[i])),
      temperature: data.hourly.temperature_2m[i],
      weatherCode: data.hourly.weather_code[i],
    });
  }
</script>

<div class="flex gap-4">
  {#each hourlies as hourly}
    <div class="flex flex-1 flex-col">
      <strong class="text-center text-lg">
        {hourly.time}
      </strong>
      <div
        class="-my-2 flex size-16 w-full justify-center text-slate-800 dark:text-slate-100">
        <WeatherIcon code={data.current.weather_code} />
      </div>
      <div class="text-center font-semibold">
        {hourly.temperature}{data.hourly_units.temperature_2m}
      </div>
    </div>
  {/each}
</div>
