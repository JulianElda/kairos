<script lang="ts">
  import { formatToHourISOString, isDayTime } from "$lib/utils";
  import WeatherIcon from "$lib/components/basic/WeatherIcon.svelte";
  import { weatherData } from "$lib/weather.svelte";

  type Hourly = {
    displayTime: string;
    temperature: number;
    weatherCode: number;
    isDayIcon: boolean;
  };

  const data = weatherData.data!;

  const howMany = 5;
  const currentTime = new Date(data.current.time);
  currentTime.setMinutes(0);

  const roundedDownHours = formatToHourISOString(currentTime);

  const timeIndex = data.hourly.time.indexOf(roundedDownHours);
  const hourlies: Hourly[] = [];

  for (let i = timeIndex; i < timeIndex + howMany; i++) {
    hourlies.push({
      displayTime: new Intl.DateTimeFormat("en", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date(data.hourly.time[i])),
      temperature: data.hourly.temperature_2m[i],
      weatherCode: data.hourly.weather_code[i],
      isDayIcon: isDayTime(data.hourly.time[i], data.daily),
    });
  }
</script>

<div class="flex gap-4">
  {#each hourlies as hourly}
    <div class="flex flex-1 flex-col">
      <strong class="text-center text-lg">
        {hourly.displayTime}
      </strong>
      <div
        class="-my-2 flex size-16 w-full justify-center text-slate-700 dark:text-slate-200">
        <WeatherIcon
          code={data.current.weather_code}
          isDayIcon={hourly.isDayIcon} />
      </div>
      <div class="text-center font-semibold">
        {hourly.temperature}{data.hourly_units.temperature_2m}
      </div>
    </div>
  {/each}
</div>
