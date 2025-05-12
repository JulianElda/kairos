<script lang="ts">
  import { formatToHourISOString } from "$lib/utils";
  import type { WeatherData } from "$lib/weather.types";

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
      time: data.hourly.time[i],
      temperature: data.hourly.temperature_2m[i],
      weatherCode: data.hourly.weather_code[i],
    });
  }
</script>

{#each hourlies as hourly}
  <div>
    <strong>
      {hourly.time}
      {hourly.temperature}{data.hourly_units.temperature_2m}
      {hourly.weatherCode}
    </strong>
  </div>
{/each}
