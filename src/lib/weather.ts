import type { Component } from "svelte";

import DayClearIcon from "$lib/components/icons/00-day.svelte";
import NightClearIcon from "$lib/components/icons/00-night.svelte";
import DayMainlyClearIcon from "$lib/components/icons/01-day.svelte";
import NightMainlyClearIcon from "$lib/components/icons/01-night.svelte";
import DayPartlyCloudyIcon from "$lib/components/icons/02-day.svelte";
import NightPartlyCloudyIcon from "$lib/components/icons/02-night.svelte";
import DayOvercastIcon from "$lib/components/icons/03-day.svelte";
import NightOvercastIcon from "$lib/components/icons/03-night.svelte";
import DayFogIcon from "$lib/components/icons/45-day.svelte";
import NightFogIcon from "$lib/components/icons/45-night.svelte";
import DayRimeFogIcon from "$lib/components/icons/48-day.svelte";
import NightRimeFogIcon from "$lib/components/icons/48-night.svelte";
import DayLightDrizzleIcon from "$lib/components/icons/51-day.svelte";
import NightLightDrizzleIcon from "$lib/components/icons/51-night.svelte";
import DayModerateDrizzleIcon from "$lib/components/icons/53-day.svelte";
import NightModerateDrizzleIcon from "$lib/components/icons/53-night.svelte";
import DayDenseDrizzleIcon from "$lib/components/icons/55-day.svelte";
import NightDenseDrizzleIcon from "$lib/components/icons/55-night.svelte";
//import DayLightFreezingDrizzleIcon from "$lib/icons/56-day.svelte";
//import DayDenseFreezingDrizzleIcon from "$lib/icons/57-day.svelte";
import DaySlightRainIcon from "$lib/components/icons/61-day.svelte";
//import NightLightFreezingDrizzleIcon from "$lib/icons/56-night.svelte";
//import NightDenseFreezingDrizzleIcon from "$lib/icons/57-night.svelte";
import NightSlightRainIcon from "$lib/components/icons/61-night.svelte";
import DayModerateRainIcon from "$lib/components/icons/63-day.svelte";
import NightModerateRainIcon from "$lib/components/icons/63-night.svelte";
import DayHeavyRainIcon from "$lib/components/icons/65-day.svelte";
import NightHeavyRainIcon from "$lib/components/icons/65-night.svelte";
import DayLightFreezingRainIcon from "$lib/components/icons/66-day.svelte";
import NightLightFreezingRainIcon from "$lib/components/icons/66-night.svelte";
import DayHeavyFreezingRainIcon from "$lib/components/icons/67-day.svelte";
import NightHeavyFreezingRainIcon from "$lib/components/icons/67-night.svelte";
import DaySlightSnowFallIcon from "$lib/components/icons/71-day.svelte";
import NightSlightSnowFallIcon from "$lib/components/icons/71-night.svelte";
import DayModerateSnowFallIcon from "$lib/components/icons/73-day.svelte";
import NightModerateSnowFallIcon from "$lib/components/icons/73-night.svelte";
import DayHeavySnowFallIcon from "$lib/components/icons/75-day.svelte";
import NightHeavySnowFallIcon from "$lib/components/icons/75-night.svelte";
//import DaySnowGrainsIcon from "$lib/icons/77-day.svelte";
import DaySlightRainShowersIcon from "$lib/components/icons/80-day.svelte";
//import NightSnowGrainsIcon from "$lib/icons/77-night.svelte";
import NightSlightRainShowersIcon from "$lib/components/icons/80-night.svelte";
import DayModerateRainShowersIcon from "$lib/components/icons/81-day.svelte";
import NightModerateRainShowersIcon from "$lib/components/icons/81-night.svelte";
import DayViolentRainShowersIcon from "$lib/components/icons/82-day.svelte";
import NightViolentRainShowersIcon from "$lib/components/icons/82-night.svelte";
import DaySlightSnowShowersIcon from "$lib/components/icons/85-day.svelte";
import NightSlightSnowShowersIcon from "$lib/components/icons/85-night.svelte";
import DayHeavySnowShowersIcon from "$lib/components/icons/86-day.svelte";
import NightHeavySnowShowersIcon from "$lib/components/icons/86-night.svelte";
import DayThunderstormIcon from "$lib/components/icons/95-day.svelte";
import NightThunderstormIcon from "$lib/components/icons/95-night.svelte";
import DayThunderstormSlightHailIcon from "$lib/components/icons/96-day.svelte";
import NightThunderstormSlightHailIcon from "$lib/components/icons/96-night.svelte";
import DayThunderstormHeavyHailIcon from "$lib/components/icons/99-day.svelte";
import NightThunderstormHeavyHailIcon from "$lib/components/icons/99-night.svelte";

