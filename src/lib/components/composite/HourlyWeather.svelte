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
      temperature: Math.floor(data.hourly.temperature_2m[i]),
      weatherCode: data.hourly.weather_code[i],
      isDayIcon: isDayTime(data.hourly.time[i], data.daily),
    });
  }
</script>

<div class="flex space-x-2 sm:space-x-4">
  {#each hourlies as hourly}
    <div class="flex flex-1 flex-col items-center">
      <div class="text-center text-lg">
        {hourly.displayTime}
      </div>
      <div
        class="flex size-12 w-full justify-center text-gray-700 sm:size-16 dark:text-gray-200">
        <WeatherIcon
          code={data.current.weather_code}
          isDayIcon={hourly.isDayIcon} />
      </div>
      <div class="text-center text-lg">
        {hourly.temperature}{data.hourly_units.temperature_2m}
      </div>
    </div>
  {/each}
</div>