interface WeatherDescription {
  code: number;
  description: string;
  icon?: Component;
  iconNight?: Component;
}

export const weatherDescriptions: Record<number, WeatherDescription> = {
  0: {
    code: 0,
    description: "Clear sky",
    icon: DayClearIcon,
    iconNight: NightClearIcon,
  },
  1: {
    code: 1,
    description: "Mainly clear",
    icon: DayMainlyClearIcon,
    iconNight: NightMainlyClearIcon,
  },
  2: {
    code: 2,
    description: "Partly cloudy",
    icon: DayPartlyCloudyIcon,
    iconNight: NightPartlyCloudyIcon,
  },
  3: {
    code: 3,
    description: "Overcast",
    icon: DayOvercastIcon,
    iconNight: NightOvercastIcon,
  },
  45: {
    code: 45,
    description: "Fog",
    icon: DayFogIcon,
    iconNight: NightFogIcon,
  },
  48: {
    code: 48,
    description: "Depositing rime fog",
    icon: DayRimeFogIcon,
    iconNight: NightRimeFogIcon,
  },
  51: {
    code: 51,
    description: "Light drizzle",
    icon: DayLightDrizzleIcon,
    iconNight: NightLightDrizzleIcon,
  },
  53: {
    code: 53,
    description: "Moderate drizzle",
    icon: DayModerateDrizzleIcon,
    iconNight: NightModerateDrizzleIcon,
  },
  55: {
    code: 55,
    description: "Dense drizzle",
    icon: DayDenseDrizzleIcon,
    iconNight: NightDenseDrizzleIcon,
  },
  //56: { code: 56, description: "Light freezing drizzle", icon: DayLightFreezingDrizzleIcon, iconNight: NightLightFreezingDrizzleIcon },
  //57: { code: 57, description: "Dense freezing drizzle", icon: DayDenseFreezingDrizzleIcon, iconNight: NightDenseFreezingDrizzleIcon },
  61: {
    code: 61,
    description: "Slight rain",
    icon: DaySlightRainIcon,
    iconNight: NightSlightRainIcon,
  },
  63: {
    code: 63,
    description: "Moderate rain",
    icon: DayModerateRainIcon,
    iconNight: NightModerateRainIcon,
  },
  65: {
    code: 65,
    description: "Heavy rain",
    icon: DayHeavyRainIcon,
    iconNight: NightHeavyRainIcon,
  },
  66: {
    code: 66,
    description: "Light freezing rain",
    icon: DayLightFreezingRainIcon,
    iconNight: NightLightFreezingRainIcon,
  },
  67: {
    code: 67,
    description: "Heavy freezing rain",
    icon: DayHeavyFreezingRainIcon,
    iconNight: NightHeavyFreezingRainIcon,
  },
  71: {
    code: 71,
    description: "Slight snow fall",
    icon: DaySlightSnowFallIcon,
    iconNight: NightSlightSnowFallIcon,
  },
  73: {
    code: 73,
    description: "Moderate snow fall",
    icon: DayModerateSnowFallIcon,
    iconNight: NightModerateSnowFallIcon,
  },
  75: {
    code: 75,
    description: "Heavy snow fall",
    icon: DayHeavySnowFallIcon,
    iconNight: NightHeavySnowFallIcon,
  },
  //77: { code: 77, description: "Snow grains", icon: DaySnowGrainsIcon, iconNight: NightSnowGrainsIcon },
  80: {
    code: 80,
    description: "Slight rain showers",
    icon: DaySlightRainShowersIcon,
    iconNight: NightSlightRainShowersIcon,
  },
  81: {
    code: 81,
    description: "Moderate rain showers",
    icon: DayModerateRainShowersIcon,
    iconNight: NightModerateRainShowersIcon,
  },
  82: {
    code: 82,
    description: "Violent rain showers",
    icon: DayViolentRainShowersIcon,
    iconNight: NightViolentRainShowersIcon,
  },
  85: {
    code: 85,
    description: "Slight snow showers",
    icon: DaySlightSnowShowersIcon,
    iconNight: NightSlightSnowShowersIcon,
  },
  86: {
    code: 86,
    description: "Heavy snow showers",
    icon: DayHeavySnowShowersIcon,
    iconNight: NightHeavySnowShowersIcon,
  },
  95: {
    code: 95,
    description: "Thunderstorm: Slight or moderate",
    icon: DayThunderstormIcon,
    iconNight: NightThunderstormIcon,
  },
  96: {
    code: 96,
    description: "Thunderstorm with slight hail",
    icon: DayThunderstormSlightHailIcon,
    iconNight: NightThunderstormSlightHailIcon,
  },
  99: {
    code: 99,
    description: "Thunderstorm with heavy hail",
    icon: DayThunderstormHeavyHailIcon,
    iconNight: NightThunderstormHeavyHailIcon,
  },
};
